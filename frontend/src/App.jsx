import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Footers from './components/Footer'


export default function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={ <Home/> }/>
        <Route path="/products" element={ <Products/> }/>
        <Route path="/gallery" element={ <Gallery/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/sign-up" element={ <SignUp/> }/>
        <Route path="/sign-in" element={ <Signin/> }/>
        <Route path="/dashboard" element={ <Dashboard/> }/>

      </Routes>
      <Footers/>
    </BrowserRouter>
  )
}
