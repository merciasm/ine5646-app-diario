import { MONGO_URL } from './env'

// versão alternativa usando async/await -- RECOMENDADO
const {MongoClient} = require('mongodb');
var DBDriver = new MongoClient(MONGO_URL, {useUnifiedTopology: true});

// declaramos funções assíncronas com async 
async function addEntrada(token, data, entrada){
    const collection = DBDriver.collection('diario');
    const query = { userToken: token, data: data }
    const doc = {
        userToken: token,
        data: data,
        conteudo: entrada
    };
    // toda promise é precedida de um await - bloqueia a execução dessa função até ser completada
    const res = await collection.updateOne(query, { $set: doc }, {upsert: true});  
    return res;
}

async function getEntrada(token){
    const collection = DBDriver.collection('diario');

    const query = {userToken: token};
    res = await collection.findOne(query); 
   
    return res;
}

async function getEntradas(){
    const collection = DBDriver.collection('diario');

    const entradas = await collection.find().toArray();
    return entradas;
}


async function getDBDriver(){


    DBDriver.connect((err, conn) => {
        if(err){
            console.dir(err);
        }
        DBDriver = conn.db('INE5646');
    });
}

export {getDBDriver, getEntradas, addEntrada}
