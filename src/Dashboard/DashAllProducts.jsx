import React, { useEffect, useState } from 'react';
import '../Dashstyle/DashAllProducts.css';
import DashNav from './DashNav';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import bin from '../Images/bin.png';
import edit from '../Images/edit.png';
import '../Dashstyle/modal.css';
import Modal from './Modal'; 

const DashAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8001/products/getproducts');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const openModal = (productId) => {
    setIsModalOpen(true);
    setSelectedProductId(productId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };

  const handleDeleteProduct = async () => {
    try {
      // Send a request to delete the product by ID
      const response = await axios.delete(`http://localhost:8001/products/deleteproduct/${selectedProductId}`);

      if (response.status === 200) {
        toast.success('Product deleted successfully');
        // Optionally, you can refetch the products after deletion
        // to update the product list displayed on the page.
        const updatedProducts = await axios.get('http://localhost:8001/products/getproducts');
        setProducts(updatedProducts.data);
      } else {
        toast.error('Failed to delete product');
      }

      closeModal();
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Error deleting product. Please try again later.');
    }
  };

  return (
    <div className='prodash'>
      <DashNav/>
      <div className='title'>All Products </div>
      <div className='prodcardmain'>
        {products.map(product => (
          <div key={product._id} className='prodcard'>
            <img src={product.image} className='dashprodimg' alt={product.name} />
            <div className='proddiv2'>
              <span className='smalltitle'>{product.name}</span>
              <img src={edit} className='editmg' alt='Edit' onClick={() => openModal(product._id)} />
              <img src={bin} className='deletemg' alt='Delete' onClick={() => handleDeleteProduct(product._id)} />
            </div>
          </div>
        ))}
      </div>

      {/* Render the Modal component */}
      {isModalOpen && <Modal closeModal={closeModal} productId={selectedProductId} />}
      <ToastContainer />
    </div>
  );
};

export default DashAllProducts;
