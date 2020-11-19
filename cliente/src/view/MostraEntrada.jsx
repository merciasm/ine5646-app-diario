
import React from 'react'
import PropTypes from 'prop-types'
import { EntradaDiario } from '../model/modelos'

const MostraEntrada = (props) => {
  const entrada = props.entrada

  return (
    <div className='card'>
      <h1 className='card-header'>
        <span className='card-header-title has-background-primary'>
          Diário do Dia {entrada.data}
        </span>
      </h1>
      <div className='card-content'>
        {entrada.conteudo}
      </div>
    </div>
  )
}

const MostraSemEntrada = (props) => {
  const mostraAreaTexto = props.mostraAreaTexto

  return (
    <div className='card'>
      <h1 className='card-header'>
        <span className='card-header-title has-background-warning'>
          Sem entrada nesta data. 
        </span>
      </h1>
      <button className='button is-dark'
        onClick={mostraAreaTexto}>
              adicionar entrada
      </button>
    </div>
  )
}


const MostraSucesso = () => {
  return (
    <div className='card'>
      <h1 className='card-header'>
        <span className='card-header-title has-background-success'>
          Dados registrados com sucesso. 
        </span>
      </h1>


    </div>
  )
}

const MostraEdicao = (props) => {
  const onAdicionaEntrada = props.onAdicionaEntrada
  const alteraEntrada = props.alteraEntrada
  const data = props.data

  return (
    <div className='box'>
      <input className='input'
        type='text'
        title={'Nova entrada para' + data}
        placeholder='Fale sobre seu dia'
        onChange={alteraEntrada}/>
      <button className='button is-dark'
        onClick={onAdicionaEntrada}>
        submeter
      </button>
    </div>
  )
}

MostraEntrada.propTypes = {
  entrada: PropTypes.instanceOf(EntradaDiario).isRequired
}

MostraSemEntrada.propTypes = {
  mostraAreaTexto: PropTypes.func.isRequired
}

MostraEdicao.propTypes = {
  onAdicionaEntrada: PropTypes.func.isRequired,
  alteraEntrada: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired
}

export {MostraEntrada, MostraSemEntrada, MostraSucesso, MostraEdicao}
