import { Link } from "react-router-dom";
import path from "constants/path";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Post } from "types/post";
import { db } from "firebaseApp";
import { doc, getDoc } from "@firebase/firestore";
import Loader from "./Loader";
const PostContent = () => {
  const params = useParams();
  const { id } = params;
  const [post, setPost] = useState<Post | null>(null);

  async function getPostContent(postId: string) {
    const docRef = doc(db, "posts", postId);
    const docSnap = await getDoc(docRef);
    setPost({ ...(docSnap.data() as Post), id: docSnap.id });
  }
  function handleDeleteButton(postId: string) {
    console.log(`${postId} 게시물 삭제!`);
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
