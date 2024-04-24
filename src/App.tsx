import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate, Link } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <Link to="/">HOME</Link>
        <Link to="/posts">POST LIST</Link>
        <Link to="/posts/:id">POST DETAIL</Link>
        <Link to="/posts/new">NEW POST</Link>
        <Link to="/posts/edit/:id">POST EDIT</Link>
        <Link to="/profile">PROFILE</Link>
      </div>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}></Route>
        <Route path="/posts" element={<h1>Post List Page</h1>}></Route>
        <Route path="/posts/:id" element={<h1>Post Detail Page</h1>}></Route>
        <Route path="/posts/new" element={<h1>New Post Page</h1>}></Route>
        <Route path="/posts/edit/:id" element={<h1>Post Edit Page</h1>}></Route>
        <Route path="/profile" element={<h1>Profile Page</h1>}></Route>
        <Route path="*" element={<Navigate replace to="/" />}></Route>
      </Routes>
    </>
  );
}

export default App;
