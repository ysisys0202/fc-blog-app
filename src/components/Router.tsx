import { Route, Routes, Navigate } from "react-router-dom";
import path from "constants/path";
import Home from "pages/home";
import PostList from "pages/posts";
import PostDetail from "pages/posts/detail";
import NewPost from "pages/posts/new";
import Profile from "pages/profile/Index";
import PostEdit from "pages/posts/edit";
import Login from "pages/login";
import Signup from "pages/signup";

const Router = () => {
  return (
    <Routes>
      <Route path={path.home} element={<Home />}></Route>
      <Route path={path.postList} element={<PostList />}></Route>
      <Route path={path.postDetail} element={<PostDetail />}></Route>
      <Route path={path.postNew} element={<NewPost />}></Route>
      <Route path={path.postEdit} element={<PostEdit />}></Route>
      <Route path={path.profile} element={<Profile />}></Route>
      <Route path={path.login} element={<Login />}></Route>
      <Route path={path.signup} element={<Signup />}></Route>
      <Route path="*" element={<Navigate replace to="/" />}></Route>
    </Routes>
  );
};

export default Router;
