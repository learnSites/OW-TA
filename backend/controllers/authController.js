const googleAuth = (req, res) => {
  const clientId = '936609673781-3474auo6bn3gka6shfr4s7j8km09qs2m.apps.googleusercontent.com';
  const redirectUri = 'http://localhost:5000/auth/google/callback';

  const url = `https://accounts.google.com/o/oauth2/v2/auth?` +
              `client_id=${clientId}` +
              `&redirect_uri=${redirectUri}` +
              `&response_type=code` +
              `&scope=openid%20email%20profile`;

  res.redirect(url);    
};

const googleUserData = (req, res) => {
  const code = req.query.code;
  console.log('Authorization code:', code);
};

module.exports = { googleAuth, googleUserData };