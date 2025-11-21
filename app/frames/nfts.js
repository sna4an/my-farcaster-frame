Js

const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const wallet = req.query.wallet || '';

    const nftCount = wallet ? 2 : 0;

    const payload = {
      image: "https://placehold.co/600x200?text=NFTs",
      body: `Wallet: ${wallet || 'not provided'}\nNFT count (demo): ${nftCount}`,
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
