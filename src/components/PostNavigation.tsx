import React from "react";

const PostNavigation = () => {
  return (
    <nav className="post__navigation">
      <ul className="post__navigation-list">
        <li className="post__navigation-item post__navigation-item--active">
          전체
        </li>
        <li className="post__navigation-item ">나의 글</li>
      </ul>
    </nav>
  );
};

export default PostNavigation;
