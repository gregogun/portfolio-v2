export default async (req, res) => {
  const { name, email, message } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const url = process.env.FORMSPREE_ENDPOINT;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    });

    if (response.status >= 400) {
      const text = await response.text();
      return res.status(400).json({
        error: text
      });
    }

    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
