import React from 'react'
import styled from "styled-components";
import WorkCard from './WorkCard';

function Projects() {
    return (
        <Container>
            <h2>My Work</h2>
            <WorkCard img="/project1.png"/>
            <WorkCard img="/project2.png"/>
            <WorkCard img="/project3.png"/>
        </Container>
      
    )
}

export default Projects


const Container = styled.div`
  width: 100%;
  /* height: 80vh; */
  /* height: 700px; */
  display: flex;
  flex-wrap: wrap;
  background-color: #4C2A4B;
  color: #0ccda1;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;
  padding: 5rem 0;

h2{
  position: absolute;
    width: auto;
    /* height: auto; */
  justify-content: center;
  top: 0;
  margin-bottom: 4rem;

}
`;