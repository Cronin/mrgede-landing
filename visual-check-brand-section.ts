import { chromium, devices } from 'playwright';
import fs from 'fs';
import path from 'path';

interface VisualCheckResult {
  site: string;
  timestamp: string;
  status: 'success' | 'error';
  screenshots: {
    desktop: {
      fullPage: string;
      brandSection: string;
      brandSectionScrolled: string;
    };
    mobile: {
      fullPage: string;
      brandSection: string;
      brandSectionScrolled: string;
    };
  };
  consoleErrors: string[];
  consoleWarnings: string[];
  metrics: {
    loadTimeMs: number;
    statusCode: number;
  };
  observations: string[];
  error?: string;
}

async function visualCheckBrandSection(
  url: string,
  siteName: string
): Promise<VisualCheckResult> {
  const timestamp = new Date()
    .toISOString()
    .replace(/[:.]/g, '-')
    .slice(0, -5);
  const outputDir = path.join(
    '/Users/claudiocronin/websites/sites/mrgede.com/visual-checks',
    timestamp
  );

  fs.mkdirSync(outputDir, { recursive: true });

  const consoleErrors: string[] = [];
  const consoleWarnings: string[] = [];
  const observations: string[] = [];
  let statusCode = 0;
  let startTime = Date.now();

  const browser = await chromium.launch({ headless: true });

  try {
    // ========== DESKTOP CHECKS ==========
    console.log('Starting desktop screenshot capture...');
    const desktopContext = await browser.newContext({
      viewport: { width: 1366, height: 768 },
    });
    const desktopPage = await desktopContext.newPage();

    // Monitor console messages
    desktopPage.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(`[Desktop Error] ${msg.text()}`);
      } else if (msg.type() === 'warning') {
        consoleWarnings.push(`[Desktop Warning] ${msg.text()}`);
      }
    });

    // Navigate and measure load time
    const response = await desktopPage.goto(url, {
      timeout: 30000,
      waitUntil: 'networkidle',
    });

    statusCode = response?.status() || 0;
    const loadTimeMs = Date.now() - startTime;

    // Full page screenshot
    const desktopFullPath = path.join(outputDir, 'desktop-full-page.png');
    await desktopPage.screenshot({
      path: desktopFullPath,
      fullPage: true,
    });
    console.log(`Desktop full page captured: ${desktopFullPath}`);

    // Scroll to Brand Collaborations section
    await desktopPage.evaluate(() => {
      const section = document.querySelector('#portfolio');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    // Wait for scroll animation and content to settle
    await desktopPage.waitForTimeout(1500);

    // Screenshot of Brand Collaborations section (viewport)
    const desktopBrandPath = path.join(
      outputDir,
      'desktop-brand-section.png'
    );
    await desktopPage.screenshot({
      path: desktopBrandPath,
      fullPage: false,
    });
    console.log(`Desktop brand section captured: ${desktopBrandPath}`);

    // Scroll down a bit more to see more cards
    await desktopPage.evaluate(() => {
      window.scrollBy(0, 600);
    });
    await desktopPage.waitForTimeout(1000);

    const desktopBrandScrolledPath = path.join(
      outputDir,
      'desktop-brand-section-scrolled.png'
    );
    await desktopPage.screenshot({
      path: desktopBrandScrolledPath,
      fullPage: false,
    });
    console.log(
      `Desktop brand section scrolled captured: ${desktopBrandScrolledPath}`
    );

    // Check for video elements
    const videoCount = await desktopPage.evaluate(() => {
      const videos = document.querySelectorAll('video');
      return videos.length;
    });
    observations.push(`Found ${videoCount} video elements on desktop`);

    // Check for brand logos
    const logoCount = await desktopPage.evaluate(() => {
      const section = document.querySelector('#portfolio');
      if (!section) return 0;
      const logos = section.querySelectorAll('img[alt*=""]');
      return logos.length;
    });
    observations.push(`Found ${logoCount} images in brand section on desktop`);

    // Check for stats badges
    const statsInfo = await desktopPage.evaluate(() => {
      const section = document.querySelector('#portfolio');
      if (!section) return { count: 0, samples: [] };

      const statsBadges = Array.from(
        section.querySelectorAll('.bg-black\\/70')
      );
      return {
        count: statsBadges.length,
        samples: statsBadges.slice(0, 3).map((badge) => badge.textContent?.trim() || ''),
      };
    });
    observations.push(
      `Found ${statsInfo.count} stats badges on desktop. Sample text: ${statsInfo.samples.join(', ')}`
    );

    await desktopContext.close();

    // ========== MOBILE CHECKS ==========
    console.log('Starting mobile screenshot capture...');
    const iPhone12 = devices['iPhone 12'];
    const mobileContext = await browser.newContext({ ...iPhone12 });
    const mobilePage = await mobileContext.newPage();

    // Monitor console messages
    mobilePage.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(`[Mobile Error] ${msg.text()}`);
      } else if (msg.type() === 'warning') {
        consoleWarnings.push(`[Mobile Warning] ${msg.text()}`);
      }
    });

    await mobilePage.goto(url, {
      timeout: 30000,
      waitUntil: 'networkidle',
    });

    // Full page screenshot
    const mobileFullPath = path.join(outputDir, 'mobile-full-page.png');
    await mobilePage.screenshot({
      path: mobileFullPath,
      fullPage: true,
    });
    console.log(`Mobile full page captured: ${mobileFullPath}`);

    // Scroll to Brand Collaborations section
    await mobilePage.evaluate(() => {
      const section = document.querySelector('#portfolio');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    await mobilePage.waitForTimeout(1500);

    // Screenshot of Brand Collaborations section
    const mobileBrandPath = path.join(
      outputDir,
      'mobile-brand-section.png'
    );
    await mobilePage.screenshot({
      path: mobileBrandPath,
      fullPage: false,
    });
    console.log(`Mobile brand section captured: ${mobileBrandPath}`);

    // Scroll down more
    await mobilePage.evaluate(() => {
      window.scrollBy(0, 800);
    });
    await mobilePage.waitForTimeout(1000);

    const mobileBrandScrolledPath = path.join(
      outputDir,
      'mobile-brand-section-scrolled.png'
    );
    await mobilePage.screenshot({
      path: mobileBrandScrolledPath,
      fullPage: false,
    });
    console.log(
      `Mobile brand section scrolled captured: ${mobileBrandScrolledPath}`
    );

    // Check mobile stats
    const mobileVideoCount = await mobilePage.evaluate(() => {
      const videos = document.querySelectorAll('video');
      return videos.length;
    });
    observations.push(
      `Found ${mobileVideoCount} video elements on mobile`
    );

    const mobileStatsInfo = await mobilePage.evaluate(() => {
      const section = document.querySelector('#portfolio');
      if (!section) return { count: 0, samples: [] };

      const statsBadges = Array.from(
        section.querySelectorAll('.bg-black\\/70')
      );
      return {
        count: statsBadges.length,
        samples: statsBadges.slice(0, 3).map((badge) => badge.textContent?.trim() || ''),
      };
    });
    observations.push(
      `Found ${mobileStatsInfo.count} stats badges on mobile. Sample text: ${mobileStatsInfo.samples.join(', ')}`
    );

    await mobileContext.close();

    return {
      site: siteName,
      timestamp: new Date().toISOString(),
      status: 'success',
      screenshots: {
        desktop: {
          fullPage: desktopFullPath,
          brandSection: desktopBrandPath,
          brandSectionScrolled: desktopBrandScrolledPath,
        },
        mobile: {
          fullPage: mobileFullPath,
          brandSection: mobileBrandPath,
          brandSectionScrolled: mobileBrandScrolledPath,
        },
      },
      consoleErrors,
      consoleWarnings,
      metrics: {
        loadTimeMs,
        statusCode,
      },
      observations,
    };
  } catch (error) {
    return {
      site: siteName,
      timestamp: new Date().toISOString(),
      status: 'error',
      screenshots: {
        desktop: {
          fullPage: '',
          brandSection: '',
          brandSectionScrolled: '',
        },
        mobile: {
          fullPage: '',
          brandSection: '',
          brandSectionScrolled: '',
        },
      },
      consoleErrors,
      consoleWarnings,
      metrics: {
        loadTimeMs: Date.now() - startTime,
        statusCode: statusCode || 0,
      },
      observations,
      error: error instanceof Error ? error.message : String(error),
    };
  } finally {
    await browser.close();
  }
}

const url = 'http://localhost:3001';
const siteName = 'mrgede.com';

console.log(`Starting visual check for ${siteName} at ${url}...`);

visualCheckBrandSection(url, siteName).then((result) => {
  console.log('\n=== VISUAL CHECK RESULTS ===\n');
  console.log(JSON.stringify(result, null, 2));

  // Write results to file
  const resultPath = path.join(
    path.dirname(result.screenshots.desktop.fullPage),
    'results.json'
  );
  fs.writeFileSync(resultPath, JSON.stringify(result, null, 2));
  console.log(`\nResults saved to: ${resultPath}`);
});
