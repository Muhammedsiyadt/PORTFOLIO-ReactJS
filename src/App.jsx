import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hearo from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'

const App = () => {
  return (
    <div>
      <Navbar/> 
      <Hearo/> 
      <About/>
      <Services/> 
      <MyWork/> 
    </div>
  )
}

export default App
