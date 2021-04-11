import React, {useRef, useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';
import './App.css';

function App() {
  const [time, setTime] = useState({s:0, m:0, h:0});
  const interv = useRef();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    interv.current = setInterval(run, 1000);
  };

  let updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedM === 23){
      updatedH++;
      updatedH = 0;
    }
    if(updatedM === 59){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 59){
      updatedM++;
      updatedS = 0;
    }

    updatedS++;
    return setTime({s:updatedS, m:updatedM, h:updatedH});
  };

  const stop = () => {
    clearInterval(interv.current);
    setStatus(0);
    setTime({s:0, m:0, h:0})
  };

  const reset = () => {
    setTime({s:0, m:0, h:0})
    clearInterval(interv.current);
    interv.current = setInterval(run, 1000);
    setStatus(3);
  };

  const wait = () => {
    clearInterval(interv.current);
    setStatus(2)
  };


  return (
      <div className="main-section">
        <div className="clock-holder">
          <div className="stopwatch">
            <DisplayComponent time={time}/>
            <BtnComponent status={status} wait={wait} reset={reset} stop={stop} start={start}/>
          </div>
        </div>
      </div>
  );
}

export default App;