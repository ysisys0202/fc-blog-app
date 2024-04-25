import { Link } from "react-router-dom";
import path from "constants/path";

type Props = { postId: number };

const PostCard = ({ postId }: Props) => {
  return (
    <div className="post__box">
      <Link to={`${path.postDetail}/${postId}`}>
        <div className="post__profile-box">
          <div className="post__profile"></div>
          <span className="post__author-name">패스트캠퍼스</span>
          <span className="post__date">2024.04.25</span>
        </div>
        <h3 className="post__title">게시글</h3>
        <p className="post__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit
          consequatur omnis animi voluptates magnam ea ut, nobis laudantium
          recusandae non deserunt hic vero illum neque asperiores nam magni
          incidunt? Quam ipsum rem error labore assumenda, modi impedit ducimus,
          inventore deleniti cum incidunt nesciunt dicta sint aliquam facere.
          Ea, vel.
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
  );
};

export default PostCard;
