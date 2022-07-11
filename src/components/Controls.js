import React from 'react';
import './stopwatch.css';

const Controls = (props) => {
  const { active, isPaused, handlePauseResume, handleReset, handleStart } =
    props;

  const StartButton = (
    <button className='btn btn-one' onClick={handleStart}>
      Start
    </button>
  );

  const ActiveButtons = (
    <div className='btn-grp'>
      <button className='btn' onClick={handlePauseResume}>
        {isPaused ? 'Resume' : 'Pause'}
      </button>
      <button className='btn btn-one' onClick={handleReset}>
        Reset
      </button>
    </div>
  );

  return (
    <div className='control-buttons'>
      <div>{active ? ActiveButtons : StartButton}</div>
    </div>
  );
};

export default Controls;
