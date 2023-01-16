import "./CategoryPages.css";

import { PostPreview } from "../components";
import { travelPosts } from "../posts";

export const Travel = () => (
  <div className="home-container">
    <div className="blog-posts">
      {travelPosts.map(({ postId, imgAlt, imgSrc, title }) => (
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
