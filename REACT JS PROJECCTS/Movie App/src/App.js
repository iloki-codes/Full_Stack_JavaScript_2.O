import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

import axios, { Axios } from 'axios';
import Movieinfo from './movieinfolist';

import logo from './mylogo.png';
import video from './Vid.mp4';


function App() {

const [apiData, setApiData] = useState([]);
const [input, setInput] = useState("");
const [loading, setLoading] = useState(false);

function lowerCase(string) {
  return string.toLowerCase();
}
const movienme = lowerCase(input);

const fetchData = async(event) => {

  event.preventDefault();

  if(input === "") {
    alert("Please enter a valid movie name");
    return;
  }

  try {
  const response = await axios.get(`http://www.omdbapi.com/?t=${movienme}&apikey=5b4006aa`);
  const data = await response.data;
  console.log(data);
  setApiData(data);

  setLoading(true);
  }
  catch(error) {
    console.log(error);
  }
  
}

// useEffect( () => { fetchData(event) } )

// if(loading) {
//   <h1>Page is Loading !!!</h1>
// }

  return (
    
    <>

      <video autoPlay muted loop className='video'>
        <source src={video} type='video/mp4' />
      </video>

    <div className="App">

      
      <div className='main'>

        <nav>
          <ul>
            <li><a href='https://www.linkedin.com/in/lokeshlokicodes/'>Linkedin Profile</a></li>
            <li><a href='http://www.omdbapi.com'>API Used</a></li>
            <li><a href='https://github.com/iloki-codes/Full_Stack_JavaScript_2.O/tree/main/REACT%20JS%20PROJECCTS/Movie%20App'>Github Code</a></li>
          </ul>
        </nav>

        <div className='body'>

          <div className='title'>
            <p className='heading'>Movieflix By Loki</p>
            <p className='sub'>Get every info related to any movie, you just<br/> have to type the movie name in the search box</p>
          </div>

        <form onSubmit={fetchData}>
          
          {/* <label for='title'></label> */}
          {/* <br/> */}
          
          <input className='search' id="title" type='text' value={input} placeholder='Please Enter Any Movie Name...' onChange= { (event) => setInput(event.target.value) }/>
          
          <button type='submit'>Get Movie Details <i className='fa fa-search'></i></button>
        
        </form>

      </div>

      <div className='result'>

      { loading && (

        <Movieinfo apiData={apiData} />

        ) 
      }

      </div>
  
      <footer>
        <img className='loki' src={logo} alt='loki'/>
        <span className='bar'>@Loki Codes</span>
      </footer>
    
    </div>

  </div>
  
  </>

  );

}

export default App;

// title
// year
// plot
// runtime
// director 
// writer
// actors
// language
// country
// poster
// 