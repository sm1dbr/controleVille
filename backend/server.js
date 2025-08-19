const itemRoutes = require('./routes/itemRoutes');
const assinaturaRoutes = require('./routes/assinaturaRoutes');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());

// --- Rotas da API ---

app.use('/api', itemRoutes);
app.use('/api', assinaturaRoutes);

// --- Conecta ao MongoDB ---

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Conectado ao MongoDB com sucesso!');
    })
    .catch((err) => {
        console.error('Erro ao conectar ao MongoDB:', err);
    });


// --- Rota de teste ---

app.get('/', (req, res) => {
    res.send('Servidor e banco funcionando!');
});

// --- Inicia o servidor ---

app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333');
});