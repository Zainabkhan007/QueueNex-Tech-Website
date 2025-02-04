import React, { useState } from "react";

// All Projects JSON Data
const projects = [
  {
    title: "Crypto Coin Website",
    category: "Web",
    img: "./project-images/crypto-coin.jpg",
    description:
      "A cryptocurrency website with AI-driven market analysis and secure transactions.",
  },
  {
    title: "Food Donation Website",
    category: "Web",
    img: "./project-images/food-donation.jpg",
    description:
      "A platform for individuals to donate food to those in need, making a positive impact.",
  },
  {
    title: "E-commerce Platform",
    category: "Web",
    img: "./project-images/e-commerce.avif",
    description:
      "An online marketplace for buying and selling products with a seamless user experience.",
  },
  {
    title: "Portfolio Website",
    category: "Web",
    img: "./project-images/portfolio.jpg",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
  },
  {
    title: "AI Health Care Software",
    category: "Aritificial Intelligence",
    img: "./project-images/health-care.jpg",
    description:
      "AI-powered software for healthcare professionals to streamline patient care.",
  },
  {
    title: "Billing Software",
    category: "Software",
    img: "./project-images/billing.avif",
    description:
      "A software for generating invoices, tracking payments, and managing clients.",
  },
  {
    title: "Pinterest Automation",
    category: "Software",
    img: "./project-images/pinterest.jpg",
    description:
      "A software to automate Pinterest tasks such as posting, commenting, and liking.",
  },
  {
    title: "Time Tracking Software",
    category: "Software",
    img: "./project-images/time-taking.jpg",
    description:
      "A software to track time spent on tasks, projects, and clients with reports.",
  },
];

const Projects = () => {
  const [loaded, setLoaded] = useState(true);
  return (
    <div className="py-16 bg-gradient-to-b from-black to-[#3B9A70] text-black overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-white text-4xl font-bold mb-6 capitalize px-4">
          Recent Projects
        </h2>

        {/* Infinite Scrolling Wrapper */}
        <div className="scrolling-wrapper">
          <div className="scrolling-content w-full">
            {/* Duplicating projects to create infinite effect */}
            {[...projects, ...projects].map((project, i) => (
              <div
                key={i}
                className="w-full lg:w-[30%] h-full mx-4 bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0"
              >
                {loaded && (
                  <div className="absolute top-0 left-0 w-full">
                    <span className="skeleton w-full h-full animate-pulse"></span>
                  </div>
                )}
                <img
                  src={project.img}
                  alt={project.title}
                  onLoad={() => setLoaded(false)}
                  className="relative w-full h-56 object-cover"
                />
                <p className="text-sm py-1 px-2 bg-[#ff9844] text-black inline-block -mt-20 text-wrap">
                  {project.category}
                </p>
                <div className="p-4">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-lg">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
