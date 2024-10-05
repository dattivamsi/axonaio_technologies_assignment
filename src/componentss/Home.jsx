import React from "react";
import WhyChooseConcept from "./WhyChooseConcept";

function App() {
  return (
    <div className="App">
      <header className="hero-section text-center d-flex justify-content-center align-items-center">
        <div className="content">
          <h1 className="display-4">
            <span className="concept">CONCEPT</span>{" "}
            <span className="theme">THEME</span>
          </h1>
          <h2 className="font-weight-bold">BEYOND BOUNDARIES</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p className="description mx-auto">
              Unleash the extraordinary with CONCEPT – Where creativity goes
              beyond templates, beyond boundaries – Where Design Meets
              Distinction.
            </p>
          </div>
          <div className="buttons d-flex justify-content-center gap-3 mt-40 buttonscontainer">
            <button className="btn btn-primary purchase-btn">
              Purchase Now
            </button>
            <button className="btn btn-outline-light trial-btn">
              Start FREE Trial
            </button>
          </div>
        </div>
        {/* <div className="discover position-absolute bottom-0 end-0 pe-5 pb-3">
          <span>Discover now !</span>
        </div> */}
        <WhyChooseConcept />
        <section className="sales-section d-flex justify-content-center align-items-center text-center">
          <div className="sales-content">
            <h3 className="footerText">
              ELEVATE YOUR SALES TO{" "}
              <span className="highlight">UNPRECEDENTED HEIGHTS</span> WITH
              CONCEPT!
            </h3>
            <p className="all_inclusive">
              One license, all-inclusive: support, lifetime updates, plugins,
              and all listed features.
            </p>
            <div className="buttons mt-4">
              <button className="purchasenow_button">Purchase Now</button>
            </div>
            <p className="copyright mt-5">
              Copyright © CONCEPT All Rights Reserved. Powered by{" "}
              <span className="powered-by">Halothemes</span>
            </p>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
