import React from 'react';
import { Container, Row } from "react-bootstrap";
import { SiReact } from "react-icons/si"; 
import { SiNodedotjs } from "react-icons/si"; 
import { SiBootstrap } from "react-icons/si"; 
import { SiHtml5 } from "react-icons/si"; 
import { SiJquery } from "react-icons/si"; 
import { SiGithub } from "react-icons/si"; 
import { SiGit } from "react-icons/si"; 
import { SiCss3 } from "react-icons/si"; 
import { SiJavascript } from "react-icons/si"; 
import { SiPython } from "react-icons/si"; 
import { SiCplusplus } from "react-icons/si"; 


function Skills() {
    return (
        <section>
            <Container fluid className="skills-section" id="skills">
                <Container>
                    <Row className="row">
                        <h1>My skills</h1>
                    </Row>
                    <Row className="row">
                        <div className='bar'>
                            <div className='info'>
                              <img src={SiReact} alt="skill" />
                              <span>ReactJS</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                              <img src={SiNodedotjs} alt="skill" />
                              <span>NodeJS</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                              <img src={SiBootstrap} alt="skill" />
                              <span>Bootstrap</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                              <img src={SiHtml5} alt="skill" />
                              <span>HTML5</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                            <img src={SiJquery} alt="skill" />
                            <span>jQuery</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                            <img src={SiGit} alt="skill" />
                            <span>Git VCS</span>
                            </div>
                        </div>
                    </Row>
                    <Row className="row">
                        <div class="bar">
                            <div class="info">
                              <img src={SiCss3} alt="skill" />
                              <span>CSS3</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                              <img src={SiGithub} alt="skill" />
                              <span>GitHub</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                              <img src={SiJavascript} alt="skill" />
                              <span>JavaScript</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                              <img src={SiPython} alt="skill" />
                              <span>Python</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                              <img src={SiCplusplus} alt="skill" />
                              <span>C++</span>
                            </div>
                        </div>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Skills;