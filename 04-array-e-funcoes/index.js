

let tarefas = ["Estudar JavaScript", "Ir à academia"];

// 2. Função para ADICIONAR uma nova tarefa (Uso de Push e Parâmetros)
const adicionarTarefa = (nomeTarefa) => {
    tarefas.push(nomeTarefa);
    console.log(`✅ Tarefa "${nomeTarefa}" adicionada com sucesso!`);
};

// 3. Função para REMOVER a primeira tarefa (Uso de Shift)
const concluirPrimeiraTarefa = () => {
    if (tarefas.length > 0) {
        const tarefaConcluida = tarefas.shift();
        console.log(`Tarefa "${tarefaConcluida}" concluída e removida.`);
    } else {
        console.log(" Nenhuma tarefa para concluir.");
    }
};

// 4. Função para EXIBIR o status atual (Uso de Condicional e Length)
const exibirStatus = () => {
    console.log("--- STATUS DO DIA ---");
    console.log(`Você tem ${tarefas.length} tarefas pendentes.`);
    console.log("Lista:", tarefas);
    
    if (tarefas.length > 3) {
        console.log("Dica: Sua lista está ficando cheia, foque em concluir!");
    }
    console.log("");
};

exibirStatus(); // Mostra a lista inicial

adicionarTarefa("Comprar café");
adicionarTarefa("Ler um livro");

exibirStatus(); // Mostra com as novas tarefas

concluirPrimeiraTarefa(); // Remove a primeira da fila

exibirStatus(); // Mostra o resultado final