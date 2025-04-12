import React from 'react';
import Link from 'next/link';
import moment from 'moment';

import { isDate } from 'moment';

const Touring = ({ events }) => {
  return (
    <>
      {events.map((item) => (
        <div className='touring' key={item.id}>
          {!item.venue.location ? (
            <p>Check back for Location</p>
          ) : (
            <p>
              {item.venue.city}, {item.venue.region}
            </p>
          )}

          {item.title ? (
            <h3>{item.title.toUpperCase()}</h3>
          ) : (
            <h3>COMEDY SHOW</h3>
          )}

          <h4>{moment(item.datetime).format('dddd MMM Do YYYY')}</h4>
          <p>{moment(item.starts_at).format('LT')}</p>
          <a
            href={item.url}
            target='_blank'
            title={`Comedy show @ ${item.title} ${item.location}`}
            className='ticket-btn bouncy'>
            TICKETS
          </a>
        </div>
      ))}
    </>
  );
};

export default Touring;
