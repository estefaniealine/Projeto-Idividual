var respostaModel = require("../models/respostaModel");



function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var certa = req.body.respostaCertaServer;
    var nota = req.body.notaServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Faça as validações dos valores
    if (certa == undefined) {
        res.status(400).send("Seu certa está undefined!");
    } else if (nota == undefined) {
        res.status(400).send("Seu nota está undefined!");

    } else if (fkUsuario == undefined) {
        res.status(400).send("Sua fkUsuario a vincular está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        respostaModel.cadastrar(certa, nota, fkUsuario)
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
  
    cadastrar
}