import React, { useState, useRef, useEffect } from 'react';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import './car3d.css'; // Your CSS file for styling
import { useTheme } from '@mui/material/styles';

const slidesDesktop = [
  '/images/Dashboard1.jpg',
  '/images/Dashboard2.jpg',
  '/images/Dashboard3.jpg',
  '/images/Dashboard4.jpg',
];

const slidesMobile = [
  '/images/DashboardM1.jpg',
  '/images/DashboardM2.jpg',
  '/images/DashboardM3.jpg',
  '/images/DashboardM4.jpg',
  '/images/DashboardM5.jpg',
  '/images/DashboardM6.jpg',
];
const Carousel3D = ({ autoRotateInterval = 3000 }) => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const images = isMobile ? slidesMobile : slidesDesktop;
  const transwidth = isMobile ? '185px' : '300px'; // Adjust width based on device type
  const carouselRef = useRef(null);

  const rotateCarousel = () => {
    if (carouselRef.current) {
      const angle = -currentIndex * (360 / images.length);
      carouselRef.current.style.transform = `rotateY(${angle}deg)`;
    }
  };

  useEffect(() => {
    rotateCarousel();
  }, [currentIndex]);

  // Auto-rotation effect
  useEffect(() => {
    let intervalId;
    if (!isHovered) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoRotateInterval);
    }

    // Cleanup the interval when the component unmounts or hover state changes
    return () => clearInterval(intervalId);
  }, [images.length, autoRotateInterval, isHovered]); // Add isHovered to dependencies

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
      <div className="carousel-3d" ref={carouselRef}>
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{
              transform: `rotateY(${index * (360 / images.length)}deg) translateZ(${transwidth})`,
            }}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel3D;