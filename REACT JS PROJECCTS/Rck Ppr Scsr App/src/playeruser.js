import React from "react";
import rock from "./rock.png";
import paper from "./paper.jpg";
import scissor from "./scissor.jpg";
import './App.css';

const Player = ({youroption}) => {

        <>    
            <div className='player'>

            <img className='option' src={ youroption === "rock" ? rock : youroption === "scissor" ? scissor : paper } alt='RPS' />

            </div>
        
        </>

  };

  export default Player;