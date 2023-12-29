import React from 'react';
import style from '../style/Category.css'
import cake from '../Images/chocolate.jpg'

const Categories = () => {
  return (
    
      <div className='catblock'>

        <div className="firstdiv">
          
          <span className='collectiontitle'>Collections</span>
          <button className='catbutton'>Birthdays</button>
          <button className='catbutton'>Weddings</button>
          <button className='catbutton'>Christmas</button>
          <button className='catbutton'>Easter</button>
        </div>

      <div className='catimgs'>

<img src={cake} className='catimgsize'/>


      </div>
    </div>
    

  );
};

export default Categories;
