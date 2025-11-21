// api/index.js
// Redirect root (/) ke /api/frames supaya pengguna tidak dapat 404
module.exports = (req, res) => {
  // redirect to the frames endpoint
  const target = '/api/frames' + (req.url.includes('?') ? '' : '');
  res.writeHead(302, { Location: target });
  res.end();
};
