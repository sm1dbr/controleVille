const mongoose = require('mongoose');

// --- Subdocumento: representa uma visita feita pelo corretor ---
const visitaSchema = new mongoose.Schema({
    data: { type: Date, required: true },
    hora: { type: String, required: true },
    apartamento: { type: String, required: true }, // exemplo: "Apto 101"
    autorizadoPor: { type: String }, // quem autorizou (síndico, morador etc.)
    porteiro: { type: String, required: true }, // quem liberou a entrada
    observacoes: { type: String }
});

// --- Schema principal: Corretor ---
const corretorSchema = new mongoose.Schema({
    imobiliaria: { type: String, required: true },
    nome: { type: String, required: true },
    creci: { type: String, required: true },
    visitas: [visitaSchema] // lista de visitas
});

const Corretor = mongoose.model('Corretor', corretorSchema);

module.exports = Corretor;
