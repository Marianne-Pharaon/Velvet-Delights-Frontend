import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import style3 from '../style/AllProducts.css';
import MiniFooter from './MiniFooter';
import NavBar from './NavBar';
import axios from 'axios';

const Cookies = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const categoryName = 'cookies';
  const history = useHistory(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/getcategory/${categoryName}`);
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

  const handleClick = (productId) => {
    history.push(`/Cake/${productId}`);
    localStorage.setItem("productId", productId);

  };

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
              <div className='row1' key={product._id} onClick={() => handleClick(product._id)}>
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

export default Cookies;
