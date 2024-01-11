import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import logo from '../Images/logo.png';
import cheescake1 from '../Images/cheescake1.jpg';
import Chocolate from '../Images/chocolate.jpg';
import '../style/review.css'; 

const Reviews = () => {
  const componentStyle = {
    backgroundColor: 'rgb(248, 248, 248)',
  };

  const carouselItemStyle = {
    height: '500px',
  };

 

  return (
    <div style={{ ...componentStyle, ...carouselItemStyle }}>
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
            <div className='revbox'>I recently had the pleasure of visiting Velvet Delights Bakery, and I must say, it was a delightful experience from start to finish..</div>
            <span className='revname'>Jhony Parker</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='rev1'>
            <div className='revbox'>I tried their signature Red Velvet cake. The cake was moist, perfectly balanced in sweetness, and the cream cheese frosting was heavenly. Each bite  left me craving more.</div>
            <span className='revname'>Tracy Miller</span>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Reviews;
