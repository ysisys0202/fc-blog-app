import PostCard from "components/PostCard";

const PostList = () => {
  return (
    <div className="post__list">
      {[...Array(10)].map((item, index) => (
        <PostCard postId={index} />
      ))}
    </div>
  );
};

export default PostList;