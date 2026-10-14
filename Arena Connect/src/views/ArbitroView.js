const prompt = require('prompt-sync')();

const ArbitroView = {
    perguntarAnosExperiencia() {
        return parseInt(prompt("Anos de Experiência do Arbítro: "))
    },
    perguntarId(rotulo = "ID do Arbitro: ") {
        return parseInt(prompt(rotulo));
    },
    perguntarNome() {
        return prompt("Nome do Arbitro: ");
    },
    mostrarAtletaVinculado(nome, nomeTurma) {
        console.log(`✔ Atleta "${nomeAtleta}" vinculado ao "${nomeTurma}"!`);
    },
    perguntarNumeroCredencial() {
        return parseInt(prompt("Número da Credencial do Arbítro: "))
    },
    mostrarErroCadastro(mensagem) {
        console.log(`Não foi possível cadastrar o arbitro: ${Mensagem}`)
    }
}
module.exports = ArbitroView;