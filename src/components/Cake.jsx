import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';
import MiniFooter from './MiniFooter';





const Cake = () => {
  // Retrieve the product ID from the URL
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/products/getproducts/${productId}`);
        console.log('Response data:', response.data);
        
        if (response.data.data && response.data.data.length > 0) {
          const { _id, image, name, description, price } = response.data.data[0];
          console.log('Product data:', { _id, image, name, description, price });
          setProduct({ _id, image, name, description, price });
        } else {
          setError('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Error fetching product. Please try again later.');
      }
    };


    fetchProduct();
  }, [productId]);

  return (
    <div>
      <NavBar />

      <div className='pcontainer'>
        <div className='cakeimg1'>
          <img src={product.image} className="pimg" alt={product.name} />
        </div>
        <div className='cakedesc'>
          <div className='cborder'>
            <div className='cakeName'>{product.name}</div>
            <div className='cakedesc'>{product.description}</div><br />
            <div className='cakedesc1'>{product.price}</div>
            <button className='addtocart'>Add To Cart</button>
          </div>
        </div>
      </div>
      <MiniFooter />
    </div>
  );
};

export default Cake;
