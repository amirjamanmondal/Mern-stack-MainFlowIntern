import React, { useState } from "react";

const Signup = () => {
  const [typeInput, setTypeInput] = useState(false);
  function handleInput(e) {
    e.preventDefault();
    setTypeInput(!typeInput);
  }
  return (
    <>
      <form className="h-fit w-fit py-14 px-14  flex flex-col justify-center items-center gap-8 bg-gray-400 rounded-md border-orange-300 border-2">
        <div className="text-2xl font-semibold text-blue-500">Signup</div>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-80 h-fit px-4 py-2 rounded-full outline-none"
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="w-80 h-fit px-4 py-2 rounded-full outline-none"
        />
        <div class=" w-80 h-fit rounded-full bg-white flex flex-row justify-center items-center p-2">
          <input
            type={typeInput===true?"text":"password"}
            id="myInput"
            placeholder="Search..."
            className="h-full w-full px-2 rounded-full outline-none "
          />

          {typeInput === true ? (
            <span
              class="material-symbols-outlined cursor-pointer"
              onClick={handleInput}
            >
              visibility_off
            </span>
          ) : (
            <span
              class="material-symbols-outlined cursor-pointer"
              onClick={handleInput}
            >
              visibility_off
            </span>
          )}
        </div>
        <input
          type="text"
          placeholder="Confirm your password"
          className="w-80 h-fit px-4 py-2 rounded-full outline-none"
        />
        <span className="text-base">
          already have an account?{" "}
          <span className="text-blue-700 cursor-pointer">Login</span>
        </span>
        <input
          type="submit"
          value="Signup"
          className="w-80 h-fit px-4 py-2 rounded-full bg-white"
        />
      </form>
    </>
  );
};

export default Signup;
