import { Grid2, Typography } from "@mui/material";
import React from "react";
import { CiAlarmOn } from "react-icons/ci";

function WhyChooseConcept() {
  return (
    // <section className="why-choose-section d-flex justify-content-center align-items-center">
    //   <div className="why-choose-container">
    //     <div className="row align-items-center">
    //       <div className="text-start">
    //         <h4 className="why-title">
    //           WHY CHOOSE <span className="concept-text">CONCEPT?</span>
    //         </h4>
    //         <h5 className="why-subtitle">
    //           SAVE TIME WITH CONCEPT, THE COMPREHENSIVE WEBSITE CONSTRUCTION
    //           TOOLKIT.
    //         </h5>
    //         <button className="btn purchase-now-btn mt-4">
    //           <i className="fas fa-play-circle"></i> Purchase Now
    //         </button>
    //       </div>
    //       <div className="features-list">
    //         <div className="d-flex justify-content-between align-items-center mb-4">
    //           <div className="feature-item">
    //             <div className="feature-icon">
    //               <i className="fas fa-layer-group"></i>
    //             </div>
    //             <h6>Top-Notch Design</h6>
    //           </div>
    //           <div className="feature-item">
    //             <div className="feature-icon">
    //               <i className="fas fa-chart-line"></i>
    //             </div>
    //             <h6>Great Performance</h6>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="whychooseContainer">
      <div className="left_side">
          <Typography
            sx={{
              background:
                "linear-gradient(90deg, #8140E4 4.06%, #2190ED 31.42%, #6556A7 68.67%, #FF2A71 106.18%) border-box;",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            WHY CHOOSE CONCEPT?
          </Typography>
          <Typography sx={{ fontSize: "clamp(40px, 3.5vw, 80px)" }}>
            Save time with CONCEPT, the comprehensive website construction
            toolkit.
          </Typography>
          <button className="purchase_now">Purchase Now</button>
          </div>
          <div className="right_side">
            <div className="icon_container">
              <div className="icon-container">
              <CiAlarmOn />
              </div>
              <div>Top-Notch Design</div>
            </div>
            <div className="icon_container">
              <div className="icon-container">
              <CiAlarmOn />
              </div>
              <div>Great Performance</div>
            </div>
            <div className="icon_container">
              <div className="icon-container">
              <CiAlarmOn />
              </div>
              <div>Maximum Customizability</div>
            </div>
            <div className="icon_container">
              <div className="icon-container">
              <CiAlarmOn />
              </div>
              <div>Impeccable UI/ UX & Animation</div>
            </div>
          </div>
        
      
    </section>
  );
}

export default WhyChooseConcept;
