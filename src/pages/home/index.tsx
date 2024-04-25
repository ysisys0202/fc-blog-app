import { Link } from "react-router-dom";
import path from "constants/path";

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
      <nav className="post__navigation">
        <ul className="post__navigation-list">
          <li className="post__navigation-item post__navigation-item--active">
            전체
          </li>
          <li className="post__navigation-item ">나의 글</li>
        </ul>
      </nav>
      <div className="post__list">
        {[...Array(10)].map((item, index) => (
          <div key={index} className="post__box">
            <Link to={`${path.postDetail}/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile"></div>
                <span className="post__author-name">패스트캠퍼스</span>
                <span className="post__date">2024.04.25</span>
              </div>
              <h3 className="post__title">게시글</h3>
              <p className="post__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                sit consequatur omnis animi voluptates magnam ea ut, nobis
                laudantium recusandae non deserunt hic vero illum neque
                asperiores nam magni incidunt? Quam ipsum rem error labore
                assumenda, modi impedit ducimus, inventore deleniti cum incidunt
                nesciunt dicta sint aliquam facere. Ea, vel.
              </p>
              <div className="post_utils-box">
                <button type="button" className="post__delete">
                  삭제
                </button>
                <button type="button" className="post__edit">
                  수정
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <footer>
        <Link to={path.postNew}>글쓰기</Link>
        <Link to={path.postList}>게시글</Link>
        <Link to={path.profile}>프로필</Link>
      </footer>
    </div>
  );
};

export default Home;
