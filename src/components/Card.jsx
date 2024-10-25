import React from "react";

const Card = () => {
  return (
    <div className="h-full w-full flex flex-row justify-center items-center text-orange-400 gap-8 ">
      <div className="w-1/2 h-80 rounded-md flex flex-col justify-start items-center p-6 gap-8">
        <h1 className="text-2xl">Welcome to Software Solution</h1>
        <p className="text-lg font-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quam optio animi omnis sequi tempore reprehenderit pariatur esse
          quisquam? Eligendi cupiditate numquam dicta fuga, esse ipsam nulla
          eaque consequatur nemo ipsum repellat illum aperiam, vitae adipisci,
          pariatur dolorem eius voluptatibus.
        </p>
        <div className="w-full h-fit flex justify-end gap-3">
          <button className="h-12 w-20 p-3 bg-green-600 text-white rounded-md hover:bg-white hover:text-green-600">
            Sign Up
          </button>
          <button className="h-12 w-20 p-3 bg-red-600 text-white rounded-md hover:bg-white hover:text-red-600">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
