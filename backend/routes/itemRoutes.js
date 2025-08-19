const express = require('express');
const router = express.Router();
const ItemEstoque = require('../models/itemEstoque');
const validarToken = require('../authMiddleware')

// --- Rota para adicionar | POST ---

router.post('/itens', validarToken, async (req, res) => {
    try {
        const novoItem = new ItemEstoque(req.body);
        const itemSalvo = await novoItem.save();
        res.status(201).json(itemSalvo);
    } catch (erro) {
        res.status(400).json({ mensagem: erro.message });
    }
});


// --- Rota para listar | GET ---

router.get('/itens', validarToken, async (req, res) => {
    try {
        const itens = await ItemEstoque.find();
        res.json(itens);
    } catch (erro) {
        res.status(500).json({ mensagem: erro.message });
    }
});


// --- Rota para atualizar | PUT ---

router.put('/itens/:id', validarToken, async (req, res) => {
    try {
        const { id } = req.params; // ID já é automaticamente criado pelo mongoose, através do schema
        const itemAtualizado = await ItemEstoque.findByIdAndUpdate(id, req.body, { new: true });

        if (!itemAtualizado) {
            return res.status(404).json({ mensagem: 'Item não encontrado' });
        }

        res.json(itemAtualizado);

    } catch (erro) {
        res.status(400).json({ mensagem: erro.mensage });
    }
});


// --- Rota para deletar | DELETE ---

router.delete('/itens/:id', validarToken, async (req, res) => {
    try {
        const { id } = req.params;
        const itemDeletado = await ItemEstoque.findByIdAndDelete(id);

        if (!itemDeletado) {
            return res.status(404).json({ mensagem: 'Item não encontrado' });
        }

        res.json({ mensagem: 'Item deletado com sucesso' });

    } catch (erro) {
        res.status(500).json({ mensagem: erro.message });
    }
});


module.exports = router;