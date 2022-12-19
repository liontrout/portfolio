import React, { useEffect, useState } from 'react'
import useInterval from '../hooks/useInterval';
import '../styles/Spinner.scss'

function Spinner() {
  const [on, setOn] = useState("");
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOn("on");
    }, 3000);
  }, []);

  useInterval(() => {
    if (percent === 0) {
      setPercent(0)
      setTimeout(() => {
        setPercent(1)
      }, 400)
    } else if (percent < 100) {
      setPercent((prev) => prev + 1);
    }
  }, 15);
  

  return (
    <>
      <div className={`spinner1 ${on}`}>
        <div className='spinUp'>Please Wait</div>
      </div>
      <div className={`spinner2 ${on}`}>
        <div className='spinDown'>
          <div className='loadBar'>
            <div className="loadBarInner" style={{width: percent+"%"}}></div>
          </div>
          <div className="loadPer">{percent}%</div>
        </div>
      </div>
    </>
  )
}

export default Spinner