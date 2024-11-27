import React from 'react';
import { Box, Container, Typography , TextCard} from '@mui/material';
import { redirect } from 'react-router-dom';

const Landing = () => {
  return (
    <Box sx={{ position: 'relative'}}>
      <video
          autoPlay
          loop
          muted
          style={{
              position: 'absolute',
              top: -1,
              left: -1,
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              zIndex: -1,
              display: 'block'
          }}
      >
            <source src="https://cdn.prod.website-files.com/64cb501935377f51369fa3c5/6507faea352adcbf5783fb18_vdo%201-transcode.mp4" type="video/mp4" />
      </video>
      <div class="center" style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", height: "90vh"}}>
        <h1 style={{ textAlign: "center" , padding: 20, backgroundColor: "orange",}}>Welcome to Delbrone
          <br/> <a href="/"><button style={{ backgroundColor: "orange-red", border: "1px solid black", borderRadius: "5px", padding: "1rem", marginTop: "1rem" }}>
          Go to Home
        </button> </a>
        </h1>
      </div>
    </Box>
  );
};

export default Landing;
