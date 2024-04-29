import React, { useContext, useState } from "react";
import { Post } from "types/post";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import AuthContext from "context/AuthContext";
import { toast } from "react-toastify";
import { Comment as CommentType } from "types/post";

type Props = {
  post: Post;
  getPostContent: () => void;
};
const Comments = ({ post, getPostContent }: Props) => {
  const [comment, setComment] = useState<string>("");
  const { user } = useContext(AuthContext);

  function handleCommentInputChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const value = event.target.value;
    setComment(value);
  }
  async function handleDeleteComment(comment: CommentType) {
    const deleteConfirm = window.confirm("댓글을 삭제하시겠습니까?");
    if (!deleteConfirm) {
      return;
    }
    const postRef = doc(db, "posts", post.id);
    await updateDoc(postRef, {
      comments: arrayRemove(comment),
    });
    toast.success("댓글이 삭제되었습니다.");
    await getPostContent();
  }
  async function handleCommentFormSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    try {
      const postRef = doc(db, "posts", post.id);
      if (!user?.uid) {
        return;
      }
      const commentSubmitData = {
        content: comment,
        uid: user.uid,
        email: user.email,
        createdAt: new Date().toLocaleDateString("ko", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
      await updateDoc(postRef, {
        comments: arrayUnion(commentSubmitData),
      });
      toast.success("댓글이 추가되었습니다.");
      setComment("");
      await getPostContent();
    } catch (error: any) {
      console.log(error);
      toast.error(error.code);
    }
  }
  return (
    <div className="comments">
      <form className="comments__form" onSubmit={handleCommentFormSubmit}>
        <div className="form__block">
          <label htmlFor="comment">댓글 입력</label>
          <textarea
            name="comment"
            id="commnet"
            value={comment}
            required
            onChange={handleCommentInputChange}
          ></textarea>
        </div>
        <div className="form__block">
          <button type="submit" className="form__button--submit">
            제출
          </button>
        </div>
      </form>
      <ul className="comment__list">
        {post.comments
          ?.slice(0)
          .reverse()
          .sort()
          .map((comment) => (
            <li key={comment.createdAt} className="comment__item">
              <div className="comment__profile-box">
                <div className="comment__email">{comment.email}</div>
                <div className="commet__date">{comment.createdAt}</div>
                {user?.email === post.author && (
                  <button
                    className="comment__delete"
                    onClick={handleDeleteComment.bind(null, comment)}
                  >
                    삭제
                  </button>
                )}
              </div>
              <p className="comment__text">{comment.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Comments;
