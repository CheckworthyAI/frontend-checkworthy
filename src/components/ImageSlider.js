import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
import { motion } from 'framer-motion';

const slides = [
  '/images/Dashboard1.jpg',
  '/images/Dashboard2.jpg',
  '/images/Dashboard3.jpg',
  '/images/Dashboard4.jpg',
];

const PrismSlider = () => {
  const [rotation, setRotation] = useState(0);
  const anglePerSlide = 360 / slides.length;
  const slideWidth = 400; // Define slide width for easier calculation
  const slideHeight = 250; // Define slide height

  const rotate = (dir) => {
    setRotation((prev) => prev + dir * anglePerSlide);
  };

  return (
    <Box
      sx={{
        width: 600,
        height: 350,
        perspective: '1200px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <motion.div
        animate={{ rotateY: rotation }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
          display: 'flex', // Ensure this div also uses flexbox for internal centering
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {slides.map((image, i) => {
          const angle = i * anglePerSlide;
          const tz = (slideWidth / 2) / Math.tan(Math.PI / slides.length);
          return (
            <Box
              key={i}
              sx={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                width: '400px',
                height: '250px',
                position: 'absolute',
                top: 0,
                left: 0,
                transform: `rotateY(${angle}deg) translateZ(300px)`,
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              }}
            />
          );
        })}
      </motion.div>

      {/* Navigation Buttons */}
      <IconButton
        onClick={() => rotate(-1)}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 1,
          transform: 'translateY(-50%)',
          zIndex: 10,
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.4)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={() => rotate(1)}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 1,
          transform: 'translateY(-50%)',
          zIndex: 10,
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.4)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default PrismSlider;
