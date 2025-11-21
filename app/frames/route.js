Js

const fetch = require('node-fetch');

module.exports = (req, res) => {
  try {
    const wallet = req.query.wallet || '';

    const payload = {
      image: "https://placehold.co/600x200?text=Portfolio+Overview",
      body: `Welcome to your mini app.\nWallet: ${wallet || 'not provided'}`,
      buttons: [
        { label: "View Tokens", action: `/frames/tokens?wallet=${wallet}` },
        { label: "View NFTs", action: `/frames/nfts?wallet=${wallet}` }
      ]
    };

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).send(JSON.stringify(payload));
  } catch (e) {
    return res.status(500).send('error');
  }
};
