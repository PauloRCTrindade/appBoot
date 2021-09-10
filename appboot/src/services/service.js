const puppeteer = require('puppeteer');

const BASE_URL = 'https://instagram.com/';

const instagram = {
    browser:null,
    page:null,

    initialize: async () =>{
        instagram.browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
        });

        instagram.page = await instagram.browser.newPage();

        await instagram.page.goto(BASE_URL);
    }
}

 module.exports = instagram;