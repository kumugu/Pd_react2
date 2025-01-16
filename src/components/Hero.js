import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-gradient-to-br from-[#465866] via-[#6F4E37] to-[#5C4033] flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-7xl font-mono text-[#f5e6d3]">Hello_World() {`{`}</h1>
        <p className="mt-4 text-xl text-[#d4c3b3]">I build something special</p>
        <p className="mt-2 text-lg text-[#f5e6d3] font-mono">{`}`}</p>
      </motion.div>
    </section>
  );
};

export default Hero;