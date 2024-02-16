import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Register from "../../views/register";
import Login from "../../views/login";
import Home from "../../views/home";
import Settings from "../../views/settings";

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
      {/* <Route path="/portfolio" element={<Portfolio />} /> */}
      <Route path="/settings" element={<Settings />} />
      {/* <Route path="/library" element={<Library />} />
      <Route path="/upload" element={<Upload Files />} /> */}
    </Routes>
  );
};

export default Content;
