import React from 'react';
import Navbar from './NavBar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Navbar />
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img src="https://wallpaperaccess.com/full/466528.jpg" alt="Promoção 1" />
        </div>
        <div>
          <img src="https://wallpapers.com/images/featured/balenciaga-ueghj8g6m3033thu.jpg" alt="Promoção 2" />
        </div>
        <div>
          <img src="https://i.imgur.com/uAb7cqG.jpg" alt="Promoção 3" />
        </div>
      </Carousel>
    </header>
  );
};

export default Header;
