import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Button from "../../../components/Button";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "$50",
    features: [
      { text: "Project Consultation", available: true },
      { text: "Project Development", available: false },
      { text: "Code Review", available: false },
      { text: "AI Model Development", available: false },
      { text: "Cybersecurity Setup", available: false },
      { text: "Web/App Templates", available: true },
      { text: "Cloud Hosting", available: false },
      { text: "API Integration", available: false },
      { text: "Bug Fixes", available: false },
      { text: "Team Collaboration", available: true },
      { text: "Priority Support", available: false },
      { text: "Source Code Access", available: true },
      { text: "Deployment Help", available: false },
      { text: "Updates & Maintenance", available: false },
    ],
  },
  {
    name: "Medium",
    price: "$100",
    features: [
      { text: "Project Consultation", available: true },
      { text: "Project Development", available: true },
      { text: "Partial Code Review", available: true },
      { text: "Basic AI Models", available: true },
      { text: "Cybersecurity Basic", available: true },
      { text: "Custom Web/App", available: true },
      { text: "Shared Cloud Hosting", available: true },
      { text: "Limited API Access", available: true },
      { text: "Minor Bug Fixes", available: true },
      { text: "Team Collaboration", available: true },
      { text: "Priority Support", available: false },
      { text: "Partial Code Access", available: true },
      { text: "Limited Deployment", available: true },
      { text: "Basic Updates", available: true },
    ],
  },
  {
    name: "Advanced",
    price: "$150",
    features: [
      { text: "Dedicated Consultation", available: true },
      { text: "Full Project Support", available: true },
      { text: "Full Code Review", available: true },
      { text: "Advanced AI Models", available: true },
      { text: "Full Cybersecurity", available: true },
      { text: "Custom Web/App Dev", available: true },
      { text: "Scalable Cloud Infra", available: true },
      { text: "Unlimited API Access", available: true },
      { text: "Full Bug Fixing", available: true },
      { text: "Full Team Support", available: true },
      { text: "24/7 Support", available: true },
      { text: "Full Code Access", available: true },
      { text: "Full Deployment Help", available: true },
      { text: "Regular Updates", available: true },
    ],
  },
];

const MemeberShip = () => {
  return (
    <div className="container mx-auto py-16 flex flex-wrap justify-center gap-8  px-4 lg:px-12">
      <h1 className="w-full text-3xl font-bold mb-8 text-center text-white">
        Choose Your Plan
      </h1>
      {plans.map((plan) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-800 shadow-white rounded-lg shadow p-6 flex flex-col items-center gap-3 w-full md:w-1/3 lg:w-[28%]"
        >
          <h3 className="text-2xl font-bold text-center text-gray-300">
            {plan.name}
          </h3>
          <ul className="text-gray-600 text-start">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                {feature.available ? (
                  <FaCheckCircle className="text-[#3B9A70] mt-1" />
                ) : (
                  <FaTimesCircle className="text-red-500 mt-1" />
                )}
                <span className="text-[#3B9A70]">{feature.text}</span>
              </li>
            ))}
          </ul>
          <p className="text-4xl font-bold text-center text-gray-300">
            {plan.price}
          </p>
          <Button
            name={"Buy Now"}
            style="px-4 py-2 rounded-full text-white border border-[#3B9A70] hover:bg-[#ff9844] hover:text-white"
            link={"/contact"}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default MemeberShip;
