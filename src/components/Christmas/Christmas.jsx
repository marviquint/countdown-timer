import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/system';
import Snowfall from 'react-snowfall';
import './christmas.css'; // Import the external CSS file

const ChristmasCountdownContainer = styled('div')({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  marginTop: '50vh',
  transform: 'translateY(-50%)',
  overflow: 'hidden',
});

const ChristmasCountdownWrapper = styled('div')({
  fontFamily: 'Courier New, monospace',
});

const ChristmasTimerBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const ChristmasTimerItem = styled('div')(({ theme }) => ({
  margin: '0 10px',
  [theme.breakpoints.between(1366, 1920)]: {
    margin: '0 10px',
  },
  [theme.breakpoints.down('md')]: {
    margin: '0 5px',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0 2px',
    padding: '1px'
  },
}));

const ChristmasTimerValue = styled('div')(({ theme }) => ({
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

const ChristmasTimerLabel = styled('div')(({ theme }) => ({
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
  borderRadius: '5px'
}));


const ChristmasText = styled('div')(({ theme }) => ({
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


const ChristmasCountdown = () => {

  const currentYear = new Date().getFullYear();
  const christmasDateRef = useRef(new Date(`December 25, ${currentYear} 00:00:00`).getTime());

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = christmasDateRef.current - now;

      if (timeRemaining > 0) {
        setDays(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((timeRemaining % (1000 * 60)) / 1000));
      } else {
        // If Christmas has passed, calculate time remaining for next Christmas
        const nextChristmasYear = currentYear + 1;
        christmasDateRef.current = new Date(`December 25, ${nextChristmasYear} 00:00:00`).getTime();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentYear]);


  return (
    <div className="BackgroundImage">
      <Snowfall snowflakeCount={100} />
      <ChristmasCountdownContainer>
      <ChristmasText>Happy Holidays!</ChristmasText>
        <ChristmasText>It's</ChristmasText>

        <ChristmasCountdownWrapper>
          <ChristmasTimerBox>
            <ChristmasTimerItem>
              <ChristmasTimerValue>{days}</ChristmasTimerValue>
              <ChristmasTimerLabel>Days</ChristmasTimerLabel>
            </ChristmasTimerItem>
            <ChristmasTimerItem>
              <ChristmasTimerValue>:</ChristmasTimerValue>
            </ChristmasTimerItem>
            <ChristmasTimerItem>
              <ChristmasTimerValue>{hours}</ChristmasTimerValue>
              <ChristmasTimerLabel>Hours</ChristmasTimerLabel>
            </ChristmasTimerItem>
            <ChristmasTimerItem>
              <ChristmasTimerValue>:</ChristmasTimerValue>
            </ChristmasTimerItem>
            <ChristmasTimerItem>
              <ChristmasTimerValue>{minutes}</ChristmasTimerValue>
              <ChristmasTimerLabel>Minutes</ChristmasTimerLabel>
            </ChristmasTimerItem>
            <ChristmasTimerItem>
              <ChristmasTimerValue>:</ChristmasTimerValue>
            </ChristmasTimerItem>
            <ChristmasTimerItem>
              <ChristmasTimerValue>{seconds}</ChristmasTimerValue>
              <ChristmasTimerLabel>Seconds</ChristmasTimerLabel>
            </ChristmasTimerItem>
          </ChristmasTimerBox>
        </ChristmasCountdownWrapper>

        <ChristmasText>
          {days === 0 && hours === 0 && minutes === 0 && seconds === 0
            ? `Until Christmas ${currentYear + 1}`
            : `Until Christmas ${currentYear}`}
        </ChristmasText>
      </ChristmasCountdownContainer>
    </div>
  );
};

export default ChristmasCountdown;
