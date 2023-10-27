import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
    <SideBar content={<MainPage/>}/>
    </>
  );
}

export default App;
