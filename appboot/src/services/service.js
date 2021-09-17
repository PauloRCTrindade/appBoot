const puppeteer = require('puppeteer');

const BASE_URL = 'https://web.whatsapp.com';

const mensage = 'Olá !, O Nosso Horário de atendimento via whatsApp é somente de *Segunda a Sexta  das 08:00h as 18:00h*. Obrigado! '

const whats = {
    browser:null,
    page:null,

    initialize: async () =>{
        whats.browser = await puppeteer.launch({
            headless: false,
            //slowMo: 10,
        });

        whats.page = await whats.browser.newPage();

        await whats.page.goto(BASE_URL);

        await whats.page.waitFor(20000)

    },



    mensage: async () =>{

            async function loadNewMensage(page, selector){

                const newMensage = await page.$(selector);

                 if (newMensage){

                    await whats.page.waitFor(2000)

                    newMensage.click();

                    await whats.page.waitFor(3000);
    
                    await whats.page.type('[class="_2vbn4"]',mensage);

                    await whats.page.waitFor(2000);
    
                    await whats.page.click('[data-icon="send"]');

                    await loadNewMensage(page,selector);

                    //const toFile = await whats.page.$('[class="_3m_Xw"]');

                    await whats.page.waitFor(1000)
            
                    
                }
            }

            await loadNewMensage(whats.page, '._3C4Vf');
            
    },

    
    toFile: async () =>{

            const toFile = await whats.page.$('[class="_3m_Xw"]');
          
            if(toFile){
                await whats.page.waitFor(1000)
                        
                await toFile.click();

                await whats.page.waitFor(1000);

                await whats.page.type('[class="_2vbn4"]',mensage);

                await whats.page.waitFor(2000);

                await whats.page.click('[data-icon="send"]');

                await whats.page.waitFor(1000);

                await toFile.click({ button:'right' });

                await whats.page.waitFor(1000);

                const toFileClick = await whats.page.$('[class="_2oldI dJxPU"]');

                if (toFileClick){

                    await whats.page.waitFor(1000);

                    toFileClick.click();
                }

                await whats.page.waitFor(1000)
                

        }
                
    }

}

 module.exports = whats;


 