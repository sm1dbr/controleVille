const express = require('express');
const router = express.Router();
const {
    criarUsuario,
    listarUsuarios,
    deletarUsuario
} = require('../controllers/usuarioController');

// --- Rotas ---
router.post('/usuarios', criarUsuario);
router.get('/usuarios', listarUsuarios);
router.delete('/usuarios/:id', deletarUsuario);

module.exports = router;
