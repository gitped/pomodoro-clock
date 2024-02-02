import React from "react";

const ClockCountdown = ({ label, time, togglePause, pause, handleReset }) => {
  return (
    <div id="clock">
      <div id="timer-label">{label}</div>
      <div id="time-left">{time}</div>
      <a id="start_stop" onClick={togglePause}>
        {pause ? <i className="fa-solid fa-play"></i> : <i className="fa-solid fa-pause"></i>}
      </a>
      <a id="reset" onClick={handleReset}><i className="fa-solid fa-rotate"></i></a>
      <audio id="beep" type="audio/mpeg" src="https://audio-previews.elements.envatousercontent.com/files/446277402/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22QNZWF65-the-jazz-intro-logo.mp3%22" />
    </div>
  )
}

export default ClockCountdown;