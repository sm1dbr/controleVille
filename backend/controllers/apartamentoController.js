const Apartamento = require('../models/apartamento');

// --- Listar todos os apartamentos ---
const listarApartamentos = async (req, res) => {
  try {
    const apartamentos = await Apartamento.find();
    res.json(apartamentos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar apartamentos' });
  }
};

// --- Buscar apartamento por ID ---
const buscarApartamentoPorId = async (req, res) => {
  try {
    const apartamento = await Apartamento.findById(req.params.id);
    if (!apartamento) return res.status(404).json({ erro: 'Apartamento não encontrado' });
    res.json(apartamento);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar apartamento' });
  }
};

// --- Criar novo apartamento ---
const criarApartamento = async (req, res) => {
  try {
    const novoApartamento = new Apartamento(req.body);
    await novoApartamento.save();
    res.status(201).json(novoApartamento);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar apartamento' });
  }
};

// --- Atualizar apartamento ---
const atualizarApartamento = async (req, res) => {
  try {
    const apartamento = await Apartamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!apartamento) return res.status(404).json({ erro: 'Apartamento não encontrado' });
    res.json(apartamento);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar apartamento' });
  }
};

// --- Deletar apartamento ---
const deletarApartamento = async (req, res) => {
  try {
    const apartamento = await Apartamento.findByIdAndDelete(req.params.id);
    if (!apartamento) return res.status(404).json({ erro: 'Apartamento não encontrado' });
    res.json({ mensagem: 'Apartamento deletado com sucesso!' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao deletar apartamento' });
  }
};

module.exports = {
  listarApartamentos,
  buscarApartamentoPorId,
  criarApartamento,
  atualizarApartamento,
  deletarApartamento
};
