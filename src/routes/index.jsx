import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Login } from "../pages/Login";
import React, { useState, useEffect } from "react";
import { Register } from "../pages/Register";
import { MainPage } from "../pages/MainPage/MainPage";
import { ListPage } from "../pages/MainPage/ListPage";

export const AppRouter = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [token]);

  console.log(localStorage.getItem("token"));
  if (!token) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list" element={<ListPage/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    );
  }
};
