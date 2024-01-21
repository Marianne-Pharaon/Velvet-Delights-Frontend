import React from 'react';
import style from '../style/Category.css'
import cake from '../Images/chocolate.jpg'
import { Link } from 'react-router-dom';


const Categories = () => {
  return (
    
      <div className='catblock11'>
<div className='categ1'>
        <div className="firstdiv21">
          
          <span className='collectiontitle1'>Collections</span>
          <Link to="/Birthdays"><button className='catbutton1'>Birthdays</button></Link>
          <Link to="/Weddings"><button className='catbutton1'>Weddings</button></Link>
          <Link to="/Christmas"><button className='catbutton1'>Christmas</button></Link>
          <Link to="/Easter"><button className='catbutton1'>Easter</button></Link>
        </div>
        </div>
      <div className='catimgs1'>

<img src={cake} className='catimgsize1'/>


      </div>
    </div>
    

  );
};

export default Categories;
