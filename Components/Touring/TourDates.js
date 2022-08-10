import React, { useState } from 'react';
import { SiBandsintown } from 'react-icons/si';
import Link from 'next/link';
import Touring from './Touring';

export default function TourDates({ posts }) {
  return (
    <div className='tour-dates' id='touring'>
      <div className='touring-event'>
        <h2>TOUR DATES</h2>

        {!posts ? (
          <h2>Loading</h2>
        ) : posts === 0 ? (
          <h2
            style={{
              color: '#09f7ea',
              textShadow: '1px 2px #282D3F',
              fontSize: '2em',
            }}>
            STAY TUNED FOR MORE SHOW DATES
          </h2>
        ) : (
          <Touring events={posts} />
        )}
        <div className='touring-title'>
          <Link href='https://bnds.us/p16pfj'>
            <button>
              <SiBandsintown />
              <p> MORE TOUR INFO</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
