import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const HeroSection = () => {
    return (
        <Box
            sx={{
                height: '70vh',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                component="video"
                autoPlay
                loop
                muted
                playsInline
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}
            >
                <source src="https://cdn.prod.website-files.com/64cb501935377f51369fa3c5/654b4fa8b1f819ec20581eca_Homepage Banner-transcode.mp4" type="video/mp4" />
                {/* TODO replace video src with our own actual video */}
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
                }}
            />
            <Container
                sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <Typography 
                    variant="h2" 
                    color="white"
                    sx={{ maxWidth: '70%' }}
                >
                    {'Lorem Ipsum Dolor Sit Amet'.split(' ').map((word, index) => (
                        <span
                            key={index}
                            style={{
                                animation: `pop ${0.4 + Math.random() * 1.6}s ease-out 1 forwards`,
                                display: 'inline-block',
                                whiteSpace: 'pre',
                            }}
                        >
                            {word + '\u00A0'}
                        </span>
                    ))}
                </Typography>
            </Container>
            <style>
                {`
                    @keyframes pop {
                        0% { opacity: 0; }
                        80% { opacity: 0; }
                        100% { opacity: 1; }
                    }
                `}
            </style>
        </Box>
    );
};

export default HeroSection;