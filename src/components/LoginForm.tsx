import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import path from "constants/path";
import { emailRegex } from "constants/regex";
import { toast } from "react-toastify";
import { app } from "firebaseApp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  function handleLoginInputChage(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setEmail(value);

    if (!value?.match(emailRegex)) {
      setError("이메일 형식이 올바르지 않습니다.");
    } else {
      setError("");
    }
  }

  function handlePasswordInputChage(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const value = event.target.value;
    setPassword(value);

    if (value?.length < 8) {
      setError("비밀번호는 8자리 이상으로 입력해주세요");
    } else {
      setError("");
    }
  }

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("로그인에 성공했습니다.");
      navigate(path.home);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.code);
    }
  }

  return (
    <form className="form form--lg" onSubmit={handleFormSubmit}>
      <h1 className="form__title">로그인</h1>
      <div className="form__block">
        <label htmlFor="email">이메일</label>
        <input
          type="text"
          name="email"
          id="email"
          required
          value={email}
          onChange={handleLoginInputChage}
        />
      </div>
      <div className="form__block">
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePasswordInputChage}
        />
      </div>
      {!!error && (
        <div className="form__block">
          <p className="form__error">{error}</p>
        </div>
      )}
      <div className="form__block">
        계정이 없으신가요?
        <Link to={path.signup} className="form__link">
          회원가입하기
        </Link>
      </div>
      <div className="form__block">
        <button
          type="submit"
          value="제출"
          className="form__button--submit"
          disabled={!!error}
        >
          로그인
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
