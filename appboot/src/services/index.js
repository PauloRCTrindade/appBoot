const romaneios = [  {
  "status": "AG",
  "tmsIntegerdo": false,
  "appIntegerdo": false,
  "docsDistribuicao": [
    {
      "status": "AG",
      "tmsIntegerdo": false,
      "appIntegerdo": false,
      "_id": "6144f4866337860a10da8cb9",
      "sequencia": 1,
      "tipo": "ent",
      "tipoDoc": "CT",
      "unidade": "BRG",
      "numero": "302",
      "remetente": {
        "_id": "6144b5e2e7290de8a79719ec",
        "cnpj": "23690801000288",
        "__v": 0,
        "bairro": "Colinas",
        "cep": "16207020",
        "cidade": "Birigui",
        "complemento": "",
        "logradouro": "Rua Jose Lourenço da Silva",
        "numero": "550",
        "razaoSocial": "Fabrica de Bujiganda",
        "telefone": "(11)96539 8484",
        "uf": "SP",
        "createdAt": "2021-09-22T22:55:04.239Z"
      },
      "destinatario": {
        "_id": "6144b5e2e7290de8a7971a16",
        "cnpj": "10236756000156",
        "__v": 0,
        "bairro": "Vila Maria",
        "cep": "02117000",
        "cidade": "Sao Paulo",
        "complemento": "",
        "logradouro": "Rua Diamantina",
        "numero": "684",
        "razaoSocial": "Casa de Bujiganda",
        "telefone": "(11)96539 8484",
        "uf": "SP",
        "createdAt": "2021-09-22T22:55:04.235Z"
      },
      "pesoReal": 1850.5,
      "pesoCubado": 1850.5,
      "volumes": 45,
      "romaneio": "6144f4866337860a10da8cae",
      "dataHoraRegistro": "2021-09-17T20:03:18.747Z",
      "createdAt": "2021-09-17T20:03:18.747Z",
      "__v": 0,
      "appIntegrado": true,
      "tmsIntegrado": false
    },
    {
      "status": "AG",
      "tmsIntegerdo": false,
      "appIntegerdo": false,
      "_id": "6144f4866337860a10da8cbb",
      "sequencia": 2,
      "tipo": "ent",
      "tipoDoc": "CT",
      "unidade": "BRG",
      "numero": "303",
      "remetente": {
        "_id": "6144b5e2e7290de8a79719ec",
        "cnpj": "23690801000288",
        "__v": 0,
        "bairro": "Colinas",
        "cep": "16207020",
        "cidade": "Birigui",
        "complemento": "",
        "logradouro": "Rua Jose Lourenço da Silva",
        "numero": "550",
        "razaoSocial": "Fabrica de Bujiganda",
        "telefone": "(11)96539 8484",
        "uf": "SP",
        "createdAt": "2021-09-22T22:55:04.239Z"
      },
      "destinatario": {
        "_id": "6144b5e2e7290de8a7971a16",
        "cnpj": "10236756000156",
        "__v": 0,
        "bairro": "Vila Maria",
        "cep": "02117000",
        "cidade": "Sao Paulo",
        "complemento": "",
        "logradouro": "Rua Diamantina",
        "numero": "684",
        "razaoSocial": "Casa de Bujiganda",
        "telefone": "(11)96539 8484",
        "uf": "SP",
        "createdAt": "2021-09-22T22:55:04.235Z"
      },
      "pesoReal": 2850.3,
      "pesoCubado": 2850.3,
      "volumes": 12,
      "romaneio": "6144f4866337860a10da8cae",
      "dataHoraRegistro": "2021-09-17T20:03:18.778Z",
      "createdAt": "2021-09-17T20:03:18.778Z",
      "__v": 0,
      "appIntegrado": true,
      "tmsIntegrado": false
    }
  ],
  "_id": "6144f4866337860a10da8cae",
  "cnpj": "22397499000155",
  "unidade": "BRG",
  "romaneio": 1453,
  "cpfMotorista": "18526524895",
  "veiculo": "ACB1234",
  "dataEmissao": "2021-09-16T00:00:00.000Z",
  "dataHoraRegistro": "2021-09-17T20:03:18.246Z",
  "createdAt": "2021-09-17T20:03:18.246Z",
  "__v": 0,
  "appIntegrado": true,
  "tmsIntegrado": false
}]

var documentos = [];

for(var i=0; i<romaneios.length; i++) {
  var result = romaneios[i];

  for(var i =0; i<result.docsDistribuicao.length; i++) {
    documentos.push([result.docsDistribuicao[i]]); 
     
  }
}

 console.log(documentos)