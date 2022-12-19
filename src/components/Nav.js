import React, { useEffect, useState } from 'react'
import '../styles/Nav.scss'
import Dropdown from './Dropdown';

function Nav({vw}) {
  const [view, setView] = useState(false);
  const [drop, setDrop] = useState(false);
  const [active1, setActive1] = useState("active1")
  const [active2, setActive2] = useState("")
  const [active3, setActive3] = useState("")
  const [active4, setActive4] = useState("")

  const onClickHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  const onClickProfile = () => {
    window.scrollTo({
      top: vw(57),
      behavior: 'smooth'
    });
  }
  const onClickProject = () => {
    window.scrollTo({
      top: vw(113),
      behavior: 'smooth'
    });
  }
  const onClickContact = () => {
    window.scroll({
      top: vw(418),
      behavior: 'smooth'
    });
  }

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setActive1("active1")
      setActive2("")
      setActive3("")
      setActive4("")
    }
    if (window.scrollY > vw(56)) {
      setActive1("")
      setActive2("active2")
      setActive3("")
      setActive4("")
    }
    if (window.scrollY > vw(112)) {
      setActive1("")
      setActive2("")
      setActive3("active3")
      setActive4("")
      setView(true);
      setDrop(true);
    } else {
      setDrop(false);
      setTimeout(() => {
        setView(false);
      }, 400);
    }
    if (window.scrollY > vw(417)) {
      setActive1("")
      setActive2("")
      setActive3("")
      setActive4("active4")
      setDrop(false);
      setView(false);
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
    <nav className="nav">
      <div className="nav__logo">
          <a href="https://github.com/liontrout" target="_blank" rel="noreferrer">
            <span>@liontrout</span>
            <span className='git'></span>
            <span className='hub'></span>
          </a>
      </div>
      <div className="nav__parts">
        <ul>
          <li>
            <span onClick={onClickHome} className={active1}>Home</span>
          </li>
          <li>
            <span onClick={onClickProfile} className={active2}>Profile</span>
          </li>
          <li>
            <span onClick={onClickProject} className={active3}>Projects</span>
            {view ? (
              <>
                <div className="up"></div>
                <Dropdown drop={drop} vw={vw} />
              </>
            ) : (
              <div className="down"></div>
            )}
          </li>
          <li>
            <span onClick={onClickContact} className={active4}>Contact</span>
          </li>
        </ul>
      </div>
      <span></span>
    </nav>
  )
}

export default Nav