import { useState } from "react";
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

type Props = {
  isAuthenticated: boolean;
};

const Router = ({ isAuthenticated }: Props) => {
  return (
    <Routes>
      {isAuthenticated ? (
        <>
          {" "}
          <Route path={path.home} element={<Home />} />
          <Route path={path.postList} element={<PostList />} />
          <Route path={`${path.postDetail}/:id`} element={<PostDetail />} />
          <Route path={path.postNew} element={<NewPost />} />
          <Route path={`${path.postEdit}/:id`} element={<PostEdit />} />
          <Route path={path.profile} element={<Profile />} />
          <Route path={path.login} element={<Login />} />
          <Route path={path.signup} element={<Signup />} />
          <Route path="*" element={<Navigate replace to={path.home} />} />
        </>
      ) : (
        <>
          <Route path={path.login} element={<Login />} />
          <Route path={path.signup} element={<Signup />} />
          <Route path="*" element={<Navigate replace to={path.login} />} />
        </>
      )}
    </Routes>
  );
};

export default Router;
