import Header from "components/Header";
import Footer from "components/Footer";
import Profile from "components/Profile";
import PostList from "components/PostList";
import { useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Post } from "types/post";
import AuthContext from "context/AuthContext";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "firebaseApp";
const ProfilePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePostTab = searchParams.get("post-tab");
  const [postList, setPostList] = useState<Post[]>([]);
  const { user } = useContext(AuthContext);

  async function getPost() {
    const postsRef = collection(db, "posts");
    if (!user) {
      return;
    }
    let postsQuery = query(
      postsRef,
      where("author", "==", user.email),
      orderBy("createdAt", "desc")
    );

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
      <Profile />
      <PostList
        postList={postList}
        loginUser={user?.email ?? ""}
        getPost={getPost}
      />
      <Footer />
    </>
  );
};

export default ProfilePage;
