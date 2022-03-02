import React from 'react';

// a basic form
export default function MailingForm({
  status,
  message,
  className,
  style,
  onSubmitted,
}) {
  let input;
  const submit = () =>
    input &&
    input.value.indexOf('@') > -1 &&
    onSubmitted({
      EMAIL: input.value,
    });

  return (
    <div className={className} style={style}>
      <input
        ref={(node) => (input = node)}
        type='email'
        className='email-input'
        placeholder='Your email goes here'
      />

      <button onClick={submit} className='mailchimp-button'>
        SUBMIT
      </button>
      {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
      {status === 'error' && (
        <div
          style={{ color: 'orange' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          style={{ color: 'yellow' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  );
}
