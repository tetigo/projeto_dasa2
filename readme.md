## [Link do Site](https://jobify.tetigo.now.sh "Link do Projeto")

## [Jobify](https://jobify.tetigo.now.sh "Link da Aplicação")

Instalar vscode


Instalar plugin rest client by Huachao Mao


Este plugin permite efetuarmos requisições de dentro do proprio vscode. (arquivo test.http)


Instalar xampp para ter um servidor mysql rodando localmente


Inicializar os modulos apache e mysql


Agora vc está com os servidores http e mysql rodando nas portas: 80 e 3306 respectivamente


Clicar no botao admin do mysql no xampp control panel


Vai abrir phpMyAdmin no browser


Clicar no botao sql


Copiar e colar o conteudo do arquivo 'script.sql' na caixa de sql


Clicar no botão executar


Agora vc tem o banco db_exam_lab criado com alguns registros ja inseridos

Executar o comando: node index.js na linha de comando


O servidor vai estar rodando na porta 3000 e o servidor de banco foi levantado na porta 3306

Agora executar os teste do arquivo "test.http"


Basta clicar no texto escrito "Send Request" para enviar a requisição


#### Para criar Imagem Docker

executar o comando: docker build -t testimage --no-cache


agora vc acabou de criar a imagem docker contendo a aplicação


executar o comando: docker run -d -p 3000:3000 testimage


Agora levantamos um container docker contendo a aplicação


O servidor Node está ouvindo na porta 3000. Basta executar os comandos de teste novamente 


executar o comando: docker ps para ver os processos do docker que estão rodando


executar o comando: docker stop <<container id>> pra parar a execução do container


Tiago Mendes tetigo@gmail.com
