import Header from "components/Header";
import Footer from "components/Footer";
import PostNavigation from "components/PostNavigation";
import PostList from "components/PostList";
import Carousel from "components/Carousel";
import { useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "context/AuthContext";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { Post } from "types/post";
import { db } from "firebaseApp";
const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePostTab = searchParams.get("post-tab");
  const [postList, setPostList] = useState<Post[]>([]);
  const { user } = useContext(AuthContext);

  async function getPost() {
    const postsRef = collection(db, "posts");
    let postsQuery;
    if (activePostTab === "my" && user) {
      postsQuery = query(
        postsRef,
        where("author", "==", user.email),
        orderBy("createdAt", "desc")
      );
    } else if (activePostTab === "all") {
      postsQuery = query(postsRef, orderBy("createdAt", "desc"));
    } else {
      postsQuery = query(
        postsRef,
        where("category", "==", activePostTab),
        orderBy("createdAt", "desc")
      );
    }

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
    <div>
      <Header />
      <Carousel />
      <PostNavigation />
      <PostList
        postList={postList}
        loginUser={user?.email ?? ""}
        getPost={getPost}
      />
      <Footer />
    </div>
  );
};

export default Home;
