const ClassificacaoView = require("../views/ClassificacaoView");

const ClassificacaoController = {
    listar(sistema) {
        try {
            const modalidades = sistema.listarModalidades();

            ClassificacaoView.mostrarModalidades(modalidades);

            if (modalidades.length === 0) return;

            const modalidade = ClassificacaoView.perguntarModalidade(
                "Digite a modalidade: "
            );

            const classificacao = sistema.calcularClassificacao(modalidade);

            ClassificacaoView.mostrarClassificacao(classificacao);

        } catch (erro) {
            ClassificacaoView.mostrarErro(erro.message);
        }
    }
}

module.exports = ClassificacaoController;