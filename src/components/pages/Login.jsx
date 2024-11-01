import React from "react";

const Login = () => {
  return (
    <>
      <form className="h-fit w-fit flex flex-col justify-center items-center gap-10 rounded-md bg-gray-400 px-12 py-12">
        <label className="text-2xl font-semibold text-white font-mono">
          Login
        </label>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Enter Email id"
          className="w-80 h-fit px-4 py-2 rounded-full"
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Enter the password"
          className="w-80 h-fit px-4 py-2 rounded-full"
        />
        <p className="text-white">
          don't have an account? <span className="text-blue-600">signup</span>
        </p>
        <input
          type="submit"
          value="Login"
          id="login"
          className="w-80 h-fit px-4 py-2 rounded-full bg-white"
        />

        <hr className=" w-1/2" />

        <div className="w-full h-fit text-xl text-red-500 font-bold flex justify-around items-center">
          <button className="h-10 w-10 rounded-full bg-blue-300 border-2">
          G
          </button>
          <button className="h-10 w-10 rounded-full bg-blue-300 border-2">git</button>
          <button className="h-10 w-10 rounded-full bg-blue-300 border-2">Ld</button>
        </div>
      </form>
    </>
  );
};

export default Login;
