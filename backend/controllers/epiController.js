const EPI = require('../models/epi');

// Listar todos os registros de EPI
exports.listarEPIs = async (req, res) => {
    try {
        const epis = await EPI.find();
        res.status(200).json(epis);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar registros de EPI', error: err });
    }
};

// Buscar EPI por ID
exports.buscarEPIporID = async (req, res) => {
    try {
        const epi = await EPI.findById(req.params.id);
        if (!epi) return res.status(404).json({ message: 'Registro de EPI não encontrado' });
        res.status(200).json(epi);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar registro de EPI', error: err });
    }
};

// Criar novo registro de EPI
exports.criarEPI = async (req, res) => {
    try {
        const novoEPI = new EPI(req.body);
        await novoEPI.save();
        res.status(201).json({ message: 'Registro de EPI criado com sucesso!', epi: novoEPI });
    } catch (err) {
        res.status(500).json({ message: 'Erro ao criar registro de EPI', error: err });
    }
};

// Deletar registro de EPI
exports.deletarEPI = async (req, res) => {
    try {
        const epi = await EPI.findByIdAndDelete(req.params.id);
        if (!epi) return res.status(404).json({ message: 'Registro de EPI não encontrado' });
        res.status(200).json({ message: 'Registro de EPI deletado com sucesso!' });
    } catch (err) {
        res.status(500).json({ message: 'Erro ao deletar registro de EPI', error: err });
    }
};
