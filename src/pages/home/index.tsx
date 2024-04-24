import path from "constants/path";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header>
        <div>
          <Link to={path.postNew}>글쓰기</Link>
          <Link to={path.postList}>게시글</Link>
          <Link to={path.profile}>프로필</Link>
        </div>
      </header>
      <div className="post-list">Post List</div>
      <footer>
        <div>menu 1</div>
        <div>menu 2</div>
        <div>menu 3</div>
      </footer>
    </div>
  );
};

export default Home;
