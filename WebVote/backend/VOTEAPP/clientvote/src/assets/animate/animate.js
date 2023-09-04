import React from "react";
import { motion } from "framer-motion";

const Animate = ({ children, animationType }) => {
  const animations = {
    fade: { opacity: 1, transition: { duration: 1 } },
    bounce: { y: [-10, 0], transition: { duration: 0.5, type: "spring", bounce: 0.5 } },
    shake: { x: [-10, 10, -10, 10, 0], transition: { duration: 0.5 } },
    faderight: {  x: 0, transition: { duration: 4 } },
    // Tambahkan animasi lain sesuai keinginan Anda
  };

  return (
    <motion.div
      variants={animations[animationType]}
      initial={{ opacity: 0, x: -10 }}
      animate={animationType}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
