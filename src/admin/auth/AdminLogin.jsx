import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import axios from "axios";
import toast from "react-hot-toast";
import useAdminAuth from "../../zustand/useAdminAuth";

const AdminLogin = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { setAdminAuth } = useAdminAuth();

  const variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(inputs);
    try {
      const response = await axios.post("/api/website/admin_login/", inputs, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      if (data.error) {
        toast.error(data.error);
      }

      setAdminAuth(JSON.stringify(data));
      window.location.href = "/admin/dashboard";
      toast.success("Login successful");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="flex items-center justify-center h-screen"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.7 }}
    >
      <div className="w-full lg:w-1/2 bg-[#FAFAFA] text-[#181818] rounded-lg p-8 shadow-md">
        <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
        <form action="">
          <label htmlFor="username" className="block mb-2">
            username
          </label>
          <input
            type="username"
            id="username"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            className="block w-full px-4 py-2 mb-4 bg-transparent shadow-md rounded-lg focus:outline-none"
          />
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            className="block w-full px-4 py-2 mb-4 bg-transparent shadow-md rounded-lg focus:outline-none"
          />
          <span
            className="w-full flex items-center justify-center"
            onClick={(e) => {
              handleAdminLogin(e);
            }}
          >
            <Button
              name={loading ? "Loading..." : "Login"}
              style="w-1/4 rounded-lg py-2 px-4 bg-black text-white hover:bg-white hover:text-black hover:shadow hover:shadow-black transition-all"
            />
          </span>
        </form>
      </div>
    </motion.div>
  );
};

export default AdminLogin;
