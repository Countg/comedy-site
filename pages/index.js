import React from 'react';
import Layout from '../Components/Layout';
import Header from '../Components/Header/Header';
import Navigation from '../Components/Navigation/Navigation';
import SmallNavigation from '../Components/Navigation/SmallNavigation';
import Latest from '../Components/Latest';
import TourDates from '../Components/Touring/TourDates';
import ScrollSlider from '../Components/Scroll';
import showDates from '../lib/showDates';

export default function Home({ showData }) {
  return (
    <Layout title='Gavin Stephens - Home'>
      <Header />
      <Navigation />
      <SmallNavigation />
      <Latest />
      <ScrollSlider />
      <TourDates posts={showData} />
    </Layout>
  );
}

export async function getServerSideProps() {
  // const { NEXT_PUBLIC_CALENDAR_API, NEXT_PUBLIC_CALENDAR_ID } = process.env;

  // const BASEPARAMS = `orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`;
  // const BASEURL = `https://www.googleapis.com/calendar/v3/calendars/${NEXT_PUBLIC_CALENDAR_ID}/events?${BASEPARAMS}`;

  // const HEADERS = {
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Methods': 'GET',
  // };

  // const finalURL = `${BASEURL}&key=${NEXT_PUBLIC_CALENDAR_API}`;

  // const res = await fetch(finalURL);
  // const posts = await res.json();

  const showData = await showDates();

  return {
    props: {
      // posts,
      showData,
    },
  };
}
