const { verify, decode } = require('jsonwebtoken');
require('dotenv/config');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send('AccessToken não informado.');
  }

  const [, accessToken] = token.split(' ');

  try {
    verify(accessToken, process.env.JSON_SECRET);

    const { id, email } = await decode(accessToken);

    req.usuarioId = id;
    req.usuarioEmail = email;

    return next();
  } catch (erro) {
    res.status(401).send('Usuário não autorizado.');
  }
};
