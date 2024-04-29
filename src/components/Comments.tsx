import React, { useState } from "react";

const COMMENTS = [
  {
    id: 1,
    email: "test@test.com",
    content: "댓글입니다 1",
    createdAt: "2023-07-13",
  },
  {
    id: 2,
    email: "test@test.com",
    content: "댓글입니다 2",
    createdAt: "2023-07-13",
  },
  {
    id: 3,
    email: "test@test.com",
    content: "댓글입니다 3",
    createdAt: "2023-07-13",
  },
  {
    id: 4,
    email: "test@test.com",
    content: "댓글입니다 4",
    createdAt: "2023-07-13",
  },
  {
    id: 5,
    email: "test@test.com",
    content: "댓글입니다 5",
    createdAt: "2023-07-13",
  },
  {
    id: 6,
    email: "test@test.com",
    content: "댓글입니다 6",
    createdAt: "2023-07-13",
  },
  {
    id: 7,
    email: "test@test.com",
    content: "댓글입니다 7",
    createdAt: "2023-07-13",
  },
];

const Comments = () => {
  const [comment, setComment] = useState<string>("");
  function handleCommentInputChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const value = event.target.value;
    setComment(value);
  }
  function handleCommentFormSubmit(event: React.FormEvent<HTMLFormElement>) {}
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
        {COMMENTS.map((comment) => (
          <li key={comment.id} className="comment__item">
            <div className="comment__profile-box">
              <div className="comment__email">{comment.email}</div>
              <div className="commet__date">{comment.createdAt}</div>
              <button className="comment__delete">삭제</button>
            </div>
            <p className="comment__text">{comment.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
