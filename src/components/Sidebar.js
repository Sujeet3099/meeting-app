import React, { useRef, useState } from 'react';
import './sidebar.css';
import hamBurg from '../assets/menu_white_24dp.svg';
import face from '../assets/face_white_24dp.svg';
import home from '../assets/home_white_24dp.svg';
import { useDispatch } from 'react-redux';
import { setHome, setAbout } from '../constant';
function Sidebar() {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false);
  const menRef = useRef();
  const homeRef = useRef();
  const aboutRef = useRef();
  const handleMenu = async () => {
    await setMenu(!menu);
    if (!menu) {
      menRef.current.style.width = '17rem';
    } else {
      menRef.current.style.width = '4rem';
    }
  };
  const handleHome = async () => {
    await setMenu(!menu);
    dispatch(setHome());
    if (!menu) {
      menRef.current.style.width = '17rem';
      homeRef.current.style.backgroundColor = '#133B5C';
      aboutRef.current.style.backgroundColor = '#1e5f74';
    } else {
      menRef.current.style.width = '4rem';
    }
  };
  const handleAbout = async () => {
    await setMenu(!menu);
    dispatch(setAbout());
    if (!menu) {
      menRef.current.style.width = '17rem';
      homeRef.current.style.backgroundColor = '#1e5f74';
      aboutRef.current.style.backgroundColor = '#133B5C';
    } else {
      menRef.current.style.width = '4rem';
    }
  };
  return (
    <div className='sidebar' ref={menRef}>
      <div className='sidebar__menu' onClick={handleMenu}>
        <img src={hamBurg} alt='menu' />
        {menu && <span className='sidebar__header'> 1806439</span>}
      </div>
      <div className='sidebar__home' onClick={handleHome} ref={homeRef}>
        <img src={home} alt='home' />
        {menu && <span className='sidebar__text'>Home</span>}
      </div>
      <div className='sidebar__about' onClick={handleAbout} ref={aboutRef}>
        <img src={face} alt='face' />
        {menu && <span className='sidebar__text'>About Me</span>}
      </div>
      {/* <span class='material-icons-outlined'></span>
      <span class='material-icons-outlined'></span>
      <span class='material-icons-outlined'></span> */}
    </div>
  );
}

export default Sidebar;
