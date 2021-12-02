const puppeteer = require('puppeteer');

const BASE_URL = 'https://chat.utalk.chat/login/sb8cdn3';

const mensagemBoasVindas = 'Olá ! Seja bem vindo ao atendimento da América Soft, aguarde um instante que um dos nossos colaboradores realizará o seu atendimento. '

const login = 'autoatendimento';

const senha = '12345';

var checkArquivar = false;

const whats = {
	browser: null,
	page: null,


	initialize: async () => {

		console.log('INICIOU!!')

		whats.browser = await puppeteer.launch({
			headless: true,
			slowMo: 4,
		});

		whats.page = await whats.browser.newPage();

		await whats.page.goto(BASE_URL);

		await whats.page.waitForTimeout(5000);

		const inputLogin = await whats.page.$('[class="chat-usuario"]');

		await inputLogin.type(login);

		const inputPassword = await whats.page.$('[class="chat-senha"]');

		await inputPassword.type(senha);

		const buttonEntrar = await whats.page.$('[class="_3hV1n yavlE"]');

		await whats.page.waitForTimeout(1000);

		await buttonEntrar.click();

		await whats.page.waitForTimeout(10000)

	},

	mensage: async () => {

		async function loadNewMensage(page, selector) {

			await page.waitForTimeout(4000)

			let newMensage = await page.$(selector); // Seleciona o Ícone que aparece quando a mensagem ainda não foi aberta por nenhum operador 

			//await page.waitForTimeout(4000)

			if (newMensage) {

				console.log('*-------------------------------------- Mensagem em atendimento -------------------------------------------------*');

				await page.waitForTimeout(2000)

				await newMensage.click(); // Abre a conversa

				await page.waitForTimeout(3000)

				const inputMensagemAutomatica = await page.$('[class="input-message inputChat"]'); // Seleciona o IImput de texto

				await inputMensagemAutomatica.type(mensagemBoasVindas);

				await page.waitForTimeout(3000)

				const sendMensagem = await page.$('[class="send-button"]')

				await sendMensagem.click(); // clica no enter

				await page.waitForTimeout(2000)

				newMensage = null;

				await page.waitForTimeout(4000)

			} else {
				console.log('Nenhuma mensagemm em atendimento ');
			}
		}

		await loadNewMensage(whats.page, '[class="fa fa-mobile-alt"');

	},

	toFile: async () => {

		async function toFileNewMensage(page, selector) {
			console.log('Arquiva conversa')

			await page.waitForTimeout(4000)

			let toFile = await whats.page.$(selector);

			await page.waitForTimeout(4000)

			if (toFile) {
				console.log('Arquivando Conversa')

				await toFile.click();

				await whats.page.waitForTimeout(2000);

				const arquivaMensagem = await page.$('[class="btNovaConversa click-finalizaratendimento"]');

				await page.waitForTimeout(2000);

				await arquivaMensagem.click();

				await page.waitForTimeout(2000);

				if (checkArquivar === false){
					const check = await page.$('[id="ffa_checkArquivar"]');
					check.click();
					checkArquivar = true;
				}			

				await page.waitForTimeout(1000);
				page.mouse.click (500, 400, {button: 'left'})

				toFile = null;

				await page.waitForTimeout(4000)

			} else {
				console.log('Todas mensagens arquivadas')
			}

		}
		await toFileNewMensage(whats.page, '[class="fa fa-mobile-alt"');

	}

}

module.exports = whats;


