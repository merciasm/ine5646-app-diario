### UFSC - CTC - INE - INE5646 Programação para Web
# Exercício App Diário

A aplicação mostra um diário que pode ser acessado com usuários através de **autenticação**. Usuários autenticados podem acessar as entradas existentes (através da data), bem como adicionar novas entradas quando desejado. Os dados são salvos no lado do servidor através de um banco de dados **mongo**.


## Objetivo do Exercício
Mostrar uma aplicação que utiliza mecanimos de autenticação de usuário através do protocolo OAuth, bem como interação com banco de dados no lado do servidor.

## Instruções
Depois de baixar/clonar o respositório, entre no diretório **cliente** e digite

`npm install`

para instalar os pacotes JavaScript utilizados pelo lado cliente da aplicação.

Em seguida entre no diretório **servidor** e digite

`npm install`

para instalar os pacotes JavaScript utiliados pelo lado servidor da aplicação.

No mesmo diretório **servidor**,  crie o arquivo **.env** e adicione o seguinte conteúdo

```
PORTA=3000
GOOGLE_CLIENT_ID='.......'
MONGO_URL='....'
```

O valor do atributo *GOOGLE_CLIENT_ID* é obtido no endereço https://console.developers.google.com/apis/credentials . Isso permitirá que sua aplicação utilize o Google Sign in para autenticação de usuários.

O valor do atributo *MONGO_URL* é a URL do mongo no servidor (exemplo: `mongodb://localhost/27017`)


### Durante o desenvolvimento
O desenvolvimento da aplicação envolve duas frentes de trabalho: a programação necessária para o lado cliente e a programação necessária para o lado servidor.

#### Lado Cliente
Para iniciar o desenvolvimento do lado cliente entre no diretório **cliente ** e digite

`npm start`

Cada vez que um arquivo no lado cliente for alterado o *webpack* será acionado para gerar uma nova versão dos arquivos necessários 
para o lado cliente. Estes arquivos são armazenados no diretório **publico** dentro do diretório **servidor**.

#### Lado Servidor
Para iniciar o desenvolvimento do lado servidor entre no diretório **servidor** e digite

`npm start`

A partir de então a aplicação estará disponível na porta 3000. Para acessar, use o navegador e digite o endereço https://localhost:3000

Sempre que um arquivo for salvo a aplicação irá reiniciar automaticamente (graças ao pacote **nodemon**).


### Em produção

Depois que o código da aplicação está pronto é preciso gerar as versões otimizadas (em termos de tamanho e velocidade de execução) dos arquivos do lado cliente e do lado servidor.

#### Lado Cliente

Para gerar a versão em produção do lado cliente entre no diretório **cliente** e digite

`npm run build`

Observe que o tamanho do arquivo *bundle.js* diminui drasticamente de tamanho.

#### Lado Servidor

Para gerar a versão em produção do lado servidor entre no diretório **servidor** e digite

`npm run build`

## Executando a aplicação em produção
Para executar a aplicação em modo produção entre no diretório **servidor** e digite

`node build/app.js`
