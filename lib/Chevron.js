import React from 'react';
import { Link } from 'react-scroll';
import { FaChevronDown } from 'react-icons/fa';

export default function Chevron() {
  return (
    <>
      <Link
        activeClass='active'
        to='nav'
        spy={true}
        smooth={true}
        style={{ cursor: 'pointer' }}>
        <FaChevronDown className='bounce' />
      </Link>
    </>
  );
}
