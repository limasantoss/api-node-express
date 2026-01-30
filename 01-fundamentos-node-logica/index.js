/**
 * AULA: Variáveis e Operadores no Node.js
 * Objetivo: Praticar declaração de variáveis e lógica matemática.
 */

// 1. DECLARAÇÃO DE VARIÁVEIS
const nomeEstudante = "Igor Lima"; // const: valor que não muda
let idade = 26;                   // let: valor que pode variar

// 2. OPERADORES ARITMÉTICOS BÁSICOS
const n1 = 10;
const n2 = 5;

const soma = n1 + n2;           // 15
const subtracao = n1 - n2;      // 5
const multiplicacao = n1 * n2;  // 50
const divisao = n1 / n2;        // 2
const dobro = n1 * 2;           // 20

// 3. PRECEDÊNCIA E MÉDIA 
const nota1 = 8;
const nota2 = 7;
const nota3 = 10;
// Os parênteses garantem que a soma ocorra ANTES da divisão
const media = (nota1 + nota2 + nota3) / 3; 

// OPERADOR DE RESTO (%)
const numeroTeste = 17;
const ePar = numeroTeste % 2 === 0; // Se o resto for 0, é true (par)

// 5. EXIBIÇÃO DE RESULTADOS (CONSOLE)
console.log("--- Relatório de Exercícios ---");
console.log(`Estudante: ${nomeEstudante}`);
console.log(`Média final: ${media.toFixed(2)}`);
console.log(`O número ${numeroTeste} é par? ${ePar ? "Sim" : "Não"}`);
