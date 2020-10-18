import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import FrontPage from './Components/FrontPage';
import SearchBox from './Components/SearchBox';
import PurposeForm from './Components/PurposeForm';
import RegistrationForm from './Components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBox />
      <FrontPage />
      <PurposeForm />
      <RegistrationForm />
    </div>
  );
}

export default App;
