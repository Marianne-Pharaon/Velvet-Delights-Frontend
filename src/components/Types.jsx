// ParentComponent.jsx
import React, { useState, useEffect } from 'react';
import Categories from './Categories';
import style3 from '../style/AllProducts.css';
import MiniFooter from './MiniFooter';
import NavBar from './NavBar';
import axios from 'axios';

const ParentComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/categories/${selectedCategory.toLowerCase()}`);
        setCategoryData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error
      }
    };

    if (selectedCategory) {
      fetchData();
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.toLowerCase());
  };

  return (
    <div>
      <NavBar />

      <div className='maincatalog1'>
        <div className='title'>{selectedCategory ? selectedCategory : 'All Products'}</div>
        <div className='catimgs'>
          {categoryData.map((product) => (
            <div className='row1' key={product._id}>
              <img src={product.image} className='pimgsize' alt={product.name} />
            </div>
          ))}
        </div>
      </div>
      <MiniFooter />

      {/* Render the Categories component and pass the handleCategoryClick function as a prop */}
      <Categories onButtonClick={handleCategoryClick} />
    </div>
  );
};

export default ParentComponent;
