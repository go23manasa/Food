import React from 'react'
import NavBar from "./components/NavBar/NavBar"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import Banner from "./components/Banner/Banner"
import AppStore from "./components/AppStore/AppStore"
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
import Toast from './components/Toast/Toast'

const App = () => {
  return (
    <>
      <NavBar />

      <div id="hero-section">
        <Hero />
      </div>

      <Services />

      <div id="about-section">
        <Banner />
      </div>

      <AppStore />

      <Testimonial />

      <Footer />

      <Toast />
    </>
  )
}

export default App
