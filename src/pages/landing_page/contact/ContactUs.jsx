import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import axios from "axios";

const ContactUs = () => {
  const [inputs, setInputs] = useState({
    username: "",
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputs.username || !inputs.name || !inputs.email || !inputs.message) {
      toast.error("Please fill in all the fields");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(
        "https://fooddonationwebsite.pythonanywhere.com/website/contact/",
        inputs,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = res.data;
      if (data.error) {
        toast.error(data.error);
        setLoading(false);
        return;
      }

      toast.success(data.message);
      setInputs({
        username: "",
        name: "",
        email: "",
        message: "",
      });
      setLoading(false);
    } catch (error) {
      console.error("Error sending message:", error);
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex items-center justify-center bg-[#3B9A70] px-2 py-12 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-white shadow-lg rounded-2xl p-8 text-center"
      >
        <h1 className="text-3xl font-bold text-[#ff9844] mb-4">
          Contact QueueNex Tech
        </h1>
        <p className="text-black text-lg mx-auto lg:w-[60%]">
          Get in touch with <span className="font-semibold">QueueNex Tech</span>{" "}
          for any inquiries, project collaborations, or support. We are here to
          assist you 24/7 with fast responses and expert guidance.
        </p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 space-y-4 w-full lg:w-1/2 mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={inputs.name}
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            placeholder="Your fullname"
            className="w-full px-4 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#ff9844]"
          />
          <input
            type="text"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            placeholder="Your username"
            className="w-full px-4 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#ff9844]"
          />
          <input
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#ff9844]"
          />
          <textarea
            value={inputs.message}
            onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
            placeholder="Your Message"
            rows="8"
            cols="50"
            className="w-full px-4 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#ff9844]"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#ff9844] text-black px-6 py-3 rounded-lg shadow-md hover:bg-[#ff9844]"
          >
            {loading ? "Sending..." : " Send Message"}
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};
export default ContactUs;
