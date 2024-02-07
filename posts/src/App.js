import React, { useState } from 'react';
import CommentList from './components/CommentList/CommentList';
import './App.css'

const App = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = () => { /*serve para criar um novo comentario */
    if (newComment.trim() !== '') {
      const currentTime = new Date().toLocaleTimeString();
      const comment = { author: 'Usuário', content: newComment, time: currentTime };
      setComments([comment, ...comments]);
      setNewComment(''); 
    }
  };

  return (
    <>
    <div className="app">
      <h1>Noticias!</h1>
      <div className="post">
      <h2>Relaxa, ChatGPT não vai roubar seu emprego de programador</h2>
        <p>Aproveitando o hype imenso que esse assunto tem levantado para trazer uma reflexão minha de que não,
          o ChatGPT ou whatever a IA que seja, não vai roubar seu emprego.
          Provavelmente já tenha visto, lido ou escutado diversas opiniões sobre esse mesmo assunto que se 
          espalhou em alta velocidade após a OpenIA ter lançado como uma bomba o seu produto ChatGPT.
          Consigo gastar um bom tempo conversando com o ChatGPT e perguntando coisas aleatórias. 
          Não somente isso! Tem sido bastante útil durante meu dia a dia de trabalho para perguntar 
          alguma dúvida sobre alguma tecnologia ou sobre algum erro que tenho enfrentado.
          Mas para ser honesto não consigo ver muito além disso. AIs ainda cometem muitos erros e 
          não conseguem ir muito além de algo pontual. Tem dificuldade, eu diria que até mesmo não são capazes, 
          de lidar com grandes requisitos de produto, análises complexas e grande esforços de codificação.
          “Mas, pô! É só treinar mais! É só aumentar o número de parâmetros…” — pode ser um bom questionamento. Será mesmo?
          Talvez a gente esteja esbarrando no maior desafio de fato somente agora, que é: a curva da “inteligência” da IA não 
          acompanha a curva de crescimento do número de parâmetros.

          Isso significa que, um modelo com 5 trilhões de parâmetros não necessariamente é 5 vezes mais inteligente do que um 
          treinado com 1 trilhão de parâmetros.</p>
      </div>
      {/* Botão para adicionar um novo comentário */}
      <div className="add-comment">
        <input className='input'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Comentar..."
          rows="3"
        ></input>
        <button onClick={handleCommentSubmit}>Adicionar Comentário</button>
      </div>
      {/* Componente CommentList para exibir os comentários */}
      <CommentList comments={comments} />
    </div>

    <div className="app">
    <h1>Noticias!</h1>
    <div className="post">
    <h2>Bê-á-bá do React</h2>
      <p>Bora começar pelo começo. React é uma biblioteca que nos ajuda a desenvolver interfaces de usuário web e nativas. 
        É um projeto open-source e a empresa por trás é a Meta (vulgo Facebook).
        A gente pode utilizar o React para construir interfaces utilizando TypeScript, JavaScript, 
        HTML e CSS. Inclusive, sem querer te confundir ainda mais, ele ainda pode ser também utilizado em outras 
        aplicações além da web, como a mobile por exemplo através do React Native.

        É atualmente a tecnologia mais utilizada para construção de interfaces, sendo amplamente aceita no desenvolvimento 
        de pequenos, médios e grandes projetos devido sua capacidade de permitir a criação de interfaces de forma rápida e escalável.</p>
    </div>
    {/* Botão para adicionar um novo comentário */}
    <div className="add-comment">
      <input className='input'
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Comentar..."
        rows="3"
      ></input>
      <button onClick={handleCommentSubmit}>Adicionar Comentário</button>
    </div>
    {/* Componente CommentList para exibir os comentários */}
    <CommentList comments={comments} />
    </div>
    </>
  );
};

export default App;
