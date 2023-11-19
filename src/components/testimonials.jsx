import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Our Clients</h2>
        </div>
        <div className="row" style={{display:"flex", justifyContent:"center"}}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`}>
                  <div className="testimonial">
                    
                      <img src={d.img} alt="" style={{filter:"opacity(0.5)"}} />{" "}

                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
