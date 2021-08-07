import React from "react";
import styled from "styled-components";

import Web1 from "../icons/Web1";
function AppRouter() {
  return (
    <Container id="LandingSection">
      <Contant>
        <Text>
          <p>
            <span>Hi </span>everyone,
            <br />
            my name is
            <span> Tal Mamistvalov,</span>
            <br />
            And i am a Full stack developer
          </p>
          <ButtonContainer >
            <a href="/talCv.docx" download="Tal Mamistvalov Cv">
              Download Resume
            </a>
            <Button>dfdf</Button>
          </ButtonContainer>
        </Text>
      </Contant>
      <Contant2>
        <img src="/portraitZip.jpg" alt="" />
        {/* {<Web1/> } */}
      </Contant2>
    </Container>
  );
}

export default AppRouter;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  color: #0ccda1;
  background-image: url("/geometryZip.jpg");
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  a {
    color: #fff;
    text-decoration: none;
    border: 1px solid #fff;
    width: fit-content;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 20px;
  }
  a:hover {
    color: #0ccda1;
    border-color: #0ccda1;
    transition: 250ms;
  }
  @media only screen and (max-width: 769px) {
    /* display: none; */
    display: flex;
    flex-direction: column;
    height: 50vh;
  }
`;

const Text = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.2;
  font-size: 45px;
  user-select: none;
  p {
    width: 100%;
  }
  span {
    color: #fff;
  }

  /* @media only screen and (max-width: 1720px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 769px) {
    font-size: 26px;
    width: 80%;
  } */
  @media only screen and (max-width: 561px) {
    font-size: 14px;
    width: 100%;
    line-height: 1.4;
  }
`;

const Contant = styled.div`
  flex: 0.6;
  height: 100%;
  /* width: 90%; */
  margin: auto;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;

  @media only screen and (max-width: 769px) {
    /* display: none; */
    object-fit: contain;
    flex: 0.4;
    font-size: 25px;
  }
`;

const Contant2 = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  flex: 0.4;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  @media only screen and (max-width: 769px) {
    display: none;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.2;
  }
`;

const Button = styled.button`
  color: #fff;
  text-decoration: none;
  border: 1px solid #fff;
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 20px;
  background-color: transparent;

  &:hover {
    color: #0ccda1;
    border-color: #0ccda1;
    transition: 250ms;
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
width: 100%;
display: flex;
justify-content: left;
gap: 30px;
`
