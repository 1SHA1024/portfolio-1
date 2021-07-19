import React from "react";
import styled from "styled-components";

import Web1 from '../icons/Web1'
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
  height: 80vh;
  background-color: transparent;
  color: #0ccda1;
   /* background-image: url("/svg/land.svg"); */
  background-image: url("/geometryZip.jpg"); 
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  
  /* align-content: flex-start; */
  @media only screen and (max-width: 769px) {
  /* display: none; */
    display: flex;
    flex-direction: column;
  
}
`;

// const TextContainer = styled.div`
//   width: 100%;
//   height: 80vh;

// `;


const Text = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* align-content: flex-start; */
  line-height: 1.2;
  font-size: 45px;
  justify-content: left;
  user-select: none;
  span {
    color: #fff;
  }

  @media only screen and (max-width: 1720px) {
    font-size: 30px;
  
}
  @media only screen and (max-width: 769px) {
    font-size: 26px;
  width: 80%;

  
}
  @media only screen and (max-width: 561px) {
    font-size: 14px;
  width: 90%;
  line-height: 1.4;


  
}
`;

const Contant = styled.div`
  /* width: 100%; */
  flex: 0.6;
  

  height: 100%;
  width: 100%;
  margin: auto;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  /* @media only screen and (max-width: 769px) {
   background-image: url('/portraitZip.jpg');
   background-size: cover;
  
} */
@media only screen and (max-width: 769px) {
  /* display: none; */
  object-fit: contain;
    flex: 0.4;
    font-size: 25px;
}


`;

const Contant2 = styled.div`
  /* width: 250px; */
  /* height: 40vh; */
  width: 100%;
  height: 80vh;
  margin: auto;
  flex: 0.4;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  /* display: none; */
  @media only screen and (max-width: 769px) {
  display: none;
  /* object-fit: cover;
    flex: 0.6;
   */
    
}
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    opacity: 0.2;

  }
`;


