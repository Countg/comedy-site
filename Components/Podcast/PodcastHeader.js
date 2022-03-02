import React, { useRef } from 'react';

export default function Podcast({ overlayToggle }) {
  return (
    <div className='podcast delay15 fade-in' id='latest-episode'>
      <h2>
        THE UNCOLONIZED <br /> PODCAST
      </h2>
      <div className='about-pod'>
        <p>
          UNCOLONIZED IS A FUNNY AND BLUNT PODCAST ABOUT RACE, POLITICS, AND
          CULTURE, FROM A CANADIAN PERSPECTIVE. HOSTED BY COMEDIAN GAVIN
          STEPHENS, AND WRITER/MUSICIAN DANIEL GRANT. UNCOLONIZED IS PROUD TO BE
          APART OF THE CHONILLA NETWORK
        </p>
      </div>
      <div className='uncolonized-description' onClick={overlayToggle}>
        <p>SUBSCRIBE</p>
      </div>
    </div>
  );
}
