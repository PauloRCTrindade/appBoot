const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  

  await page.goto('https://www.instagram.com');

  await page.waitForTimeout(3000);

  

  await page.type('[name="username"]','dsdsdsdsdsd');
  await page.type('[name="password"]','dsdsdsdsdsd');


})();