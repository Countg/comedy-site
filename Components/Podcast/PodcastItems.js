import React from 'react';
import { usePod } from '../../providers/PodcastProvider';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function PodcastItems({ overlayToggle }) {
  const { eps } = usePod();

  return (
    <div>
      {eps.slice(0, 5).map((ep) => (
        <div className='pod-items' key={ep.guid}>
          <h5 className='title'>{ep.title}</h5>
          <hr />

          <div className='pod-stuff'>
            <div className='side-right'>
              <p>{ep.description}</p>
            </div>

            <div className='pod-subscribe'>
              <p onClick={overlayToggle}>SUBSCRIBE</p>
            </div>

            <AudioPlayer
              src={ep.enclosure.link}
              autoPlay={false}
              className='pod-audio'
              customVolumeControls={[]}
              customAdditionalControls={[]}
              showJumpControls={false}
              layout='horizontal-reverse'
              customProgressBarSection={[
                // RHAP_UI.CURRENT_TIME,
                RHAP_UI.PROGRESS_BAR,
                RHAP_UI.CURRENT_LEFT_TIME,
              ]}
              defaultCurrentTime='Loading'
              defaultDuration='Loading'
            />
          </div>
        </div>
      ))}
    </div>
  );
}
