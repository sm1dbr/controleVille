require('dotenv').config();

function validarToken(req, res, next) {
    const tokenRecebido = req.headers['authorization'];

    if (!tokenRecebido || tokenRecebido !== `Bearer ${process.env.API_TOKEN}`) {
        return res.status(401).json({ mensagem: 'Token inválido ou ausente' });
    }

    next();
}

module.exports = validarToken;