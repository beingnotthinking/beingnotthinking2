import './InstagramData.css';

import { Link } from "react-router-dom";

async function InstagramData() {
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
  }

export default InstagramData
