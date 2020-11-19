import { EntradaDiario, Diario } from './modelos'

const URL_BASE = 'https://localhost:3000/diario'

async function carregaDados (userToken) {
  const entradas = await acessaEntradas(userToken)
  const diario = new Diario()
  for(let entrada of entradas){
    diario.addEntrada(entrada)
  }
  return diario
}

async function acessaEntradas ( userToken) {
  const u = `${URL_BASE}/busca/`
  const jsonData = JSON.stringify({token: userToken})
  
  const resp = await window.fetch(u, { method: 'POST',
    headers: {'content-type': 'application/json'},
    body: jsonData})
    
  if (resp.ok === false) {
    throw new Error('Não foi possível acessar dados no servidor.')
  }
  const respJSON = await resp.json()
  return processaRespostaServidor(respJSON)
}

function processaRespostaServidor (respJSON) {
  const qtdEncontrada = respJSON.length
  const entradas =
    qtdEncontrada === 0 ? [] : respJSON

  return entradas.map(entrada => objToEntrada(entrada))
}

function objToEntrada (entrada) {
  return new EntradaDiario( entrada.data, entrada.conteudo)
}

async function adiciona ( userToken, data, entrada, diario) {
  const u = `${URL_BASE}/adiciona/`
  const jsonData = JSON.stringify({token: userToken, data: data, entrada: entrada})
  const resp = await window.fetch(u, { method: 'POST',
    headers: {'content-type': 'application/json'},
    body: jsonData})
  if (resp.ok === false) {
    throw new Error('Não foi possível acessar dados no servidor.')
  }
  diario.addEntrada(objToEntrada({data: data, conteudo: entrada}))
}

function pesquisa (diario, data) {
  return diario.getEntrada(data)
}


export {pesquisa, carregaDados, adiciona}
