import React from "react";


const Navbar = () => {
  return (
    <div className="h-fit px-12 py-4 w-full text-white flex flex-row gap-2">
        <div className="w-1/2 h-fit flex justify-start items-center text-orange-400 text-2xl font-semibold ">Amir Jaman Mondal</div>
      <ul className="w-1/2 h-full flex justify-between items-center">
        <li className="">Home</li>
        <li className="">About</li>
        <li className="bg-red-600 size-fit p-2 rounded-md">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;