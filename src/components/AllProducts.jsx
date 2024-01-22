import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import MiniFooter from './MiniFooter';
import NavBar from './NavBar';
import axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8001/products/getproducts`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching Products:", error);
        setError("Error fetching products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleProductClick = (productId) => {
    // Navigate to the Cake page with the product ID
    history.push(`/Cake/${productId}`);
  };
  

  return (
    <div>
      <NavBar />

      <div className='maincatalog1'>
        <div className='title'>Our Catalog</div>
        <div className='selectionband1'>
          <div className='cakes'>
            <Link to="/Type">
              <button className='cakes'>Cakes</button>
            </Link>
          </div>
          <div className='cupcakes'>
            <Link to="/Type">
              <button className='cupcakes'>Cupcakes</button>
            </Link>
          </div>
          <div className='cookies'>
            <Link to="/Type">
              <button className='cookies'>Cookies</button>
            </Link>
          </div>
        </div>

        <div className='catimgs'>
          {products.map((product) => (
            <div className='row1' key={product._id}>
              {/* Pass the product ID to handleProductClick */}
              <button onClick={() => handleProductClick(product._id)}>
                <img src={product.image} className='pimgsize' alt={product.name} />
              </button>
            </div>
          ))}
        </div>
      </div>
      <MiniFooter />
    </div>
  );
};

export default AllProducts;
