// Arquivo: server.js
// Simulação simples de API para o Projeto SGHSS - Back-end
// Aluno: [SEU NOME] - RU: [SEU RU]

const express = require('express');
const app = express();
app.use(express.json());

// Banco de dados simulado em memória (Array)
const pacientes = [];

// Rota de Teste
app.get('/', (req, res) => {
    res.send('API SGHSS - VidaPlus Online');
});

// RF001 - Cadastro de Pacientes
app.post('/api/pacientes', (req, res) => {
    const { nome, cpf } = req.body;
    if(!nome || !cpf) {
        return res.status(400).json({ error: 'Dados incompletos' });
    }
    const novoPaciente = { id: pacientes.length + 1, nome, cpf };
    pacientes.push(novoPaciente);
    return res.status(201).json({ message: 'Paciente cadastrado', paciente: novoPaciente });
});

// RF001 - Listagem de Pacientes
app.get('/api/pacientes', (req, res) => {
    return res.json(pacientes);
});

// Configuração do Servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});