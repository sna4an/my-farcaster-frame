module.exports = (req, res) => {
  const wallet = req.query.wallet || "";
  res.status(200).json({
    image: "https://placehold.co/600x200?text=Overview",
    body: `Wallet: ${wallet}`,
    buttons: [
      { label: "Tokens", action: `/api/frames/tokens?wallet=${wallet}` },
      { label: "NFTs", action: `/api/frames/nfts?wallet=${wallet}` }
    ]
  });
};
