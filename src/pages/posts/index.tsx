import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getDocs, collection, query, orderBy, where } from "firebase/firestore";
import { db } from "firebaseApp";
import { Post } from "types/post";
import AuthContext from "context/AuthContext";
import Header from "components/Header";
import Footer from "components/Footer";
import PostList from "components/PostList";

const PostListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePostTab = searchParams.get("post-tab");
  const [postList, setPostList] = useState<Post[]>([]);
  const { user } = useContext(AuthContext);

  async function getPost() {
    const postsRef = collection(db, "posts");
    const postsQuery = query(postsRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(postsQuery);
    const datas = querySnapshot.docs.map((doc) => ({
      ...(doc.data() as Post),
      id: doc.id,
    }));
    setPostList(datas);
  }
  useEffect(() => {
    getPost();
  }, [activePostTab]);

  return (
    <>
      <Header />
      <PostList
        postList={postList}
        loginUser={user?.email ?? ""}
        getPost={getPost}
      />
      <Footer />
    </>
  );
};

export default PostListPage;
