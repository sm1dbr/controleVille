const Historico = require('../models/historico');

// --- Registrar nova ação no histórico ---
const registrarAcao = async (req, res) => {
    try {
        const { acao, usuario, perfil, modulo, referenciaId, descricao } = req.body;

        const novoRegistro = new Historico({
            acao,
            usuario,
            perfil,
            modulo,
            referenciaId,
            descricao
        });

        await novoRegistro.save();
        res.status(201).json({ mensagem: 'Ação registrada com sucesso!', registro: novoRegistro });
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao registrar ação no histórico' });
    }
};

// --- Listar todas as ações ---
const listarHistorico = async (req, res) => {
    try {
        const registros = await Historico.find().sort({ dataHora: -1 }); // mais recente primeiro
        res.json(registros);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao listar histórico' });
    }
};

// --- Buscar ações por módulo (ex: EPI, Apartamento) ---
const buscarPorModulo = async (req, res) => {
    try {
        const { modulo } = req.params;
        const registros = await Historico.find({ modulo }).sort({ dataHora: -1 });
        res.json(registros);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao buscar histórico por módulo' });
    }
};

// --- Buscar ações por usuário ---
const buscarPorUsuario = async (req, res) => {
    try {
        const { usuario } = req.params;
        const registros = await Historico.find({ usuario }).sort({ dataHora: -1 });
        res.json(registros);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao buscar histórico por usuário' });
    }
};

// --- Limpar histórico antigo (opcional, ex: + de 6 meses) ---
const limparHistoricoAntigo = async (req, res) => {
    try {
        const seisMesesAtras = new Date();
        seisMesesAtras.setMonth(seisMesesAtras.getMonth() - 6);

        const resultado = await Historico.deleteMany({ dataHora: { $lt: seisMesesAtras } });
        res.json({ mensagem: 'Histórico antigo removido.', registrosRemovidos: resultado.deletedCount });
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao limpar histórico' });
    }
};

module.exports = {
    registrarAcao,
    listarHistorico,
    buscarPorModulo,
    buscarPorUsuario,
    limparHistoricoAntigo
};
