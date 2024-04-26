import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { app } from "firebaseApp";
import { useNavigate } from "react-router-dom";
import path from "constants/path";
import { useCallback } from "react";

const Profile = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();

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
          <p className="profile__email">{auth.currentUser?.email}</p>
          <p className="profile__name">
            {auth.currentUser?.displayName || "사용자"}
          </p>
        </div>
      </div>
      <button className="profile__logout" onClick={handleLogoutButton}>
        로그아웃
      </button>
    </div>
  );
};

export default Profile;
