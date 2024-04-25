import Header from "components/Header";
import Footer from "components/Footer";
import PostNavigation from "components/PostNavigation";
import PostList from "components/PostList";

const Home = () => {
  return (
    <div>
      <Header />
      <PostNavigation />
      <PostList />
      <Footer />
    </div>
  );
};

export default Home;
