import React from "react";
import styled from "styled-components";

function AppRouter() {
  return (
    <Container>
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
  background-image: url("/Mirage.jpg");
  display: flex;
  /* align-content: flex-start; */
`;

const Text = styled.div`
  /* width: 50%; */
  display: flex;
  flex-direction: column;
  /* align-content: flex-start; */
  line-height: 1.2;
  font-size: 50px;
  justify-content: left;
  span {
    color: #fff;
  }
`;

const Contant = styled.div`
  /* width: 100%; */
  flex: 0.6;

  height: 100%;
  margin: auto;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: url("/blob.svg");
`;

const Contant2 = styled.div`
  /* width: 250px; */
  /* height: 40vh; */
  margin: auto;
  flex: 0.4;
  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* background-image: url("/portrait.jpg"); */
  background-size: contain;
  /* position: absolute; */
  /* background-image: url("/blob.svg"); */
  /* box-shadow: 0 0 5px 10px #2F4D5D; */
  /* border-radius: 50%; */

  img {
    width: 100%;
    max-width: 500px;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    opacity: 0.7;
  }
`;
