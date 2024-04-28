import { Link } from "react-router-dom";
import path from "constants/path";
import { BsSun as IconSun, BsMoonFill as IconMoon } from "react-icons/bs";
import { useContext } from "react";
import ThemeContext from "context/ThemeContext";

const Footer = () => {
  const themeContext = useContext(ThemeContext);
  const { theme, toggleThemeMode } = themeContext;
  const isDark = theme === "dark";
  return (
    <footer>
      <Link to={path.postNew}>글쓰기</Link>
      <Link to={path.postList}>게시글</Link>
      <Link to={path.profile}>프로필</Link>
      <button onClick={toggleThemeMode} className="footer__theme-button">
        {isDark ? <IconMoon /> : <IconSun />}
      </button>
    </footer>
  );
};

export default Footer;
