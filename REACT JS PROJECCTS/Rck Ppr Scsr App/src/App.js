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
        document.getElementById('result').innerText = `Opponent Chose ${playersystem} And It's a tie, you need to try again`;
       }

      else if ((playeruser === "rock" && playersystem === "scissor") || (playeruser === "scissor" && playersystem === "paper") || (playeruser === "paper" && playersystem === "rock")) {
        document.getElementById('result').innerText = `Opponent Chose ${playersystem} And Yippie, You Have Won !!`;
       }

      else {
        document.getElementById('result').innerText = `Opponent Chose ${playersystem} And Computer Won ~ You Lose`;
       }
  
  }
  

  return (
    
    <>

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
