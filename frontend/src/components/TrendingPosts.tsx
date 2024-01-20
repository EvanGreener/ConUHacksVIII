import React from "react";
import PostSummary from "./PostSummary";

const TrendingPosts = () => {
  return (
    <div className="trending-posts">
      <h2>Trending Posts</h2>
      <div className="posts">
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
