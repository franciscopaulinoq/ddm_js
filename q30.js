let tasksList = [];

const adicionar = (task) => {
    tasksList.push({ texto: task, concluida: false });
}

const listar = () => {
    if (tasksList.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
        return;
    }
    for (const task of tasksList) {
        console.log(`-> [${task.concluida ? "x" : " "}] ${task.texto}`);
    }
}

const marcarConcluida = (index) => {
    if (index >= 0 && index < tasksList.length) {
        tasksList[index].concluida = true;
    } else {
        console.log("Índice inválido!");
    }
}

const remover = (index) => {
    if (index >= 0 && index < tasksList.length) {
        tasksList.splice(index, 1);
    } else {
        console.log("Índice inválido!");
    }
}

// Demonstração
adicionar("Estudar JavaScript");
adicionar("Fazer exercicios");
adicionar("Revisar codigo");
listar();

console.log();
marcarConcluida(0);
listar();

console.log();
remover(1);
listar();