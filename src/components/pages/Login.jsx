import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      // Handle successful login, e.g., redirect to dashboard
      console.log("Login successful:", data);
    } else {
      // Handle login failure, e.g., display error message
      console.error("Login failed:", response.statusText);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="h-fit w-fit text-xl p-12 flex flex-col gap-10">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-full px-3 py-1 border-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="rounded-full px-3 py-1 border-2"
      />
      <p>don't have an account? <span className=" text-base text-fuchsia-500 cursor-pointer">Signup</span></p>
      <button type="submit" className="rounded-full px-3 py-1 bg-white border-2">Login</button>
    </form>
  );
}

export default Login;
