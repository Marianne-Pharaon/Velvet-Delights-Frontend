import React, { useState, useEffect, useMemo } from "react";
import { useHistory, Link } from "react-router-dom";
import style3 from '../style/AllProducts.css';
import MiniFooter from './MiniFooter';
import NavBar from './NavBar';
import axios from "axios";


const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [error, setError] = useState(null);

  // const filteredProducts = useMemo(() => {
  //   console.log("Filtering using Memo...");
  //   return products.filter((product) =>
  //     product.product_name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // }, [products, filter]);

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

  const handleClick = () => {
    history.push('/Categories');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  return (
    <div>
      <NavBar />

      <div className='maincatalog1'>

        <div className='title'>Our Catalog</div>
        <div className='selectionband1'>
          <div className='cakes'><Link to="/Type"><button className='cakes'>Cakes</button></Link></div>
          <div className='cupcakes'><Link to="/Type"><button className='cupcakes'>Cupcakes</button></Link></div>
          <div className='cookies'><Link to="/Type"><button className='cookies'>Cookies</button></Link></div>
        </div>

        <div className='catimgs'>

          {products.map((products) => (
            <div className='row1' key={products._id}>
              <Link to={`/products/${products._id}`}>
                <img src={products.image} className='pimgsize' alt={products.name} />
              </Link>
            </div>
          ))}

      
        </div>
      </div>
      <MiniFooter />
    </div>
  )
}

export default AllProducts;





    {/* <div className='row2'>
            <Link to="/Cake"><img src={image4} className='pimgsize' alt="Cake 4" /></Link>
            <Link to="/Cake"><img src={image5} className='pimgsize' alt="Cake 5" /></Link>
            <Link to="/Cake"><img src={image6} className='pimgsize' alt="Cake 6" /></Link>
          </div>

          <div className='row2'>
            <Link to="/Cake"><img src={image4} className='pimgsize' alt="Cake 4" /></Link>
            <Link to="/Cake"><img src={image5} className='pimgsize' alt="Cake 5" /></Link>
            <Link to="/Cake"><img src={image6} className='pimgsize' alt="Cake 6" /></Link>
          </div> */}