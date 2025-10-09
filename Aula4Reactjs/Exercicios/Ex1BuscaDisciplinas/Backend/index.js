const express = require('express')
const app = express()

var disciplinas = [
    {
        "id": 1,
        "nome": "Lógica de Programação",
        "carga_horaria": 60,
        "sala": "Lab 101"
    },
    {
        "id": 2,
        "nome": "Algoritmos e Estruturas de Dados",
        "carga_horaria": 80,
        "sala": "Lab 102"
    },
    {
        "id": 3,
        "nome": "Banco de Dados I",
        "carga_horaria": 60,
        "sala": "Lab 201"
    },
    {
        "id": 4,
        "nome": "Banco de Dados II",
        "carga_horaria": 60,
        "sala": "Lab 202"
    },
    {
        "id": 5,
        "nome": "Programação Web I",
        "carga_horaria": 80,
        "sala": "Lab 203"
    },
    {
        "id": 6,
        "nome": "Programação Web II",
        "carga_horaria": 80,
        "sala": "Lab 204"
    },
    {
        "id": 7,
        "nome": "Desenvolvimento Mobile",
        "carga_horaria": 60,
        "sala": "Lab 301"
    },
    {
        "id": 8,
        "nome": "Redes de Computadores",
        "carga_horaria": 60,
        "sala": "Lab 302"
    },
    {
        "id": 9,
        "nome": "Sistemas Operacionais",
        "carga_horaria": 60,
        "sala": "Lab 303"
    },
    {
        "id": 10,
        "nome": "Engenharia de Software",
        "carga_horaria": 80,
        "sala": "Sala 101"
    },
    {
        "id": 11,
        "nome": "Segurança da Informação",
        "carga_horaria": 60,
        "sala": "Sala 102"
    },
    {
        "id": 12,
        "nome": "Arquitetura de Computadores",
        "carga_horaria": 60,
        "sala": "Lab 304"
    },
    {
        "id": 13,
        "nome": "Manutenção de Computadores",
        "carga_horaria": 60,
        "sala": "Lab 305"
    },
    {
        "id": 14,
        "nome": "Empreendedorismo em TI",
        "carga_horaria": 40,
        "sala": "Sala 103"
    },
    {
        "id": 15,
        "nome": "Interface Homem-Computador",
        "carga_horaria": 40,
        "sala": "Sala 104"
    },
    {
        "id": 16,
        "nome": "Introdução à Inteligência Artificial",
        "carga_horaria": 60,
        "sala": "Lab 401"
    },
    {
        "id": 17,
        "nome": "Programação em JavaScript",
        "carga_horaria": 60,
        "sala": "Lab 205"
    },
    {
        "id": 18,
        "nome": "Desenvolvimento com Node.js",
        "carga_horaria": 60,
        "sala": "Lab 206"
    },
    {
        "id": 19,
        "nome": "Desenvolvimento com React",
        "carga_horaria": 60,
        "sala": "Lab 207"
    },
    {
        "id": 20,
        "nome": "Projeto Integrador em Informática",
        "carga_horaria": 100,
        "sala": "Sala 201"
    }
]

app.get('/disciplinas/todas', function (req, res) {
        res.json({ 'disciplinas': disciplinas })
})

app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000')
} )