import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";

const Landing = () => {
  return (
    <div className="w-full h-full flex justify-between items-center flex-col gap-2">
      <Navbar />
      <Card />
    </div>
  );
};

export default Landing;
