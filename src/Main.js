import React, { useState } from "react";
import Home from "./Components/TopSlide/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import PDF from "./Components/About/PDF";

const Main = () => {
  const [showResume, setShowResume] = useState(false);
  return (
    <>
      {!showResume ? (
        <div>
          <Navbar />
          <Home />
          <About showResume={showResume} setShowResume={setShowResume} />
        </div>
      ) : (
        <PDF />
      )}
    </>
  );
};

export default Main;
