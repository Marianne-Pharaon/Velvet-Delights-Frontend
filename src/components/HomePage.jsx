import React from 'react'
import Catalog from './Catalog';
import HeroSection from './HeroSection';
import NavBar from './NavBar';
import Reviews from './Reviews';
import AboutUs from './AboutUs';
import Categories from './Categories';
import Contact from './Contact';

const HomePage = () => {
  return (
    <div>
 <NavBar/>
  <HeroSection/>
  <Catalog/>
  <AboutUs/>
  <Categories/>
  <Reviews/>
  <Contact/>
        </div>
  )
}

export default HomePage