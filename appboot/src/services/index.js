const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo:50 });
  const page = await browser.newPage();
  

  await page.goto('https://www.instagram.com');

  await page.waitForTimeout(3000);

  

  await page.type('[name="username"]','paulinhotrindade121212@gmail.com');
  await page.type('[name="password"]','16822300Ep');
  await page.click('[type="submit"]');

  await page.waitForTimeout(10000);  

  await page.click('[type="button"]');

  await page.waitForTimeout(10000);

  await page.click('[class="aOOlW  bIiDR  "]');

  await page.waitForTimeout(5000);

  await page.type('[type="text"]','#roupas');

  await page.waitForTimeout(5000);

  await page.click('[class="                     Igw0E   rBNOH        eGOV_     ybXk5    _4EzTm                                                                                   XfCBB          HVWg4                 "]');
  
  await page.waitForTimeout(5000);

  await page.click('[class="_9AhH0"]');

  await page.waitForTimeout(5000);

  await page.click('[class="sqdOP yWX7d     _8A5w5   ZIAjV "]');

  await page.waitForTimeout(10000);

  await page.click('(//a[@class="-nal3 "])[1]');

  console.log('passou');



})();