import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-white"
      >
        <h1 className="text-6xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-xl">Scroll down to explore more!!!</p>
      </motion.div>
    </section>
  );
};

export default Hero;
