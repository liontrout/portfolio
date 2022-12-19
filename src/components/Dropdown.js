import React, { useEffect, useState } from 'react'
import projArr from '../json/projArr.json'

function Dropdown({drop, vw}) {
  const [liActive, setLiActive] = useState("");

  const btnActive = (viewport) => {
    window.scrollTo({
      top: vw(viewport),
      behavior: 'smooth'
    });
  }

  const handleScroll = () => {
    if (window.scrollY > vw(112)) {
      setLiActive("1")
    }
    if (window.scrollY > vw(165)) {
      setLiActive("2")
    }
    if (window.scrollY > vw(221)) {
      setLiActive("3")
    }
    if (window.scrollY > vw(285)) {
      setLiActive("4")
    }
    if (window.scrollY > vw(354)) {
      setLiActive("5")
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

  return (
    <ul className={`${drop ? 'fadein' : 'fadeout'}`}>
      {projArr.map((list) => (
        <li
          key={list.id}
          className={(list.id == liActive ? " active" : "")}
          onClick={() => {btnActive(list.viewport)}}
        >{list.heading}</li>
      ))}
    </ul>
  )
}

export default Dropdown