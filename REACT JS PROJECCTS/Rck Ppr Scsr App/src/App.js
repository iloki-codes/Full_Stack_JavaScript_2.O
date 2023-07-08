import React from "react";
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import './App.css';
import rock from "./rock.png";
import paper from "./paper.jpg";
import scissor from "./scissor.jpg";
import logo from './mylogo.png';




function App() {

  let playeruser = "";

  const [options, setPlayersystem] = useState(["rock", "paper", "scissor"]); 

  const chooseWinner = (option) => {

      playeruser = option;

      const startgame = Math.floor(Math.random() * options.length);
      const playersystem = options[startgame];

      setPlayersystem(options);                             // Actual logic to select winner of the game
    

      if ( playeruser === playersystem) {
        document.getElementById('result').innerText = `Computer : ${playersystem} And Result : Tie`;
       }

      else if ((playeruser === "rock" && playersystem === "scissor") || (playeruser === "scissor" && playersystem === "paper") || (playeruser === "paper" && playersystem === "rock")) {
        document.getElementById('result').innerText = `Computer : ${playersystem} And Result : You Won`;
       }

      else {
        document.getElementById('result').innerText = `Computer : ${playersystem} And Result : Computer Won`;
       }
  
  }
  

  return (
    
    <>

      <nav>
        <ul>
          <li><a href="https://www.linkedin.com/in/lokeshlokicodes/">My Linkedin</a></li>
          <li><a href="https://github.com/iloki-codes/Full_Stack_JavaScript_2.O/tree/030167732f1d516c59e6aedba8d4ab9a1f3f1b4b/REACT%20JS%20PROJECCTS/Rck%20Ppr%20Scsr%20App">Github Code</a></li>
        </ul>
      </nav>

      <p className='heading'>

        <span>Rock Paper Scissor</span><br/>
        <span>Game</span>      
      
      </p>

      <div className='btns'>

        <button onClick={ () => chooseWinner("rock") } ><img src={rock} alt="rck"/>ROCK</button>
        <button onClick={ () => chooseWinner("paper") } ><img src={paper} alt="ppr"/>PAPER</button>
        <button onClick={ () => chooseWinner("scissor") } ><img src={scissor} alt="sci"/>SCISSOR</button>

        {/* <span className="computer"></span> */}
      </div>

      <p id='result'></p>

      <footer>
        <img className='loki' src={logo} alt='loki'/>
      </footer>
    
    </>
  
  );

}

  export default App
