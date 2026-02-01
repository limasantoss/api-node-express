// 1. O LOOP BÁSICO (Contagem de Repetições)
// Início: 1 | Limite: 5 | Passo: de 1 em 1
for (let i = 1; i <= 5; i = i + 1) {
    console.log(`Executando repetição número: ${i}`);
}

console.log("\n--- Filtro de Números Pares ---");

// 2. LOOP COM CONDICIONAL (Filtro)
// Vamos percorrer de 1 a 10 e mostrar apenas os pares
for (let i = 1; i <= 10; i = i + 1) {
    if (i % 2 === 0) {
        console.log(`O número ${i} é PAR.`);
    }
}

console.log("\n--- Acumulador de Valores ---");

// 3. O CONCEITO DE ACUMULADOR (Soma Total)
// Útil para calcular totais de vendas ou médias de sistemas
let somaTotal = 0;
for (let i = 1; i <= 4; i = i + 1) {
    console.log(`Somando ${i} ao total anterior (${somaTotal})...`);
    somaTotal = somaTotal + i;
}
console.log(`Resultado final da soma acumulada: ${somaTotal}`);

console.log("\n--- Exemplo Real: Séries de Academia ---");

// 4. APLICAÇÃO PRÁTICA (Início em 1, Passo de 1)
const totalSeries = 3;
for (let serie = 1; serie <= totalSeries; serie = serie + 1) {
    console.log(`Série ${serie} concluída! Descanse 60 segundos.`);
}

console.log("\n--- Fim do Resumo de Loops ---");