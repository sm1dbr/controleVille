const express = require('express');
const router = express.Router();
const {
  listarApartamentos,
  buscarApartamentoPorId,
  criarApartamento,
  atualizarApartamento,
  deletarApartamento
} = require('../controllers/apartamentoController');


router.get('/apartamentos', listarApartamentos);
router.get('/apartamentos/:id', buscarApartamentoPorId);
router.post('/apartamentos', criarApartamento);
router.put('/apartamentos/:id', atualizarApartamento);
router.delete('/apartamentos/:id', deletarApartamento);

module.exports = router;
