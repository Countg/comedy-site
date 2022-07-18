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
              Gavin Stephens is a stand-up comedian who skillfully balances
              playful irony and morbid silliness; he is known for his (really)
              quick wit and stream of consciousness comedic style. Gavin has
              been featured in Montreal’s Just For Laughs and Austin’s SXSW,
              alongside comedy legends Margaret Cho, Janeane Garofalo, Andy
              Kindler, Reggie Watts, Hannibal Buress and Marc Maron. He has been
              named one of the “10 Funniest Canadians” by E! Network and chosen
              as “Best Local Stand-up Comic” in NOW Magazine’s Readers Choice
              poll. Gavin has been recently nominated for a Juno award, for his
              latest Album “All Inclusive Coma” available on Howl & Roar
              records. <br />
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
