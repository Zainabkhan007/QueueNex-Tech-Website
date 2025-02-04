import React from "react";
import { IoWarning } from "react-icons/io5";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-5 items-center justify-center">
      <span>
        <IoWarning className="text-9xl" />
      </span>
      <h1 className="text-4xl">404 Not Found</h1>
      <Link
        to={"/"}
        className="text-2xl py-2 px-4 rounded-e-xl bg-blue-900 hover:bg-black hover:shadow hover:shadow-white transition-all"
      >
        Home
      </Link>
    </div>
  );
};

export default NotFound;
