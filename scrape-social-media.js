const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function scrapeInstagram(page, username) {
  console.log(`\n🔍 Scraping Instagram: @${username}`);

  try {
    await page.goto(`https://www.instagram.com/${username}/`, {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    // Wait for content to load and scroll to trigger lazy loading
    await page.waitForTimeout(3000);
    await page.evaluate(() => window.scrollTo(0, 300));
    await page.waitForTimeout(2000);

    const data = await page.evaluate(() => {
      const result = {
        followers: null,
        following: null,
        posts: null,
        bio: null,
        profilePicture: null,
        recentPosts: [],
        username: null,
        fullName: null
      };

      // Try to get data from meta tags
      const metaTags = document.querySelectorAll('meta');
      metaTags.forEach(meta => {
        const property = meta.getAttribute('property');
        const content = meta.getAttribute('content');

        if (property === 'og:description') {
          // Format: "X Followers, Y Following, Z Posts - See Instagram photos and videos from Name (@username)"
          const match = content.match(/(\d[\d,]*)\s+Followers?,\s+(\d[\d,]*)\s+Following,\s+(\d[\d,]*)\s+Posts/);
          if (match) {
            result.followers = match[1].replace(/,/g, '');
            result.following = match[2].replace(/,/g, '');
            result.posts = match[3].replace(/,/g, '');
          }
        }

        if (property === 'og:title') {
          // Format: "Name (@username) • Instagram photos and videos"
          const titleMatch = content.match(/(.+?)\s+\(@(.+?)\)/);
          if (titleMatch) {
            result.fullName = titleMatch[1];
            result.username = titleMatch[2];
          }
        }

        if (property === 'og:image') {
          result.profilePicture = content;
        }
      });

      // Try alternative selectors for stats
      const statElements = document.querySelectorAll('ul li button span, ul li a span');
      const stats = Array.from(statElements).map(el => el.textContent.trim()).filter(t => /^\d/.test(t));

      if (stats.length >= 3 && !result.posts) {
        result.posts = stats[0].replace(/,/g, '');
        result.followers = stats[1].replace(/,/g, '');
        result.following = stats[2].replace(/,/g, '');
      }

      // Try to get bio from meta description or page content
      const metaDesc = document.querySelector('meta[property="og:description"]');
      if (metaDesc) {
        const content = metaDesc.getAttribute('content');
        // Extract bio from description (comes after the stats)
        const bioMatch = content.match(/Posts\s+-\s+(.+?)(?:\s+-\s+See|$)/);
        if (bioMatch) {
          result.bio = bioMatch[1].trim();
        }
      }

      // Alternative bio extraction from page elements
      if (!result.bio) {
        const bioSelectors = [
          'header section div span',
          'header section h1 + div',
          'div._aa_c h1',
          'section h2'
        ];

        for (const selector of bioSelectors) {
          const bioEl = document.querySelector(selector);
          if (bioEl && bioEl.textContent && bioEl.textContent.length > 10 && bioEl.textContent.length < 200) {
            result.bio = bioEl.textContent.trim();
            break;
          }
        }
      }

      // Try to get recent post links - look for all article links
      const postLinks = document.querySelectorAll('a[href*="/p/"], a[href*="/reel/"]');
      const uniquePosts = new Set();

      Array.from(postLinks).forEach(a => {
        const match = a.href.match(/\/(p|reel)\/([^\/]+)/);
        if (match) {
          uniquePosts.add(JSON.stringify({
            url: a.href,
            postCode: match[2],
            type: match[1] === 'reel' ? 'reel' : 'post'
          }));
        }
      });

      result.recentPosts = Array.from(uniquePosts)
        .slice(0, 5)
        .map(str => JSON.parse(str));

      return result;
    });

    console.log('✅ Instagram data scraped successfully');
    return data;

  } catch (error) {
    console.error('❌ Error scraping Instagram:', error.message);
    return {
      error: error.message,
      followers: null,
      following: null,
      posts: null,
      bio: null,
      recentPosts: []
    };
  }
}

async function scrapeTikTok(page, username) {
  console.log(`\n🔍 Scraping TikTok: @${username}`);

  try {
    await page.goto(`https://www.tiktok.com/@${username}`, {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    // Wait for content to load and scroll to trigger video loading
    await page.waitForTimeout(3000);
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(2000);

    const data = await page.evaluate(() => {
      const result = {
        followers: null,
        following: null,
        likes: null,
        videos: null,
        bio: null,
        profilePicture: null,
        recentVideos: [],
        username: null,
        nickname: null
      };

      // Try to get data from SIGI_STATE (TikTok's data structure)
      try {
        const sigiState = document.getElementById('SIGI_STATE');
        if (sigiState) {
          const data = JSON.parse(sigiState.textContent);

          // Navigate the data structure
          if (data.UserModule && data.UserModule.users) {
            const userKey = Object.keys(data.UserModule.users)[0];
            const user = data.UserModule.users[userKey];

            if (user) {
              result.username = user.uniqueId || user.id;
              result.nickname = user.nickname;
              result.followers = user.stats?.followerCount?.toString() || null;
              result.following = user.stats?.followingCount?.toString() || null;
              result.likes = user.stats?.heartCount?.toString() || null;
              result.videos = user.stats?.videoCount?.toString() || null;
              result.bio = user.signature;
              result.profilePicture = user.avatarLarger || user.avatarMedium;
            }
          }

          // Get video data
          if (data.ItemModule) {
            const videoIds = Object.keys(data.ItemModule);
            result.recentVideos = videoIds.slice(0, 5).map(id => {
              const video = data.ItemModule[id];
              return {
                id: video.id,
                url: `https://www.tiktok.com/@${result.username}/video/${video.id}`,
                description: video.desc,
                views: video.stats?.playCount,
                likes: video.stats?.diggCount,
                comments: video.stats?.commentCount,
                shares: video.stats?.shareCount
              };
            });
          }
        }
      } catch (e) {
        console.error('Error parsing SIGI_STATE:', e);
      }

      // Fallback: try to scrape from DOM
      if (!result.followers) {
        // Try to find stats in the page
        const statsElements = document.querySelectorAll('[data-e2e="followers-count"], [data-e2e="following-count"], [data-e2e="likes-count"]');
        statsElements.forEach(el => {
          const label = el.getAttribute('data-e2e');
          const value = el.textContent.trim();

          if (label === 'followers-count') result.followers = value;
          if (label === 'following-count') result.following = value;
          if (label === 'likes-count') result.likes = value;
        });

        // Try to get bio
        const bioEl = document.querySelector('[data-e2e="user-bio"]');
        if (bioEl) result.bio = bioEl.textContent.trim();

        // Try to get video links and thumbnail images
        const videoContainers = document.querySelectorAll('div[data-e2e="user-post-item"]');
        if (videoContainers.length > 0 && result.recentVideos.length === 0) {
          result.recentVideos = Array.from(videoContainers)
            .slice(0, 5)
            .map(container => {
              const link = container.querySelector('a[href*="/video/"]');
              const img = container.querySelector('img');
              const videoId = link?.href.match(/\/video\/(\d+)/)?.[1];

              return {
                url: link?.href || null,
                id: videoId || null,
                thumbnail: img?.src || null
              };
            })
            .filter(v => v.url);
        }

        // Fallback: just get video links
        if (result.recentVideos.length === 0) {
          const videoLinks = document.querySelectorAll('a[href*="/video/"]');
          const uniqueVideos = new Set();

          Array.from(videoLinks).forEach(a => {
            const match = a.href.match(/\/video\/(\d+)/);
            if (match) {
              uniqueVideos.add(JSON.stringify({
                url: a.href,
                id: match[1]
              }));
            }
          });

          result.recentVideos = Array.from(uniqueVideos)
            .slice(0, 5)
            .map(str => JSON.parse(str));
        }

        // Get username from page if not found
        if (!result.username) {
          const usernameEl = document.querySelector('[data-e2e="user-title"]');
          if (usernameEl) result.username = usernameEl.textContent.trim();
        }
      }

      return result;
    });

    console.log('✅ TikTok data scraped successfully');
    return data;

  } catch (error) {
    console.error('❌ Error scraping TikTok:', error.message);
    return {
      error: error.message,
      followers: null,
      following: null,
      likes: null,
      videos: null,
      bio: null,
      recentVideos: []
    };
  }
}

async function main() {
  console.log('🚀 Starting social media scraping...\n');

  const browser = await chromium.launch({
    headless: true
  });

  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1920, height: 1080 }
  });

  const page = await context.newPage();

  // Scrape both platforms
  const instagramData = await scrapeInstagram(page, 'thegede');
  const tiktokData = await scrapeTikTok(page, 'sntnli');

  await browser.close();

  // Combine results
  const results = {
    scrapedAt: new Date().toISOString(),
    instagram: {
      username: 'thegede',
      url: 'https://www.instagram.com/thegede',
      ...instagramData
    },
    tiktok: {
      username: 'sntnli',
      url: 'https://www.tiktok.com/@sntnli',
      ...tiktokData
    }
  };

  // Save to file
  const outputPath = path.join(__dirname, 'social-media-data.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log('\n📊 RESULTS:\n');
  console.log('Instagram @thegede:');
  console.log(`  - Followers: ${instagramData.followers || 'N/A'}`);
  console.log(`  - Following: ${instagramData.following || 'N/A'}`);
  console.log(`  - Posts: ${instagramData.posts || 'N/A'}`);
  console.log(`  - Bio: ${instagramData.bio || 'N/A'}`);
  console.log(`  - Recent posts: ${instagramData.recentPosts?.length || 0} found`);

  console.log('\nTikTok @sntnli:');
  console.log(`  - Followers: ${tiktokData.followers || 'N/A'}`);
  console.log(`  - Following: ${tiktokData.following || 'N/A'}`);
  console.log(`  - Likes: ${tiktokData.likes || 'N/A'}`);
  console.log(`  - Videos: ${tiktokData.videos || 'N/A'}`);
  console.log(`  - Bio: ${tiktokData.bio || 'N/A'}`);
  console.log(`  - Recent videos: ${tiktokData.recentVideos?.length || 0} found`);

  console.log(`\n✅ Data saved to: ${outputPath}\n`);

  return results;
}

main().catch(console.error);
