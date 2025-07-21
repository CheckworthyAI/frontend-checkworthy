import { useEffect, useState, useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';
import { motion } from 'framer-motion';

const slides = [
  '/images/Dashboard1.jpg',
  '/images/Dashboard2.jpg',
  '/images/Dashboard3.jpg',
  '/images/Dashboard4.jpg',
];

const CircleCarousel = ({ auto = true, intervalTime = 3000 }) => {
  const [rotation, setRotation] = useState(0);
  const intervalRef = useRef(null);
  const anglePerSlide = 360 / slides.length;

  const rotate = (dir = 1) => {
    setRotation((prev) => prev + dir * anglePerSlide);
  };

  const handleManual = (dir) => {
    clearInterval(intervalRef.current);
    rotate(dir);
    if (auto) {
      intervalRef.current = setInterval(() => rotate(1), intervalTime);
    }
  };

  useEffect(() => {
    if (auto) {
      intervalRef.current = setInterval(() => rotate(1), intervalTime);
    }
    return () => clearInterval(intervalRef.current);
  }, []);

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
        }}
      >
        {slides.map((image, i) => {
          const angle = i * anglePerSlide;
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
                top: '50%',
                left: '50%',
                transform: `rotateY(${angle}deg) translateZ(300px)`,
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              }}
            />
          );
        })}
      </motion.div>

      {/* Controls */}
      <IconButton
        onClick={() => handleManual(-1)}
        sx={{ position: 'absolute', top: '50%', left: 20, zIndex: 10, color: 'white' }}
      >
        <ArrowCircleLeft fontSize="large" />
      </IconButton>
      <IconButton
        onClick={() => handleManual(1)}
        sx={{ position: 'absolute', top: '50%', right: 20, zIndex: 10, color: 'white' }}
      >
        <ArrowCircleRight fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default CircleCarousel;
