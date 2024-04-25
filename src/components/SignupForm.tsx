import { useState } from "react";
import { Link } from "react-router-dom";
import path from "constants/path";
import { app } from "firebaseApp";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");

  function handleEmailInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setEmail(value);
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!value?.match(validRegex)) {
      setError("이메일 형식이 올바르지 않습니다.");
    } else {
      setError("");
    }
  }
  function handlePasswordInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const value = event.target.value;

    setPassword(value);

    if (value?.length < 8) {
      setError("비밀번호는 8자리 이상으로 입력해주세요");
    } else if (passwordConfirm?.length > 0 && value !== passwordConfirm) {
      setError("비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요.");
    } else {
      setError("");
    }
  }
  function handlePasswordConfirmInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const value = event.target.value;

    setPasswordConfirm(value);

    if (value?.length < 8) {
      setError("비밀번호는 8자리 이상으로 입력해주세요");
    } else if (value !== password) {
      setError("비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요.");
    } else {
      setError("");
    }
  }
  async function handleSignupFormSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("회원가입에 성공했습니다.");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.code);
    }
  }
  return (
    <form className="form form--lg" onSubmit={handleSignupFormSubmit}>
      <h1 className="form__title">회원가입</h1>
      <div className="form__block">
        <label htmlFor="email">이메일</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          required
          onChange={handleEmailInputChange}
        />
      </div>
      <div className="form__block">
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          required
          onChange={handlePasswordInputChange}
        />
      </div>
      <div className="form__block">
        <label htmlFor="password_confirm">비밀번호 확인</label>
        <input
          type="password"
          name="password_confirm"
          id="password_confirm"
          value={passwordConfirm}
          required
          onChange={handlePasswordConfirmInputChange}
        />
      </div>
      {error && (
        <div className="form__block">
          <p className="form_error">{error}</p>
        </div>
      )}
      <div className="form__block">
        계정이 있으신가요?
        <Link to={path.login} className="form__link">
          로그인하기
        </Link>
      </div>
      <div className="form__block">
        <button
          type="submit"
          value="제출"
          className="form__button--submit"
          disabled={!!error}
        >
          회원가입
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
