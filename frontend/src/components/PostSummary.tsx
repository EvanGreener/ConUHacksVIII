import React from "react";
import styles from "./PostSummary.module.css";

const PostSummary = ({ post }: any) => {
  console.log(post);
  return (
    <div className={styles.postsummary}>
      <div className={styles.postsummarytitle}>
        <h2>{post.title}</h2>
      </div>
      <div className={styles.postsummaryauthor}>
        <p>{post.author}</p>
      </div>
      <div className="post-summary__date">
        <p>{post.date}</p>
      </div>
      <div className="post-summary__body">
        <p>{post.summary}</p>
      </div>
    </div>
  );
};

export default PostSummary;
