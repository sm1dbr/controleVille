const mongoose = require('mongoose');

const assinaturaSchema = new mongoose.Schema({
    funcionario: { type: String, required: true },
    itemRecebido: { type: String, required: true },
    dataRecebimento: { type: Date, default: Date.now },
    assinatura: { type: String, required: true },
    observacoes: { type: String }
});

const Assinatura = mongoose.model('Assinatura', assinaturaSchema);

module.exports = Assinatura;