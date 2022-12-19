import React, { useEffect, useState } from 'react'
import '../styles/TopScroll.scss'

function TopScroll() {
  const [top, setTop] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > vh(50)) {
      setTop(true)
    } else if (window.scrollY < vh(49)) {
      setTop(false)
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

  const onClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const vh = (v) => {
    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h)/100;
  }

  return (
    <>
      {top && (
        <div className='top-scroll' onClick={onClickTop}>
          <div className="scroll-btn-wrap"></div>
          <div className="scroll-btn scroll"></div>
        </div>
      )}
    </>
  )
}

export default TopScroll