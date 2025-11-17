# How to Use the Scraped Social Media Data

## Quick Start

All the social media data for Erdem (Gede) has been scraped and is ready to use in the website.

## Files Generated

### 1. `social-media-website-ready.json` - USE THIS ONE!
The main file optimized for website integration. Contains:
- Clean, structured data
- Ready-to-use embed codes
- Platform stats and URLs
- Featured content recommendations

### 2. `SOCIAL-MEDIA-SCRAPING-RESULTS.md` - READ THIS FIRST!
Complete documentation with:
- Full statistics breakdown
- Analysis and insights
- Implementation recommendations
- Next steps

### 3. `erdem-social-media-data.json`
Complete dataset with all scraped information.

### 4. Supporting Files
- `social-media-data.json` - Raw scraping output
- `tiktok-detailed-data.json` - TikTok-specific data
- `tiktok-debug.png` - Screenshot showing CAPTCHA issue

---

## Implementation Guide

### Step 1: Add Social Links to Header/Footer

```javascript
// Import the data
import socialData from './social-media-website-ready.json';

// Use in your component
const { platforms } = socialData;

// Render
<a href={platforms.tiktok.url} target="_blank">
  TikTok ({platforms.tiktok.stats.followers} followers)
</a>

<a href={platforms.instagram.url} target="_blank">
  Instagram (@{platforms.instagram.username})
</a>
```

### Step 2: Create Hero Section

```jsx
import socialData from './social-media-website-ready.json';

const { creator, stats, recommendations } = socialData;

<section className="hero">
  <img src={creator.profileImage} alt={creator.name} />
  <h1>{recommendations.heroSection.title}</h1>
  <p>{recommendations.heroSection.subtitle}</p>
  <div className="stats">
    {recommendations.heroSection.stats}
  </div>
  <div className="cta-buttons">
    <a href={recommendations.heroSection.primaryCTA.url}>
      {recommendations.heroSection.primaryCTA.text}
    </a>
    <a href={recommendations.heroSection.secondaryCTA.url}>
      {recommendations.heroSection.secondaryCTA.text}
    </a>
  </div>
</section>
```

### Step 3: Embed Instagram Reels

```jsx
import socialData from './social-media-website-ready.json';

const { featuredContent, embedScripts } = socialData;

// In your component
<div className="instagram-reels">
  {featuredContent.instagram.reels.slice(0, 3).map((reel) => (
    <div key={reel.id} className="reel-container">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={reel.url}
        data-instgrm-version="14"
      />
    </div>
  ))}
</div>

// Add to your HTML <head> or before closing </body>
<script async src="//www.instagram.com/embed.js"></script>
```

### Step 4: Display Platform Stats

```jsx
import socialData from './social-media-website-ready.json';

const { platforms } = socialData;

<div className="social-stats">
  <div className="platform-stat">
    <h3>TikTok</h3>
    <p>{platforms.tiktok.stats.followers} Followers</p>
    <p>{platforms.tiktok.stats.likes} Likes</p>
  </div>

  <div className="platform-stat">
    <h3>Instagram</h3>
    <p>{platforms.instagram.stats.followers} Followers</p>
    <p>{platforms.instagram.stats.posts} Posts</p>
  </div>
</div>
```

---

## Instagram Reel URLs (Ready to Use)

All 5 reels are verified and working:

1. https://www.instagram.com/thegede/reel/DQON90jkh6i/
2. https://www.instagram.com/thegede/reel/DQBiqHHk5l5/
3. https://www.instagram.com/thegede/reel/DP5konXkoUX/
4. https://www.instagram.com/thegede/reel/DRHS790Ehmg/
5. https://www.instagram.com/thegede/reel/DRG4PryEpEb/

### Embed Code Template

```html
<blockquote
  class="instagram-media"
  data-instgrm-permalink="https://www.instagram.com/p/DQON90jkh6i/"
  data-instgrm-version="14"
  style="max-width:540px; width:100%;">
</blockquote>
<script async src="//www.instagram.com/embed.js"></script>
```

---

## TikTok Videos (Manual Collection Needed)

TikTok requires manual video selection due to CAPTCHA protection.

