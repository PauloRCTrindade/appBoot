const puppeteer = require('puppeteer');

const BASE_URL = 'https://chat.utalk.chat/login/sb8cdn3';

const mensage = 'Olá !, O Nosso Horário de atendimento via whatsApp é somente de *Segunda a Sexta  das 08:00h as 18:00h*. Obrigado! '

const login = 'autoatendimento';

const senha = '12345';



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

        await whats.page.waitFor(5000);

        const inputLogin = await whats.page.$('[class="chat-usuario"]');

        await inputLogin.type(login);

        const inputPassword = await whats.page.$('[class="chat-senha"]');

        await inputPassword.type(senha);

        const buttonEntrar = await whats.page.$('[class="_3hV1n yavlE"]');

        await whats.page.waitFor(1000);


        await buttonEntrar.click();

    },



    mensage: async () =>{

            async function loadNewMensage(page, selector){

                await whats.page.waitFor(3000)

                console.log('entrou na func')

                console.log(selector);

                const newMensage = await page.$(selector);

                

                 if (newMensage){

                    await whats.page.waitFor(2000)

                    console.log('entrou no IF');

                    const flat = await whats.page.$('[class="friend-text"]');



                    if(flat){

                        await whats.page.waitFor(10000);

                        console.log('entrou no flat');

                        const newat = await whats.page.$('[class="fa fa-mobile-alt"]')

                        await whats.page.waitFor(10000);

                        let teste = [];



                        //teste = document.querySelectorAll('div.friend-template.list');
                        console.log('-------')
                        console.log(document.querySelectorAll('div.friend-template.list'));

                        if(newat){



                           // await whats.page.click('[class="fa fa-mobile-alt"]');

                        }

                        

                    }

                    

                    // newMensage.click();

                    // await whats.page.waitFor(3000);
    
                    // await whats.page.type('[class="_2vbn4"]',mensage);

                    // await whats.page.waitFor(2000);
    
                    // await whats.page.click('[data-icon="send"]');

                    // await loadNewMensage(page,selector);

                    // //const toFile = await whats.page.$('[class="_3m_Xw"]');

                    // await whats.page.waitFor(1000)
            
                    
                }
            }

            await loadNewMensage(whats.page, '[class="friend-operador"');
            
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


 