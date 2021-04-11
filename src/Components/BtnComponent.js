import React, {useEffect, useRef} from 'react';
import DoubleClick from "./DoubleClick";


function BtnComponent(props) {
    const buttonRef = useRef();

    useEffect (() => {
         console.log(buttonRef)
         if(buttonRef.current){
             DoubleClick(buttonRef.current, props.wait )
         }


    }, [buttonRef.current])

    return (
        <div>
            {(props.status === 0)?
                <button className="stopwatch-btn stopwatch-btn-gre"
                        onClick={props.start}>Start</button> : ""
            }

            {(props.status === 1)?
                <div>
                    <button
                        ref={buttonRef}
                        className="stopwatch-btn stopwatch-btn-yel"
                    >Wait</button>
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
                    <button className="stopwatch-btn stopwatch-btn-red"
                            onClick={props.stop}>Stop</button>
                </div> : ""
            }

            {(props.status === 3)?
                <div>
                    <button
                        ref={buttonRef}
                        className="stopwatch-btn stopwatch-btn-yel"
                    >Wait</button>
                    <button className="stopwatch-btn stopwatch-btn-yel"
                            onClick={props.reset}>Reset</button>
                    <button className="stopwatch-btn stopwatch-btn-red"
                            onClick={props.stop}>Stop</button>
                </div> : ""
            }

        </div>
    );
}

export default BtnComponent;