
import React, { useState, useEffect } from 'react';
import style3 from '../style/AllProducts.css';
import MiniFooter from './MiniFooter';
import NavBar from './NavBar';
import axios from 'axios';

const Cupcakes = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const categoryName = 'cupcakes'; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/getcategory/Cupcakes`);
        setProducts(response.data.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <div>
      <NavBar />

      <div className='maincatalog1'>
        <div className='title'>{categoryName} </div>

        <div className='catimgs'>
          {loading ? (
            <p>Loading...</p>
          ) : products.length > 0 ? (
            products.map((product) => (
              <div className='row1' key={product._id}>
                <img src={product.image} className='pimgsize' alt={product.name} />
              </div>
            ))
          ) : (
            <p>No products found for {categoryName} category.</p>
          )}
        </div>
      </div>
      <MiniFooter />
    </div>
  );
};

export default Cupcakes;
