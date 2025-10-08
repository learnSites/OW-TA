const googleAuth = (req, res) => {


//   const url = `https://accounts.google.com/o/oauth2/v2/auth?` +
//               `client_id=${clientId}` +
//               `&redirect_uri=${redirectUri}` +
//               `&response_type=code` +
//               `&scope=openid%20email%20profile`;

  res.redirect(url);    
};

const googleUserData = (req, res) => {
  const code = req.query.code;
  console.log('Authorization code:', code);
};

module.exports = { googleAuth, googleUserData };