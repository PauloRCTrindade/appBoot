const whats = require('./service');

const diaSemana = new Date().getDay();
const hora = new Date().getHours();
const feriado = false;

(async () => {

	await whats.initialize();

	while (true) {
		if (diaSemana !== 0 && diaSemana !== 6 && feriado === false) { // Dias úteis
			if (hora >= 8 && hora <= 17) { // Dia útil dentro do horário
				console.log('chamda da função')
				console.log(hora)
				await whats.mensage();
			} else { // Dia útil fora do horário
				await whats.toFile();
			console.log('fora do horário')
			}
		} else {
			await whats.toFile(); // Final de semana ou Feriado 
		}
	}

})();