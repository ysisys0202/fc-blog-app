import "./App.css";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import path from "./constants/path";
function App() {
  return (
    <>
      <div>
        <Link to={path.home}>HOME</Link>
        <Link to={path.postList}>POST LIST</Link>
        <Link to={path.postDetail}>POST DETAIL</Link>
        <Link to={path.postNew}>NEW POST</Link>
        <Link to={path.postEdit}>POST EDIT</Link>
        <Link to={path.profile}>PROFILE</Link>
      </div>
      <Routes>
        <Route path={path.home} element={<h1>Home Page</h1>}></Route>
        <Route path={path.postList} element={<h1>Post List Page</h1>}></Route>
        <Route
          path={path.postDetail}
          element={<h1>Post Detail Page</h1>}
        ></Route>
        <Route path={path.postNew} element={<h1>New Post Page</h1>}></Route>
        <Route path={path.postEdit} element={<h1>Post Edit Page</h1>}></Route>
        <Route path={path.profile} element={<h1>Profile Page</h1>}></Route>
        <Route path="*" element={<Navigate replace to="/" />}></Route>
      </Routes>
    </>
  );
}

export default App;
