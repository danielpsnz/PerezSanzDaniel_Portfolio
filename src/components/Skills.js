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
                              <div className='icon'><SiReact /></div>
                              <span>ReactJS</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                            <div className='icon'><SiNodedotjs /></div>
                              <span>NodeJS</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                            <div className='icon'><SiBootstrap /></div>
                              <span>Bootstrap</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                            <div className='icon'><SiHtml5 /></div>
                              <span>HTML5</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                            <div className='icon'><SiJquery /></div>
                            <span>jQuery</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                            <div className='icon'><SiGit /></div>
                            <span>Git VCS</span>
                            </div>
                        </div>
                    </Row>
                    <Row className="row">
                        <div class="bar">
                            <div class="info">
                            <div className='icon'><SiCss3 /></div>
                              <span>CSS3</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                            <div className='icon'><SiGithub /></div>
                              <span>GitHub</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                            <div className='icon'><SiJavascript /></div>
                              <span>JavaScript</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                            <div className='icon'><SiPython /></div>
                              <span>Python</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                            <div className='icon'><SiCplusplus /></div>
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