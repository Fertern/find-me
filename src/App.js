import React from 'react';
import './dist/App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';
//another test


const App = () => {
  return (
    <div className='container'>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Profile />
      </div>
    </div>
  );
}


export default App;