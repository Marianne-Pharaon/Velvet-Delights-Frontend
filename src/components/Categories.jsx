import React from 'react';
import style from '../style/Category.css'
import cake from '../Images/chocolate.jpg'
import { Link } from 'react-router-dom';


const Categories = () => {
  return (
    
      <div className='catblock1'>
<div className='categ'>
        <div className="firstdiv2">
          
          <span className='collectiontitle'>Collections</span>
          <Link to="/Birthdays"><button className='catbutton'>Birthdays</button></Link>
          <Link to="/Weddings"><button className='catbutton'>Weddings</button></Link>
          <Link to="/Christmas"><button className='catbutton'>Christmas</button></Link>
          <Link to="/Easter"><button className='catbutton'>Easter</button></Link>
        </div>
        </div>
      <div className='catimgs'>

<img src={cake} className='catimgsize'/>


      </div>
    </div>
    

  );
};

export default Categories;
