const mongoose = require('mongoose');

const prestadorSchema = new mongoose.Schema({
    empresa: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: false
    },
    rg: {
        type: String,
        required: false
    },
    dataVisita: {
        type: Date,
        required: true
    },
    horaVisita: {
        type: String, // Pode ser '14:30', por exemplo
        required: true
    },
    apartamentoVisitado: {
        type: String,
        required: false
    },
    autorizadoPor: {
        type: String, // quem autorizou a entrada
        required: false
    },
    porteiroResponsavel: {
        type: String,
        required: false
    },
    observacoes: {
        type: String
    }
});

module.exports = mongoose.model('Prestador', prestadorSchema);
