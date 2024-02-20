import React from 'react';

const TimerSet = ({ title, label, decrease, time, increase }) => {
  return (
    <div className="timers" id={`${label}-label`}>
      <p>{title}</p>
      <div className="buttons">
        <a id={`${label}-decrement`} onClick={decrease} data-testid={`${label}-decrement`}><i className="fa-solid fa-minus"></i></a>
        <p id={`${label}-length`}>{time}</p>
        <a id={`${label}-increment`} onClick={increase} data-testid={`${label}-increment`}><i className="fa-solid fa-plus"></i></a>
      </div>
    </div>
  )
}

export default TimerSet;