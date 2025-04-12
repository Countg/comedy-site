import React, { useState } from 'react';
import { Link } from 'react-scroll';

export default function Navigation(props) {
  const [sticky, setSticky] = useState(false);

  const navScroll = () => {
    if (window.scrollY > 1150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', navScroll);
  }

  return (
    <div>
      <header className='top-bar' id='nav'>
        <nav className={sticky ? 'navigation scroll' : 'navigation'}>
          <a href='/'>
            <img
              src={
                sticky
                  ? '/images/Gavin Stephens-black.png'
                  : '/images/GavinStephensPurps.jpg'
              }
              alt="Gavin's logo"
              loading='lazy'
            />
          </a>

          <ul className='main-menu'>
            <li className='main-item'>
              <a href='/'>HOME</a>
            </li>

            <li className='main-item'>
              <a href='/about'>BIO & PROMO PHOTOS</a>
            </li>
            <Link
              activeClass='active'
              to='footer'
              spy={true}
              smooth={true}
              style={{ cursor: 'pointer' }}
              className='main-item'>
              CONTACT
            </Link>

            <li className='main-item yellow'>
              <a href='http://patreon.com/theuncolonized' target='_blank'>
                UNCOLONIZED PODCAST
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
