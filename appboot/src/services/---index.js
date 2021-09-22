const whats = require('./service');


(async ()=>{


    await whats.initialize();

    while (true){

      
      //await whats.mensage();

      await whats.toFile();
    }


})();