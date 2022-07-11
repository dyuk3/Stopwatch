import React, { useEffect, useState } from 'react';
import Controls from './Controls';
import Timer from './Timer';
import './stopwatch.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className='stopwatch'>
      <Timer time={time} />
      <Controls
        active={isActive}
        isPaused={isPaused}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
        handleStart={handleStart}
      />
    </div>
  );
};

export default Stopwatch;
