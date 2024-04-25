import { Link } from "react-router-dom";
import path from "constants/path";

const Footer = () => {
  return (
    <footer>
      <Link to={path.postNew}>글쓰기</Link>
      <Link to={path.postList}>게시글</Link>
      <Link to={path.profile}>프로필</Link>
    </footer>
  );
};

export default Footer;
