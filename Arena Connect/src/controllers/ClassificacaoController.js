const ClassificacaoView = require("../views/ClassificacaoView");

class ClassificacaoController {
    constructor(arenaConnect) {
        this.arenaConnect = arenaConnect;
    }

    listarModalidades() {
        return this.arenaConnect.listarModalidades();
    }

    mostrarClassificacao(modalidade) {
        const classificacao =
            this.arenaConnect.calcularClassificacao(modalidade);

        console.log("\n===== CLASSIFICAÇÃO =====");
        console.log("Modalidade:", modalidade);

        if (classificacao.length === 0) {
            console.log("Nenhuma equipe cadastrada.");
            return;
        }

        console.table(
            classificacao.map((equipe, index) => ({
                Posicao: index + 1,
                Equipe: equipe.equipe,
                Pontos: equipe.pontos,
                Jogos: equipe.jogos,
                Vitorias: equipe.vitorias,
                Empates: equipe.empates,
                Derrotas: equipe.derrotas,
                'Gols Pro': equipe.golsPro,
                'Gols Contra': equipe.golsContra,
                Saldo: equipe.saldo
            }))
        );
    }
}

module.exports = ClassificacaoController;