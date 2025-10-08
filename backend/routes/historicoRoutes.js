const express = require('express');
const router = express.Router();
const {
    registrarAcao,
    listarHistorico,
    buscarPorModulo,
    buscarPorUsuario,
    limparHistoricoAntigo
} = require('../controllers/historicoController');

// --- Rotas ---
router.post('/historico', registrarAcao);
router.get('/historico', listarHistorico);
router.get('/historico/modulo/:modulo', buscarPorModulo);
router.get('/historico/usuario/:usuario', buscarPorUsuario);
router.delete('/historico/limpar', limparHistoricoAntigo);

module.exports = router;
