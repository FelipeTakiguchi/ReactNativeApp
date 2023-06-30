const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { Transaction } = require('./schemas/Transaction');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
app.use(cors());
app.use(jsonParser);
app.use(express.json());
app.use(urlencodedParser);

app.get('/', async(req, res) => {
    await Transaction.create({
        data: new Date().toString(),
        referencia: 'ref#1',
        valor: 125.20,
    })

    res.send("Olá")
})

app.get('/transactions', (req, res) => {

    const arrTransaction = [
        {
            amount: 2500,
            reference: 'Transacao 1',
            date: new Date(),
            currency: 'USD'
        },
        {
            amount: 12500,
            reference: 'Curso de programacao pro renato66',
            date: new Date(),
            currency: 'BRL'
        },
        {
            amount: 3500,
            reference: 'Mercado caro',
            date: new Date(),
            currency: 'USD'
        },
        {
            amount: 7500,
            reference: 'Adaptador usb c hdmi que nao funciona',
            date: new Date(),
            currency: 'EUR'
        },
        {
            amount: 9500,
            reference: 'Transacao 1',
            date: new Date(),
            currency: 'EUR'
        },
        {
            amount: 2500,
            reference: 'AIRBNB GmbH',
            date: new Date(),
            currency: 'USD'
        },
        {
            amount: 600,
            reference: 'Senai',
            date: new Date(),
            currency: 'USD'
        }
    ];

    res.json(arrTransaction);
})

app.post('/addTransacao', urlencodedParser, async(req, res) => {
    await Transaction.create({
        data: req.body.data,
        referencia: req.body.referencia,
        valor: req.body.valor,
    })
})

const port = 3000;
const serverInit = async() => {
    await mongoose.connect('mongodb+srv://felipentakiguchi:123456789_@cluster0.mr8dtfn.mongodb.net/?retryWrites=true&w=majority')

    app.listen(port, async() => {
        console.log("TA RODANDO");
    })    
}

serverInit();