var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var qtdAcertos = req.body.QtdAcertosServer;
    var nota = req.body.notaServer;

    // Faça as validações dos valores
    if (qtdAcertos == undefined) {
        res.status(400).send("Seu acerto está undefined!");
    } else if (nota == undefined) {
        res.status(400).send("Seu nota está undefined!");  
    } else {

        // Passe os valores como parâmetro e vá para o arquivo acertoModel.js
        quizModel.cadastrar(qtdAcertos, nota)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}