import React from 'react';
import Link from 'next/link';
import Chevron from '../../../lib/Chevron';

export default function Lettering() {
  return (
    <div className='welcome-nav'>
      <div className='header-container'>
        <h1>
          <div className='hide-text-container'>
            <div className=' animate-letters delay04'>GAVIN STEPHENS</div>
            <div className=' on-hover-first animate-letters delay08'>
              <Link
                href='https://www.youtube.com/watch?v=QZXFz-BLy_I'
                target='_blank'
                title='Gavin Stephens comedy on Youtube'>
                <div className='comedian-label'></div>
              </Link>
            </div>
            <div className=' on-hover-first animate-letters delay10'>
              <a href='/about' className='bio-label'></a>
            </div>

            <div className='on-hover-first animate-letters delay12'>
              <a href='/uncolonized' className='pod-label'></a>
            </div>

            <div className='arrow animate-social delay13'>
              <Chevron />
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
}
