import React from 'react';
import style3 from '../style/AllProducts.css'
import MiniFooter from './MiniFooter';
import NavBar from './NavBar';


import image1 from '../Images/cheescake1.jpg'
import image2 from '../Images/cheescake2.jpg'
import image3 from '../Images/cake3.jpg'
import image4 from '../Images/cake4.jpg'
import image5 from '../Images/cake5.jpg'
import image6 from '../Images/cake6.jpg'

const AllProducts = () => {
  return (
    <div>
      <NavBar />

      <div className='maincatalog1'>

        <div className='title'>Our Catalog</div>
        <div className='selectionband1'>
          <div className='cakes'><button className='cakes'>Cakes</button></div>
          <div className='cupcakes'><button className='cupcakes'>Cupcakes</button></div>
          <div className='cookies'><button className='cookies'>Cookies</button></div>
          <div className='filter'><button className='filter'>Filter</button></div>
        </div>



        <div className='catimgs'>

          <div className='row1'>
            <img src={image1} className='imgsize' />
            <img src={image2} className='imgsize' />
            <img src={image3} className='imgsize' />

          </div>
          <div className='row2'>
            <img src={image4} className='imgsize' />
            <img src={image5} className='imgsize' />
            <img src={image6} className='imgsize' />
          </div>
          <div className='row1'>
            <img src={image1} className='imgsize' />
            <img src={image2} className='imgsize' />
            <img src={image3} className='imgsize' />

          </div>

        </div>
      </div>
      <MiniFooter />
    </div>
  )
}

export default AllProducts

