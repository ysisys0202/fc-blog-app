import Header from "components/Header";
import Footer from "components/Footer";
import PostNavigation from "components/PostNavigation";
import PostList from "components/PostList";
import Carousel from "components/Carousel";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <PostNavigation />
      <PostList />
      <Footer />
    </div>
  );
};

export default Home;
