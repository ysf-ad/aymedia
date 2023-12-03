import React from "react";

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
                <div key={`${d.name}-${i}`} style={{display:"flex"}}>
                  <div className="testimonial" style={{display:"flex", alignItems:"center"}}>
                    
                      <img src={d.img} alt="" style={{filter:"opacity(0.5)", width:"min(20em, 90vw)"}} />{" "}

                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
