import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Profile from './Profile.jsx'
import List from './List.jsx'
import Footer from './Footer.jsx'
import '../App.css'
import '../Body.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/list" element={<List />}/>
        {/* <Route path="/search" element={<Search />}/> */}
      </Routes>
      <Footer />
    </>
    )
}

export default App