import React, { useRef, useState, useEffect } from 'react';
import HeroSection from './hero_section';
import { Typography, Box, Button, Card, CardContent, useTheme } from '@mui/material';

const TextCard = ({title, text, borderColor}) => {
    const cardRef = useRef(null);
    const [leftPosition, setLeftPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            if (cardRef.current) {
                const { top } = cardRef.current.getBoundingClientRect();
                // console.log(top/window.innerHeight)
                const newLeft = Math.max(0,(top/window.innerHeight-0.85)*(20)*window.innerWidth);
                setLeftPosition(newLeft);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return <Card
    ref={cardRef}
    sx={{
      position: 'relative',
      left: leftPosition,
    //   transition: 'left 0.1s ease-out',
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      borderColor: borderColor,
      borderWidth: 1.5,
      borderStyle: 'solid',
      borderRadius: 4,
      boxShadow: 4,
      paddingTop: 2,
      paddingBottom: 2,
    }}
  >
  <CardContent>
      <Typography variant="h3" component="div" sx={{color: 'white', fontWeight: 'bold'}}>
      {title}
      </Typography>
      <Box my={2}/>
      <Typography variant="body1" color={'white'}>
      {text}
      </Typography>
  </CardContent>
  </Card>
}

const NoiceText = ({children, color, offset}) => {
    const textRef = useRef(null);
    const [words, setWords] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            if (textRef.current) {
                const { top } = textRef.current.getBoundingClientRect();
                const height = window.innerHeight;
                const wordsArray = textRef.current.innerText.split(' ');
                const newWords = wordsArray.map((word, index) => {
                    const isHighlighted = top/height < offset + 0.4*(1-index/wordsArray.length);
                    return {
                        text: word,
                        color: isHighlighted ? color : 'gray'
                    };
                });
                setWords(newWords);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return <span ref={textRef}>
                        {words.length > 0 ? words.map((word, index) => (
                            <span key={index} style={{ color: word.color }}>{word.text} </span>
                        )) : children}
                    </span>
    
}

const HomeBody = () => {
    const theme = useTheme();
    
    

    return (
        <Box mt={1}>
            <HeroSection />
            <Box textAlign="center" mt={2}>
                <Typography variant="body1" color="textSecondary" style={{ fontSize: '2rem' }}>
                    <NoiceText color={theme.palette.primary.dark} offset={0.4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut.
                    </NoiceText>
                </Typography>
                <Button variant="outlined" color="primary" size="large" sx={{ mt: 0.4, borderRadius: 3}}>LOREM IPSUM</Button>
            </Box>
            <Box my={5}/>
            <Box p={2} mt={1} sx={{ position: 'relative'}}>
                <video
                    autoPlay
                    loop
                    muted
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                >
                    <source src="https://cdn.prod.website-files.com/64cb501935377f51369fa3c5/6507faea352adcbf5783fb18_vdo%201-transcode.mp4" type="video/mp4" />
                </video>
                <TextCard title="LOREM IPSUM" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut."  borderColor={theme.palette.primary.dark}/>
                <Box my={2}/>
                <TextCard title="LOREM IPSUM" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut."  borderColor={theme.palette.primary.dark}/>
                <Box my={2}/>
                <TextCard title="LOREM IPSUM" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut."  borderColor={theme.palette.primary.dark}/>
            </Box>
            <Box p={4} mt={1} sx={{ position: 'relative', backgroundImage: 'url(https://png.pngtree.com/background/20211216/original/pngtree-drone-camera-technology-background-picture-image_1509046.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <Typography mt={50} variant="body1" color="textSecondary" style={{ fontSize: '2rem', maxWidth: '54%'}}>
                    <NoiceText color={theme.palette.primary.contrastText} offset={0.6}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin turpis vitae justo hendrerit, non lacinia erat tempor. Suspendisse potenti. Duis fermentum sapien in sapien cursus, non volutpat elit fringilla. Curabitur id urna magna, nec efficitur felis.
                    </NoiceText>
                </Typography>
                <Button variant="outlined" size="large" sx={{ mt: 0.4, borderRadius: 3, color: 'white', borderColor: 'white'}}>LOREM IPSUM</Button>
            </Box>
        </Box>
    );
};

export default HomeBody;