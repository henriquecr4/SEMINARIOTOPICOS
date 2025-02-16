// Importando a biblioteca express
const express = require('express')

// Importando a biblioteca axios para fazer requisições HTTP
const axios = require('axios')

// Este é o ID do cliente e a chave do cliente que você obteve Ao registrar o aplicativo
const clientID = 'Ov23li98QceTXajjIIpR'
const clientSecret = 'd20ebb7d150f30392f5a7df4b478c829488227c2'

const app = express()
app.use(express.static(__dirname + '/public'))

app.get('/oauth/redirect', (req, res) => {

  // O objeto req.query tem os parâmetros de consulta que foram enviados para esta rota. Queremos o parâmetro `code`
  const requestToken = req.query.code
  axios({
    // fazendo um post request
    method: 'post',
    // para a API de autenticação do Github, com o ID do cliente, chave do cliente e token request
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    // // Definindo o cabeçalho do tipo de conteúdo, para que possamos obter a resposta em json
    headers: {
      accept: 'application/json'
    }
  }).then((response) => {
    // Assim que obtivermos a resposta, extraia o token de acesso
    const accessToken = response.data.access_token
    // redirecionar o usuário para a página de boas-vindas, junto com o token de acesso 
    res.redirect(`/welcome.html?access_token=${accessToken}`)
  })
})

// Iniciar o servidor na porta 8080
app.listen(8080)
