import React from 'react';
import {Container, Row, Col} from 'react-bootstrap/Container';
import reactImage from 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png';
import nodeImage from 'https://img.icons8.com/color/48/000000/nodejs.png';
import bootstrapImage from 'https://img.icons8.com/color/48/000000/bootstrap.png';
import htmlImage from 'https://img.icons8.com/color/48/000000/html-5--v1.png';
import jQueryImage from 'https://img.icons8.com/ios-filled/48/1169ae/jquery.png';
import gitImage from 'https://img.icons8.com/color/48/000000/git.png';
import cssImage from 'https://img.icons8.com/color/48/000000/css3.png';
import githubImage from 'https://img.icons8.com/glyph-neue/48/ffffff/github.png';
import jsImage from 'https://img.icons8.com/color/48/000000/javascript--v1.png';
import javaImage from 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png';
import pythonImage from 'https://img.icons8.com/color/48/000000/python--v1.png';
import cImage from 'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png';


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
                              <img src={reactImage} alt="skill" />
                              <span>ReactJS</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                              <img src={nodeImage} alt="skill" />
                              <span>NodeJS</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                              <img src={bootstrapImage} alt="skill" />
                              <span>Bootstrap</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                              <img src={htmlImage} alt="skill" />
                              <span>HTML5</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                            <img src={jQueryImage} alt="skill" />
                            <span>jQuery</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                            <img src={gitImage} alt="skill" />
                            <span>Git VCS</span>
                            </div>
                        </div>
                    </Row>
                    <Row className="row">
                        <div class="bar">
                            <div class="info">
                              <img src={cssImage} alt="skill" />
                              <span>CSS3</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                              <img src={githubImage} alt="skill" />
                              <span>GitHub</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                              <img src={jsImage} alt="skill" />
                              <span>JavaScript</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                              <img src={javaImage} alt="skill" />
                              <span>Java</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                              <img src={pythonImage} alt="skill" />
                              <span>Python</span>
                            </div>
                        </div>

                        <div class="bar">
                            <div class="info">
                              <img src={cImage} alt="skill" />
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