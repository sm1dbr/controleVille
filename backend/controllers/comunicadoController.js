const Comunicado = require('../models/comunicado');

// --- listar todos os comunicados ---

const listarComunicados = async (req, res) => {
    try {
        const comunicados = await Comunicado.find();
        res.json(comunicados);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao listar comunicados' });
    }
};

// --- buscar comunicado por id ---

const buscarComunicadoPorID = async (req, res) => {
    try {
        const comunicado = await Comunicado.findById(req.params.id); // corrigido
        if (!comunicado) return res.status(404).json({ erro: 'Comunicado não encontrado' });
        res.json(comunicado);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao buscar comunicado' });
    }
};

// --- criar novo comunicado ---

const criarComunicado = async (req, res) => {
    try {
        const { titulo, mensagem, visivelPara } = req.body;
        const novoComunicado = new Comunicado({ titulo, mensagem, visivelPara });
        const salvo = await novoComunicado.save();
        res.status(201).json(salvo); // agora responde pro front
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao criar comunicado' });
    }
};

// --- deletar comunicado ---

const deletarComunicado = async (req, res) => {
    try {
        const comunicado = await Comunicado.findByIdAndDelete(req.params.id); // corrigido
        if (!comunicado) return res.status(404).json({ erro: 'Comunicado não encontrado' });
        res.json({ mensagem: 'Comunicado deletado com sucesso!' });
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao deletar comunicado' });
    }
};

module.exports = {
    listarComunicados,
    buscarComunicadoPorID,
    criarComunicado,
    deletarComunicado
};
