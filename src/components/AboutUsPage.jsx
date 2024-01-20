import React from 'react'
import NavBar from './NavBar';
import Reviews from './Reviews';
import AboutUs from './AboutUs';
import MiniFooter from './MiniFooter';

const AboutUsPage = () => {
  return (
    <div>
 <NavBar/>
 <div style={{ marginTop: '80px' }}>
  <AboutUs/>
  <Reviews/>
<MiniFooter/>   </div>     </div>
  )
}

export default AboutUsPage