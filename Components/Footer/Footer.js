import React from 'react';
import Link from 'next/link';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import MailingForm from './MailingForm/MailingForm';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';

export default function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='footer-container'>
        <div className='mailing-list'>
          <h2>Join The Mailing List</h2>
          <MailchimpSubscribe
            url={process.env.NEXT_PUBLIC_MAILCHIMP_URL}
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
          <a href='mailto:bookings@gavinstephens.ca' target='_blank'>
            <p className='email-link'>bookings@gavinstephens.ca</p>
          </a>
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