import React from "react";
import { motion } from "framer-motion";

const lightVariants = {
  initial: {
    opacity: 0.2,
    scale: 0.4,
  },
  animate: {
    opacity: 0.6,
    scale: 0.6,
    transition: {
      repeat: Infinity,
      duration: 1.5,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

function getRandomPosition() {
  return {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  };
}

function BackgroundLights({ quantity = 100, shouldAnimate = true }) {
  const lights = [];

  for (let i = 0; i < quantity; i++) {
    const position = getRandomPosition();

    lights.push(
      <motion.div
        key={i}
        className="bg-white absolute"
        style={{
          width: "5px",
          height: "5px",
          transform: "rotate(45deg)",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
          ...position,
        }}
        initial="initial"
        animate="animate"
        variants={lightVariants}
      />
    );
  }

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden"
      style={{ pointerEvents: "none" }}
    >
      {lights}
    </div>
  );
}

export default BackgroundLights;
