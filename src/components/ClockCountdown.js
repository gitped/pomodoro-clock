import React from "react";

const ClockCountdown = ({ label, time, togglePause, pause, handleReset }) => {
  return (
    <div id="clock">
      <div id="timer-label">{label}</div>
      <div id="time-left">{time}</div>
      <div className="clock-buttons">
        <a id="start_stop" onClick={togglePause} data-testid="start-stop">
          {pause ? <i className="fa-solid fa-play"></i> : <i className="fa-solid fa-pause"></i>}
        </a>
      </div>
      <div className="clock-buttons">
        <a id="reset" onClick={handleReset} data-testid="reset">
          <i className="fa-solid fa-rotate"></i>
        </a>
      </div>
      <audio id="beep" type="audio/mpeg" src="https://audio-previews.elements.envatousercontent.com/files/446277402/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22QNZWF65-the-jazz-intro-logo.mp3%22" />
    </div>
  )
}

export default ClockCountdown;