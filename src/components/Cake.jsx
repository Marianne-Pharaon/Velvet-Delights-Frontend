import React from 'react'
import NavBar from './NavBar';
import MiniFooter from './MiniFooter';
import style from '../style/Cake.css'
import image4 from '../Images/cake4.jpg'





const Cake = () => {
  return (
    <div>
      <NavBar />


      <div className='pcontainer'>
        <div className='cakeimg1'><img src={image4} className="pimg" /></div>
        <div className='cakedesc'>
          <div className='cborder'>
            <div className='cakeName'>Cake Name</div>
            <div className='cakedesc'>
              A symphony of moist chocolate layers, velvety cream cheese frosting, and adorned with fresh raspberries. A decadent delight, perfect for celebrating moments of pure bliss. Elevate your taste experience with every heavenly bite.
            </div><br />
            <div className='cakedesc1'>size</div><br />
            <div className='cakedesc1'>Price</div>
            <button className='addtocart'>Add To Cart</button>

          </div>



        </div>






      </div>
      <MiniFooter/>
    </div>
  )
}

export default Cake