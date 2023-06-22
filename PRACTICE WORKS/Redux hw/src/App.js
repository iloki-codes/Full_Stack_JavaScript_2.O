import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import { increment, decrement, incrementByValue } from './features/counter/counterslice';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const [input, setInput] = useState("");

  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
  
  return (
    <div className=''>
      
      <div className=''>
        <input type='number' value={input} placeholder='Enter Any Integer' onChange={ (e) => {setInput(e.target.value)}} />

        <button onClick={ () => dispatch(incrementByValue(+input) ) }>Increment By Value</button>
      </div>

      <div className=''>

      <button onClick={ () => dispatch(increment ) }>Increment By One</button>

      <span>{count}</span>

      <button onClick={ () => dispatch(decrement ) }>Decrement By One</button>

      </div>
    </div>
  );
};

export default App;
