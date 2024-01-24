import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import MiniFooter from './MiniFooter';
import NavBar from './NavBar';
import axios from "axios";
import { Puff } from 'react-loader-spinner'; 

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8001/products/getproducts`
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Products:", error);
        setError("Error fetching products. Please try again later.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleProductClick = (productId) => {
    history.push(`/Cake/${productId}`);
    localStorage.setItem("productId", productId);
  };

  return (
    <div>
      <NavBar />

      <div className='maincatalog1'>
        <div className='title'>Our Catalog</div>
        <div className='selectionband1'>
          <div className='cakes'>
            
              <button className='cakes'>Cakes</button>
         
          </div>
          <div className='cupcakes'>
            <Link to="/Cupcakes">
              <button className='cupcakes'>Cupcakes</button>
            </Link>
          </div>
          <div className='cookies'>
            <Link to="/Cookies">
              <button className='cookies'>Cookies</button>
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="loader">
            <Puff color="#00BFFF" height={100} width={100} />
          </div>
        ) : (
          <div className='catimgs'>
            {products.map((product) => (
              <div className='row1' key={product._id}>
                <button onClick={() => handleProductClick(product._id)}>
                  <img src={product.image} className='pimgsize' alt={product.name || 'Product Image'} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <MiniFooter />
    </div>
  );
};

export default AllProducts;
