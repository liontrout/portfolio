import React, { useEffect, useState } from 'react'
import '../styles/MouseScroll.scss'

function MouseScroll() {
  const [Mouse, setMouse] = useState(true)

  const handleScroll = () => {
    if (window.scrollY > vh(50)) {
      setMouse(false)
    } else if (window.scrollY < vh(49)) {
      setMouse(true)
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

  const vh = (v) => {
    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h)/100;
  }

  return (
    <>
      {Mouse && (
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      )}
    </>
  )
}

export default MouseScroll