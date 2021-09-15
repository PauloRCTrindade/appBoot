const whats = require('./service');


(async ()=>{

    const loop = true;

    await whats.initialize();

    while (loop){
      await whats.mensage();
    }

    debugger;

})();