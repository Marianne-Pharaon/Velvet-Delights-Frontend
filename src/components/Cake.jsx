import React from 'react'
import NavBar from './NavBar';
import MiniFooter from './MiniFooter';
import style from '../style/Cake.css'
import image4 from '../Images/cake4.jpg'





const Cake = ({ name, price, description, image, sizes_price, sizes_size }) => {
  return (
    <div>
      <NavBar />


      <div className='pcontainer'>
        <div className='cakeimg1'><img src={image} className="pimg" /></div>
        <div className='cakedesc'>
          <div className='cborder'>
            <div className='cakeName'>{name}</div>
            <div className='cakedesc'>
              {description}            </div><br />
            <div className='cakedesc1'>{sizes_size}{sizes_price}</div> <br />
            <div className='cakedesc1'>{price}</div>
            <button className='addtocart'>Add To Cart</button>

          </div>



        </div>






      </div>
      <MiniFooter />
    </div>
  )
}

export default Cake