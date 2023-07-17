import React from 'react';
import './App.css';
import { useState } from 'react';
import logo from './mylogo.png';
import pokee from './Pokemon-Logo.png';
import axios from 'axios';


function App() {

  const [inputBox, setInputBox] = useState(""); 
  const [inputData, setInputData] = useState([]);
  const [loading, setLoading] = useState(false);

  function lowerCaseName(string) {
       return string.toLowerCase();
  }

  const pokename =  lowerCaseName(inputBox);
      
   const { sprites, name, order, height, weight, abilities, moves,stats, species, base_experience } = inputData;

    
  const apiData = async (e) => {

    e.preventDefault();
            
        if(inputBox === "") {
          alert('Please Enter Pokemon Name');
          return;
        }
            
         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
      
         const data = await response.data;
         console.log(data);

         setInputData(data);

         setLoading(true);
        //  setInputBox("");
      
   };


 return (

     <div className='app'>

       <header>
         <nav>
           <ul>
             <li><a href='https://www.linkedin.com/in/lokeshlokicodes/'>Linkedin</a></li>
             <li><a href='https://pokeapi.co'>API</a></li>
             <li><a href='https://github.com/iloki-codes/Full_Stack_JavaScript_2.O/tree/81a5c91590301a0e8c6eb42b8883ef4a3972b207/REACT%20JS%20PROJECCTS/Pokemon%20App'>Github</a></li>
           </ul>
         </nav>
       </header>
      
       <main>

         <div className='main'>
          
           <p className='head'>ԼƠƘƖ-ƤƠƘЄ-ƊЄҲ</p>
          
           <form onSubmit={apiData}>

             {/* <label htmlFor='poke'>Please Enter Pokemon Name To Get Its Details</label> */}

             <input type='text' name='poke' value={inputBox} id='inputBox' placeholder='Type Name Here !' onChange={ (e) => setInputBox(e.target.value) }/>
             <br/>
             <p className='eg'>( Please Enter Pokemon Names like pikachu, ditto, squirtle, etc...)</p>
            
             <button type='submit'>Gotta Catch'em All...<i className='fa fa-search'></i></button>

           </form>

         </div>

       </main>

       <div id='resultt'>

          { loading && (

          <div className='component'>
            
            <hr/>

            <div className='output'>

                <img className='one' src={pokee} /> 
                <img className='two' src={pokee} /> 
             
                <div className='info'>
                    <img id='img' src={sprites.other["official-artwork"].front_default} alt='icon'/>
                </div>
            
                <div className='info'>
                    <p id='name'>{name.toUpperCase()}</p>
                </div>
                
                <div className='info'>
                    <p className='infoo'>It is of order</p>
                    <p id='order'>{order}</p>
                </div>
            
                <div className='info'>
                    <p className='infoo'>Height : </p>
                    <p id='height'>{height}</p>
                </div>
            
                <div className='info'>
                    <p className='infoo'> Weight : </p>
                    <p id='weight'>{weight}</p>
                </div>
                
                <div className='info'>
                    <p className='infoo'>Ability : </p>
                    <p id='ability'> {abilities[1]["ability"].name.toUpperCase()}</p>
                </div>
            
                <div className='info'>
                    <p className='infoo'>Move :</p>
                    <p id='moves'>{moves[0]["move"].name.toUpperCase()}</p>
                </div>
                
                <div className='info'>
                    <p className='infoo'>HP : </p>
                    <p id='stats'>{stats[0].base_stat}</p>
                </div>
            
                <div className='info'>
                    <p className='infoo'>Species : </p>
                    <p id='species'>{species["name"].toUpperCase()}</p>
                </div>
            
                <div className='info'>
                    <p className='infoo'>Experience : </p>
                    <p id='exp'>{base_experience}</p>
                </div>

         </div>
    
        </div>

        ) 
      }  
      
      </div>

       <img className='loki' src={logo} alt='loki'/>

       <footer><span>@Loki Codes</span></footer>  

     </div>
  
   );

 }


 export default App;