import React from 'react';
import './App.css';
import pokee from './Pokemon-Logo.png';



function Pokeresult({inputdata}) {

    return (
       
        
        <div className='grid'>
            
            <img className='one' src={pokee} /> 
            <img className='two' src={pokee} /> 

         { 

        <div className='output'>
                    
            <div><img src = {inputdata?.sprites?.other?.dream_world?.front_default} /> </div>

            <div> <h2>{inputdata?.name}</h2> </div>
    
            <div> Type = {inputdata?.types?.type?.name}</div>
      
            <div> Height = {inputdata?.height} </div>
        
            <div> Weight = {inputdata?.weight} </div>
        
            <div> Ability = {inputdata?.abilities?.ability?.name}</div>
        
            <div> Moves = {inputdata?.moves?.move?.name}</div>

            <div> Stats = {inputdata?.stats?.stat?.name} </div>

            <div> Species = {inputdata?.species?.name} </div>

            <div> Location = {inputdata?.held_items?.location_area_encounters} </div>

       </div>

        }

    </div>
    );

} ;

export default Pokeresult;