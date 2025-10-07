const mongoose = require('mongoose');

const comunicadoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    mensagem: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now },
    visivelPara: { type: [String], default: ['porteiro', 'zelador', 'sindico'] },
    lidoPor: { type: [String], default: [] }
});

const Comunicado = mongoose.model('Comunicado', comunicadoSchema);

module.exports = comunicadoSchema;