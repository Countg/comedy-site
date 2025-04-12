'use client'; // Mark this file as a client component
import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { PodProvider } from '../providers/PodcastProvider'; // Your Podcast context provider
import { motion } from 'framer-motion';
// Framer Motion for animations

export default function MyApp({ Component, pageProps, router }) {
  const [isClient, setIsClient] = useState(false);

  // Use useEffect to ensure this only runs client-side
  useEffect(() => {
    setIsClient(true); // Client-specific logic
  }, []);

  // If it's not the client, show a loading state
  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <html lang='en'>
      <link rel='icon' href='/favicon.ico' sizes='any' />

      <body>
        <PodProvider>
          <motion.div
            key={router} // Ensures that motion animation resets on route change
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
            {/* Render children content */}
          </motion.div>
        </PodProvider>
      </body>
    </html>
  );
}
