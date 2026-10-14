const prompt = require('prompt-sync')();

const AtletaView ={
    perguntarIdTurma(){
        return parseInt(prompt("ID da Turma do Atleta: "))
    },
    perguntarId(rotulo = "ID do Atleta: "){
        return parseInt(prompt(rotulo));
    },
    perguntarNome(){
        return prompt ("Nome do Aleta: ");
    },
    mostrarAtletaVinculado(nome, nomeTurma){
        console.log(`✔ Atleta "${nomeAtleta}" vinculado ao "${nomeTurma}"!`);
    },
    listarAtletas(lista) {
        console.log("\n=== LISTA DE ATLETAS ===");
        if (this.atletas.length === 0) return console.log("Nenhum atleta no sistema.");
        lista.forEach(({atleta, nomeTurma}) => atleta.exibir(nomeTurma));
    },
    mostrarErroCadastro(mensagem){
        console.log(`Não foi possível cadastrar o atleta: ${Mensagem}`)
}
}
module.exports = AtletaView;