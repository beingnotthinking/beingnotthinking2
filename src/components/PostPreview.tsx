import './PostPreview.css';

import { Link } from "react-router-dom";

interface PostPreviewProps {
    postId: string;
    imgSrc: string;
    imgAlt: string;
    title: string;
}

function PostPreview({
    postId,
    imgSrc,
    imgAlt,
    title,
}: PostPreviewProps) {
    const postLink = `posts/${postId}`;

    return (
        <div className="post-preview">
            <img src={imgSrc} alt={imgAlt} />
            <h2>{title}</h2>
            <Link to={postLink}>Read More</Link>
        </div>
    );
}

export default PostPreview
