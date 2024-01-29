import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import Myglamm from "../../Assets/Projects/Chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import youtube from "../../Assets/Projects/youtube.png";
import Unsplash from "../../Assets/Projects/unsplash.png";
import Image1 from './portfolio-images/11.8 inch tablet 1.jpg';
import Image3 from  './portfolio-images/11.8 inch tablet 2.jpg';
import Image4 from  './portfolio-images/11.8 inch tablet.jpg';
import Image5 from  './portfolio-images/18.5MM ROUND SHAPE CAMERA DBASE.jpg';
import Image2 from  './portfolio-images/4 in 1 Charging Cable.jpeg';
import Image6 from  './portfolio-images/ACTIVE BASS REACTOR WITH AMPILIFIER MABT2120.jpg';
import Image7 from  './portfolio-images/CAR DIGITAL VIDEO RECORDER DBDVR03 DASH CAM 9.jpg';
import Image8 from  './portfolio-images/CAR MP3 PLAYERM MAR12BT 2.jpg';
import Image9 from  './portfolio-images/Charger mega V17.jpg';
import Image10 from './portfolio-images/Charger mega V17.jpg';
import Image11 from './portfolio-images/LED Box design.jpg';
import Image12 from './portfolio-images/Luxury Car Spray Pefume (marine) 2 (1).jpg';
import Image13 from './portfolio-images/Luxury Car Spray Pefume (marine) 2.jpg';
import Image14 from './portfolio-images/MATI08 manual.jpg';
import Image15 from './portfolio-images/MATI08.jpg';
import Image16 from './portfolio-images/Next base floating.jpg';
import Image17 from './portfolio-images/QUALCOMM FLOATING SCREEN 2.jpg';
import Image18 from './portfolio-images/QUALCOMM FLOATING SCREEN 5.jpg';
import Image19 from './portfolio-images/SAPRE TYRE ACTIVE SUBWOOFER MABT2121 2.jpg';
import Image20 from './portfolio-images/SAPRE TYRE ACTIVE SUBWOOFER MABT2121 3.jpg';
import Image21 from './portfolio-images/SAPRE TYRE ACTIVE SUBWOOFER MABT2121 6.jpg';
import Image22 from './portfolio-images/Tire inflator with vacuum cleaner MATI07.jpg';
import Image23 from './portfolio-images/UNIVERSAL DASHBOARD HOLDER MAMH06.jpg';
import Image24 from './portfolio-images/WHITE ECSTASY 2 (1).jpg';
import Image25 from './portfolio-images/WHITE ECSTASY 2.jpg';
import Image26 from './portfolio-images/WHITE ECSTASY 3 (1).jpg';
import Image27 from './portfolio-images/SAPRE TYRE ACTIVE SUBWOOFER MABT2121 6.jpg';
import Image28 from './portfolio-images/WHITE ECSTASY 3.jpg';
import Image29 from './portfolio-images/active base tube 8 inches dbbt04.jpg';
import Image31 from './portfolio-images/car wiper.jpg';
import Image32 from './portfolio-images/charging cable.jpg';
import Image33 from './portfolio-images/discovery series 1 (1).jpg';
import Image34 from './portfolio-images/discovery series 1.jpg';
import Image35 from './portfolio-images/discovery series 4 (1).jpg';
import Image36 from './portfolio-images/discovery series 4.jpg';
import Image37 from './portfolio-images/discovery series 5.jpg';
import Image38 from './portfolio-images/led lights 110watts.jpg';
import Image39 from './portfolio-images/magnetic wirelss car charger MAWC02  3.jpg';
import Image40 from './portfolio-images/magnetic wirelss car charger MAWC02  5.jpg';
import Image41 from './portfolio-images/slim subwoofer.jpg';
import Image43 from './portfolio-images/vacuum cleaner DBVC01 (1 Box).jpg'

import {  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function Projects() {
  return (
    <Container fluid id="kyakiya" className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image1}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image2}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image3}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image4}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image5}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image6}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image7}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image8}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image9}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image10}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image11}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image12}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image13}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image14}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image15}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image16}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image17}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image18}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image19}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image20}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image21}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image22}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image23}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image24}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image25}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image26}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image27}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image28}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image29}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image31}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image32}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image33}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image34}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image35}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image36}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image37}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image38}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image39}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image40}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image41}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Image43}
              isBlog={false}
              title="11.1 inch Tablet"
            />
          </Col>
        
        </Row>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nikeshkumarsingh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/nikeshKumar1947"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nikesh-kumar-singh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <Popup trigger={<li className="social-icons"><a rel="noreferrer" className="icon-colour  home-social-icons">< AiFillPhone/></a></li>}><div>+91 6205021314</div></Popup>
              <li  className="social-icons"><a rel="noreferrer" href="mailto:nikeshmasai@gmail.com" className="icon-colour  home-social-icons"><AiOutlineMail/></a></li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
