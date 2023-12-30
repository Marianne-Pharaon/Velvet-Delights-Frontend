import React from 'react';
import style from '../style/Catalog.css'
import image1 from '../Images/cheescake1.jpg'
import image2 from '../Images/cheescake2.jpg'
import image3 from '../Images/cake3.jpg'
import image4 from '../Images/cake4.jpg'
import image5 from '../Images/cake5.jpg'
import image6 from '../Images/cake6.jpg'

const Catalog = () => {
  return (
    <div className='maincatalog'>

      <div className='title'>Our Catalog</div>
      <div className='selectionband'>
        <div className='cakes'><button className='cakes'>Cakes</button></div>
        <div className='cupcakes'><button className='cupcakes'>Cupcakes</button></div>
        <div className='cookies'><button className='cookies'>Cookies</button></div>
      </div>
      

      <div className='catblock'>

        <div className="firstdiv">
          <span className='font-Oooh+Baby mt-5 mb-6 text-3xl'>Filling<br/></span>
          <span className='text' >you can choose one of <br/>six toping for the cake</span>
          <ul className='ulc'>
            <li  className='font-outfit text-base'>Snicker</li>
            <li  className='font-outfit text-base'>Red Velvet</li>
            <li  className='font-outfit text-base'>oreo cheese</li>
            <li  className='font-outfit text-base'>cherry bomb</li>
            <li  className='font-outfit text-base'>Berry </li>
            <li  className='font-outfit text-base mb-10'>Bounty</li>
          </ul>
          <button className='orderbutton'>Order Now</button>
        </div>

      <div className='catimgs'>

<div className='row1'>
<img src={image1} className='imgsize'/>
<img src={image2} className='imgsize'/>
<img src={image3} className='imgsize'/>

</div>
<div className='row2'>
<img src={image4} className='imgsize'/>
<img src={image5} className='imgsize'/>
<img src={image6} className='imgsize'/>
</div>

      </div>
    </div>
    </div>

  );
};

export default Catalog;
