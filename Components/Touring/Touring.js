import React from 'react';
import Link from 'next/link';
import moment from 'moment';

import { isDate } from 'moment';

const Touring = ({ events }) => {
  return (
    <>
      {events.items.map((item) => (
        <div className='touring' key={item.id}>
          {!item.location ? (
            <p>Check back for Location</p>
          ) : (
            <p>{item.location}</p>
          )}

          {item.summary ? (
            <h3>{item.summary.toUpperCase()}</h3>
          ) : (
            <h3>COMEDY SHOW</h3>
          )}

          <h4>{moment(item.start.dateTime).format('dddd MMM Do YYYY')}</h4>
          <p>{moment(item.start.dateTime).format('LT')}</p>
          <a
            href={item.description}
            target='_blank'
            title={`Comedy show @ ${item.summary} ${item.location}`}
            className='ticket-btn bouncy'>
            TICKETS
          </a>
        </div>
      ))}
    </>
  );
};

export default Touring;
