const mongoose = require('mongoose');

const historicoSchema = new mongoose.Schema({
    acao: {
        type: String,
        required: true
    },
    usuario: {
        type: String, // Nome do usuário que realizou a ação
        required: true
    },
    perfil: {
        type: String, // Ex: admin, zelador, sindico, porteiro
        required: true
    },
    modulo: {
        type: String, // Ex: "EPI", "Apartamento", "Comunicado"
        required: true
    },
    referenciaId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'modulo', // Faz referência dinâmica ao documento do módulo
        required: false
    },
    descricao: {
        type: String, // Texto livre com o resumo da ação
        required: false
    },
    dataHora: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Historico', historicoSchema);
