const PostForm = () => {
  return (
    <form action="/post" method="POST" className="form">
      <div className="form__block">
        <label htmlFor="title">제목</label>
        <input type="text" name="title" id="title" required />
      </div>
      <div className="form__block">
        <label htmlFor="summary">요약</label>
        <input type="text" name="summary" id="summary" />
      </div>
      <div className="form__block">
        <label htmlFor="content">내용</label>
        <textarea name="content" id="content" />
      </div>
      <div className="form__block">
        <button type="submit" value="제출" className="form__button--submit">
          제출
        </button>
      </div>
    </form>
  );
};

export default PostForm;
