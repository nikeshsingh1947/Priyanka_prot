import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Priyanka.jpg";
import Tilt from "react-parallax-tilt";
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
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! My name is Priyanka Baghel and I enjoy creating things that are live
              on the internet. My interest in Graphic  Designer started back in
              year 2019 when I was learning editing images on mobile.
              <br />
              Fast Forwarding to today, I built a number designes and
              some major projects. Learned a great deal about teamwork, leadership,
              and communication. After a year of rigorous training, here I am
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Graphics and Products </b>
              </i>
              <br />
              <br />I also apply my passion for developing products with{" "}
              <b className="purple">Coral</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Software
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Adobe Ps</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
      
              <img src={myImg} style={{"width":"50%","border-radius":"9%"}} className="img-fluid" alt="avatar" />
          
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
export default Home2;
