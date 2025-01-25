import React, { useRef, useCallback } from 'react';
import InView, { useInView } from 'react-intersection-observer';
import { FaItunesNote, FaItunes, FaSpotify } from 'react-icons/fa';
import { SiYoutubemusic } from 'react-icons/si';
import { Link } from 'react-scroll';
import videoFile from '../public/images/howlpresents.mp4';

export default function Latest() {
  const ref = useRef(null);

  const [newRef, inView] = useInView({
    root: null,
    rootMargin: '3px',
    threshold: 1,
    triggerOnce: true,
  });

  const albumRef = useCallback(
    (node) => {
      ref.current = node;

      newRef(node);
    },
    [newRef]
  );

  return (
    <div className='latest-promo'>
      <div className='album-cover '>
        <video src={videoFile} autoPlay loop muted />
      </div>

      <div className='album-description'>
        <div>
          <h2>AVAILABLE NOW</h2>
        </div>

        <div
          className={inView ? 'font-music fadeInBottom delay13' : ''}
          id='latest'
          ref={albumRef}>
          <a
            href='https://lnk.to/parkbench'
            target='_blank'
            title="Gavin's Album on Itunes">
            <FaItunes className='itunes' />
          </a>

          <a
            href='https://lnk.to/parkbench'
            target='-blank'
            title="Gavin's album on Spotify">
            <FaSpotify className='spotify' />
          </a>

          <a
            href='https://lnk.to/parkbench'
            target='_blank'
            title="Gavin's album on Youtube music">
            <SiYoutubemusic className='play' />
          </a>

          <a
            href='https://lnk.to/parkbench'
            target='_blank'
            title='Howel & Roar Records'>
            <FaItunesNote className='amazon' />
          </a>
        </div>
      </div>
    </div>
  );
}
