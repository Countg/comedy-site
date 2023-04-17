import React from 'react';
import Link from 'next/link';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import MailingForm from './MailingForm/MailingForm';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';

const url =
  'https://gavinstephens.us2.list-manage.com/subscribe/post?u=1a54bfd268bc87972d3d7bf65&amp;id=5fb2430c5a';

export default function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='footer-container'>
        <div className='mailing-list'>
          <h2>Join The Mailing List</h2>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <MailingForm
                status={status}
                message={message}
                className='form'
                style={{}}
                onSubmitted={(formData) => subscribe(formData)}
              />
            )}
          />
        </div>
        <div className='contact-info'>
          <h2>CONTACT</h2>

          <p>For booking & inquires:</p>
          <div className='contact-contact'>
            <a href='mailto:info@gavinstephens.ca' target='_blank'>
              <p className='email-link'>info@gavinstephens.ca</p>
            </a>
          </div>
        </div>

        <div className='footer-social'>
          <a
            href='https://www.facebook.com/GavinbStephens'
            target='_blank'
            title="Gavin's Facebook">
            <BsFacebook className='footer-facebook' />
          </a>

          <a
            href='http://twitter.com/GavinbStephens'
            target='_blank'
            title="Gavin's Twitter">
            <FiTwitter className='footer-twitter' />
          </a>

          <a
            href='https://www.youtube.com/user/hotcakes23'
            target='_blank'
            title="Gavin's YouTube">
            <BsYoutube className='footer-youtube' />
          </a>

          <a
            href='http://instagram.com/countgavin'
            target='_blank'
            title="Gavin's Instagram account">
            <BsInstagram className='footer-instagram' />
          </a>
        </div>
      </div>
    </div>
  );
}
