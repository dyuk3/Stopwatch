import React from 'react';
import './stopwatch.css';

const Timer = (props) => {
  const { time } = props;

  return (
    <div className='timer '>
      {/* divide the time in miliseconds by number of miliseconds in a minute and modulus of 60 */}
      <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}: </span>
      <span className='green'>
        {('0' + Math.floor((time / 1000) % 60)).slice(-2)}:{' '}
      </span>
      <span className='red'>{('0' + ((time / 10) % 100)).slice(-2)}</span>
    </div>
  );
};

export default Timer;
