import "./Post.css";

import { PostMetadata } from "../../posts";

interface PostProps {
  post: PostMetadata;
}

const Post = ({
  post: { postId, mdx, imgSrc, imgAlt, title, tags },
}: PostProps): JSX.Element => {
  return <div className="post">
      <title>{title}</title>
      {mdx({})}
    </div>;
};

export { Post };
