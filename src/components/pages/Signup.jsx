import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, gender, age }),
    });

    if (response.ok) {
      const data = await response.json();
      // Handle successful login, e.g., redirect to dashboard
      console.log("Signup successful:", data);
    } else {
      // Handle login failure, e.g., display error message
      console.error("Signup failed:", response.statusText);
    }
  };

  const [typeInput, setTypeInput] = useState(false);
  function handleInput(e) {
    e.preventDefault();
    setTypeInput(!typeInput);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="h-fit w-fit py-14 px-14  flex flex-col justify-center items-center gap-8 bg-gray-400 rounded-md border-orange-300 border-2">
        <div className="text-2xl font-semibold text-blue-500">Signup</div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-80 h-fit px-4 py-2 rounded-full outline-none"
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="w-80 h-fit px-4 py-2 rounded-full outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div class=" w-80 h-fit rounded-full bg-white flex flex-row justify-center items-center p-2">
          <input
            type={typeInput === true ? "text" : "password"}
            id="myInput"
            placeholder="Enter a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-full w-full px-2 rounded-full outline-none "
          />

          {typeInput === true ? (
            <span onClick={handleInput}>
              <VisibilityIcon />
            </span>
          ) : (
            <span onClick={handleInput}>
              <VisibilityOffIcon />
            </span>
          )}
        </div>
        <input
          type="text"
          placeholder="Enter Gender"
          className="w-80 h-fit px-4 py-2 rounded-full outline-none"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          type="number"
          name="age"
          id=""
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
        />
        <span className="text-base">
          already have an account?{" "}
          <span className="text-blue-700 cursor-pointer">Login</span>
        </span>
        <button
          type="submit"
          value="Signup"
          className="w-80 h-fit px-4 py-2 rounded-full bg-white"
        >Signup</button>
      </form>
    </>
  );
};

export default Signup;
