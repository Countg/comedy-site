import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const BASEPARAMS = `orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`;
const BASEURL = `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_CALENDAR_ID}/events?${BASEPARAMS}`;

const finalURL = `${BASEURL}&key=${process.env.NEXT_PUBLIC_CALENDAR_API}`;

const EventContext = React.createContext();

export function useEvent() {
  return useContext(EventContext);
}

export function EventProvider({ children }) {
  const [events, setEvents] = useState([]);

  async function eventGetter() {
    const res = await fetch(finalURL);
    const posts = await res.json();
    const today = new Date().getTime();
    const currentPosts = posts.items.filter((items) => {
      return new Date(items.end.dateTime).getTime() > today;
    });
    setEvents(currentPosts);
  }

  useEffect(() => {
    eventGetter();
  }, []);

  const value = {
    events,
  };

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
}
