import React, { useEffect } from "react";
import PostSummary from "./PostSummary";
import style from "./TrendingPosts.module.css";
// import { getLatestPosts } from "../services/postServices";
import { Post } from "../types/postTypes";

const TrendingPosts = () => {
  const [posts, setPosts] = React.useState<Post[]>();

  // React.useEffect(() => {
  //   getLatestPosts().then((value): void => {
  //     setPosts(value);
  //   });
  // }, []);
  // console.log(posts);

  const latestPosts: Post[] = [
    {
      title: "Exploring Quantum Entanglement",
      description:
        "Delving into the mysterious world of quantum mechanics and the fascinating phenomenon of entanglement. Join me on this mind-bending journey through particles and possibilities!",
      createdTS: "2024-01-21T08:30:00Z",
      uid: "",
      attachmentURL: "",
    },
    {
      title: "Revolutionizing Renewable Energy",
      description:
        "Embarking on a mission to revolutionize renewable energy sources. Unveiling a groundbreaking project that could reshape how we power our world sustainably. Stay tuned for updates!",
      createdTS: "2024-01-22T15:45:00Z",
      uid: "",
      attachmentURL: "",
    },
    {
      title: "Mapping the Microbiome's Marvels",
      description:
        "Venturing into the intricate world of the human microbiome. Explore with me as we uncover the role of these tiny organisms in maintaining our health and well-being. Let's decode the microbiome mysteries together!",
      createdTS: "2024-01-23T12:00:00Z",
      uid: "",
      attachmentURL: "",
    },
  ];

  useEffect(() => {
    setPosts(latestPosts);
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
