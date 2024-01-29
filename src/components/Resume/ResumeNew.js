import React, { useState, useEffect } from "react";
import { Container, Row ,Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Resume NT.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://drive.google.com/uc?export=download&id=1aJJRH6I2eCg6XEb89l7GzYklKzGkHaPK";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", marginBottom:"50px"}}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 600 ? 1.5 : 0.6} />
          </Document>
        </Row> */}

        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <Popup trigger={<li className="social-icons"><a rel="noreferrer" className="icon-colour  home-social-icons">< AiFillPhone/></a></li>}><div>+91 8178288653</div></Popup>
              <li  className="social-icons"><a rel="noreferrer" href="mailto:priyankabaghel8178@gmail.com" className="icon-colour  home-social-icons"><AiOutlineMail/></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
