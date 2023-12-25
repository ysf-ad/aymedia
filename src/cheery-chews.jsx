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

const CheeryChews = () => {
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
        <div className="client-title"><img src={JsonData ? JsonData.Testimonials[1].img : ""}></img>
        </div>
        <div className="client-title">Cheery Chews Case Study</div>
        <div className="client-info-container">
            <p>
            Cheery Chews, born in Markham, Ontario, leverages over 50 years of collective experience in food and hospitality to create a diverse range of confections. Their offerings, from gummy candies to creamy toffees, are 100% halal, meeting demands in North America and beyond. With a focus on innovation and customer satisfaction, Cheery Chews' dynamic R&D ensures every treat, like their popular marshmallows, is a delightful, inclusive experience.
            </p>
            <h2>Problem</h2>
            <p>
            Despite having an established content creation system, Cheery Chews faced a significant challenge: their social media content was not engaging their audience effectively, leading to stagnant growth in their digital presence. The need was clear - to revitalize their online engagement and expand their reach to a broader audience.
            </p>
            <h2>Our Approach</h2>
            <p>
            In response, we initiated a campaign focused on popular platforms like TikTok and Instagram Reels. Our strategy involved crafting general promotions for products and events, tailored to resonate with the platforms' dynamic and diverse audiences. By leveraging the unique features of these social media channels, we aimed to showcase Cheery Chews' products in a fresh, appealing light.
            </p>
            <h2>Results</h2>
            <p>
            Our efforts paid off remarkably. Cheery Chews experienced well over 2X increase in views and reach, accompanied by a surge in post engagement. This boost not only enhanced their immediate digital footprint but also had a lasting impact. Even after our services concluded, Cheery Chews' TikTok page continued to see elevated levels of engagement, indicating a sustained and significant improvement in their online presence.
            </p>
            <iframe src="https://drive.google.com/file/d/1zrsB4FLgv4WfCewzsIY2s6MVv6mRILKZ/preview" width="270" height="480" allow="autoplay"></iframe>
        </div>
    </div>
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default CheeryChews;
