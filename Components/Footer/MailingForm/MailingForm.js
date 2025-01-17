import { useState } from 'react';

export default function MailingForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      const res = await fetch('/api/hello', {
        // Use the correct API path without the .js
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage('Successfully subscribed!');
        setEmail(''); // Clear input after success
      } else {
        setMessage(result.error || 'Something went wrong.');
      }
    } catch (error) {
      setMessage('Network error, please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        value={email}
        className='email-input'
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type='submit' className='mailchimp-button'>
        Subscribe
      </button>

      {message && (
        <div
          style={{
            color:
              message === 'Successfully subscribed!' ? '#FF1493' : 'orange',
            marginTop: '10px',
          }}>
          {message}
        </div>
      )}
    </form>
  );
}
