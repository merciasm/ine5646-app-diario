/* eslint-disable no-console */
// verifica se todas as variáveis de ambiente estão definidas
import path from 'path'
import dotenv from 'dotenv'

const arquivoPontoEnv = path.join(__dirname, '../.env')
dotenv.config({ path: arquivoPontoEnv })

let comErro = false

if (process.env.PORTA === undefined) {
  console.log('Variável PORTA não definida!. Defina no arquivo servidor/.env')
  console.log('Exemplo: PORTA=3000')
  comErro = true
}

if (process.env.MONGO_URL === undefined) {
  console.log('Variável MONGO_URL não definida! Defina no arquivo servidor/.env')
  comErro = true
}

if (process.env.GOOGLE_CLIENT_ID === undefined) {
  console.log('Variável GOOGLE_CLIENT_ID não definida! Defina no arquivo servidor/.env')
  console.log('Para obter uma chave acesse https://console.developers.google.com/apis/credentials')
  comErro = true
}

if (comErro) {
  process.exit(1)
}

const PORTA = parseInt(process.env.PORTA)
const MONGO_URL = process.env.MONGO_URL
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
export { PORTA, MONGO_URL, GOOGLE_CLIENT_ID}
