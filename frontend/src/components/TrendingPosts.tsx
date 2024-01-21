import React from "react";
import PostSummary from "./PostSummary";
import style from "./TrendingPosts.module.css";
import { getLatestPosts } from "../services/postServices";
import { Post } from "../types/postTypes";

const TrendingPosts = () => {
  const [posts, setPosts] = React.useState<Post[]>();

  React.useEffect(() => {
    getLatestPosts().then((value): void => {
      setPosts(value);
    });
  }, []);

  return (
    <div className={style.trendingPosts}>
      <h2>Trending Posts</h2>
      <div className={style.posts}>
        {posts &&
          posts.map((post: Post) => (
            <PostSummary key={post.createdTS} post={post} /> // Added key prop
          ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
