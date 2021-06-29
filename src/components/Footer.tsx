import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
           <p>footer</p> 
        </Container>
    )
}

export default Footer

const Container= styled.div`
width: 100%;
height: 100%;
flex: 0.05;
background-color: green;
align-items: center;
text-align: center;
justify-content: center;

`