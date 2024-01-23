import React from 'react'
// import image1 from '../Images/header.png';
import style from '../style/Hero.css'
import { Link } from 'react-router-dom';



const HeroSection = () => {
  return (
    <div className='w-screen '>
         <Link to="/AllProducts"><button className="button">
        Order Now
      </button></Link>
    </div>
  )
}

export default HeroSection