import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import logo from './mylogo.png';
import Pokeresult from './Pokeresult';


function App() {

    const [inputdata, setInputdata] = useState([]);
    const [inputbox, setInputbox] = useState("");

      
    const apidata = async (e) => {

      e.preventDefault();

      if(inputbox === "") {
        alert('Please Enter Pokemon Name in lowercase');
        return;
      }
      

      const {fetchData} = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputbox}`);
      // const name = inputbox.value;
      const orgdata = await fetchData.json();

      const data = orgdata;
      setInputdata(data);
      
        // pokedata(data.results);
        // await console.log(inputname);
        
    };


    useEffect( () => {
      fetch (`https://pokeapi.co/api/v2/pokemon/`) }, [inputbox] 
      )

  return (

    <>

      <header><span>@Loki Codes</span></header>
      
      <main>

        <div className='main'>
          
          <p className='head'>POKEMON APP</p>
          
          <form>

            <label for='input'>Please Enter Pokemon Name To Get Its Details</label>
            <br/>
            <input type='text' name='input' id='inputbox' placeholder='Type Name Here !' onChange={ (e) => setInputbox(e.target.value) }/>
            <br/>
            <p className='eg'>(Enter Pokemon names like pikachu, ditto, squirtle,etc...)</p>
            
            <button type='submit'  onClick={apidata}>Gotta Catch'em All...<i className='fa fa-search'></i></button>

          </form>

          <hr/>

        </div>

      </main>
      
      <img className='loki' src={logo} alt='loki'/>

      <footer><span>@Loki Codes</span></footer>
    
    <Pokeresult inputdata = {inputdata}/>

    </>
  
  );

}


export default App
