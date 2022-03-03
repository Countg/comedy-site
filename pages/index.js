import React from 'react';
import Layout from '../Components/Layout';
import Header from '../Components/Header/Header';
import Navigation from '../Components/Navigation/Navigation';
import SmallNavigation from '../Components/Navigation/SmallNavigation';
import Latest from '../Components/Latest';
import TourDates from '../Components/Touring/TourDates';
import ScrollSlider from '../Components/Scroll';
import { useEvent } from '../providers/EventProvider';

export default function Home() {
  const { events } = useEvent();
  return (
    <Layout title='Gavin Stephens - Home'>
      <Header />
      <Navigation />
      <SmallNavigation />
      <Latest />
      <ScrollSlider />
      <TourDates posts={events} />
    </Layout>
  );
}
