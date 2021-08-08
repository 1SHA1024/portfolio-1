import React from "react";
import styled from "styled-components";
import WorkCard from "./WorkCard";

function Projects() {
  return (
    <Container>
      <h2>My Work</h2>
      <WorkCard img="/project1.png" title="Movies App" />
      <WorkCard img="/project2.png" title="Job Finding App" />
      <WorkCard img="/project3.png" title="Full Ecommerce App" />
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* background-color: #4C2A4B; */
  background: rgb(51, 51, 51);
  background: linear-gradient(
    90deg,
    rgba(51, 51, 51, 1) 10%,
    rgba(76, 42, 75, 1) 95%
  );
  color: #0ccda1;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;
  padding: 5rem 0;
  gap: 30px;

  h2 {
    position: absolute;
    width: auto;
    justify-content: center;
    top: 0;
    margin-bottom: 4rem;
  }
`;
