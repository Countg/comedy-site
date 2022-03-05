import '../styles/globals.css';
import { PodProvider } from '../providers/PodcastProvider';
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <PodProvider>
      <motion.div
        key={router}
        initial='pageInitial'
        animate='pageAnimate'
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}>
        <Component {...pageProps} />
      </motion.div>
    </PodProvider>
  );
}

export default MyApp;
