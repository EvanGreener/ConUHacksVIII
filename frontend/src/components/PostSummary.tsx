import React from "react";
import styles from "./PostSummary.module.css";
import { Post } from "../types/postTypes";
import { User } from "../types/userTypes";

const PostSummary = ({ post, user }: { post: Post; user: User }) => {
  return (
    <div className={styles.postsummary}>
      <div className={styles.postsummarytitle}>
        <h2>{post.title}</h2>
      </div>
      <div className={styles.postsummaryauthor}>
        <p>{user.firstName}</p>
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
