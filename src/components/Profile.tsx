import { useCallback, useContext } from "react";
import { Auth, getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { app } from "firebaseApp";
import { useNavigate } from "react-router-dom";
import path from "constants/path";

import AuthContext from "context/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleLogoutButton = useCallback(async function handleLogoutButton() {
    const auth = getAuth(app);
    try {
      await signOut(auth);
      toast.success("정상적으로 로그아웃 되었습니다.");
      navigate(path.home);
    } catch (error: any) {
      toast.error(error.code);
    }
  }, []);

  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image"></div>
        <div>
          <p className="profile__email">{user?.email}</p>
          <p className="profile__name">{user?.displayName || "사용자"}</p>
        </div>
      </div>
      <button className="profile__logout" onClick={handleLogoutButton}>
        로그아웃
      </button>
    </div>
  );
};

export default Profile;
function signOut(auth: Auth) {
  throw new Error("Function not implemented.");
}
