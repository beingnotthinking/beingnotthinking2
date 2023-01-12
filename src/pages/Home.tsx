import './Home.css';

import PostPreview from '../components/PostPreview';
import InstagramData from '../components/InstagramData';
import WhoIsBeingNotThinking from '../images/who-is-beingnotthinking.webp'
import WhyWeChoseVanlife from '../images/why-we-chose-vanlife.webp'
import WhyBeingNotThinking from '../images/why-being-not-thinking.webp'

import React, { useEffect } from 'react';

function Home() {
    const [instagramData, setInstagramData] = React.useState<JSX.Element | null>(null);

    React.useEffect(() => {
        InstagramData().then(data => {
            if (data !== undefined) {
              setInstagramData(data);
            }
          });
      }, []);

    const posts = [
        {
            postId: "who-is-beingnotthinking",
            imgSrc: WhoIsBeingNotThinking,
            imgAlt: "A picture of a person sitting on a rock in the middle of a lake",
            title: "Who is BeingNotThinking?",
        },
        {
            postId: "why-we-chose-vanlife",
            imgSrc: WhyWeChoseVanlife,
            imgAlt: "A picture of a person sitting on a rock in the middle of a lake",
            title: "Why We Chose Vanlife",
        },
        {
            postId: "why-being-not-thinking",
            imgSrc: WhyBeingNotThinking,
            imgAlt: "A picture of a person sitting on a rock in the middle of a lake",
            title: "Why \"BeingNotThinking\"?",
        }
    ];

    return (
        <>
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
            {instagramData}
        </>
    )
}

export default Home
