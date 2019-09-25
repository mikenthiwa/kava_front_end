import React from 'react';
import RegisterComponent from './components/auth/register';
import { ToastContainer } from 'react-toastify';
import './App.css';

function App() {
  return (
    <div className="homeContainer">
      <div className='header'>Welcome to the code challenge</div>
      <div className="formContainer">
        <RegisterComponent />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
