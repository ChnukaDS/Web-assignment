import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/navbar/navbar';
import Login from './components/login/login';
import { SignUp } from './pages/signup';
import About from './pages/about';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element = {<Login/>}/>
        <Route path='sign' element = {<SignUp/>}/>
        <Route path='about' element = {<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;