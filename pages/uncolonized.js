import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PodcastItems from '../Components/Podcast/PodcastItems';
import Podcast from '../Components/Podcast/PodcastHeader';
import Navigation from '../Components/Navigation/Navigation';
import SmallNavigation from '../Components/Navigation/SmallNavigation';
import Layout from '../Components/Layout';

export default function PodcastPage() {
  const [showOverlay, setShowOverlay] = useState(false);

  const overlayToggle = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <Layout
      title='Gavin Stephens - Uncolonized Podcast'
      description='Gavin Stephens CTV, CBC, is one of the hosts of Uncolonized Podcast. Check out the latest episode here, or stream on itunes, spotify and any where you download podcasts.'
      image='/images/Pink MoodCollageInstagramPost.png'>
      <div className='podcast-page'>
        <Podcast overlayToggle={overlayToggle} />
        <Navigation />
        <SmallNavigation />
        <div className='latest-eps'>
          <h2>
            LATEST
            <br /> EPISODES
          </h2>
          <div className='sub-pod'>
            <p onClick={overlayToggle}>SUBSCRIBE</p>
          </div>
        </div>
        <PodcastItems overlayToggle={overlayToggle} />

        <div className={showOverlay ? 'pod-overlay active' : 'pod-overlay'}>
          <div className='overlay-text'>
            <Link
              href='http://patreon.com/theuncolonized'
              target='_blank'
              title='Uncolonized on Patreon'>
              <h2 className='patreon'>Patreon.</h2>
            </Link>

            <Link
              href='https://chonillanetwork.com/'
              target='_blank'
              title='Chonilla Network'>
              <h2 className='chonilla-network'>Chonilla.</h2>
            </Link>

            <Link
              href='https://podcasts.apple.com/ca/podcast/uncolonized/id698940847'
              target='_blank'
              title='Uncolonized on Itunes'>
              <h2 className='apple-podcasts'>Apple Podcasts.</h2>
            </Link>

            <Link
              href='https://luminarypodcasts.com/listen/search?q=uncolonized'
              target='_blank'
              title='Uncolonized on Luminary'>
              <h2 className='luminary-podcasts'>Luminary.</h2>
            </Link>

            <Link
              href='https://open.spotify.com/show/4VXk56ZMQABGFxlu6aBuUv?si=Rlh5_xqVSumOdVFNb2TZeg&nd=1'
              target='_blank'
              title='Uncolonized on Spotify'>
              <h2 className='spotify-podcasts'>Spotify.</h2>
            </Link>

            <Link
              href='https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvNDI0NTUzMi9lcGlzb2Rlcy9mZWVk?ved=0CAUQrrcFahcKEwjYq-PR2sXqAhUAAAAAHQAAAAAQBA'
              target='_blank'
              title='Uncolonized on Google Podcast'>
              <h2 className='google-podcasts'>Google Podcasts.</h2>
            </Link>

            <Link
              href='https://music.amazon.ca/podcasts/0f7e322a-9108-4e40-8a6e-d5bc838720f1/uncolonized'
              target='_blank'
              title='Uncolonized on Amazon'>
              <h2 className='amazon-podcasts'>Amazon.</h2>
            </Link>

            <Link
              href='https://listen.stitcher.com/yvap/?af_dp=stitcher://show/123146&af_web_dp=https://www.stitcher.com/show/123146'
              target='_blank'
              title='Uncolonized on Stitcher'>
              <h2 className='stitcher-podcasts'>Stitcher.</h2>
            </Link>

            <Link
              href='https://www.spreaker.com/show/mrduncolonized'
              target='_blank'
              title='Uncolonized on Spreaker'>
              <h2 className='spreaker-podcasts'>Spreaker.</h2>
            </Link>
          </div>
          <div className='overlay-exit'>
            <p onClick={overlayToggle}>x</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
