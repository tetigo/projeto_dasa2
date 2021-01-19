## [Link do Projeto no Heroku](https://dasa-project.herokuapp.com/ "Link do Projeto")



Instalar [VSCode](https://code.visualstudio.com/download)


Instalar plugin rest client by Huachao Mao utilizado para testar aplicação


Este plugin permite efetuarmos requisições de dentro do proprio vscode. (arquivo test.http)



Se estiver utilizando Windows, instalar [Git Bash](https://gitforwindows.org/)



Instalar [xampp](https://www.apachefriends.org/pt_br/index.html) para ter um servidor mysql rodando localmente


Inicializar os modulos apache e mysql no Xampp


Agora vc está com os servidores http e mysql rodando nas portas: 80 e 3306 respectivamente


Clicar no botao admin do mysql no xampp control panel


Vai abrir phpMyAdmin no browser


Clicar no botao sql


Copiar e colar o conteudo do arquivo 'script.sql' na caixa de sql


Clicar no botão executar


Agora vc tem o banco db_exam_lab criado com alguns registros ja inseridos


No vscode, abrir terminal de comando e digitar o comando para baixar o projeto localmente:
```git clone https://github.com/tetigo/projeto_dasa2.git```


Executar o comando: npm install express mysql cors


Executar o comando: node index.js


O servidor vai estar rodando na porta 3000 e o servidor de banco foi levantado na porta 3306


Agora executar os teste do arquivo "test.http"


Basta clicar no texto escrito "Send Request" para enviar a requisição


#### Para criar Imagem Docker Local

executar o comando no terminal do vscode: docker build -t testimage . --no-cache


agora vc acabou de criar a imagem docker contendo a aplicação


Para verificar a imagem criada, rode o comando: docker images


executar o comando: docker run -d -p 3000:3000 testimage


Agora levantamos um container docker contendo a aplicação


O servidor Node está ouvindo na porta 3000. Basta executar os comandos de teste novamente 


executar o comando: docker ps para ver os processos do docker que estão rodando


executar o comando: docker stop <<container id>> pra parar a execução do container


```
OBS:- Devido a falta de tempo, ainda não criei testes, ainda faltam as funcionalidades
      para inserção e deleção em lote. Esse projeto foi feito em Javascript com MySQL.
      Tentei fazer o projeto inicialmente utilizando Typescript com MongoDB, mas fiquei com 
      dúvida sobre o relacionamento um para muitos na hora de atualizar, criar e popular e cheguei a implementar parte da funcionalidade. Se quiserem ver o código original: [Projeto Dasa v1](https://github.com/tetigo/projeto_dasa)
      Gostaria de um feedback sobre como proceder o relacionamento em questão, eu vou ficar
      muito contente!
      Valeu e muito obrigado pelo seu tempo.
```


Tiago Mendes tetigo@gmail.com
