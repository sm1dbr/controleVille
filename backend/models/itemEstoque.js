const mongoose = require('mongoose');

const itemEstoqueSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    quantidade: { type: Number, required: true },
    dataAtualizacao: { type: Date, default: Date.now },
    destinatario: { type: String, required: true }
});

// ItemEstoque aqui serve para criar o nome da coleção no MongoDB, que depois será pluralizado, não confundir com uma variável comum

const ItemEstoque = mongoose.model('ItemEstoque', itemEstoqueSchema);

module.exports = ItemEstoque;