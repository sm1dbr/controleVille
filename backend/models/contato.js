const mongoose = require('mongoose');

const contatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    observacoes: { type: String }
});

const Contato = mongoose.model('Contato', contatoSchema);

module.exports = Contato;