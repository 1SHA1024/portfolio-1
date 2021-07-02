import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingSection from "./components/LandingSection";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import {Web1} from './icons'

import styled from "styled-components";

function App() {
  const [innerWidth, setinnerWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   setinnerWidth(window.innerWidth)
  //  , [window.innerWidth]})
  const containerVarient = {
    hover: {
      height: 200,
      opacity: 0.8,

      icon: {
        delay: 1,
        duration: 1,
      },
    },
  };
  return (
    <AppStyle>
      <Router>
          <Header />
          <LandingSection />
        <Footer />
      </Router>
      {!(innerWidth <= 960) ? (
        <Contact variants={containerVarient} whileHover="hover" animate="icon">
          {/* <img src="/blogging.svg" alt="" /> */}
          {/* <Web1/> */}
        </Contact>
      ) : (
        ""
      )}
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  position: relative;
  /* background-color: #333333d6; */
`;

const Contact = styled(motion.div)`
  width: 70px;
  height: 60px;
  opacity: 0.3;
  background-color: #887c88;
  border-radius: 10px;
  position: fixed;
  left: 20px;
  bottom: 20px;
  overflow: hidden;

  img {
    width: 100%;
    position: absolute;
    align-items: flex-end;
    justify-content: center;
    bottom: 0;
    left: 4px;
  }
`;

const MainLanding = styled.div`
  /* background-image: url("/blogging.svg"); */
  /* background-image: url('/logo.svg'); */
  background-position: center;
  background-repeat: no-repeat;
  background-size:cover;
  opacity: 0.6;
  z-index: 1000;
  color: #0ccda1;
  object-fit:cover
`;
