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
        <img src='img/aymedialogo-slim.png' width='200em'/>
      <iframe 
      src="//lightwidget.com/widgets/97cf9e95a0705fed9d924fc8d7e11814.html"
      scrolling="no"
      allowTransparency="true"
      className="lightwidget-widget"
      style={{ width: '100%', border: 0, overflow: 'hidden' }}
    ></iframe>
    </div>
      </div>
    </div>
  );
};
