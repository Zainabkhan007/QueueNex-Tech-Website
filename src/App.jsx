import React from "react";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import LandingPageLayout from "./pages/landing_page/LandingPageLayout";
import { Footer, Navbar } from "./pages/landing_page/contant";
import NotFound from "./pages/not-found/NotFound";
import AdminLogin from "./admin/auth/AdminLogin";
import Dashboard from "./admin/dashboard/Dashboard";
import useAdminAuth from "./zustand/useAdminAuth";

const App = () => {
  const { adminAuth } = useAdminAuth();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="overflow-hidden">
      <motion.div
        className="progress-bar "
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "5px",
          backgroundColor: "#3B9A70",
          zIndex: 1000,
        }}
      />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPageLayout />} />
          <Route
            path="/admin/login"
            element={
              adminAuth ? <Navigate to="/admin/dashboard" /> : <AdminLogin />
            }
          />
          <Route
            path="/admin/dashboard"
            element={adminAuth ? <Dashboard /> : <Navigate to="/admin/login" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
