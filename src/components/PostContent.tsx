import { Link, useNavigate } from "react-router-dom";
import path from "constants/path";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Post } from "types/post";
import { db } from "firebaseApp";
import { doc, getDoc, deleteDoc } from "@firebase/firestore";
import { toast } from "react-toastify";
import Loader from "./Loader";
const PostContent = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [post, setPost] = useState<Post | null>(null);

  async function getPostContent(postId: string) {
    const docRef = doc(db, "posts", postId);
    const docSnap = await getDoc(docRef);
    setPost({ ...(docSnap.data() as Post), id: docSnap.id });
  }

  async function handleDeleteButton(postId: string) {
    const deleteConfirm = window.confirm("해당 게시글을 삭제하시겠습니까?");
    if (!deleteConfirm) {
      return;
    }
    try {
      await deleteDoc(doc(db, "posts", postId));
      toast.success("정상적으로 삭제되었습니다.");
      navigate(path.home);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.code);
    }
  }

  useEffect(() => {
    if (!id) {
      return;
    }
    getPostContent(id);
  }, [id]);

  return (
    <div className="post__content">
      {post ? (
        <div className="post__box">
          <h1 className="post__title">{post.summary}</h1>
          <div className="post__profile-box">
            <div className="post__profile"></div>
            <span className="post__author-name">{post.author}</span>
            <span className="post__date">{post.createdAt}</span>
          </div>

          <div className="post__utils-box">
            <button
              type="button"
              className="post__delete"
              onClick={handleDeleteButton.bind(null, post.id)}
            >
              삭제
            </button>
            <Link to={`${path.postEdit}/${post.id}`} className="post__edit">
              수정
            </Link>
          </div>
          <p className="post__text post__text--pre-wrap">{post.content}</p>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PostContent;
