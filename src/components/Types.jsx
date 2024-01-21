import React, { useState, useEffect } from 'react';
import style3 from '../style/AllProducts.css';
import MiniFooter from './MiniFooter';
import NavBar from './NavBar';
import axios from "axios";

const Types = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    // Fetch data based on the selected category
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/categories/cat_Name`);
        setCategoryData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error
      }
    };

    fetchData();
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <NavBar />

      <div className='maincatalog1'>

        <div className='title'>{selectedCategory || "All Products"}</div>

        <div className='catimgs'>
          {/* Map over categoryData and render your products */}
          {categoryData.map((products) => (
            <div className='row1' key={products._id}>
              <img src={products.image} className='pimgsize' alt={products.name} />
            </div>
          ))}
        </div>
      </div>
      <MiniFooter />
    </div>
  );
};

export default Types;
