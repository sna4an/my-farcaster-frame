module.exports = (req, res) => {
  const wallet = req.query.wallet || "";
  res.status(200).json({
    image: "https://placehold.co/600x200?text=NFTs",
    body: `NFT count (demo): 2\nWallet: ${wallet}`,
    buttons: [
      { label: "Back", action: `/api/frames?wallet=${wallet}` }
    ]
  });
};
