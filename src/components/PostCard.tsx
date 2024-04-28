import { Link } from "react-router-dom";
import path from "constants/path";

type Props = {
  postId: string;
  title: string;
  summary: string;
  author: string;
  createdAt: string;
  loginUser: string;
  onPostDelete: () => void;
};

const PostCard = ({
  postId,
  title,
  summary,
  author,
  createdAt,
  loginUser,
  onPostDelete,
}: Props) => {
  const isAuthor = author === loginUser;
  return (
    <div className="post__box">
      <Link to={`${path.postDetail}/${postId}`}>
        <div className="post__profile-box">
          <div className="post__profile"></div>
          <span className="post__author-name">{author}</span>
          <span className="post__date">{createdAt}</span>
        </div>
        <h3 className="post__title">{title}</h3>
        <p className="post__text">{summary}</p>
      </Link>
      {isAuthor && (
        <div className="post_utils-box">
          <button type="button" className="post__delete" onClick={onPostDelete}>
            삭제
          </button>
          <Link to={`${path.postEdit}/${postId}`} className="post__edit">
            수정
          </Link>
        </div>
      )}
    </div>
  );
};

export default PostCard;
