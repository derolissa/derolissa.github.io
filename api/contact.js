export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, inquiry_type, message, 'h-captcha-response': captcha } = req.body;

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY, // ← サーバー側でのみ使える
        name,
        email,
        subject: `De Rolissa お問い合わせ: ${inquiry_type}`,
        message,
        'h-captcha-response': captcha,
      }),
    });

    const data = await response.json();
    return res.status(200).json({ success: data.success });
  } catch (error) {
    return res.status(500).json({ success: false });
  }
}
