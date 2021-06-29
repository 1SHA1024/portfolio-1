import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import AppROuter from "./components/AppRouter/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AppROuter />
        <AppROuter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
