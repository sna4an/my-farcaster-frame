Js

const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const wallet = req.query.wallet || '';

    let tokenCount = 0;
    try {
      if (wallet) {
        tokenCount = 3; // demo fallback
      }
    } catch (e) {
      tokenCount = 0;
    }

    const payload = {
      image: "https://placehold.co/600x200?text=Tokens",
      body: `Wallet: ${wallet || 'not provided'}\nToken count (demo): ${tokenCount}`,
      buttons: [
        { label: "Back", action: "/frames" }
      ]
    };

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).send(JSON.stringify(payload));
  } catch (e) {
    return res.status(500).send('error');
  }
};
