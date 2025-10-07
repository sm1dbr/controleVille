// Esta parte do código recebe os dados da requisição, conversa com o banco (Model) e devolve a resposta. É a parte lógica. 

const Assinatura = require('../models/assinatura');

// --- Função POST ---

exports.criarAssinatura = async (req, res) => {
    try {
        const nova = new Assinatura({
            funcionario: req.body.funcionario,
            itemRecebido: req.body.itemRecebido,
            dataRecebimento: req.body.dataRecebimento,
            assinatura: req.body.assinatura,
            observacoes: req.body.observacoes
        });

        const salvo = await nova.save();
        return res.status(201).json(salvo);
    } catch {
        return res.status(400).json({ mensagem: err.message });
    }
};



// --- Função GET | lista todas as assinaturas ---

exports.listarAssinaturas = async (req, res) => {
    try {
        const lista = await Assinatura.find().sort({ dataRecebimento: -1 });
        return res.json(lista);
    } catch (err) {
        return res.status(500).json({ mensagem: err.message });
    }
};



// --- Função GET | busca alguma assinatura na lista por ID ---

exports.buscaAssinaturaPorID = async (req, res) => {
    try {
        const { id } = req.params;
        const doc = await Assinatura.findById(id);
        if (!doc) return res.status(404).json({ mensagem:'Assinatura não encontrada' });
        return res.json(doc);
    } catch (err) {
        return res.status(400).json({ mensagem: 'ID inválido ou erro na busca' });
    }
};



// --- Função DELETE ---

exports.deletarAssinatura = async (req, res) => {
    try {
        const { id } = req.params;
        const deletado = await Assinatura.findByIdAndDelete(id);
        if (!deletado) return res.status(404).json({ mensagem: 'Assinatura não encontrada' });
        return res.json({ mensagem: 'Assinatura deletada com sucesso' });
    } catch (err) {
        return res.status(400).json({ mensagem: 'ID inválido ou erro ao deletar' });
    }
};