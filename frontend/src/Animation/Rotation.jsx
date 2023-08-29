import React from "react";
import { motion } from "framer-motion";

const RotatingBox = ({ imageSrc }) => {
  return (
    <motion.div
      className="box"
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: 0,
        loop: Infinity,
      }}
    >
      <img src={imageSrc} alt="Rotating Box" className=" rounded-lg" />
    </motion.div>
  );
};

export default RotatingBox;
