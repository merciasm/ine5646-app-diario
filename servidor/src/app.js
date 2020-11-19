import { PORTA, GOOGLE_CLIENT_ID } from './env'
import { setupBDDriver, getEntradas, addEntrada } from './mongodb'
import https from 'https'
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'
import express from 'express'

// cadastrar chave em https://console.developers.google.com/apis/credentials

async function validaToken(token){
  const url = `https://oauth2.googleapis.com/tokeninfo?id_token=${token}`
  const res = await fetch(url)
  const res_json = await res.json()
  if (res_json['email'])
    return res_json['email']
  else{
    console.log(res_json)
  }
  return false
}

const opcoes = {
  key: fs.readFileSync(path.resolve(__dirname, '../cert/key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, '../cert/cert.pem'))
}

const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, '../publico')))

app.get('/chave', (req, res) => res.json(GOOGLE_CLIENT_ID))

app.post('/diario/busca', async (req, res) =>{
  const token = req.body.token
  const isValid = await validaToken(token)
  if (isValid){
    const obj = await getEntradas()
    res.json(obj)
  }
  else{
    res.status(500).send('Something broke!')
  }

})

app.post('/diario/adiciona', async (req, res) =>{
  const token = req.body.token
  const data = req.body.data
  const entrada = req.body.entrada
  console.log(token)
  const isValid = await validaToken(token) // retorna email do user se valido
  if (isValid){
    const userId = isValid
    const obj = await addEntrada(userId, data, entrada)
    res.json(obj)
  }
  else{
    res.status(500).send('Something broke!')
  }
})

const server = https.createServer(opcoes, app)
setupBDDriver()
// eslint-disable-next-line no-console
server.listen(PORTA, () => console.log(`No ar, HTTPS porta ${PORTA}`))
