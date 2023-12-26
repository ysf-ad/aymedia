import React from "react";
import { Link } from "react-router-dom";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Our Clients</h2>
        </div>
        <div className="row testimonials-row" style={{display:"flex", justifyContent:"center"}}>
          {props.data
            ? props.data.map((d, i) => (
                <div class={d.name} key={`${d.name}-${i}`} style={{display:"flex"}}>
                  <div className="testimonial" style={{display:"flex", alignItems:"center"}}>
                       <Link to={d.name}>
                      <img src={d.img} alt="" style={{filter:"opacity(0.5)", width:"min(20em, 90vw)"}} />{" "}
                      </Link>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
