import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "firebaseApp";
import path from "constants/path";
import { Post } from "types/post";
import AuthContext from "context/AuthContext";
import PostCard from "components/PostCard";

const PostList = () => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState<Post[]>([]);
  const { user } = useContext(AuthContext);
  async function getPost() {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const datas = querySnapshot.docs.map((doc) => ({
      ...(doc.data() as Post),
      id: doc.id,
    }));
    setPostList(datas);
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
      getPost();
    } catch (error: any) {
      console.log(error);
      toast.error(error?.code);
    }
  }
  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <div className="post__list">
        {postList.length > 0 ? (
          postList.map((post) => (
            <PostCard
              key={post.id}
              postId={post.id}
              title={post.title}
              summary={post.summary}
              author={post.author}
              createdAt={post.createdAt}
              loginUser={user?.email || ""}
              onPostDelete={handleDeleteButton.bind(null, post.id)}
            />
          ))
        ) : (
          <div className="post__no-post">게시글이 없습니다.</div>
        )}
      </div>
    </>
  );
};

export default PostList;
