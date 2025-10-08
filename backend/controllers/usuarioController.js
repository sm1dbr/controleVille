const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs'); // para criptografar a senha

// --- Criar novo usuário ---
const criarUsuario = async (req, res) => {
    try {
        const { nome, email, senha, perfil } = req.body;

        // Verifica se já existe
        const usuarioExistente = await Usuario.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).json({ erro: 'E-mail já cadastrado!' });
        }

        // Criptografa a senha
        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const novoUsuario = new Usuario({
            nome,
            email,
            senha: senhaCriptografada,
            perfil
        });

        await novoUsuario.save();
        res.status(201).json({ mensagem: 'Usuário criado com sucesso!', usuario: novoUsuario });
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao criar usuário.' });
    }
};

// --- Listar usuários ---
const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find().select('-senha'); // esconde a senha
        res.json(usuarios);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao listar usuários.' });
    }
};

// --- Deletar usuário ---
const deletarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByIdAndDelete(id);

        if (!usuario) {
            return res.status(404).json({ erro: 'Usuário não encontrado.' });
        }

        res.json({ mensagem: 'Usuário deletado com sucesso!' });
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao deletar usuário.' });
    }
};

module.exports = { criarUsuario, listarUsuarios, deletarUsuario };
