// Home.jsx

import React from 'react';
import { styled, Typography } from '@mui/material';
import './home.css';

const CenteredContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  textAlign: 'center',
  background: 'linear-gradient(to bottom, skyblue, white)', // Gradient background
  width: '100%', // Adjust the percentage as needed
  margin: '0 auto', // Center the container horizontally
});


const Home = () => {
  return (
    <CenteredContainer>
      <Typography variant="h4" className="home-title">
        Welcome to the Countdown Timer App!
      </Typography>
      <Typography variant="body1" className="home-paragraph">
        This app allows you to view countdown timers for various yearly events.
      </Typography>
      <Typography variant="body1" className="home-paragraph">
        Simply navigate the menu section to view the Countdown timer for various yearly events.
      </Typography>
    </CenteredContainer>
  );
};

export default Home;
