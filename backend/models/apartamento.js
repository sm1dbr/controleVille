const mongoose = require('mongoose');

const contatoSchema = new mongoose.Schema({
  nome: String,
  parentesco: String,
  telefoneCelular: String,
  telefoneFixo: String,
});

const imobiliariaSchema = new mongoose.Schema({
  nome: String,
  telefoneCelular: String,
  telefoneFixo: String,
});

const inquilinoSchema = new mongoose.Schema({
  nome: String,
  telefoneCelular: String,
  telefoneFixo: String,
  contatoEmergencia: [contatoSchema],
});

const apartamentoSchema = new mongoose.Schema({
  numero: { type: String, required: true },
  proprietario: {
    nome: String,
    telefoneCelular: String,
    telefoneFixo: String,
    contatoEmergencia: [contatoSchema],
  },
  proprietarioMoraNoLocal: { type: Boolean, default: true }, // aquela caixinha de “mora no local?”
  apartamentoVazio: { type: Boolean, default: false },
  temImobiliaria: { type: Boolean, default: false },
  imobiliaria: imobiliariaSchema, // dados da imobiliária/corretor se tiver
  inquilino: inquilinoSchema, // só é preenchido se o proprietário não mora
});

module.exports = mongoose.model('Apartamento', apartamentoSchema);
