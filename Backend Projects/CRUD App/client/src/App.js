import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import Form from './components/Form';
import UserList from './components/UserList';

const baseUrl = "https://crud-production-384a.up.railway.app"; // backend app link

function App() {

  console.log(axios.isCancel('something'));
  // const axios = require('axios');

  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {

    const response = await axios.get(`${baseUrl}/getUser`);

    setUserData(response.data.users);
  };

  useEffect( () => {
    fetchUserData();
  }, [] );


  return (

    <div className="App">

    <Form fetchUserData={fetchUserData} baseUrl={baseUrl} />

      <UserList 
        userData={userData}
        setUserData={setUserData}
        fetchUserData={fetchUserData}
        baseUrl={baseUrl}
        />

    <Toaster />

    </div>
  );
}

export default App;
