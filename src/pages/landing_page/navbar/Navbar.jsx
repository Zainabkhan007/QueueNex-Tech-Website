import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../../../components/Button";
import { CgClose } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navbarLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Why Choose Us",
      link: "#about",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Projects",
      link: "#projects",
    },
  ];
  return (
    <>
      {/* // desktop navbar */}
      <motion.div
        className={`hidden lg:px-12 sticky top-0 bg-[#3B9A70] text-white lg:justify-between lg:items-center lg:flex lg:h-20 py-2`}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        exit={{ opacity: 0, y: -100 }}
      >
        {/* logo span */}
        <h1 className="text-3xl font-bold">
          QueueNex <span className="text-[#ff9844]">Tech</span>
        </h1>
        {/* links */}
        <motion.div className="flex items-center gap-8 *:capitalize *:font-semibold">
          {navbarLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.link}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {link.name}
            </motion.a>
          ))}
          <Button
            name="Contact Us"
            link={"/contact"}
            style={
              "px-3 py-2 bg-[#ff9844] text-black font-semibold rounded-full hover:bg-black hover:text-[#ff9844] transition ease-in-out duration-300"
            }
          />
        </motion.div>
      </motion.div>
      {/* // mobile navbar */}
      <div
        className={`relative w-full px-4 py-4 bg-[#3B9A70] text-white  flex justify-between items-center lg:hidden`}
      >
        {/* mobile view logo span */}
        <h1 className="text-xl font-bold">
          QueueNex <span className="text-[#ff9844]">Tech</span>
        </h1>
        {/* mobile view navigation */}
        <motion.div
          className={`${
            open ? "flex h-screen" : "hidden"
          } absolute top-0 z-40 left-0 px-4 w-full h-screen bg-[#3B9A70] flex-col items-center justify-center *:capitalize *:font-semibold lg:flex`}
        >
          {/* mobile view close button */}
          <motion.span
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 800, damping: 17 }}
            className="block absolute top-6 right-6 bg-[#ff9844] text-black rounded-full p-2 z-40 lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <CgClose />
          </motion.span>
          {/* mobile view Navbar links */}
          {navbarLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.link}
              className="w-full h-12 flex items-center justify-center py-2 hover:bg-[#ff9844] text-black font-semibold bg-[#3B9A70] capitalize"
              onClick={() => setOpen(!open)}
              whileHover={{ scale: 1.2 }}
              initial={
                open ? { opacity: 0, x: -100 * index } : { opacity: 1, x: 0 }
              }
              animate={
                open ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 * index }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>
        {/* mobile view menu button */}
        <div className="flex items-center gap-4 ">
          <motion.span
            className="bg-[#ff9844] p-2 text-black"
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 800, damping: 17 }}
            onClick={() => setOpen(!open)}
          >
            <FiMenu className="text-2xl" />
          </motion.span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
