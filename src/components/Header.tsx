import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";

function Header() {
  return (
    <Container>
      <NavBar>
        <Link to="/">
          <img src="/logo.svg" alt="" />
        </Link>

        <Links>
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
        </Links>
        <Social>
          <a href="https://www.linkedin.com/in/tal-mamistvalov/">
            {" "}
            <LinkedInIcon style={{ fontSize: 25, color: "#00ffc3" }} />
          </a>
          <a href="">
            <GitHubIcon style={{ fontSize: 25, color: "#00ffc3" }} />
          </a>
          <a href="">
            <FacebookIcon style={{ fontSize: 25, color: "#00ffc3" }} />
          </a>
        </Social>
      </NavBar>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  height: 5.5vh;
  background-color: transparent;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  position: fixed;
  margin-top: 1rem;
`;

const NavBar = styled.div`
  width: 95%;
  height: 90%;
  margin: auto;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    height: calc(65px + 2.2vw);
    max-height: 130px;
  }
`;
const Links = styled.div`
  width: 40%;
  height: 100%;
  background-color: transparent;
  align-items: center;
  justify-content: space-around;
  display: flex;
  a {
    color: #000;
    color: #00ffc3;

    text-decoration: none;
  }
`;

const Social = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-between;
`;
