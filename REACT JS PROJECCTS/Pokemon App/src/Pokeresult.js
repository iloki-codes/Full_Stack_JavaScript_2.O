import React from 'react';
import './App.css';
import pokee from './Pokemon-Logo.png';



function Pokeresult({inputdata}) {

    return (
       
        
        <div className='grid'>
            
            <img src={pokee} alt='poke'/>

        {    

        <div className='output'>
                    
            <div> Name={inputdata.name} </div>

            <div> Image= {inputdata.sprites.other.dream_world.front_default} </div>
    
            <div> Type = {inputdata.types[0].type.name}</div>
      
            <div> Height = {inputdata.height} </div>
        
            <div> Weight = {inputdata.weight} </div>
        
            <div> Ability = {inputdata.abilities[0].ability.name}</div>
        
            <div> Moves = {inputdata.moves[0].move.name}</div>

            <div> Stats = {inputdata.stats[0].stat.name} </div>

            <div> Species = {inputdata.species.name} </div>

            <div> Location = {inputdata.held_items.location_area_encounters} </div>

       </div>

        }

    </div>
    );
}

export default Pokeresult