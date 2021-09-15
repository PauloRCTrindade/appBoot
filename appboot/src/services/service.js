const puppeteer = require('puppeteer');

const BASE_URL = 'https://web.whatsapp.com';

const mensage = 'Olá !, O Nosso Horário de atendimento via whatsApp é somente das *08:00h as 18:00h* Solicito que entre em contato amanhã nesse horário que estaremos prontos a atende-lo. Obrigado! '

const whats = {
    browser:null,
    page:null,

    initialize: async () =>{
        whats.browser = await puppeteer.launch({
            headless: false,
            slowMo: 10,
        });

        whats.page = await whats.browser.newPage();

        await whats.page.goto(BASE_URL);

        await whats.page.waitFor(10000)



    },

    mensage: async () =>{

            async function loadNewMensage(page, selector){

                const newMensage = await page.$(selector);

                if (newMensage){

                    await whats.page.waitFor(2000)

                    const toFile = await whats.page.$('._23LrM')

                    await toFile.click();

                    await whats.page.waitFor(1000);

                    const toFileClick = await whats.page.$('._2oldI ');

                    await whats.page.waitFor(1000);

                    toFileClick.click();
                    
                    await whats.page.waitFor(1000); 

                    newMensage.click()

                    await whats.page.waitFor(3000)
    
                    await whats.page.type('[class="_2vbn4"]',mensage);

                    await whats.page.waitFor(5000)
    
                    //await whats.page.click('[data-icon="send"]');

                    await loadNewMensage(page,selector);


                }
            }

            await loadNewMensage(whats.page, '._3C4Vf');
            
    }

}

 module.exports = whats;