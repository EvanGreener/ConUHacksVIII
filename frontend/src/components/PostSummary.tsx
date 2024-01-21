import React from "react";
import styles from "./PostSummary.module.css";
import { Post } from "../types/postTypes";

const PostSummary = ({ post }: { post: Post }) => {
  return (
    <div className={styles.postsummary}>
      <div>
        <h2 className={styles.postsummarytitle}> {post.title}</h2>
      </div>
      <div className={styles.postsummaryauthor}>
        <p>{}</p>
      </div>
      <div className="post-summary__date">
        <p>{post.createdTS}</p>
      </div>
      <div className="post-summary__body">
        <p>{post.description}</p>
      </div>
    </div>
  );
};

export default PostSummary;
