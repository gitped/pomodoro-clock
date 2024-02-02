import React from 'react';
import './App.css';
import TimerSet from './components/TimerSet';
import ClockCountdown from './components/ClockCountdown';
import Footer from './components/Footer';

const { useState, useEffect } = React

const ClockApp = () => {
  const [sessionTime, setSessionTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [pause, setPause] = useState(true);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [breakMode, setBreakMode] = useState(false);
  const audioElement = document.getElementById('beep');
  

  useEffect(() => {
    if (!pause) {
      let timer;
      if (minutes === 0 && seconds === 0) {
        audioElement.play();
        setMinutes(!breakMode ? breakTime : sessionTime);
        setSeconds(0);
        setBreakMode(!breakMode);
      } else {
        timer = setInterval(() => {
          setSeconds((prevSeconds) => {
            if (prevSeconds === 0 && minutes > 0) {
              setMinutes((prevMinutes) => prevMinutes - 1);
              return 59;
            } else
              return prevSeconds - 1;
          });
        }, 1000);
      }
      return () => {if (timer) clearInterval(timer)};
    }
  }, [pause, minutes, seconds, breakMode]);

  
  const handleReset = () => {
    setPause(true);
    setSessionTime(25);
    setBreakTime(5);
    setMinutes(25);
    setSeconds(0);
    setBreakMode(false);
    if(audioElement){
      audioElement.pause();
      audioElement.load();
    }
  };
  
  const togglePause = () => { setPause(!pause) };
  
  const decreaseSessionTime = () => {
    setSessionTime((prevSessionTime) => (prevSessionTime > 1 ? prevSessionTime - 1 : prevSessionTime));
    if(!breakMode) setMinutes((prevMinutes) => (prevMinutes > 1 ? prevMinutes - 1 : prevMinutes));
  };
  const increaseSessionTime = () => {
    setSessionTime((prevSessionTime) => (prevSessionTime<=59 ? prevSessionTime+1 : prevSessionTime));
    if(!breakMode) setMinutes((prevMinutes) => (prevMinutes > 1 ? prevMinutes + 1 : prevMinutes));
  };
  const decreaseBreakTime = () => {
    setBreakTime((prevBreakTime) => (prevBreakTime>1 ? prevBreakTime-1 : prevBreakTime));
    if(breakMode) setMinutes((prevMinutes) => (prevMinutes > 1 ? prevMinutes - 1 : prevMinutes));
  };
  const increaseBreakTime = () => {
    setBreakTime((prevBreakTime) => (prevBreakTime<=59 ? prevBreakTime+1 : prevBreakTime));
    if(breakMode) setMinutes((prevMinutes) => (prevMinutes > 1 ? prevMinutes + 1 : prevMinutes));
  };

  return (
    <div className="canvas">
      <div className="row">
        <div className="col-12">
          <TimerSet title="Pomodoro" label="session" 
            decrease={decreaseSessionTime} time={sessionTime} increase={increaseSessionTime} />
          <hr />
          <TimerSet title="Break" label="break" 
            decrease={decreaseBreakTime} time={breakTime} increase={increaseBreakTime} />
        </div>
        <div className="col-12">
          <ClockCountdown label={breakMode ? "Break Session" : "Pomodoro Session"}
            time={`${minutes<10 ? `0${minutes}` : minutes}:${seconds<10 ? `0${seconds}` : seconds}`} 
            pause={pause}
            togglePause={togglePause} 
            handleReset={handleReset} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClockApp;
