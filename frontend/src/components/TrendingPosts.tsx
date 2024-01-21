import React from "react";
import PostSummary from "./PostSummary";
import style from "./TrendingPosts.module.css";

const TrendingPosts = () => {
  // fake posts with title, summary, author, date,
  const fakePosts = [
    {
      title: "Lorem ipsum dolor",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
      author: "John Doe",
      date: "January 1, 1970",
      index: 0,
    },
    {
      title: "Lorem ipsum dolor",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
      author: "John Doe",
      date: "January 1, 1970",
      index: 1,
    },
    {
      title: "Lorem ipsum dolor",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
      author: "John Doe",
      date: "January 1, 1970",
      index: 2,
    },
    {
      title: "Lorem ipsum dolor",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
      author: "John Doe",
      date: "January 1, 1970",
      index: 3,
    },
  ];
  const [posts, setPosts] = React.useState<any>(fakePosts);

  React.useEffect(() => {
    setPosts(fakePosts);
  }, []);

  return (
    <div className={style.trendingPosts}>
      <h2>Trending Posts</h2>
      <div className={style.posts}>
        {posts.map((post: any) => (
          <PostSummary key={post.index} post={post} /> // Added key prop
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
