const mongoose = require('mongoose');

const epiSchema = new mongoose.Schema({
    funcionario: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },
    epi: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        default: 1
    },
    dataEntrega: {
        type: Date,
        default: Date.now
    },
    assinatura: {
        type: String, // pode ser uma URL de imagem ou um texto simples
        required: true
    },
    observacoes: {
        type: String
    }
});

module.exports = mongoose.model('EPI', epiSchema);
