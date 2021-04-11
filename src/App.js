import React, {useRef, useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';
import './App.css';

function App() {
  const [time, setTime] = useState({s: 0, m: 0, h: 0});
  const interv = useRef();
  const [status, setStatus] = useState(0);


  const clearTimer = () => clearInterval(interv.current);

  const runNow = () => {
    setTime((time) => {
      let updatedS = time.s, updatedM = time.m, updatedH = time.h;

      if (updatedM === 23) {
        updatedH++;
        updatedH = 0;
      }
      if (updatedM === 59) {
        updatedH++;
        updatedM = 0;
      }
      if (updatedS === 59) {
        updatedM++;
        updatedS = 0;
      }

      updatedS++;

      return {s: updatedS, m: updatedM, h: updatedH};

    });

    interv.current = setTimeout(runNow, 1000);
  }

  const run = () => {
    interv.current = setTimeout(runNow, 1000);
  };

  const start = () => {
    console.log('start');
    clearTimer();
    run();
    setStatus(1);
  };

  const stop = () => {
    clearTimer();
    setStatus(0);
    setTime({s: 0, m: 0, h: 0})
  };

  const reset = () => {
    clearTimer();
    setTime({s: 0, m: 0, h: 0})
    setStatus(3);
    run();
  };

  const wait = () => {
    clearTimer();
    setStatus(2)
  };


  return (
      <div className="main-section">
        <div className="clock-holder">
          <div className="stopwatch">
            <DisplayComponent time={time} />
            <BtnComponent status={status} wait={wait} reset={reset} stop={stop} start={start} />
          </div>
        </div>
      </div>
  );
}

export default App;