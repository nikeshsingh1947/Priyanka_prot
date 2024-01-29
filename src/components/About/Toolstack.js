import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiAdobephotoshop
} from "react-icons/si";
import { GiTeamIdea } from "react-icons/gi";
import Corel from "../../Assets/coreldraw-gs2019-2.svg"
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Image  style={{ width:"200px" }}src={Corel} alt ="logo"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <GiTeamIdea />
      </Col>
    </Row>
  );
}

export default Toolstack;
