import './Post.css';

import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

const Post: React.FunctionComponent<{ markdown: React.ReactNode }> = ({ markdown }) => {
    return (
        <div>
            {markdown}
        </div>
    );
};

export default Post;

