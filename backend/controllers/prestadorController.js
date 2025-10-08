const Prestador = require('../models/prestador');

// --- Listar todos os prestadores ---
const listarPrestadores = async (req, res) => {
    try {
        const prestadores = await Prestador.find().sort({ dataVisita: -1 });
        res.json(prestadores);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao listar prestadores' });
    }
};

// --- Buscar prestador por ID ---
const buscarPrestadorPorID = async (req, res) => {
    try {
        const prestador = await Prestador.findById(req.params.id);
        if (!prestador) return res.status(404).json({ erro: 'Prestador não encontrado' });
        res.json(prestador);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao buscar prestador' });
    }
};

// --- Criar novo prestador ---
const criarPrestador = async (req, res) => {
    try {
        const { empresa, nome, cpf, rg, dataVisita, horaVisita, apartamentoVisitado, autorizadoPor, porteiroResponsavel, observacoes } = req.body;
        const novoPrestador = new Prestador({
            empresa,
            nome,
            cpf,
            rg,
            dataVisita,
            horaVisita,
            apartamentoVisitado,
            autorizadoPor,
            porteiroResponsavel,
            observacoes
        });
        await novoPrestador.save();
        res.status(201).json(novoPrestador);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao criar prestador' });
    }
};

// --- Deletar prestador ---
const deletarPrestador = async (req, res) => {
    try {
        const prestador = await Prestador.findByIdAndDelete(req.params.id);
        if (!prestador) return res.status(404).json({ erro: 'Prestador não encontrado' });
        res.json({ mensagem: 'Prestador deletado com sucesso!' });
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao deletar prestador' });
    }
};

module.exports = {
    listarPrestadores,
    buscarPrestadorPorID,
    criarPrestador,
    deletarPrestador
};
