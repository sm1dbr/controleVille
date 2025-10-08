const express = require('express');
const router = express.Router();
const {
    listarCorretores,
    buscarCorretorPorID,
    criarCorretor,
    adicionarVisita,
    deletarCorretor
} = require('../controllers/corretorController');

// --- ROTAS ---
router.get('/corretores', listarCorretores);
router.get('/corretores/:id', buscarCorretorPorID);
router.post('/corretores', criarCorretor);
router.post('/corretores/:id/visitas', adicionarVisita); // rota específica para registrar nova visita
router.delete('/corretores/:id', deletarCorretor);

module.exports = router;
