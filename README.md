## Implementando o OAuth2.0 na prática.

Este projeto visa mostrar como é o funcionamento do Oauth2.0 um padrão projetado para permitir que um site ou aplicativo acesse recursos hospedados por outros aplicativos da web em nome de um usuário.

Para executar o projeto:

1. Registre seu novo aplicativo no Github : https://github.com/settings/applications/new. no campo "callback URL" insira "http://localhost:8080/oauth/redirect". Depois de você se registrar, você obterá um ID de cliente e uma chave de cliente.
2. Edite os valores das variáveis 'clientID' e 'clientSecret' no arquivo 'index.js'.
3. Utilizamos o editor de código 'VS Code'.
4. Instale o 'node.js' na sua máquina.
5. Instale as dependências: 'npm install' no prompt de comando.
6. Inicie o servidor executando o comando 'node index.js'.
7. Execute o arquivo 'index.html' localizado na pasta 'public'.
