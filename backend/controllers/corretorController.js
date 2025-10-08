const Corretor = require('../models/corretor');

// --- Listar todos os corretores ---
const listarCorretores = async (req, res) => {
    try {
        const corretores = await Corretor.find();
        res.json(corretores);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao listar corretores' });
    }
};

// --- Buscar corretor por ID ---
const buscarCorretorPorID = async (req, res) => {
    try {
        const corretor = await Corretor.findById(req.params.id);
        if (!corretor) return res.status(404).json({ erro: 'Corretor não encontrado' });
        res.json(corretor);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao buscar corretor' });
    }
};

// --- Criar novo corretor ---
const criarCorretor = async (req, res) => {
    try {
        const { imobiliaria, nome, creci, visitas } = req.body;
        const novoCorretor = new Corretor({ imobiliaria, nome, creci, visitas });
        await novoCorretor.save();
        res.status(201).json(novoCorretor);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao criar corretor' });
    }
};

// --- Adicionar uma visita a um corretor existente ---
const adicionarVisita = async (req, res) => {
    try {
        const { id } = req.params;
        const { data, hora, apartamento, autorizadoPor, porteiro, observacoes } = req.body;

        const corretor = await Corretor.findById(id);
        if (!corretor) return res.status(404).json({ erro: 'Corretor não encontrado' });

        corretor.visitas.push({ data, hora, apartamento, autorizadoPor, porteiro, observacoes });
        await corretor.save();

        res.json({ mensagem: 'Visita adicionada com sucesso!', corretor });
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao adicionar visita' });
    }
};

// --- Deletar corretor ---
const deletarCorretor = async (req, res) => {
    try {
        const corretor = await Corretor.findByIdAndDelete(req.params.id);
        if (!corretor) return res.status(404).json({ erro: 'Corretor não encontrado' });
        res.json({ mensagem: 'Corretor deletado com sucesso!' });
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao deletar corretor' });
    }
};

module.exports = {
    listarCorretores,
    buscarCorretorPorID,
    criarCorretor,
    adicionarVisita,
    deletarCorretor
};
