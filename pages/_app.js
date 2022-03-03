import '../styles/globals.css';
import { PodProvider } from '../providers/PodcastProvider';
import { EventProvider } from '../providers/EventProvider';

function MyApp({ Component, pageProps }) {
  return (
    <PodProvider>
      <EventProvider>
        <Component {...pageProps} />
      </EventProvider>
    </PodProvider>
  );
}

export default MyApp;
