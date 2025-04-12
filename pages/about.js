import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import SmallNavigation from '../Components/Navigation/SmallNavigation';
import Layout from '../Components/Layout';
import Link from 'next/link';

export default function About() {
  return (
    <Layout
      title='Gavin Stephens - ABOUT'
      description='This is comedian Gavin Stephens about Page. You can check out photos and download his resume here. Check out his contact info and see how you can book him!'>
      <div className='about-page'>
        <Navigation />
        <SmallNavigation />

        <div className='gav-bio'>
          <div className='gav-photo'>
            <h2> BIO</h2>
          </div>
          <div className='gav-info'>
            <h2>Gavin</h2>
            <h2>STEPHENS</h2>
            <hr />
            <p>
              Gavin, born to working-class Afro-Caribbean parents in Markham,
              navigates life through the lens of philosophy. He uses humor and
              critical insights to explore issues of identity, class, and
              systemic inequity. Being an outsider, Gavin has always seen the
              need to express his views on social constructs and political
              ideology in a easy to digest every man way. Gavin has performed at
              Montreal’s Just for Laughs and Austin’s SXSW, was named one of the
              "10 Funniest Canadians" by E! Network, and won NOW Magazine’s
              “Best Local Stand-up Comic.” Recently, he earned a Juno nomination
              for his album All Inclusive Coma, available on Howl & Roar
              Records. <br />
              <br />
              When he’s not performing or hosting the comedic leftist podcast,
              Uncolonized, he can be found practicing his knitting or cheering
              on the Raptors. His perfect day includes watching cartoons,
              reading comic books and watching indie wrestling.
            </p>
            <div className='button-links'>
              <Link href='https://photos.app.goo.gl/ZRbBUWwYVn31Q7s99'>
                <button className='promo-photos'>PROMO PHOTOS</button>
              </Link>
              <Link href='https://youtube.com/playlist?list=PLF59C465DB12382B9'>
                <button className='stand-up'>STAND UP CLIPS</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
