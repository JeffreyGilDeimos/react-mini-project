import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react'
import Home from './components/Home';
import Menu1 from './components/Menu1';
import Footer from './components/Footer';
import About from './components/About';
import Header from './components/Header';
import Menu2 from './components/Menu2';
import Menu3 from './components/Menu3';
import Menu4 from './components/Menu4';

export default function App() {
  return (    
    
    <BrowserRouter>   
     <Header />   
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Menu1' element={<Menu1 />} />
      <Route path='/Menu2' element={<Menu2 />} />
      <Route path='/Menu3' element={<Menu3 />} />
      <Route path='/Menu4' element={<Menu4 />} />
      <Route path='/About' element={<About />} />
      </Routes>     
      <Footer />
 </BrowserRouter>
  )
}
