import React from "react";
import { Link } from "react-router-dom";
import path from "constants/path";
const LoginForm = () => {
  return (
    <form action="/post" method="POST" className="form form--lg">
      <h1 className="form__title">회원가입</h1>
      <div className="form__block">
        <label htmlFor="email">이메일</label>
        <input type="text" name="email" id="email" required />
      </div>
      <div className="form__block">
        <label htmlFor="password">비밀번호</label>
        <input type="password" name="password" id="password" />
      </div>
      <div className="form__block">
        <label htmlFor="password_confirm">비밀번호 확인</label>
        <input type="password" name="password_confirm" id="password_confirm" />
      </div>
      <div className="form__block">
        계정이 있으신가요?
        <Link to={path.login} className="form__link">
          로그인하기
        </Link>
      </div>
      <div className="form__block">
        <button type="submit" value="제출" className="form__button--submit">
          회원가입
        </button>
      </div>
    </form>
  );
};

export default LoginForm;