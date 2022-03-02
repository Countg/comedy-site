import React from 'react';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';

export default function SocialNav() {
  return (
    <div className='icon-bar side-social social-delay'>
      <a
        href='https://www.facebook.com/GavinbStephens'
        target='_blank'
        title="Gavin's Facebook">
        <BsFacebook className='facebook' />
      </a>

      <a
        href='http://twitter.com/GavinbStephens'
        target='_blank'
        title="Gavin's Twitter">
        <FiTwitter className='twitter' />
      </a>

      <a
        href='https://www.youtube.com/user/hotcakes23'
        target='_blank'
        title="Gavin's YouTube">
        <BsYoutube className='youtube' />
      </a>

      <a
        href='http://instagram.com/countgavin'
        target='_blank'
        title="Gavin's Instagram account">
        <BsInstagram className='insta' />
      </a>
    </div>
  );
}
