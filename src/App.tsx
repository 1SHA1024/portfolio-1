import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingSection from "./components/LandingSection";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";

import styled from "styled-components";

function App() {
  const containerVarient = {
    hover: {
      height: 200,
      opacity:0.8,
     
      icon:{
        delay:1,
        duration:1

      }
    },
      
  };
  return (
    <AppStyle>
      <Router>
        <Header />
        <LandingSection />
        <LandingSection />

        <Footer />
      </Router>
      <Contact variants={containerVarient} whileHover="hover" animate="icon" ><img src="/social-media.svg" alt="" /></Contact>
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Contact = styled(motion.div)`
  width: 50px;
  height: 50px;
  opacity: 0.3;
  background-color: violet;
  border-radius: 10px;
  position: fixed;
  left: 20px;
  bottom: 20px;
  overflow: hidden;
  

  img{
    width: 45px;
    position: absolute;
    align-items: flex-end;
    justify-content: center;
    bottom: 0;
    left: 4px;
  }
`;
