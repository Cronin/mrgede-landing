const { chromium } = require('playwright');
const fs = require('fs');

async function scrapeTikTokDetailed(username) {
  console.log(`🔍 Scraping TikTok in detail: @${username}`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1920, height: 1080 }
  });

  const page = await context.newPage();

  try {
    console.log('Loading TikTok profile...');
    await page.goto(`https://www.tiktok.com/@${username}`, {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    // Wait and scroll to trigger lazy loading
    await page.waitForTimeout(5000);
    await page.evaluate(() => window.scrollTo(0, 800));
    await page.waitForTimeout(3000);

    // Take a screenshot for debugging
    await page.screenshot({ path: 'tiktok-debug.png', fullPage: false });
    console.log('Screenshot saved to tiktok-debug.png');

    // Extract all data
    const data = await page.evaluate(() => {
      const result = {
        username: null,
        nickname: null,
        followers: null,
        following: null,
        likes: null,
        videos: null,
        bio: null,
        profilePicture: null,
        recentVideos: [],
        debugInfo: {
          sigiStateExists: false,
          videoLinksFound: 0,
          dataAttributes: []
        }
      };

      // Check for SIGI_STATE
      const sigiState = document.getElementById('SIGI_STATE');
      if (sigiState) {
        result.debugInfo.sigiStateExists = true;
        try {
          const data = JSON.parse(sigiState.textContent);

          // Extract user data
          if (data.UserModule?.users) {
            const userKey = Object.keys(data.UserModule.users)[0];
            const user = data.UserModule.users[userKey];

            result.username = user.uniqueId || user.id;
            result.nickname = user.nickname;
            result.followers = user.stats?.followerCount?.toString();
            result.following = user.stats?.followingCount?.toString();
            result.likes = user.stats?.heartCount?.toString();
            result.videos = user.stats?.videoCount?.toString();
            result.bio = user.signature;
            result.profilePicture = user.avatarLarger || user.avatarMedium;
          }

          // Extract video data
          if (data.ItemModule) {
            const videoIds = Object.keys(data.ItemModule);
            result.recentVideos = videoIds.slice(0, 5).map(id => {
              const video = data.ItemModule[id];
              return {
                id: video.id,
                url: `https://www.tiktok.com/@${result.username}/video/${video.id}`,
                description: video.desc,
                createTime: video.createTime,
                stats: {
                  views: video.stats?.playCount,
                  likes: video.stats?.diggCount,
                  comments: video.stats?.commentCount,
                  shares: video.stats?.shareCount
                }
              };
            });
          }
        } catch (e) {
          result.debugInfo.sigiError = e.message;
        }
      }

      // Fallback: DOM scraping
      if (!result.followers) {
        // Look for all elements with data-e2e attributes
        document.querySelectorAll('[data-e2e]').forEach(el => {
          const attr = el.getAttribute('data-e2e');
          if (attr) result.debugInfo.dataAttributes.push(attr);

          if (attr === 'followers-count') result.followers = el.textContent.trim();
          if (attr === 'following-count') result.following = el.textContent.trim();
          if (attr === 'likes-count') result.likes = el.textContent.trim();
          if (attr === 'user-bio') result.bio = el.textContent.trim();
          if (attr === 'user-title') result.username = el.textContent.trim();
          if (attr === 'user-subtitle') result.nickname = el.textContent.trim();
        });
      }

      // Get all video links
      const videoLinks = document.querySelectorAll('a[href*="/video/"]');
      result.debugInfo.videoLinksFound = videoLinks.length;

      if (result.recentVideos.length === 0 && videoLinks.length > 0) {
        const uniqueVideos = new Map();

        videoLinks.forEach(link => {
          const match = link.href.match(/\/video\/(\d+)/);
          if (match) {
            const videoId = match[1];
            if (!uniqueVideos.has(videoId)) {
              // Try to find thumbnail
              const container = link.closest('div[data-e2e="user-post-item"]') || link.parentElement;
              const img = container?.querySelector('img');

              uniqueVideos.set(videoId, {
                id: videoId,
                url: link.href,
                thumbnail: img?.src || null
              });
            }
          }
        });

        result.recentVideos = Array.from(uniqueVideos.values()).slice(0, 5);
      }

      // Try to extract videos from any div containers
      if (result.recentVideos.length === 0) {
        const containers = document.querySelectorAll('div[class*="video"], div[class*="item"]');
        result.debugInfo.containerCount = containers.length;
      }

      return result;
    });

    console.log('\n✅ TikTok data extracted');
    console.log(`Debug Info:`, data.debugInfo);

    // Save data
    fs.writeFileSync('tiktok-detailed-data.json', JSON.stringify(data, null, 2));
    console.log('Data saved to tiktok-detailed-data.json');

    await browser.close();
    return data;

  } catch (error) {
    console.error('❌ Error:', error.message);
    await browser.close();
    throw error;
  }
}

// Run the scraper
scrapeTikTokDetailed('sntnli')
  .then(data => {
    console.log('\n📊 RESULTS:');
    console.log(`Username: ${data.username || 'N/A'}`);
    console.log(`Followers: ${data.followers || 'N/A'}`);
    console.log(`Following: ${data.following || 'N/A'}`);
    console.log(`Likes: ${data.likes || 'N/A'}`);
    console.log(`Videos: ${data.videos || 'N/A'}`);
    console.log(`Bio: ${data.bio || 'N/A'}`);
    console.log(`Recent videos found: ${data.recentVideos.length}`);
  })
  .catch(console.error);
