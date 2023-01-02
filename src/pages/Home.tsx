import './Home.css';

import PostPreview from '../components/PostPreview';
import React, { useEffect } from 'react';

function Home() {

    const getData=()=>{
        fetch('https://beingnotthinking.com/.netlify/functions/instagram'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
          });
      }
      useEffect(()=>{
        getData()
      },[])

    const instagramData = getData()

    const posts = [
        {
            postId: "who-is-beingnotthinking",
            imgSrc: "http://placekitten.com/300/300",
            imgAlt: "A picture of a person sitting on a rock in the middle of a lake",
            title: "Who is BeingNotThinking?",
        },
        {
            postId: "why-we-chose-vanlife",
            imgSrc: "http://placekitten.com/300/300",
            imgAlt: "A picture of a person sitting on a rock in the middle of a lake",
            title: "Why We Chose Vanlife",
        },
        {
            postId: "why-being-not-thinking",
            imgSrc: "http://placekitten.com/300/300",
            imgAlt: "A picture of a person sitting on a rock in the middle of a lake",
            title: "Why BeingNotThinking?",
        }
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
            <div>
                instagramData
            </div>
        </div>
    )
}

export default Home
