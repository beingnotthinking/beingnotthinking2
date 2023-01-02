import './InstagramData.css';

import { Link } from "react-router-dom";

/* async function InstagramData() {
    try {
      const response = await fetch('https://beingnotthinking.com/.netlify/functions/instagram');
      const data = await response.json();
      console.log(data);
      return (
        <div>
            {data}
        </div>
    );
    } catch (error) {
      console.error(error);
    }
  } */

  interface InstagramPostProps {
    imgSrc: string;
    caption: string;
}

  async function InstagramData() {
    const response = await fetch('https://beingnotthinking.com/.netlify/functions/instagram');
    let instagramPosts = await response.json();
    
    let post0 = instagramPosts[0];
    let photoUrl0 = post0.url;
    let caption0 = post0.caption;

    let post1 = instagramPosts[1];
    let photoUrl1 = post1.url;
    let caption1 = post1.caption;

    let post2 = instagramPosts[2];
    let photoUrl2 = post2.url;
    let caption2 = post2.caption;

    // IG Post 1
    let IGP0 = document.getElementById("igp0");

    let imgEle0 = document.createElement("img");
    imgEle0.src=photoUrl0;
    let captionEle0 = document.createElement("p");
    captionEle0.appendChild(document.createTextNode(caption0));

    IGP0.appendChild(imgEle0);
    IGP0.appendChild(captionEle0);

    // IG Post 2
    let IGP1 = document.getElementById("igp0");

    let imgEle1 = document.createElement("img");
    imgEle1.src=photoUrl1;
    let captionEle1 = document.createElement("p");
    captionEle1.appendChild(document.createTextNode(caption1));

    IGP1.appendChild(imgEle1);
    IGP1.appendChild(captionEle1);

    // IG Post 3
    let IGP2 = document.getElementById("igp0");

    let imgEle2 = document.createElement("img");
    imgEle2.src=photoUrl0;
    let captionEle2 = document.createElement("p");
    captionEle2.appendChild(document.createTextNode(caption0));

    IGP2.appendChild(imgEle2);
    IGP2.appendChild(captionEle2);

    return [
        <div id="instagram-container">
            <div id="igp0">

            </div>
            <div id="igp1">
                
            </div>
            <div id="igp2">
                
            </div>
        </div>

    ]
    // 

  }

export default InstagramData 
