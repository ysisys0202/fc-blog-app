import { useContext, useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "firebaseApp";
import { Post } from "types/post";
import AuthContext from "context/AuthContext";
import PostCard from "components/PostCard";

const PostList = () => {
  const [postList, setPostList] = useState<Post[]>([]);
  const { user } = useContext(AuthContext);
  async function getPost() {
    const datas = await getDocs(collection(db, "posts"));
    datas.forEach((doc) => {
      const dataOdj = { ...doc.data(), id: doc.id };
      setPostList((prevPostList) => [...prevPostList, dataOdj as Post]);
    });
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
