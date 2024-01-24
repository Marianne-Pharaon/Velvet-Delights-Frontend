import React, { useEffect, useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';
import MiniFooter from './MiniFooter';
import style from '../style/Cake.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from 'bootstrap';






const Cake = () => {
  // Retrieve the product ID from the URL
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const history = useHistory();
  console.log(productId)


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/products/getproducts/${productId}`);
        console.log('Response data:', response.data);

        setProduct(response.data.data);
        console.log(product);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Error fetching product. Please try again later.');
      }
    };


    fetchProduct();
  }, [productId]);


  


  const addToCart = async () => {
    try {
      const productInfo = {
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image,
      };


      localStorage.setItem("product_cake", JSON.stringify(productInfo));
  
      toast.success('Product added to cart successfully');
      
    } catch (error) {
      console.error('Error adding product to cart:', error);
      toast.error('Error adding product to cart. Please try again later.');
    }
  };
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
            <div className='cakedesc1'><span >Price:  </span>{product.price}$</div>
            <button className='addtocart' onClick={addToCart}>Add To Cart</button>
          </div>
        </div>
        <ToastContainer/>
      </div>
      <MiniFooter />
    </div>
  );
};

export default Cake;
