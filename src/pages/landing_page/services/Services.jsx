import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPencilRuler,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  {
    icon: FaLaptopCode,
    title: "Web Development",
    description:
      "We build fast, scalable and secure web applications using modern technologies like React, Angular, Vue.js and Node.js.",
  },
  {
    icon: FaPencilRuler,
    title: "UI/UX Design",
    description:
      "Our team of experienced designers will work with you to create a visually appealing and user-friendly interface for your application.",
  },
  {
    icon: FaRobot,
    title: "AI & Machine Learning",
    description:
      "We develop AI and machine learning models that can help you automate tasks, gain insights and make predictions.",
  },
  {
    icon: FaShieldAlt,
    title: "Cyber Security",
    description:
      "We help you protect your application and data from cyber threats by performing security audits, penetration testing and providing recommendations for improvement.",
  },
];

const Services = () => {
  return (
    <div
      className="py-20 text-white pt-12 bg-gradient-to-l to-[#3B9A70] from-[#3B9A70]/30"
      id={"services"}
    >
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
          <p className="text-xl">
            Our team is dedicated to providing you with the best software
            development services.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              className="bg-black p-6 rounded-lg"
              initial={{ opacity: 0, y: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Icon className="text-6xl text-[#3B9A70] mb-4" />
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
