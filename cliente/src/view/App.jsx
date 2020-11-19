import React, { useState, useEffect } from 'react'

import {pesquisa, carregaDados, adiciona} from '../model/pesquisa'
import {MostraEntrada, MostraSemEntrada, MostraSucesso, MostraEdicao} from './MostraEntrada.jsx'
import Data from './Data.jsx'
import GoogleLogin, { GoogleLogout } from 'react-google-login'

const estadoInicial = {
  clientId:undefined,
  data: undefined,
  entradaDiario: undefined,
  diario: undefined,
  viewAtual: 'login',
  cssBotao: 'button is-dark',
  pesquisando: false,
  logado: false,
  userToken: undefined
}

function useModelo() {

  const [estado, setEstado] = useState(estadoInicial)

  function onDeslogado(){
    setEstado({...estadoInicial, clientId: estado.clientId})
  }

  function onLogado(res){
    setEstado({...estado, entradaDiario: undefined, 
      pesquisando: false,  logado: true, userToken:res.tokenId})  
  }

  useEffect(() => {
    function deuErro(erro) {
      setEstado({...estadoInicial, nomeBotao: erro.message, cssBotao: 'button is-black', pesquisando: false})
    }
    
    window.fetch('/chave')
      .then(resposta => resposta.json())
      .then(googleKey => setEstado({...estadoInicial, clientId: googleKey}))
      .catch(erro => deuErro(erro))
  }, [])


  useEffect(()=>{
    function onDiarioCarregado(diario){
      setEstado({...estado, diario: diario})
    }
    if(estado.logado){
      carregaDados(estado.userToken)
        .then(diario => onDiarioCarregado(diario))
    }
  }, [estado.logado])

  function onDataInvalida () {
    setEstado({...estado, pesquisando: false})
  }

  function onDataValida (novaData) {
    setEstado({...estado, data: novaData, 
      pesquisando: false,  logado: estado.logado})
  }

  function onPesquisando() {
    setEstado({...estado, pesquisando: true,
      cssBotao: 'button is-dark is-loading'})
  }
  function alteraEntrada (ev) {
    const novaEntrada = ev.target.value
    setEstado({...estado, entradaTexto: novaEntrada})
  }

  function mostraAreaTexto(){
    setEstado({...estado,   cssEntradaTexto: 'box', viewAtual: 'modo edição'})
  }

  function onAdicionaEntrada(){
    adiciona(estado.userToken, estado.data, estado.entradaTexto, estado.diario)
    setEstado({...estado, viewAtual: 'cadastro sucesso'})
  }
  useEffect(() => {
    function onEntradaEncontrada (entrada) {
      setEstado(estado => ({...estado, entradaDiario: entrada, cssBotao: 'button is-dark', pesquisando: false, viewAtual: 'entrada'}))
    }

    function onSemEntrada(){
      setEstado(estado => ({...estado, entradaDiario: undefined, cssBotao: 'button is-dark', 
        pesquisando: false, viewAtual: 'sem entrada'}))
    }
  
    if (estado.pesquisando) {
      let entrada = pesquisa(estado.diario, estado.data)
      if(entrada)
        onEntradaEncontrada(entrada)
      else
        onSemEntrada()
    }
  }, [estado.pesquisando])



  
  return [ estado,  {onDataInvalida, onDataValida, onPesquisando, onLogado, onDeslogado, onAdicionaEntrada, mostraAreaTexto, alteraEntrada} ]
}


function App () {
  const [ estado,  {onDataValida, onDataInvalida, onPesquisando, onLogado, onDeslogado, onAdicionaEntrada, mostraAreaTexto, alteraEntrada} ] = useModelo()


  let oEntrada
  let area
  let logoutBtn


  if (estado.viewAtual === 'entrada') {
    console.log('modo entrada')
    oEntrada = <MostraEntrada entrada={estado.entradaDiario} />
  }
  else if (estado.viewAtual === 'sem entrada'){
    console.log('modo sem entrada')

    oEntrada = <MostraSemEntrada mostraAreaTexto={mostraAreaTexto} />
  }
  else if (estado.viewAtual === 'modo edição')
  {
    oEntrada = <MostraEdicao onAdicionaEntrada={onAdicionaEntrada} 
      alteraEntrada={alteraEntrada} 
      data={estado.data} />
  }
  else if (estado.viewAtual === 'cadastro sucesso'){
    oEntrada = <MostraSucesso />
  }

  if (estado.logado){
    logoutBtn = <GoogleLogout
      buttonText="Logout"
      onLogoutSuccess={onDeslogado}
    />
    area = <>
      {logoutBtn}
      <Data onDataValida={onDataValida} onDataInvalida={onDataInvalida}/>
      <button className={estado.cssBotao}
        onClick={onPesquisando}>
            pesquisar
      </button>
      {oEntrada}
    </>
  }
  else if (estado.clientId){
    area = <GoogleLogin
      clientId={estado.clientId}
      buttonText="Login"
      onSuccess={onLogado}
      onFailure={res => console.log(res)}
      cookiePolicy={'single_host_origin'}
    />
  }

  return (
    <div className='container is-fluid'>
      <div className='message'>
        <div className='message-header'>
            UFSC - CTC - INE - INE5646 :: App Diário
        </div>
        <div className='box'>
          {area}
        </div>
      </div>
    </div>
  )  
}

export default App
