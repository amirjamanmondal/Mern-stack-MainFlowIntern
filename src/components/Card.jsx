import React from "react";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <div className="h-full w-full flex flex-row justify-center items-center text-fuchsia-500 gap-8 ">
      <div className="w-1/2 h-80 rounded-md flex flex-col justify-start items-start p-6 gap-8 bg-white border">
        <h1 className="text-2xl">Welcome to Software Solution</h1>
        <p className="text-lg font-sans ">
          We’re excited to have you here. Explore our products and services, or
          learn more about our mission. We’re committed to providing you with
          the best possible experience.
        </p>

        <button className="rounded-full bg-fuchsia-500 p-2 text-white border-lime-400 border-2">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Card;
