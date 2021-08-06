import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Contant>
        <p>
          created by<span> Tal Mamistvalov </span> | &copy; All rights reserved
        </p>
      </Contant>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100%;
  background-color: #333;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #0ccda1;
  span {
    color: #fff;
  }
`;

const Contant = styled.div`
width: 90%;
margin: auto;
padding: 10px 0;
`;
