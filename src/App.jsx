import React from 'react'
import NavBar from "./components/NavBar/NavBar"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import Banner from "./components/Banner/Banner"
import AppStore from "./components/AppStore/AppStore"
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App

