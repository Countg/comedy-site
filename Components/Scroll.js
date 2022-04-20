import React from 'react';

export default function ScrollSlider() {
  return (
    <div className='top-swiper'>
      <h2>As Seen On...</h2>
      <div className='main-swiper animate'>
        <div className='swiper'>
          <img src='/logo/SXSW_Stack_logo.svg' alt='SXSW' />
          <img src='/logo/CBC_Logo_1992-Present.svg' alt='CBC' />
          <img
            src='/logo/just-for-laughs-logo-vector.svg'
            alt='Just For Laughs'
          />
          <img src='/logo/Sirius_XM_Radio_Logo.svg' alt='SiriusXM Radio' />
          <img src='/logo/logo.svg' alt='JUNO awards 2022' />
          <img
            src='/logo/CTV_Comedy_Channel_2019.svg'
            alt='The Comedy Channel'
          />
          <img src='/logo/MTV_Logo.svg' alt='MTV' />
          <img
            src='/logo/CTV_flat_logo.svg'
            alt='CTV'
            style={{ width: 200, height: 100 }}
          />
        </div>
        <div className='swiper'>
          <img src='/logo/SXSW_Stack_logo.svg' alt='SXSW' />
          <img src='/logo/CBC_Logo_1992-Present.svg' alt='CBC' />
          <img
            src='/logo/just-for-laughs-logo-vector.svg'
            alt='Just For Laughs'
          />
          <img src='/logo/Sirius_XM_Radio_Logo.svg' alt='Sirius XM Radio' />
          <img src='/logo/logo.svg' alt='JUNO awards 2022' />
          <img
            src='/logo/CTV_Comedy_Channel_2019.svg'
            alt='The Comedy Channel'
          />
          <img src='/logo/MTV_Logo.svg' alt='MTV' />
          <img
            src='/logo/CTV_flat_logo.svg'
            alt='CTV'
            style={{ width: 200, height: 100 }}
          />
        </div>
      </div>
    </div>
  );
}
