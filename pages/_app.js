import '../styles/globals.css';
import { PodProvider } from '../providers/PodcastProvider';

function MyApp({ Component, pageProps }) {
  return (
    <PodProvider>
      <Component {...pageProps} />
    </PodProvider>
  );
}

export default MyApp;
