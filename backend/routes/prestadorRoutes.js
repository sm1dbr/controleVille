const express = require('express');
const router = express.Router();
const {
    listarPrestadores,
    buscarPrestadorPorID,
    criarPrestador,
    deletarPrestador
} = require('../controllers/prestadorController');

// --- ROTAS ---
router.get('/prestadores', listarPrestadores);
router.get('/prestadores/:id', buscarPrestadorPorID);
router.post('/prestadores', criarPrestador);
router.delete('/prestadores/:id', deletarPrestador);

module.exports = router;
