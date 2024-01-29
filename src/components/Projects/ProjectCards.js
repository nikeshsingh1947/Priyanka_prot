import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      {/* <Card.Body>
        
        <Button variant="primary" href={props.link1} target="_blank" style={{"margin":"5px"}}>
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : `View Git  `}
        </Button>
        <Button variant="primary" href={props.link2} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View web"}
        </Button>
      </Card.Body> */}
    </Card>
  );
}
export default ProjectCards;
