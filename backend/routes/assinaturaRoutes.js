const express = require('express');
const router = express.Router();
const {
    criarAssinatura,
    listarAssinaturas,
    buscaAssinaturaPorID,
    deletarAssinatura
} = require('../controllers/assinaturaController');


// esse /assinaturas não é uma pasta, é um endpoint da rota da API, como as URLs
router.get('/assinaturas', listarAssinaturas);
router.get('/assinaturas/:id', buscaAssinaturaPorID);

router.post('/assinaturas', criarAssinatura);
router.delete('/assinaturas/:id', deletarAssinatura);

module.exports = router;