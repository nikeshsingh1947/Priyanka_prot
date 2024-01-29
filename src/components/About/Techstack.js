import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiNpm,
  DiHtml5,
  DiCss3,

 
} from "react-icons/di";
import Fastlern from "../../Assets/fast lerner.png";
import Communication from "../../Assets/comm.png";
import TeamColl from "../../Assets/team collabration.png";
import ProblemSolve from "../../Assets/problem.png";
import {
  SiExpress,
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Image src={Fastlern}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Image src={Communication}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Image src={TeamColl}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Image src={ProblemSolve}/>
      </Col>
    </Row>
  );
}

export default Techstack;
