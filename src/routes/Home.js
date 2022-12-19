import React, { useEffect, useMemo, useState } from 'react'
import useInterval from '../hooks/useInterval'
import Icon from '../components/Icon';
import '../styles/Home.scss';
import Webpack from '../components/Webpack';

function Home() {
  const [landingTitle, setLandingTitle] = useState("");
  const [count, setCount] = useState(0);
  const [speed, setSpeed] = useState(4000);

  const completedTitle = useMemo(() => {
    return "<h1>Front End</h1>";
  }, []);

  setTimeout(() => {
    setSpeed(300);
  }, 4000);

  useInterval(() => {
    if (count >= completedTitle.length) {
      return;
    }
  
    setLandingTitle((prev) => {
      let result = prev ? prev + completedTitle[count] : completedTitle[0];

      setCount((prev) => prev + 1);
      setSpeed((prev) => prev - 12);
  
      return result;
    });
  }, speed);

  return (
    <div className="home">
      <div className="home__inner">
        <div className="home__topic">
          <p>
            끊임없이 연구하는
          </p>
          <p>
            <span className='home__title'>{landingTitle}</span>
          </p>
          <p>
            Liontrout's Portfolio
          </p>
          <div className='webpack'>
            <span>Made by Webpack<br />React.js</span>
            <span className='webpackInner'><Webpack /></span>
          </div>
        </div>
      </div>
      <Icon />
    </div>
  )
}

export default Home