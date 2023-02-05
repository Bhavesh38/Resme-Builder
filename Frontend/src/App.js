import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/LoginPage/Login';
import Register from './components/LoginPage/Register';
import About from "./components/About/About";
import Reviews from "./components/Reviews/Reviews";
import Docs from "./components/Docs/Docs";
import NavigationBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Create from './components/Create/Create';
import UserProfile from './components/UserProfile/UserProfile';
import DesignIndex from './components/Designs/DesignIndex';


const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/create" element={<Create />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/design" element={<DesignIndex />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
