import React, { useState } from 'react';
import Link from 'next/link';

const SmallNavigation = () => {
  const [show, setShow] = useState(false);

  const [stay, setStay] = useState(false);

  const showMenu = () => {
    setShow(!show);
  };

  const navigationScroll = () => {
    if (window.scrollY > 600) {
      setStay(true);
    } else {
      setStay(false);
    }
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', navigationScroll);
  }

  return (
    <div>
      <header className='header'>
        <nav className={!stay ? 'navbar' : 'navbar scroll'}>
          <a href='/' className='nav-logo'>
            <img
              src={
                !stay
                  ? '/images/GavinStephensPurps.jpg'
                  : '/images/Gavin Stephens-black.png'
              }
              alt="Gavin's logo"
            />
          </a>
          <ul className={!show ? 'nav-menu' : 'nav-menu active'}>
            <div className='nav-text'>
              <a href='/'>
                <h2 className='site-text'>HOME.</h2>
              </a>
              <a href='/about'>
                <h2 className='site-text'>BIO & PROMO PHOTOS.</h2>
              </a>

              <a href='http//:patreon.com/theuncolonized'>
                <h2 className='pod-text'>
                  THE UNCOLONIZED <br></br>PODCAST.
                </h2>
              </a>
            </div>
          </ul>
          <div
            className={show ? 'hamburger active' : 'hamburger'}
            onClick={showMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default SmallNavigation;
