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
  const {Id} = useParams();
  const history = useHistory();


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


  // const addToCart = async () => {
  //   try {
  //     await axios.post('http://localhost:8001/cart/addcarts', {
  //       user_id: localStorage.getItem("user_id"),
  //       products_id: productId,
        
  //       // price: product.price,
  //       // product_name: product.name,
  //     });

  //     toast.success('Product added to cart successfully');
  //     if (!localStorage.getItem("Ids")) {
  //       localStorage.setItem("Ids", Id);
  //       history.push("/cart");
  //     } else {
  //       if (localStorage.getItem("Ids").split(",").includes(Id)) {
  //         toast.error("Already in your cart");
  //         return;
  //       }
  //       let updatedId = localStorage.getItem("Ids") + `,${Id}`;
  //       localStorage.setItem("Ids", updatedId);
  //     }
  


      
  //   } catch (error) {
  //     console.error('Error adding product to cart:', error);
  //     toast.error('Error adding product to cart. Please try again later.');
  //   }
  // };


  const addToCart = async () => {
    try {
      const productInfo = {
        productId: productId,
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image,
        // Add other necessary product information
      };
  
      // Convert the product information to a string and save it in local storage
      localStorage.setItem("product_cake", JSON.stringify(productInfo));
  
      toast.success('Product added to cart successfully');
      
      history.push("/Checkout");
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
