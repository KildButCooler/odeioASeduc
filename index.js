const prompt = require('prompt-sync')(); // importa o pacote para entrada no terminal

let notas = [];
let bimestres = [];

// Coletar 8 notas do aluno
for (let i = 0; i < 8; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i + 1}: `));
    notas.push(nota);
}

// Calcular médias dos 4 bimestres
for (let i = 0; i < 4; i++) {
    let mediaBimestre = (notas[i * 2] + notas[i * 2 + 1]) / 2;
    bimestres.push(mediaBimestre);
}

// Calcular médias dos 2 semestres
let semestre1 = (bimestres[0] + bimestres[1]) / 2;
let semestre2 = (bimestres[2] + bimestres[3]) / 2;

// Calcular média final
let mediaFinal = (semestre1 + semestre2) / 2;

// Mostrar resultados formatados
console.log("\nPráticas");
console.log(`1º Bimestre: ${bimestres[0].toFixed(1)}`);
console.log(`2º Bimestre: ${bimestres[1].toFixed(1)}`);
console.log(`1º Semestre: ${semestre1.toFixed(1)}`);
console.log("----------------------");
console.log(`3º Bimestre: ${bimestres[2].toFixed(1)}`);
console.log(`4º Bimestre: ${bimestres[3].toFixed(1)}`);
console.log(`2º Semestre: ${semestre2.toFixed(1)}`);
console.log("----------------------");
console.log(`Média Final: ${mediaFinal.toFixed(1)}`);
