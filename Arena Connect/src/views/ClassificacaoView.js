const prompt = require('prompt-sync')();

const ClassificacaoView = {
    perguntarModalidade(mensagem) {
        return prompt(mensagem);
    },

    mostrarModalidades(modalidades) {
        console.log("\n=== MODALIDADES ===");

        if (modalidades.length === 0) {
            return console.log("Nenhuma modalidade cadastrada!");
        }

        modalidades.forEach((modalidade, index) => {
            console.log(`${index + 1} - ${modalidade}`);
        });
    },

    mostrarClassificacao(lista) {
        console.log("\n=== CLASSIFICAÇÃO ===");

        if (lista.length === 0) {
            return console.log("Nenhuma equipe cadastrada!");
        }

        lista.forEach((equipe, index) => {
            console.log(
                `${index + 1}º lugar - ${equipe.equipe} | ` +
                `Pontos: ${equipe.pontos} | ` +
                `Jogos: ${equipe.jogos} | ` +
                `Vitórias: ${equipe.vitorias} | ` +
                `Empates: ${equipe.empates} | ` +
                `Derrotas: ${equipe.derrotas} | ` +
                `Saldo de gols: ${equipe.saldo}`
            );
        });
    },

    mostrarErro(mensagem) {
        console.log(`[ERRO] ${mensagem}`);
    }
};

module.exports = ClassificacaoView;