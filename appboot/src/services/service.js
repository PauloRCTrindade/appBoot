const puppeteer = require('puppeteer');

const BASE_URL = 'https://chat.utalk.chat/login/sb8cdn3';

const mensagemForaExpediente = 'Olá !, O Nosso Horário de atendimento via whatsApp é somente em *Dias úteis das 08:00h as 18:00h*. Obrigado! '

const mensagemBoasVindas = 'Olá ! Seja bem vindo ao atendimento da América Soft, aguarde um instante que um dos nossos colaboradores realizará o seu atendimento. '

const login = 'autoatendimento';

const senha = '12345';

const whats = {
	browser: null,
	page: null,

	initialize: async () => {

		whats.browser = await puppeteer.launch({
			headless: true,
			slowMo: 5,
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

	},

	mensage: async () => {

		async function loadNewMensage(page, selector) {

			let newMensage = await page.$(selector); // Seleciona o Ícone que aparece quando a mensagem ainda não foi aberta por nenhum operador 

			await page.waitForTimeout(4000)

			if (newMensage ) {

				console.log('Mensagem em atendimento');

				await newMensage.click();

				await page.waitForTimeout(3000)

				const inputMensagemAutomatica = await page.$('[class="input-message inputChat"]');

				await inputMensagemAutomatica.type(mensagemBoasVindas);

				await page.waitForTimeout(3000)

				const sendMensagem = await page.$('[class="send-button"]')

				await sendMensagem.click();

				newMensage = null;

				await page.waitForTimeout(4000)

			} else {
				console.log('Nenhuma mensagemm em atendimento ');
			}
		}

		await loadNewMensage(whats.page, '[class="fa fa-mobile-alt"');

	},

	toFile: async () => {

		const toFile = await whats.page.$('[class="_3m_Xw"]');

		if (toFile) {
			await whats.page.waitForTimeout(1000)

			await toFile.click();

			await whats.page.waitForTimeout(1000);

			await whats.page.type('[class="_2vbn4"]', mensagemForaExpediente);

			await whats.page.waitForTimeout(2000);

			await whats.page.click('[data-icon="send"]');

			await whats.page.waitForTimeout(1000);

			await toFile.click({ button: 'right' });

			await whats.page.waitForTimeout(1000);

			const toFileClick = await whats.page.$('[class="_2oldI dJxPU"]');

			if (toFileClick) {

				await whats.page.waitForTimeout(1000);

				toFileClick.click();
			}

			await whats.page.waitForTimeout(1000)

		}

	}

}

module.exports = whats;


