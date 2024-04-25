import path from "constants/path";
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image"></div>
        <div>
          <p className="profile__email">ysisys0202@gmail.com</p>
          <p className="profile__name">이윤슬</p>
        </div>
      </div>
      <Link to={path.home} className="profile__logout">
        로그아웃
      </Link>
    </div>
  );
};

export default Profile;
