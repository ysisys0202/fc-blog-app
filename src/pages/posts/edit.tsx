import { useParams } from "react-router-dom";
import Footer from "components/Footer";
import Header from "components/Header";
import PostForm from "components/PostForm";

const PostEdit = () => {
  const params = useParams();
  const { id } = params;
  return (
    <>
      <Header />
      <PostForm type="edit" id={id} />
      <Footer />
    </>
  );
};

export default PostEdit;
