import { Link } from "react-router-dom";
import path from "constants/path";

const PostContent = () => {
  return (
    <div className="post__content">
      <div className="post__box">
        <div className="post__title">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nemo
          nisi voluptatibus vel
        </div>
        <div className="post__profile-box">
          <div className="post__profile"></div>
          <span className="post__author-name">패스트캠퍼스</span>
          <span className="post__date">2024.04.25</span>
        </div>
        <h3 className="post__title">게시글</h3>
        <div className="post__utils-box">
          <button type="button" className="post__delete">
            삭제
          </button>
          <Link to={`${path.postEdit}/1`} className="post__edit">
            수정
          </Link>
        </div>
        <p className="post__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit
          consequatur omnis animi voluptates magnam ea ut, nobis laudantium
          recusandae non deserunt hic vero illum neque asperiores nam magni
          incidunt? Quam ipsum rem error labore assumenda, modi impedit ducimus,
          inventore deleniti cum incidunt nesciunt dicta sint aliquam facere.
          Ea, vel.
        </p>
      </div>
    </div>
  );
};

export default PostContent;
