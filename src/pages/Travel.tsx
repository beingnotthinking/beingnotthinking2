import './CategoryPages.css';

import PostPreview from '../components/PostPreview';
import CarryOnAndADreamImage from '../images/carry-on-and-a-dream.jpg'
import React from 'react';

function Travel() {
    const posts = [
        {
            postId: "carry-on-and-a-dream",
            imgSrc: CarryOnAndADreamImage,
            imgAlt: "A picture of a person sitting on a rock in the middle of a lake",
            title: "A Carry On and A Dream",
        },
    ];

    return (
        <div className='home-container'>
            <div className="blog-posts">
                {
                    posts.map(({postId, imgAlt, imgSrc, title}) => {
                        return (
                            <PostPreview
                            key={postId}
                            postId={postId}
                            imgSrc={imgSrc}
                                imgAlt={imgAlt}
                                title={title}
                                />
                                );
                            })
                }
            </div>
        </div>
    )
}

export default Travel
