import React from 'react';
import {Box, Grid} from "@mui/material";

function Project() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                <Grid item xs={12} md={6} key={1}>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                        <Box component={'img'} src={project1Image} alt={'mockup'}/>
                        <h1 style={{fontSize: '2rem'}}>Blog about physics</h1>
                        <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
                            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                            <IconLink link={project1Live} title={'See demo'} icon={'fa fa-safari'}/>
                            </Box>
                            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                            <IconLink link={project1Source} title={'See code'} icon={'fa fa-code'}/>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} key={2}>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                        <Box component={'img'} src={project1Image} alt={'mockup'}/>
                        <h1 style={{fontSize: '2rem'}}>Blog about physics</h1>
                        <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
                            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                            <IconLink link={project1Live} title={'See demo'} icon={'fa fa-safari'}/>
                            </Box>
                            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                            <IconLink link={project1Source} title={'See code'} icon={'fa fa-code'}/>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} key={3}>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                        <Box component={'img'} src={project1Image} alt={'mockup'}/>
                        <h1 style={{fontSize: '2rem'}}>Blog about physics</h1>
                        <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
                            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                            <IconLink link={project1Live} title={'See demo'} icon={'fa fa-safari'}/>
                            </Box>
                            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                            <IconLink link={project1Source} title={'See code'} icon={'fa fa-code'}/>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} key={4}>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                        <Box component={'img'} src={project1Image} alt={'mockup'}/>
                        <h1 style={{fontSize: '2rem'}}>Blog about physics</h1>
                        <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
                            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                            <IconLink link={project1Live} title={'See demo'} icon={'fa fa-safari'}/>
                            </Box>
                            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                            <IconLink link={project1Source} title={'See code'} icon={'fa fa-code'}/>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} key={5}>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                        <Box component={'img'} src={project1Image} alt={'mockup'}/>
                        <h1 style={{fontSize: '2rem'}}>Blog about physics</h1>
                        <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
                            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                            <IconLink link={project1Live} title={'See demo'} icon={'fa fa-safari'}/>
                            </Box>
                            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                            <IconLink link={project1Source} title={'See code'} icon={'fa fa-code'}/>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Project;