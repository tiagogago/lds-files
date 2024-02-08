import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Register from "../../views/register";
import Home from "../../views/home";
import Login from "../../views/login";

const HomeOld = () => {
  return (
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link>Register</Link>
      </li>
    </ul>
  );
};

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/definitions" element={<Definitions />} />
      <Route path="/about" element={<About />} />
      <Route path="/drive" element={<Drive />} />
      <Route path="/library" element={<Library />} />
      <Route path="/file-sent" element={<File Sent />} /> */}
    </Routes>
  );
};

export default Content;
