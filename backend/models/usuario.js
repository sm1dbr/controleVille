const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    perfil: {
        type: String,
        enum: ['admin', 'zelador', 'sindico', 'porteiro'],
        required: true
    },
    ativo: {
        type: Boolean,
        default: true
    },
    criadoEm: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);
