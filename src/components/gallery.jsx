import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        {/* <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div> */}
        <div style={{position:"relative", textAlign:"center", margin:"0 10%"}}>
        <p style={{font:"24px"}}>Our Instagram</p>
        <div><img src='img/aymedialogo-slim.png' width='200em'/></div>
        <a href="https://www.instagram.com/aymedia.agency/">
        <button className="follow-button">follow</button>
        </a>
        <figure data-behold-id="YaiWmSlDgZBLRX4Zl3zw"></figure>
    </div>
      </div>
    </div>
  );
};

