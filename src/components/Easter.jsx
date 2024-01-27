import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import style3 from '../style/AllProducts.css';
import MiniFooter from './MiniFooter';
import NavBar from './NavBar';
import axios from 'axios';

const Easter = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const categoryName = 'easter';
  const history = useHistory(); // Add useHistory hook for navigation

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/getcategory/easter`);
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
    // Use history.push for navigation to the Cake page with the productId
    history.push(`/Cake/${productId}`);
    localStorage.setItem("productId", productId);

  };

  return (
    <div>
      <NavBar />

      <div className='maincatalog1'>
        <div className='title'>{categoryName} Cakes</div>

        <div className='catimgs'>
          {loading ? (
            <p>Loading...</p>
          ) : products.length > 0 ? (
            products.map((product) => (
              <div className='row1' key={product._id} onClick={() => handleClick(product._id)}>
                {/* Use onClick to trigger the handleClick function */}
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

export default Easter;
