import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

interface VisualCheckResult {
  site: string;
  timestamp: string;
  status: 'success' | 'error';
  screenshots: {
    desktop: string;
    mobile: string;
  };
  consoleErrors: string[];
  metrics: {
    loadTimeMs: number;
    statusCode: number;
  };
  error?: string;
}

async function visualCheck(url: string, siteName: string): Promise<VisualCheckResult> {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  const baseDir = '/Users/claudiocronin/websites/sites/mrgede.com';
  const outputDir = path.join(baseDir, 'visual-checks', timestamp);

  fs.mkdirSync(outputDir, { recursive: true });

  const consoleErrors: string[] = [];
  let statusCode = 0;
  let startTime = Date.now();

  const browser = await chromium.launch({ headless: true });

  let desktopPath = '';
  let mobilePath = '';

  try {
    // Desktop screenshot (1920x1080)
    const desktopContext = await browser.newContext({
      viewport: { width: 1920, height: 1080 }
    });
    const desktopPage = await desktopContext.newPage();

    desktopPage.on('console', msg => {
      if (msg.type() === 'error' || msg.type() === 'warning') {
        consoleErrors.push(`[${msg.type()}] ${msg.text()}`);
      }
    });

    const response = await desktopPage.goto(url, {
      timeout: 30000,
      waitUntil: 'load' // Changed from networkidle to load for more reliability
    });

    statusCode = response?.status() || 0;

    // Wait a bit for animations and embeds to settle
    await desktopPage.waitForTimeout(3000);

    const loadTimeMs = Date.now() - startTime;

    desktopPath = path.join(outputDir, 'desktop.png');
    await desktopPage.screenshot({
      path: desktopPath,
      fullPage: true
    });

    await desktopContext.close();

    // Mobile screenshot (375x667)
    const mobileContext = await browser.newContext({
      viewport: { width: 375, height: 667 },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true
    });
    const mobilePage = await mobileContext.newPage();

    mobilePage.on('console', msg => {
      if (msg.type() === 'error' || msg.type() === 'warning') {
        consoleErrors.push(`[MOBILE ${msg.type()}] ${msg.text()}`);
      }
    });

    await mobilePage.goto(url, {
      timeout: 30000,
      waitUntil: 'load'
    });

    // Wait for mobile animations and embeds to settle
    await mobilePage.waitForTimeout(3000);

    mobilePath = path.join(outputDir, 'mobile.png');
    await mobilePage.screenshot({
      path: mobilePath,
      fullPage: true
    });

    await mobileContext.close();

    return {
      site: siteName,
      timestamp: new Date().toISOString(),
      status: 'success',
      screenshots: {
        desktop: desktopPath,
        mobile: mobilePath
      },
      consoleErrors,
      metrics: {
        loadTimeMs,
        statusCode
      }
    };

  } catch (error) {
    return {
      site: siteName,
      timestamp: new Date().toISOString(),
      status: 'error',
      screenshots: {
        desktop: desktopPath || '',
        mobile: mobilePath || ''
      },
      consoleErrors,
      metrics: {
        loadTimeMs: Date.now() - startTime,
        statusCode: statusCode || 0
      },
      error: error instanceof Error ? error.message : String(error)
    };
  } finally {
    await browser.close();
  }
}

const url = process.argv[2];
const siteName = process.argv[3] || 'localhost';

if (!url) {
  console.error('Usage: npx ts-node visual-check.ts <url> [siteName]');
  process.exit(1);
}

visualCheck(url, siteName).then(result => {
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.status === 'success' ? 0 : 1);
});
