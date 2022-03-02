import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_PODCAST_URL;

const PodContext = React.createContext();

export function usePod() {
  return useContext(PodContext);
}

export function PodProvider({ children }) {
  const [eps, setEps] = useState([]);

  function episodeGetter() {
    axios
      .get(API_URL)
      .then((res) => {
        setEps(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    episodeGetter();
  }, []);

  const value = {
    eps,
  };

  return <PodContext.Provider value={value}>{children}</PodContext.Provider>;
}
