import React from 'react';
import DoubleClick from "./DoubleClick";


<DoubleClick/>


function BtnComponent(props) {
    return (
        <div>
            {(props.status === 0)?
                <button className="stopwatch-btn stopwatch-btn-gre"
                        onClick={props.start}>Start</button> : ""
            }

            {(props.status === 1)?
                <div>
                    <button className="stopwatch-btn stopwatch-btn-yel"
                            onDoubleClick={props.wait}>Wait</button>
                    <button className="stopwatch-btn stopwatch-btn-yel"
                            onClick={props.reset}>Reset</button>
                    <button className="stopwatch-btn stopwatch-btn-red"
                            onClick={props.stop}>Stop</button>
                </div> : ""
            }

            {(props.status === 2)?
                <div>
                    <button className="stopwatch-btn stopwatch-btn-gre"
                            onClick={props.start}>Start</button>
                    <button className="stopwatch-btn stopwatch-btn-yel"
                            onClick={props.reset}>Reset</button>
                </div> : ""
            }

        </div>
    );
}

export default BtnComponent;