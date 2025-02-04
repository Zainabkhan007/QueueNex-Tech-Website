import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const sections = [
    {
      count: "10+",
      title: "Years Experience",
      animation: {
        initial: { x: -100 },
        animate: { x: 0 },
      },
    },
    {
      count: "500+",
      title: "Projects Completed",
      animation: {
        initial: { y: 100 },
        animate: { y: 0 },
      },
    },
    {
      count: "300+",
      title: "Satisfied Clients",
      animation: {
        initial: { x: 100 },
        animate: { x: 0 },
      },
    },
  ];

  return (
    <div
      className="relative w-full h-full lg:h-screen text-black lg:text-white flex flex-col items-center justify-center p-4 lg:px-12"
      id="about"
    >
      <video
        src="./about.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      />
      <div className="z-10 flex flex-col items-center justify-center text-black">
        <motion.h1
          className="text-4xl font-bold my-6"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-lg text-justify mb-10 lg:text-center lg:w-[90%]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          At QueueNex Tech, we are passionate about transforming ideas into
          exceptional digital experiences. Our team of skilled developers,
          designers, and project managers is dedicated to delivering
          high-quality software solutions that meet your unique business needs.
          With a focus on innovation, collaboration, and customer satisfaction,
          we strive to build long-term partnerships that drive success. We take
          pride in our ability to understand our clients' goals and challenges,
          and to develop tailored solutions that address their specific needs.
          Whether you need help with web development, mobile app development, AI
          and machine learning, or cybersecurity, we have the expertise and
          resources to deliver results.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="flex flex-col items-center text-white bg-[#3B9A70] p-6 rounded-lg shadow-lg"
              {...section.animation}
            >
              <h2 className="text-3xl font-bold mb-2">{section.count}</h2>
              <p className="text-lg">{section.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
