// Conteúdo: Operadores Relacionais, Lógicos e Estruturas Condicionais
// 1. VARIÁVEIS E TIPAGEM
const nome = "Igor Lima"; 
let idade = 26; 

// 2. OPERADORES RELACIONAIS (As perguntas que o código faz)
const notaFinal = 8.5;
const presencaPorcentagem = 80;

// 3. OPERADORES LÓGICOS (Combinando condições)
// && (E): Ambas as condições devem ser verdadeiras
// || (OU): Apenas uma precisa ser verdadeira
// !  (NÃO): Inverte o valor lógico

// 

// 4. ESTRUTURA CONDICIONAL REFINADA (Exemplo: Sistema de Aprovação)
if (notaFinal < 0 || notaFinal > 10) {
    // Validação de erro: Nota fora do limite permitido
    console.log("ERRO: Nota inválida informada.");
} 
else if (notaFinal >= 7 && presencaPorcentagem >= 75) {
    // Aprovação padrão por nota e frequência
    console.log(`Parabéns, ${nome}! Você foi aprovado.`);
} 
else if (notaFinal >= 9) {
    // Regra de exceção: Nota excelente abona falta
    console.log("Aprovado por excelência acadêmica (mesmo com faltas).");
} 
else {
    // Caso nenhuma condição acima seja atendida
    console.log("Infelizmente, você foi reprovado. ");
}

// Lembre-se: && (E) é resolvido ANTES do || (OU) se não houver parênteses!
const temVip = true ;
const eAmigoDoDono = true ;
const estaDeChinelo = true ;

// O uso dos parênteses força a regra do chinelo a ser soberana
if ((temVip || eAmigoDoDono) && !estaDeChinelo) {
    console.log("Pode entrar na festa! ");
} else {
    console.log("Barrado: Não pode entrar de chinelo. ❌");
}

console.log("Fim do Resumo de Lógica ");