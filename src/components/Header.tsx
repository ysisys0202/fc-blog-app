import { Link } from "react-router-dom";
import path from "constants/path";

const Header = () => {
  return (
    <header>
      <Link to={path.home} className="header__logo">
        REACT BLOG
      </Link>
      <div>
        <Link to={path.postNew}>글쓰기</Link>
        <Link to={path.postList}>게시글</Link>
        <Link to={path.profile}>프로필</Link>
      </div>
    </header>
  );
};

export default Header;
