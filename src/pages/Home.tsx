import "./Home.css";

import { InstagramData, PostPreview } from "../components/";
import React, { useEffect } from "react";

import { allPosts, featuredPosts } from "../posts";

export const Home = () => {
  const [instagramData, setInstagramData] = React.useState<JSX.Element | null>(
    null
  );

  useEffect(() => {
    InstagramData().then((data) => {
      if (data !== undefined) {
        setInstagramData(data);
      }
    });
  }, [setInstagramData]);

  return (
    <>
      <div className="home-container">
        <div className="blog-posts">
          {featuredPosts.map(({ postId, imgAlt, imgSrc, title }) => (
            <PostPreview
              key={postId}
              postId={postId}
              imgSrc={imgSrc}
              imgAlt={imgAlt}
              title={title}
            />
          ))}
        </div>
      </div>
      {instagramData}
    </>
  );
};
