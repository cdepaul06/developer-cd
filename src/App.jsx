import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    // This sets the initial state of isMobile based on the result of the media query
    setisMobile(mediaQuery.matches);

    // This function updates the state of isMobile whenever the media query result changes
    const handleMediaQueryChange = (e) => {
      setisMobile(e.matches);
    };

    // This adds an event listener to call handleMediaQueryChange whenever the media query result changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // This removes the event listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  console.log("### isMobile", isMobile);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero isMobile={isMobile} />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works isMobile={isMobile} />
        <Feedbacks />
      </div>
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
