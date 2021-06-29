import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <NavBar>
        <Link to="/">
          <img src="/logo.svg" alt="" />
        </Link>

        <Links>
          <Link to="/chat">chat</Link>
          <Link to="/Footer">footer</Link>
        </Links>
      </NavBar>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  height: 71px;
  background-color: red;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  margin: auto;
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
    width: 130px;
  }
`;
const Links = styled.div`
  width: 60%;
  height: 100%;
  background-color: plum;
  align-items: center;
  justify-content: space-around;
  display: flex;
`;
