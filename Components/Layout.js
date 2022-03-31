import React from 'react';
import Head from 'next/head';
import SocialNav from './Navigation/Social/Social';
import Footer from './Footer/Footer';
import { useRouter } from 'next/router';

export default function Layout({ children, ...customMeta }) {
  const router = useRouter();
  const meta = {
    title: 'Gavin Site',
    description: `This is the website of comedian Gavin Stephens.Juno Nominee CBC, and Just For Laughs artist `,
    image: '/GavinStephensPurps@2x.png',
    type: 'website',
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://gavinstephens.ca${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://gavinstephens.ca${router.asPath}`}
        />

        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Comedian Gavin Stephens' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@GavinbStephens' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>
      <main>
        <SocialNav />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
