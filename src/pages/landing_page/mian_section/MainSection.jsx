import React from "react";
import { motion } from "framer-motion";

const MainSection = () => {
  return (
    <div className="relative w-full h-[80vh] text-white">
      <div className="absolute w-full h-full bg-cover bg-center">
        <video
          src="./main.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-0 px-4 w-full h-full flex flex-col justify-center gap-4 bg-gradient-to-l to-[#3B9A70] from-black/30 lg:bg-gradient-to-l lg:to-[#3B9A70] lg:from-transparent lg:px-12">
        <motion.h1
          className="text-3xl font-bold capitalize text-center lg:text-start lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Unleash Your Digital Potential with{" "}
          <span className="text-[#ff9844] text-4xl">QueueNex Tech</span>
        </motion.h1>
        <motion.p
          className="text-lg capitalize w-full text-justify lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          We create innovative software solutions that drive business growth.
          Our team of experts works closely with you to understand your needs
          and goals, and develops a tailored solution that meets your
          requirements. We deliver high-quality products and services that
          exceed your expectations and provide long-term value for your
          business.
        </motion.p>
      </div>
    </div>
  );
};

export default MainSection;
