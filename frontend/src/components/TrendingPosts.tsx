import React from "react";
import PostSummary from "./PostSummary";
import style from "./TrendingPosts.module.css";

const TrendingPosts = () => {
  const [posts, setPosts] = React.useState();

  // fake posts with title, summary, author, date,
  const fakePosts = [
    {
      title: "Post Title",
      summary: "Post summary",
      author: "Author Name",
      date: "Post Date",
    },
    {
      title: "Post Title",
      summary: "Post summary",
      author: "Author Name",
      date: "Post Date",
    },
    {
      title: "Post Title",
      summary: "Post summary",
      author: "Author Name",
      date: "Post Date",
    },
    {
      title: "Post Title",
      summary: "Post summary",
      author: "Author Name",
      date: "Post Date",
    },
  ];

  React.useEffect(() => {
    setPosts(fakePosts);
  }, []);

  return (
    <div className="trending-posts">
      <h2>Trending Posts</h2>
      <div className={style.posts}>
        <PostSummary />
        <PostSummary />
        <PostSummary />
        <PostSummary />
        <PostSummary />
        <PostSummary />
      </div>
    </div>
  );
};

export default TrendingPosts;