### How to Get TikTok Videos:

1. Visit: https://www.tiktok.com/@sntnli
2. Browse the profile and select 3-5 top videos
3. Click on each video
4. Copy the URL from the browser
5. Use this embed template:

```html
<blockquote
  class="tiktok-embed"
  cite="https://www.tiktok.com/@sntnli/video/VIDEO_ID"
  data-video-id="VIDEO_ID"
  style="max-width: 605px; min-width: 325px;">
  <section></section>
</blockquote>
<script async src="https://www.tiktok.com/embed.js"></script>
```

---

## React/Next.js Example

```jsx
// components/SocialMediaSection.jsx
import React, { useEffect } from 'react';
import socialData from '../social-media-website-ready.json';

export default function SocialMediaSection() {
  const { featuredContent, platforms } = socialData;

  // Load Instagram embed script
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="social-media-section">
      <h2>Latest from Social Media</h2>

      {/* Instagram Reels */}
      <div className="instagram-grid">
        <h3>Instagram Reels</h3>
        <div className="reels-container">
          {featuredContent.instagram.reels.slice(0, 3).map((reel) => (
            <div key={reel.id} className="reel-wrapper">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={reel.url}
                data-instgrm-version="14"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="social-links">
        <a
          href={platforms.tiktok.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link tiktok"
        >
          <span className="icon">📱</span>
          <span>{platforms.tiktok.displayText}</span>
        </a>

        <a
          href={platforms.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link instagram"
        >
          <span className="icon">📸</span>
          <span>{platforms.instagram.displayText}</span>
        </a>
      </div>
    </section>
  );
}
```

---

## Styling Recommendations

```css
/* Social Media Section */
.social-media-section {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Instagram Reels Grid */
.reels-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.reel-wrapper {
  display: flex;
  justify-content: center;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 3rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.2s;
}

.social-link:hover {
  transform: translateY(-2px);
}

.social-link.tiktok {
  background: #000000;
  color: white;
}

.social-link.instagram {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  color: white;
}
```

---

## Key Statistics to Highlight

Use these numbers for social proof:

- **Total Followers:** 1,843
- **TikTok Followers:** 1,747
- **TikTok Likes:** 117.1K (shows high engagement!)
- **Instagram Posts:** 96 (shows consistency)

### Engagement Rate
TikTok has exceptional engagement:
- 117.1K likes / 1,747 followers = ~67 likes per follower
- This is very high and indicates viral potential

---

## TODO: Manual Steps Required

1. [ ] Visit https://www.tiktok.com/@sntnli manually
2. [ ] Select 3-5 top-performing videos (sort by views/likes)
3. [ ] Copy video URLs
4. [ ] Add video data to `featuredContent.tiktok.videos` in the JSON file
5. [ ] Test Instagram embeds on staging site
6. [ ] Test TikTok embeds on staging site
7. [ ] Optimize loading performance (lazy load embeds)

---

## Performance Tips

1. **Lazy Load Embeds**: Don't load all embeds at once
   ```javascript
   import { useInView } from 'react-intersection-observer';

   function InstagramEmbed({ url }) {
     const { ref, inView } = useInView({ triggerOnce: true });

     return (
       <div ref={ref}>
         {inView && (
           <blockquote className="instagram-media" data-instgrm-permalink={url} />
         )}
       </div>
     );
   }
   ```

2. **Defer Script Loading**: Load embed scripts after page load
   ```javascript
   useEffect(() => {
     const script = document.createElement('script');
     script.src = '//www.instagram.com/embed.js';
     script.async = true;
     document.body.appendChild(script);
   }, []);
   ```

3. **Show Placeholders**: Display a skeleton/placeholder before embeds load

---

## Testing Checklist

- [ ] Instagram embeds load correctly
- [ ] TikTok embeds load correctly (after manual collection)
- [ ] Social links open in new tabs
- [ ] Stats display correctly
- [ ] Profile images load
- [ ] Mobile responsive
- [ ] Performance: page loads in < 3 seconds
- [ ] All links verified and working

---

## Questions?

Refer to `SOCIAL-MEDIA-SCRAPING-RESULTS.md` for detailed analysis and recommendations.
