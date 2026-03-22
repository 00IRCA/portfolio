import { test } from '@playwright/test';

const sections = [
  { name: 'header', selector: 'header' },
  { name: 'hero', selector: '#home' },
  { name: 'about', selector: '#aboutMe' },
  { name: 'technologies', selector: '#technologies' },
  { name: 'experience', selector: '#experience' },
  { name: 'projects', selector: '#projects' },
  { name: 'contact', selector: '#contact' },
  { name: 'footer', selector: 'footer' },
];

const themes = ['light', 'dark'] as const;

for (const theme of themes) {
  test(`[mobile][${theme}] screenshot all sections`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    await page.addInitScript((t) => {
      localStorage.setItem('theme', t);
    }, theme);

    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.evaluate((t) => {
      document.documentElement.classList.toggle('dark', t === 'dark');
    }, theme);

    for (const section of sections) {
      const element = page.locator(section.selector);
      await element.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await element.screenshot({
        path: `screenshots/mobile-${theme}/${section.name}.png`,
      });
    }
  });

  test(`[mobile][${theme}] screenshot full page`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    await page.addInitScript((t) => {
      localStorage.setItem('theme', t);
    }, theme);

    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.evaluate((t) => {
      document.documentElement.classList.toggle('dark', t === 'dark');
    }, theme);

    await page.evaluate(async () => {
      await new Promise<void>((resolve) => {
        const distance = window.innerHeight;
        const interval = setInterval(() => {
          window.scrollBy(0, distance);
          if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            clearInterval(interval);
            window.scrollTo(0, 0);
            resolve();
          }
        }, 200);
      });
    });
    await page.waitForTimeout(500);

    await page.screenshot({
      path: `screenshots/mobile-${theme}/full-page.png`,
      fullPage: true,
    });
  });
}
