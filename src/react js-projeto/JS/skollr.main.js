import React from "react";
import { scroller } from "react-scroll";

const ScrollToElement = () => {
  const scrollToElement = () => {
    scroller.scrollTo("my-element-id", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div>
      <button onClick={scrollToElement}>Scroll to Element</button>
      <div id="my-element-id">This is the element to scroll to</div>
    </div>
  );
};

export default ScrollToElement;
