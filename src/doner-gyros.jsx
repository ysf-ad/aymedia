import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const DonerGyros = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
    console.log(JsonData)
  }, []);

  return (
    <div>
        <div>
            <Navigation></Navigation>
        </div>
      <div style={{marginTop:"100px"}}>
        <div className="client-title"><img src={JsonData ? JsonData.Testimonials[0].img : ""}></img>
        </div>
        <div className="client-title">Doner & Gyros Case Study</div>
        <div className="client-info-container">
            <p>404
            </p>
        </div>
    </div>
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default DonerGyros;
