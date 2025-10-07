const Contato = require('../models/contato');

const listarContatos = async (req,res) => {
    try {
        const contatos = await Contato.find();
        res.json(contatos);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao listar contatos' });
    }
};

const buscarContatoPorId = async (req, res) => {
    try {
        const contato = await Contato.findById(req.params.id);
        if (!contato) return res.status(404).json({ erro: 'Contato não encontrado' });
        res.json(contato);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao buscar contato' });
    }
};


const criarContato = async (req, res) => {
    try {
        const { nome, telefone, email, observacoes } = req.body;
        const novoContato = new Contato({ nome, telefone, observacoes });
        await novoContato.save();
        res.status(201).json(novoContato);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao criar contato' });
    }
};

const deletarContato = async (req, res) => {
    try {
        const contato = await Contato.findByIdAndDelete(req.params.id);
        if (!contato) return res.status(404).json({ erro: 'Contato não encontrado' });
        res.json({ mensagem: 'Contato deletado com sucesso!' });
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao deletar contato' });
    }
};

module.exports = {
    listarContatos,
    buscarContatoPorId,
    criarContato,
    deletarContato
};