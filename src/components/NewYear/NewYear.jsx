import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/system';
import './newyear.css';
import Fireworks from 'fireworks-js';

const NewYearCountdownContainer = styled('div')({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  marginTop: '50vh',
  transform: 'translateY(-50%)',
  overflow: 'hidden',
});

const FireworksOverlay = styled('div')({
  background: 'black',
  height: '100%',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1,
  overflow: 'hidden'
});


const NewYearCountdownWrapper = styled('div')({
  fontFamily: 'Courier New, monospace',
});

const NewYearTimerBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const NewYearTimerItem = styled('div')(({ theme }) => ({
  margin: '0 10px',
  [theme.breakpoints.between(1366, 1920)]: {
    margin: '0 10px',
  },
  [theme.breakpoints.down('md')]: {
    margin: '0 5px',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0 2px',
    padding: '1px',
  },
}));

const NewYearTimerValue = styled('div')(({ theme }) => ({
  fontSize: '6em',
  [theme.breakpoints.between(1366, 1920)]: {
    fontSize: '4em',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2em', // Adjust for medium screens
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2em', // Adjust for small screens
    padding: '2px',
  },
  fontWeight: 'bold',
  color: 'black',
  backgroundColor: 'white',
  padding: '15px', // Increase padding for better visibility
  borderRadius: '5px',
}));

const NewYearTimerLabel = styled('div')(({ theme }) => ({
  fontSize: '4em',
  [theme.breakpoints.between(1366, 1920)]: {
    fontSize: '4em',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.3em', // Adjust for medium screens
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1em', // Adjust for small screens
    padding: '2px',
  },
  background: 'white',
  color: '',
  padding: '5px',
  marginTop: '5px',
  borderRadius: '5px',
}));

const NewYearText = styled('div')(({ theme }) => ({
  fontSize: '6em',
  [theme.breakpoints.between(1366, 1920)]: {
    fontSize: '4em',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2em', // Adjust for medium screens
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2em', // Adjust for small screens
    padding: '2px',
  },
  fontWeight: 'bold',
  color: 'white',
  marginTop: '20px',
}));

const NewYearCountdown = () => {
  const countdownRef = useRef(null);

  const currentYear = new Date().getFullYear();
  const newYearDate = new Date(`January 1, ${currentYear + 1} 00:00:00`).getTime(); // Adjust for the next year

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = newYearDate - now;

      if (timeRemaining > 0) {
        setDays(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((timeRemaining % (1000 * 60)) / 1000));
      } else {
        // If New Year has passed, calculate time remaining for next New Year
        const nextNewYearDate = new Date(`January 1, ${currentYear + 1} 00:00:00`).getTime();
        const newTimeRemaining = nextNewYearDate - now;

        setDays(Math.floor(newTimeRemaining / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((newTimeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((newTimeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((newTimeRemaining % (1000 * 60)) / 1000));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [newYearDate, currentYear]);

  useEffect(() => {
    // Initialize and start fireworks when the component mounts
    const fireworks = new Fireworks(countdownRef.current);
    fireworks.start();
  }, []);
  

  return (
    <div className="FireworksBackground">
      <FireworksOverlay ref={countdownRef} />
      <NewYearCountdownContainer>
        <NewYearText>Happy New Year!</NewYearText>
        <NewYearText>It's</NewYearText>

        <NewYearCountdownWrapper>
          <NewYearTimerBox>
            <NewYearTimerItem>
              <NewYearTimerValue>{days}</NewYearTimerValue>
              <NewYearTimerLabel>Days</NewYearTimerLabel>
            </NewYearTimerItem>
            <NewYearTimerItem>
              <NewYearTimerValue>:</NewYearTimerValue>
            </NewYearTimerItem>
            <NewYearTimerItem>
              <NewYearTimerValue>{hours}</NewYearTimerValue>
              <NewYearTimerLabel>Hours</NewYearTimerLabel>
            </NewYearTimerItem>
            <NewYearTimerItem>
              <NewYearTimerValue>:</NewYearTimerValue>
            </NewYearTimerItem>
            <NewYearTimerItem>
              <NewYearTimerValue>{minutes}</NewYearTimerValue>
              <NewYearTimerLabel>Minutes</NewYearTimerLabel>
            </NewYearTimerItem>
            <NewYearTimerItem>
              <NewYearTimerValue>:</NewYearTimerValue>
            </NewYearTimerItem>
            <NewYearTimerItem>
              <NewYearTimerValue>{seconds}</NewYearTimerValue>
              <NewYearTimerLabel>Seconds</NewYearTimerLabel>
            </NewYearTimerItem>
          </NewYearTimerBox>
        </NewYearCountdownWrapper>

        <NewYearText>
        {days === 0 && hours === 0 && minutes === 0 && seconds === 0
            ? `Until New Year ${currentYear + 1}`
            : `Until New Year ${currentYear + 1}`}
        </NewYearText>
      </NewYearCountdownContainer>
    </div>
  );
};

export default NewYearCountdown;
