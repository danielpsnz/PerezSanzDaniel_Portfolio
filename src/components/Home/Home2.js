import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/aboutme.jpeg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";


function Home2() {
    return (
        <Container fluid className="about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                About <span className="purple"> me </span> 
              </h1>
              <p className="about-body">
              I am a Mathematics and Economics undergraduate at the University of York. 
              Last year, I worked at the Ministry of Justice as a statistician, because of 
              that, I have mastered my knowledge in R, Python, SAS, AWS, And Data Science. 
              I am currently doing a Front-End Development bootcamp to boost my career. 
              I have also completed a financial modelling certification by the Corporate 
              Finance Institute and have the ability to speak Spanish, English and French 
              at a professional level.
              </p>
            </Col>
            <Col md={4} className="myImg">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="a photo of me" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="about-social">
              <h1>You can also check my social media</h1>
              <ul className="about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/danielpsnz"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/danielpsnz"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/danielpsnz/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/danielpsnz"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    );
}

export default Home2;

