import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppROuter from "./components/AppRouter/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

import styled from "styled-components";

function App() {
  return (
    <AppStyle>
      <Router>
        <Header />
        <AppROuter />
        <AppROuter />
        <Footer />
      </Router>
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;
