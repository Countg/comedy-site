export default async function handler(req, res) {
  // Handle non-POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email } = req.body;

  // Validate email
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Mailchimp settings
  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;
  const DATACENTER = process.env.MAILCHIMP_DATACENTER; // Make sure this is set in your .env.local file

  if (!MAILCHIMP_API_KEY || !LIST_ID || !DATACENTER) {
    return res.status(500).json({ error: 'Mailchimp configuration missing' });
  }

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  try {
    // Send subscription request to Mailchimp
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `apikey ${MAILCHIMP_API_KEY}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    });

    const data = await response.json();

    // Check for errors from Mailchimp
    if (response.status >= 400) {
      return res
        .status(response.status)
        .json({ error: data.detail || 'Mailchimp error' });
    }

    // Return success response
    return res.status(200).json({ message: 'Successfully subscribed!' });
  } catch (error) {
    // Handle any errors in the try block
    console.error('Mailchimp API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
