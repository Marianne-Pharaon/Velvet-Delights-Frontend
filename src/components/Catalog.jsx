import React from 'react';
import style from '../style/Catalog.css'
import image1 from '../Images/cheescake1.jpg'
import image2 from '../Images/cheescake2.jpg'
import image3 from '../Images/cake3.jpg'
import image4 from '../Images/cake4.jpg'
import image5 from '../Images/cake5.jpg'
import image6 from '../Images/cake6.jpg'
import { Link } from 'react-router-dom';


const Catalog = () => {
  return (
    <div className='maincatalog'>

      <div className='title'>Our Catalog</div>
      <div className='selectionband'>
        <div className='cakes'><Link to="/AllProducts"><button className='cakes'>Cakes</button></Link></div>
        <div className='cupcakes'><Link to="/AllProducts"><button className='cupcakes'>Cupcakes</button></Link></div>
        <div className='cookies'><Link to="/AllProducts"><button className='cookies'>Cookies</button></Link></div>
      </div>
      

      <div className='catblockhome'>

        <div className="firstdivhome">
          <span className='font-Oooh+Baby mt-5 mb-6 text-4xl'>Filling<br/></span>
          <span className='text' >you can choose one of <br/>six toping for the cake</span>
          <ul className='ulc'>
            <li  className='font-outfit text-xl'>Snicker</li>
            <li  className='font-outfit text-xl'>Red Velvet</li>
            <li  className='font-outfit text-xl'>Oreo Cheese</li>
            <li  className='font-outfit text-xl'>Cherry bomb</li>
            <li  className='font-outfit text-xl'>Berry </li>
            <li  className='font-outfit text-xl mb-10'>Ice Cream</li>
          </ul>
          <Link to="/Customorder"><button className='orderbutton'>Order Now</button></Link>
        </div>

      <div className='catimgsh'>

<div className='row1h'>
<img src={image1} className='imgsizeh'/>
<img src={image2} className='imgsizeh'/>
<img src={image3} className='imgsizeh'/>

</div>
<div className='row2h'>
<img src={image4} className='imgsizeh'/>
<img src={image5} className='imgsizeh'/>
<img src={image6} className='imgsizeh'/>
</div>

      </div>
    </div>
    </div>

  );
};

export default Catalog;
