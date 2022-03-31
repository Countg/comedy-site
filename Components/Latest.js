import React, { useRef, useCallback } from 'react';
import InView, { useInView } from 'react-intersection-observer';
import { FaItunesNote, FaItunes, FaSpotify } from 'react-icons/fa';
import { SiYoutubemusic } from 'react-icons/si';
import { Link } from 'react-scroll';

export default function Latest() {
  const ref = useRef(null);

  const [newRef, inView] = useInView({
    root: null,
    rootMargin: '0px',
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
    <div className='latest-promo' id='latest' ref={albumRef}>
      <div
        className={
          inView ? 'album-cover animate-left' : 'hide-album-cover'
        }></div>
      <div
        className={
          inView
            ? 'album-description new-fade-in delay13'
            : 'hide-album-description'
        }>
        <h1>THE NEW JUNO NOMINATED ALBUM:</h1>
        <h2>All inclusive</h2> <h2>Coma</h2>
        <div className='line-guys'>
          <p>Available on:</p>
          <a
            href='https://howlandroarrecords.com/shop/gavin-stephens-all-inclusive-coma/'
            target='_blank'
            title='Howel & Roar Records'>
            {' '}
            <span>HOWL & ROAR RECORDS</span>
          </a>
        </div>
        <div className={inView ? 'font-music fadeInBottom delay13' : ''}>
          <a
            href='https://music.apple.com/ca/album/all-inclusive-coma/1540202802'
            target='_blank'
            title="Gavin's Album on Itunes">
            <FaItunes className='itunes' />
          </a>

          <a
            href='https://open.spotify.com/artist/6T7ECggpeqm10fgKTvS6QA?si=WnPJO0pCSj2s7qn3H3-6oQ&dl_branch=1'
            target='-blank'
            title="Gavin's album on Spotify">
            <FaSpotify className='spotify' />
          </a>

          <a
            href='https://music.youtube.com/playlist?list=OLAK5uy_nVnQJAkBFEAC5wq-KxEQByva8Y2y-L-lE&feature=share'
            target='_blank'
            title="Gavin's album on Youtube music">
            <SiYoutubemusic className='play' />
          </a>

          <a
            href='https://howlandroarrecords.com/shop/gavin-stephens-all-inclusive-coma/'
            target='_blank'
            title='Howel & Roar Records'>
            <FaItunesNote className='amazon' />
          </a>
        </div>
      </div>
    </div>
  );
}
