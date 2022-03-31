const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const port = 8000;

//recurso de request.body
app.post('/aluno', (req, res)=>{
    let dados = req.body;
    let ret = "Dados envidados: Nome:" + dados.nome;
    ret+="Sobrenome: " + dados.sobrenome;
    ret+= "Idade: " + dados.idade;
    res.send("{message:" +ret+ "}");
});

//habilitar servidor
app.listen(port,()=>{
    console.log("Projeto executando na porta: " + port);
});

app.get('/aluno', (req,res)=>{
    res.send("message: Aluno encontrado");
});

// recurso de request.query
app.get('/aluno/filtros', (req,res)=>{
    let source = req.query;
    let ret = "Dados solicitado:" + source.nome + " " + source.sobrenome;
    res.send("{message:" +ret+"}");
});


//recurso de request.param
app.get('/aluno/pesquisa/:valor',(req, res)=>{
    let dado = req.params.valor;
    let ret = "Dados solicitado:" + dado;
    res.send("{message:" +ret+"}");
})