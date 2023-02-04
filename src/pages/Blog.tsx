import "./CategoryPages.css";

import { PostPreview } from "../components";
import { allPosts } from "../posts";

export const Blog = () => (
  <div className="home-container">
    <div className="blog-posts">
      {allPosts.map(({ postId, imgAlt, imgSrc, title }) => (
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
);
