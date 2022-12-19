import React, { useEffect, useRef } from 'react';
import Spinner from './routes/Spinner';
import Nav from './components/Nav';
import Home from './routes/Home';
import Profile from './routes/Profile';
import Project from './routes/Project';
import Contact from './routes/Contact';
import MouseScroll from './components/MouseScroll';
import TopScroll from './components/TopScroll';
import './styles/common.scss'

function App() {
  const targetRef0 = useRef(null);
  const targetRefNight = useRef(null);
  const targetRef1 = useRef(null);
  const targetRef3 = useRef(null);
  const handleScroll = () => {
    if (window.scrollY > vw(46)) {
      targetRef1.current.style.opacity = "1";
      targetRef1.current.style.transform = "translateY(0)";
    }
    if (window.scrollY > vw(407)) {
      targetRef3.current.style.opacity = "1";
      targetRef3.current.style.transform = "translateY(0)";
    }
  };

  useEffect(() => {    
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  const vw = (v) => {
    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w)/100;
  }

  const onClickNight = () => {
    targetRefNight.current.classList.toggle("nightBtn")
    targetRef0.current.classList.toggle("night")
  }

  const Layout = () => {
    return (
      <div className="layout" ref={targetRef0}>
        <Nav vw={vw} />
        <span className="nav__bright" onClick={onClickNight} ref={targetRefNight}>Bright</span>
        <div className="fadeup" >
          <Home />
        </div>
        <div className='profRef' ref={targetRef1}>
          <Profile />
        </div>
          <Project vw={vw} />
        <div className='contRef' ref={targetRef3}>
          <Contact />
        </div>
        <MouseScroll />
        <TopScroll />
      </div>
    )
  }

  return (
    <>
      <Spinner />
      <Layout />
    </>
  )
}

export default App;