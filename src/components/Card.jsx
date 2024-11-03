import React from "react";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <div className="h-full w-full flex flex-row justify-center items-center text-orange-400 gap-8 ">
      <div className="w-1/2 h-80 rounded-md flex flex-col justify-start items-center p-6 gap-8">
        <h1 className="text-2xl">Welcome to Software Solution</h1>
        <p className="text-lg font-sans">
          We’re excited to have you here. Explore our
          products and services, or learn more about our mission. We’re
          committed to providing you with the best possible experience.
        </p>
        <div className="w-full h-fit flex justify-end gap-3">
          <button className="h-12 w-20 bg-green-600 text-white rounded-md hover:bg-white hover:text-green-600 flex justify-center items-center">
            Sign Up
          </button>
          <NavLink
            to="/login"
            className="h-12 w-20 bg-red-600 text-white rounded-md hover:bg-white hover:text-red-600 flex justify-center items-center"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
