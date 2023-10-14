import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LoadingAnimation.css';

const LoadingAnimation = () => {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const dotVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
  };
  const colors = ['#FF9F1C', '#011627', '#E71D36'];

  useEffect(() => {
    const startAnimation = async () => {
      while (shouldAnimate) {
        for (let i = 0; i < 3; i++) {
          await new Promise((resolve) => setTimeout(resolve, 500)); // Adjust the duration as needed
          await new Promise((resolve) => setTimeout(resolve, 200)); // Adjust the gap between dots as needed
        }
      }
    };

    startAnimation();
  }, [shouldAnimate]);

  useEffect(() => {
    // Start the animation after the component has mounted
    setShouldAnimate(true);

    return () => {
      // Stop the animation when the component unmounts
      setShouldAnimate(false);
    };
  }, []);

  return (
    <div className="loading-container">
      {colors.map((color, index) => (
        <motion.div
          key={index}
          className="loading-dot"
          style={{ backgroundColor: color }}
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: index * 0.2, // Adjust the delay between dots as needed
          }}
        />
      ))}
    </div>
  );
};

export default LoadingAnimation;
