import React, { useState, useEffect } from 'react';
import style3 from '../style/AllProducts.css';
import MiniFooter from './MiniFooter';
import NavBar from './NavBar';
import axios from 'axios';

const Easter = () => {
  const [products, setProducts] = useState([]);
  const categoryName = 'easter'; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/products/category/${categoryName}`);
        
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <div>
      <NavBar />

      <div className='maincatalog1'>
        <div className='title'>{categoryName} Cakes</div>

        <div className='catimgs'>
          {products.map((product) => (
            <div className='row1' key={product._id}>
              <img src={product.image} className='pimgsize' alt={product.name} />
            </div>
          ))}
        </div>
      </div>
      <MiniFooter />
    </div>
  );
};

export default Easter;
