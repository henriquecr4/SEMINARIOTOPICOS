## Implementando o OAuth2.0 na prática.

#### Este projeto visa mostrar como é o funcionamento do Oauth2.0 um padrão projetado para permitir que um site ou aplicativo acesse recursos hospedados por outros aplicativos da web em nome de um usuário.
##### Nomes: Henrique Cavalcante Rodrigues, Jhonatan Rotta Santana
Para executar o projeto:

1. Registre seu novo aplicativo no Github : https://github.com/settings/applications/new. no campo "callback URL" insira "http://localhost:8080/oauth/redirect". Depois de você se registrar, você obterá um ID de 
  cliente e uma chave de cliente.

3. Edite os valores das variáveis 'clientID' e 'clientSecret' no arquivo 'index.js'.
   
5. Utilizamos o editor de código 'VS Code'.
   
7. Instale o 'node.js' na sua máquina.
   
9. Instale as dependências: 'npm install' no prompt de comando.
    
11. Inicie o servidor executando o comando 'node index.js'.
    
13. Execute o arquivo 'index.html' localizado na pasta 'public'.

#### Passo-a-Passo para o desenvolvimento:

##### 1. Configuração do Servidor

Configuramos um servidor Node.js usando Express para lidar com a autenticação via OAuth2.
Usei a biblioteca Axios para fazer requisições HTTP.

##### 2. Integração com o GitHub OAuth2

Registramos o aplicativo no GitHub para obter o client_id e client_secret.
Configurei a rota /oauth/redirect para capturar o código de autorização e trocá-lo por um token de acesso.

##### 3. Criação da Página de Login

Desenvolvemos uma página HTML simples com um link para o GitHub OAuth, permitindo que o usuário faça login.

##### 4. Processamento do Token e Requisição de Dados do Usuário

Depois que o usuário faz login, extraí o access_token e redirecionei para uma página de boas-vindas.
No frontend, usei fetch para chamar a API do GitHub e obter os dados do usuário autenticado.

##### 5. Exibição das Informações do Usuário

Exibi o nome do usuário na página após a autenticação bem-sucedida.

##### 6. Testes e Ajustes

Testamos a tela de login, corrigimos pequenos erros.
