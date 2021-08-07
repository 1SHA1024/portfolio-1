import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup'

function WorkCard({img, title}:any) {
  return (
    <>
      <Card style={{ width: "18rem" , color: '#fff' ,border:'#fff 1px solid',padding:"0.5rem" ,borderRadius:"10px"}}>
        <Card.Img style={{width:"100%"}} variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        {/* <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup> */}
        <Card.Body>
          <Card.Link style={{textDecoration:"none" ,color:"#fff"}} href="#">Card Link</Card.Link>
          {/* <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </>
  );
}

export default WorkCard;

const Container = styled.div`
  width: 20%;
  height: 200px;
  color: #0ccda1;
  display: flex;
  background-color: burlywood;
  @media only screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
  }
`;
