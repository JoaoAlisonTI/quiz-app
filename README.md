<h2 align="center"> Quiz App Desenvolvido com Vite e React </h2>

<p align="center">
Desenvolvido durante o mês de julho de 2023 com foco no aprendizado do React. Lá estava eu na tela inical do Google Chrome quando de repente me deparo com o artigo "How to Build a Quiz App Using React –with Tips and Starter Code" da plataforma freeCodecamp, então pensei 🤔 porque não tentar fazer esse projetinho? Por mais "simples" que possa parecer, é com projetos como esse onde aprendemos bastante coisa, principalmente da base, que servem para criar futuros projetos um pouco mais robustos.<br/>
</p>

- [Overview](#overview)
  - [Sobre o projeto](#sobre)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Desenvolvido com](#tecnologias)
  - [Continuar o desenvolvimento](#continuar-o-desenvolvimento)
  - [Recursos úteis](#recursos-úteis)
- [Author](#autor)


</br>

## Overview
### Sobre
O quiz basicamente tem um array de objetos das questões e respostas que são exibidos de forma dinâmica na tela. Uma das propriedades tem como valor um array de objetos, e um desses objetos tem uma propriedade com valor booleano para identificar qual é a resposta correta, "isCorret: true/false". Avança para a próxima pergunta depois de selecionar/clicar a resposta, isso ativa a função handleAnswerButtonClick que faz a soma da pontuação e faz avançar para a próxima pergunta. No topo temos um contador do total de Perguntas, ao final é mostrado o resultado do usuário, ou seja, quantas respostas certas/erradas ele obteve juntamente com uma mensagem (Dependendo da quantidade de acertos). Essa última funcionalidade não tinha no quiz mas achei interessante adicionar. Foi utilizado o hook useState do React para o armazenamento de estado de algumas funcionalidades, e o design do quiz eu peguei na comunidade do figma, achei interessante e escolhi esse como base.

### Screenshots
<p align="center">
  <img 
    width="100%"
    src="public/preview/tela1.gif"
    alt="tela 1"
  />
</p>
<p align="center">
  <img 
    width="100%"
    src="public/preview/tela2.gif"
    alt="tela 2"
  />
</p>

### Links
- [Acesse o projeto finalizado, online ☁️](https://quizz-application.vercel.app/)

</br>

## My process
### Tecnologias
### ⚙️👨‍💻
Esse projeto foi desenvolvido com as seguintes tecnologias:

- Vite
- React
- Hooks (useState)
- Jsx
- Css
- Git e Github

### Continuar o desenvolvimento
Pretendo adicionar futuramente um Rank com o nome dos usuários, provavelmente vai ter uma forma de armazenamento (Banco de dados com certeza).

### Recursos úteis
- [How to Build a Quiz App Using React –with Tips and Starter Code](https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react/) - In this beginner React tutorial we're going to build a quiz app. We'll work with complex state objects, how to handle different state hooks, and render things based on state.
- [Conceitos básicos de flexbox CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) - Este artigo fornece um resumo das principais funcionalidades do flexbox.
- [Neubrutalist Quiz app - By Loidgi](https://www.figma.com/community/file/1145433435196546360/Neubrutalist-Quiz-app---By-Loidgi) - A short and simple example of a Neubrutalist Quiz app!

</br>

## Autor
*João Alison TI 👨🏽‍💻*

---

<strong>2023</strong>