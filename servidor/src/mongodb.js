import { MONGO_URL } from './env'

// versão alternativa usando async/await -- RECOMENDADO
const {MongoClient} = require('mongodb')
var DBDriver = new MongoClient(MONGO_URL, {useUnifiedTopology: true})

// declaramos funções assíncronas com async 
// token é o identificador do usuário
async function addEntrada(userId, data, entrada){
  const collection = DBDriver.collection('diario')
  const query = { userId: userId, data: data }
  const doc = {
    userId: userId,
    data: data,
    conteudo: entrada
  }
  // toda promise é precedida de um await - bloqueia a execução dessa função até ser completada
  // upsert = update ou insert
  const res = await collection.updateOne(query, { $set: doc }, {upsert: true})  
  return res
}

async function getEntrada(userId, data){
  const collection = DBDriver.collection('diario')

  const query = {userId: userId, data: data}
  const res = await collection.findOne(query) 
   
  return res
}

async function getEntradas(){
  const collection = DBDriver.collection('diario')
  
  // FIX ME: retornar somente entradas do usuário ativo

  const entradas = await collection.find().toArray()
  return entradas
}

async function setupBDDriver(){
  DBDriver.connect((err, conn) => {
    if(err){
      console.dir(err)
    }
    DBDriver = conn.db('INE5646')
  })
}

export {setupBDDriver, getEntradas, getEntrada, addEntrada}
