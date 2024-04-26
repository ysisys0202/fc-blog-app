import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "firebaseApp";
import AuthContext from "context/AuthContext";
import path from "constants/path";

const PostForm = () => {
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleTitleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setTitle(value);
  }
  function handleSummaryInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const value = event.target.value;
    setSummary(value);
  }
  function handleContentInputChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const value = event.target.value;
    setContent(value);
  }
  async function handlePostFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "posts"), {
        title,
        summary,
        content,
        createdAt: new Date().toLocaleDateString(),
        author: user?.email,
      });
      toast.success("게시글을 생성했습니다.");
      navigate(path.home);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.code);
    }
  }
  return (
    <form className="form" onSubmit={handlePostFormSubmit}>
      <div className="form__block">
        <label htmlFor="title">제목</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          value={title}
          onChange={handleTitleInputChange}
        />
      </div>
      <div className="form__block">
        <label htmlFor="summary">요약</label>
        <input
          type="text"
          name="summary"
          id="summary"
          value={summary}
          onChange={handleSummaryInputChange}
        />
      </div>
      <div className="form__block">
        <label htmlFor="content">내용</label>
        <textarea
          name="content"
          id="content"
          value={content}
          onChange={handleContentInputChange}
        />
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
