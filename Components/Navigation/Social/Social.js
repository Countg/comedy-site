import React from 'react';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { TbBrandBluesky } from 'react-icons/tb';
import { FaTiktok } from 'react-icons/fa';

export default function SocialNav() {
  return (
    <div className='icon-bar side-social social-delay'>
      <a
        href='https://bsky.app/profile/gavinstephens.bsky.social'
        target='_blank'
        title="Gavin's Bluesky Social">
        <TbBrandBluesky className='bluesky' />
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
      <a
        href='https://www.tiktok.com/@gavinstephens152?_t=ZM-8tMxa5lOQ2H&_r=1'
        target='_blank'
        title='TikTock'>
        <FaTiktok className='tiktok' />
      </a>
    </div>
  );
}
