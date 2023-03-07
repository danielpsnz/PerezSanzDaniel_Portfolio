import React from 'react';
import {Box, Grid} from "@mui/material";
import { Container, Row } from "react-bootstrap";
import project1Image from '../assets/fisicauned.png';
import project2Image from '../assets/infridge.png';
import project3Image from '../assets/codequiz.png';
import project4Image from '../assets/planner.png';

function Project() {
    return (
        <section>
            <Container fluid className="project-section" id="project">
                <Container>
                    <Row>
                            <h1>My projects</h1>
                    </Row>
                    <Row>
                        <Box>
                            <Grid container display={'flex'} justifyContent={'center'}>
                                <Grid className='item' item xs={12} md={6} key={1}>
                                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                                        <Box component={'img'} src={project1Image} alt={'mockup'}/>
                                        <h1 style={{fontSize: '2rem'}}>Blog about physics</h1>
                                        <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                                            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
                                            <Box className="fork-btn-inner" p={1} border={'2px solid black'} borderRadius={'10px'}>
                                            <a href={'https://fisicauned.onrender.com'} target={"_blank"} rel="noopener noreferrer"><i className={'fisicauned-demo'}/>See demo</a>
                                            </Box>
                                            <Box className="fork-btn-inner" p={1} border={'2px solid black'} borderRadius={'10px'}>
                                            <a href={'https://github.com/danielpsnz/fisica_uned'} target={"_blank"} rel="noopener noreferrer"><i className={'fisicauned-source'}/>See code</a>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid className='item' item xs={12} md={6} key={2}>
                                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                                        <Box component={'img'} src={project2Image} alt={'mockup'}/>
                                        <h1 style={{fontSize: '2rem'}}>InFridge</h1>
                                        <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                                            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
                                            <Box className="fork-btn-inner" p={1} border={'2px solid black'} borderRadius={'10px'}>
                                            <a href={'https://spooky-pictures.github.io/InFridge/'} target={"_blank"} rel="noopener noreferrer"><i className={'infridge-demo'}/>See demo</a>
                                            </Box>
                                            <Box className="fork-btn-inner" p={1} border={'2px solid black'} borderRadius={'10px'}>
                                            <a href={'https://github.com/spOOky-pictures/InFridge'} target={"_blank"} rel="noopener noreferrer"><i className={'infridge-source'}/>See code</a>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid className='item' item xs={12} md={6} key={3}>
                                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                                        <Box component={'img'} src={project3Image} alt={'mockup'}/>
                                        <h1 style={{fontSize: '2rem'}}>Code Quiz</h1>
                                        <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                                            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
                                            <Box className="fork-btn-inner" p={1} border={'2px solid black'} borderRadius={'10px'}>
                                            <a href={'https://danielpsnz.github.io/PerezSanzDaniel_CodeQuiz/'} target={"_blank"} rel="noopener noreferrer"><i className={'codequiz-demo'}/>See demo</a>
                                            </Box>
                                            <Box className="fork-btn-inner" p={1} border={'2px solid black'} borderRadius={'10px'}>
                                            <a href={'https://github.com/danielpsnz/PerezSanzDaniel_CodeQuiz'} target={"_blank"} rel="noopener noreferrer"><i className={'codequiz-source'}/>See code</a>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid className='item' item xs={12} md={6} key={4}>
                                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                                        <Box component={'img'} src={project4Image} alt={'mockup'}/>
                                        <h1 style={{fontSize: '2rem'}}>Planner App</h1>
                                        <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                                            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
                                            <Box className="fork-btn-inner" p={1} border={'2px solid black'} borderRadius={'10px'}>
                                            <a href={'https://danielpsnz.github.io/PerezSanzDaniel_PlannerApp/'} target={"_blank"} rel="noopener noreferrer"><i className={'planner-demo'}/>See demo</a>
                                            </Box>
                                            <Box className="fork-btn-inner" p={1} border={'2px solid black'} borderRadius={'10px'}>
                                            <a href={'https://github.com/danielpsnz/PerezSanzDaniel_PlannerApp'} target={"_blank"} rel="noopener noreferrer"><i className={'planner-source'}/>See code</a>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Row>
                </Container>
            </Container>
        </section>
    );
};

export default Project;