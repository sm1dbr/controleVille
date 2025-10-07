const express = require('express');
const router = express.Router();
const {
    listarComunicados,
    buscarComunicadoPorID,
    criarComunicado,
    deletarComunicado
} = require('../controllers/comunicadoController');

// --- ROTAS  ---

router.get('/comunicados', listarComunicados);
router.get('/comunicados/:id', buscarComunicadoPorID);
router.post('/comunicados', criarComunicado);
router.delete('/comunicados/:id', deletarComunicado);

module.exports = router;
