const whats = require('./service');
const feriado = false;

(async () => {



	await whats.initialize();

	while (true) {
		const hora = new Date().getHours();
		const diaSemana = new Date().getDay();
		if (diaSemana !== 0 && diaSemana !== 6 && feriado === false) { // Dias úteis
			if (hora >= 8 && hora <= 17) { // Dia útil dentro do horário
				console.log('Dentro do Horário',hora)
				await whats.mensage();
			} else { // Dia útil fora do horário
				await whats.toFile();
			console.log('fora do horário',hora)
			}
		} else {
			await whats.toFile(); // Final de semana ou Feriado 
		}
	}

})();