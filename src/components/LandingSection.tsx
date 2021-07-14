import React from "react";
import styled from "styled-components";
// import * as Blogging from '/blogging.svg'
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
          {/* <img src="/blob.svg" alt="" /> */}
        </Text>
      </Contant>
      <Contant2>
         <img src="/portrait.jpg" alt="" /> 
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
  background-image: url("/geometry2.jpg"); 
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  
  /* align-content: flex-start; */
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-content: flex-start; */
  line-height: 1.2;
  font-size: 45px;
  justify-content: left;
  span {
    color: #fff;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 35px;
  
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
  align-items: center;
  justify-content: space-around;
  /* background-image: url("/blob.svg"); */
  /* background-attachment: fixed;
  background-size: 300px 100px;
  background-position:center; 
  background-repeat: no-repeat; */
`;

const Contant2 = styled.div`
  /* width: 250px; */
  /* height: 40vh; */
  width: 100%;
  height: 80vh;
  margin: auto;
  flex: 0.4;
  /* background-color: green; */
  /* display: flex; */
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  /* justify-content: space-around; */
  /* background-image: url("/portrait.jpg"); */
  /* background-size: cover; */
  /* clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%); */
  /* clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%); */
  /* position: relative; */

 

  img {
    width: 100%;
    height: 80vh;
    /* max-width: 500px; */
    /* height: 100%; */
    /* object-fit: contain; */
    object-fit: cover;
    /* object-position:start; */
    
    
    opacity: 0.2;
    /* margin: auto; */
    /* position: fixed;
     */
  }
`;


