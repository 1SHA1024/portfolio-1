import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Container>
      <LeftImage>
      <img src="/portraitZip.jpg" alt="" />

      </LeftImage>
      <RightContant>
          dfdfsdf
    </RightContant>
    </Container>
  );
}

const Container = styled.div`
  color: #0ccda1;
  display: flex;
`;

const LeftImage = styled.div`
  flex: 0.5;
justify-content: center;
align-items: center;
display: flex;
 
  img {
    width: 60%;
    height: 55%;
    object-fit: cover;
    opacity: 0.2;
    border-radius: 200px;
  }
`;

const RightContant = styled.div`
  flex: 0.5;
`;
