'use client';

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_PODCAST_URL;

if (!API_URL) {
  console.error('Missing NEXT_PUBLIC_PODCAST_URL environment variable!');
}

const PodContext = React.createContext();

export function usePod() {
  return useContext(PodContext);
}

export function PodProvider({ children }) {
  const [eps, setEps] = useState([]);

  useEffect(() => {
    if (!API_URL) return;

    axios
      .get(API_URL)
      .then((res) => {
        setEps(res.data.items);
      })
      .catch((err) => {
        console.error('Failed to fetch episodes:', err);
      });
  }, []);

  return <PodContext.Provider value={{ eps }}>{children}</PodContext.Provider>;
}

// If you need to import as `import PodProvider from ...`
export default PodProvider;
