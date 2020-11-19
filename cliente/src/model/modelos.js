
class EntradaDiario{
  constructor (data, conteudo){
    this.conteudo = conteudo
    this.data = data
  }
}

class Diario{
  constructor(){
    this.entradas = {}
    this.num_entradas = 0
  }

  addEntrada(entrada){
    this.entradas[entrada.data] = entrada
    this.num_entradas++
  }

  getEntrada(data){
    if (data in this.entradas)
      return this.entradas[data]
  }
}

export {EntradaDiario, Diario}