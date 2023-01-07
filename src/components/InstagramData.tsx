import './InstagramData.css';
import { Link } from "react-router-dom";

interface InstagramPostProps {
    imgSrc: string;
    caption: string;
  }
  

// InstagramPost component
const InstagramPost: React.FC<InstagramPostProps> = ({ imgSrc, caption }) => {
  return (
    <div id="instagram-post">
      <img src={imgSrc} width="300rem"/>
      <p className="caption">{caption}</p>
    </div>
  );
};

function filterOutVideoUrls(items: { id: string; url: string; caption: string }[]) {
  return items.filter(item => !item.url.startsWith("https://video-"));
}

// InstagramData function
async function InstagramData() {
  try {
    const response = await fetch('https://beingnotthinking.com/.netlify/functions/instagram');
    let instagramPostsNoFilter = await response.json();

    let instagramPosts = filterOutVideoUrls(instagramPostsNoFilter);
    
    let post0 = instagramPosts[0];
    let photoUrl0 = post0.url;
    let caption0 = post0.caption.split('#')[0];

    let post1 = instagramPosts[1];
    let photoUrl1 = post1.url;
    let caption1 = post1.caption.split('#')[0];

    let post2 = instagramPosts[2];
    let photoUrl2 = post2.url;
    let caption2 = post2.caption.split('#')[0];

    return (
      <div className="instagram-container">
        <div className="blog-posts">
          <InstagramPost imgSrc={photoUrl0} caption={caption0} />
          <InstagramPost imgSrc={photoUrl1} caption={caption1} />
          <InstagramPost imgSrc={photoUrl2} caption={caption2} />
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
  }
}

export default InstagramData 