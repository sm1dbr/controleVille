const express = require('express');
const router = express.Router()
const {
    listarContatos,
    buscarContatoPorId,
    criarContato,
    deletarContato
} = require('../controllers/contatoController');


router.get('/', listarContatos);
router.get('/:id', buscarContatoPorId);
router.post('/', criarContato);
router.delete('/:id', deletarContato);

module.exports = router;
