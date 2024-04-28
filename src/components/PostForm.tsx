import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "firebaseApp";
import AuthContext from "context/AuthContext";
import path from "constants/path";
import { Post } from "types/post";
import Category from "types/category";
import CATEGORIES from "constants/categories";

type Props = {
  type?: "create" | "edit";
  id?: string;
};

const PostForm = ({ type = "create", id }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [category, setCategory] = useState<Category | string>("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);

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

  function handleCategorySelectChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    const value = event.target.value;
    setCategory(value as Category);
  }

  async function handlePostFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      if (type === "create") {
        const docRef = await addDoc(collection(db, "posts"), {
          title,
          summary,
          content,
          category,
          createdAt: new Date().toLocaleDateString("ko", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
          author: user?.email,
        });
        toast.success("게시글을 생성했습니다.");
        navigate(path.home);
      }
      if (type === "edit" && id) {
        const postRef = doc(db, "posts", id);
        await updateDoc(postRef, {
          title,
          summary,
          content,
          category,
          updatedAt: new Date().toLocaleDateString("ko", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
        });
        toast.success("게시글을 수정했습니다.");
        navigate(`${path.postDetail}/${id}`);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.code);
    }
  }

  async function getPost(postId: string) {
    const docRef = doc(db, "posts", postId);
    const docSnap = await getDoc(docRef);
    setPost({ ...(docSnap.data() as Post), id: docSnap.id });
  }

  useEffect(() => {
    if (!id || type === "create") {
      return;
    }
    getPost(id);
  }, [id]);

  useEffect(() => {
    if (!post) {
      return;
    }
    setTitle(post.title);
    setSummary(post.summary);
    setContent(post.content);
    setCategory(post.category ?? "");
  }, [post]);

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
        <label htmlFor="category">카테고리</label>
        <select
          name="category"
          id="category"
          className="form__select"
          value={category as Category}
          onChange={handleCategorySelectChange}
        >
          <option value="">카테고리를 선택해주세요.</option>
          {CATEGORIES.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
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
        <button type="submit" className="form__button--submit">
          {type === "create" ? "제출" : "수정"}
        </button>
      </div>
    </form>
  );
};

export default PostForm;
