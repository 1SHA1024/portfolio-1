import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";

function Footer() {
  return (
    <Container>
      <Social>
        <a href="https://www.linkedin.com/in/tal-mamistvalov/">
          {" "}
          <LinkedInIcon style={{ fontSize: 28, color: "#00ffc3" }} />
        </a>
        <a href="https://github.com/tal556">
          <GitHubIcon style={{ fontSize: 28, color: "#00ffc3" }} />
        </a>
        <a href="">
          <FacebookIcon style={{ fontSize: 28, color: "#00ffc3" }} />
        </a>
      </Social>
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

const Social = styled.div``;
