import React from 'react';
import style3 from '../style/AllProducts.css'
import MiniFooter from './MiniFooter';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';



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
          <div className='cakes'><Link to="/Type"><button className='cakes'>Cakes</button></Link></div>
          <div className='cupcakes'><Link to="/Type"><button className='cupcakes'>Cupcakes</button></Link></div>
          <div className='cookies'><Link to="/Type"><button className='cookies'>Cookies</button></Link></div>
          <div className='cakes'><button className='filter'>Filter</button></div>
        </div>



        <div className='catimgs'>

          <div className='row1'>

          <Link to="/Cake"> <img src={image1} className='pimgsize' /></Link>
          <Link to="/Cake"> <img src={image2} className='pimgsize' /></Link>
          <Link to="/Cake"> <img src={image3} className='pimgsize' /></Link>

          </div>

          <div className='row2'>
          <Link to="/Cake"> <img src={image4} className='pimgsize' /></Link>
          <Link to="/Cake"> <img src={image5} className='pimgsize' /></Link>
          <Link to="/Cake"> <img src={image6} className='pimgsize' /></Link>

           
          </div>

          <div className='row2'>
          <Link to="/Cake"> <img src={image4} className='pimgsize' /></Link>
          <Link to="/Cake"> <img src={image5} className='pimgsize' /></Link>
          <Link to="/Cake"> <img src={image6} className='pimgsize' /></Link>

           
          </div>
       

        </div>
      </div>
      <MiniFooter />
    </div>
  )
}

export default AllProducts

