import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/about';
import Navbar from './components/navbar/navbar';
import LoginPage from './pages/loginpage';
import { SignUp } from './pages/signup';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element = {<About/>}/>
        <Route path='login' element = {<LoginPage/>}/>
        <Route path='signup' element = {<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;