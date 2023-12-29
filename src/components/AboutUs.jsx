import React from 'react'
import style from '../style/AboutUs.css'
import logo from '../Images/logo.png'
import line from '../Images/line.png'


const AboutUs = () => {
  return (
    <div className='aboutdiv'>
        <div className='Aboutitle'>About Us </div>
        <div className='aboutext'>We specialize in selling cakes, cupcakes and cookies to order. But we also have two cozy cafes where you can try some of the best cackes in the city and have a wonderful time with your family and ftriends.<br/>
you can order individual cakes according to your design for any holiday.</div>
<img src={line} className='lineimg'/>

<img src={logo} className='logoimg'/>
    </div>
  )
}

export default AboutUs