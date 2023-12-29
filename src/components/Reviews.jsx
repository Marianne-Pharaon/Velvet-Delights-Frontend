import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import logo from '../Images/logo.png';
import cheescake1 from '../Images/cheescake1.jpg';
import Chocolate from '../Images/chocolate.jpg';
import '../style/review.css'; // Assuming this path is correct

const Reviews = () => {
  const carouselItemStyle = {
    height: '400px',
  };

  const imageStyle = {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
  };

  return (
    <div style={carouselItemStyle}>
      <div className='revdiv'>
        <span className='reviewstitle'>Reviews</span>
      </div>

      <Carousel>
        <Carousel.Item>
          <div className='rev1'>
            <div className='revbox'>Delicious cake and amazing service.</div>
            <span className='revname'>Chef Patricia</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='rev1'>
            <div className='revbox'>Another great review here.</div>
            <span className='revname'>Another Reviewer</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='rev1'>
            <div className='revbox'>And one more positive review.</div>
            <span className='revname'>Another Chef</span>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Reviews;
