import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingSection from "./components/LandingSection";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import {Web1} from './icons'
import {CounterCom} from './components/CounterCom'
import ContactCom from './components/Contact'
import styled from "styled-components";
import Projects from './components/Projects'
export {}
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
          <Projects/>
          <ContactCom/>
          {/* <CounterCom/> */}
        <Footer />
      </Router>
     
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
  width: 75px;
  height: 65px;
  opacity: 0.7;
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
    bottom: -5px;
    left: 1px;
    
   
  }
`;

const MainLanding = styled.div`

  background-position: center;
  background-repeat: no-repeat;
  background-size:cover;
  opacity: 0.6;
  z-index: 1000;
  color: hsl(166.32124352331607, 88.9400921658986%, 42.54901960784314%);
  object-fit:cover
`;


