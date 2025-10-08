const express = require('express');
const router = express.Router();
const {
    listarEPIs,
    buscarEPIporID,
    criarEPI,
    deletarEPI
} = require('../controllers/epiController');

// --- Rotas ---
router.get('/epis', listarEPIs);
router.get('/epis/:id', buscarEPIporID);
router.post('/epis', criarEPI);
router.delete('/epis/:id', deletarEPI);

module.exports = router;
