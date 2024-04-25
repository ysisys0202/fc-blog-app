import React from "react";
import { Link } from "react-router-dom";
import path from "constants/path";
const LoginForm = () => {
  return (
    <form action="/post" method="POST" className="form form--lg">
      <h1 className="form__title">로그인</h1>
      <div className="form__block">
        <label htmlFor="email">이메일</label>
        <input type="text" name="email" id="email" required />
      </div>
      <div className="form__block">
        <label htmlFor="password">비밀번호</label>
        <input type="text" name="password" id="password" />
      </div>
      <div className="form__block">
        계정이 없으신가요?
        <Link to={path.signup} className="form__link">
          회원가입하기
        </Link>
      </div>
      <div className="form__block">
        <button type="submit" value="제출" className="form__button--submit">
          로그인
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
