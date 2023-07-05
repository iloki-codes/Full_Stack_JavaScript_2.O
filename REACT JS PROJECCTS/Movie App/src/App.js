import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import logo from './mylogo.png';
import axios, { Axios } from 'axios';
import Movieinfo from './movieinfolist';


function App() {

const [data, setData] = useState([]);
const [input, setInput] = useState("");

const apidata = async(event) => {

  event.preventDefault();

  if(!input.value) {
    alert("Please enter a valid movie name");
    return;
  }

  const {fetchData} = await Axios.get(`http://www.omdbapi.com/?i=${input}&apikey=5b4006aa`);
  console.log("Response", fetchData);

  const data = fetchData.Input;
  // const orgData = await fetchData.json();
  
  setData(data);
  // console.log(data);
  
}

useEffect( () => { fetch(`http://www.omdbapi.com/?i=&apikey=5b4006aa`) }, [input] )

  return (
    
    <div className="App">
      
      <nav>
        <ul>
          <li><a href=''>Linkedin</a></li>
          <li><a href=''>IMDB</a></li>
          <li><a href=''>Github</a></li>
        </ul>
      </nav>

      <main>
        <p className='heading'>Movieflix By <br/>Loki</p>
        <p className='sub'>Get every info related to any movie, you just have to type the movie name in the search box</p>

        <form>
          <label for='title'>Please Enter The Movie Name</label>
          <br/>
          <input className='search' id="title" type='text' value={input} placeholder='related info coming...' onChange= { (event) => setInput(event.target.value) }/>
          
          <button type='submit' onClick={apidata}>Get Movie Details <i className='fa fa-search'></i></button>
        </form>

      </main>

      <div className='result'>

        <Movieinfo input={input} />

      </div>
  
      <footer>
        <img className='loki' src={logo} alt='loki'/>
        <span>@Loki Codes</span>
        <br/>
        <a href=''>Github Code Link</a>
      </footer>
    
    </div>
  
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
// ratings
// awards

// http://img.omdbapi.com/?apikey=[yourkey]&