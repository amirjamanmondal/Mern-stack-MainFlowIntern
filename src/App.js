import Landing from "./components/pages/Landing";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";

function App() {
  return (
    <div className="h-screen w-screen bg-[url('../public/bgimage.png')] bg-cover bg-center flex justify-center items-center ">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
