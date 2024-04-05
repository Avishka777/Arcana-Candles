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
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreateProduct from './pages/CreateProduct'
import UpdateProduct from './pages/UpdateProduct'


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
        
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-product' element={<CreateProduct />} />
          <Route path='/update-product/:productId' element={<UpdateProduct />} />
        </Route>

      </Routes>
      <Footers/>
    </BrowserRouter>
  )
}
