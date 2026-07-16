const STORAGE_KEY = "agendaWeb";

function buscarAgendamentos() {
    const dados = localStorage.getItem(STORAGE_KEY);

    if (!dados) {
        return [];
    }

    return JSON.parse(dados);
}

function salvarAgendamentos(lista) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

function adicionarAgendamento(agendamento) {
    const lista = buscarAgendamentos();

    lista.push(agendamento);

    salvarAgendamentos(lista);
}

function excluirAgendamento(id) {
    const lista = buscarAgendamentos().filter(item => item.id !== id);

    salvarAgendamentos(lista);
}

function atualizarAgendamento(id, novosDados) {

    const lista = buscarAgendamentos();

    const indice = lista.findIndex(item => item.id === id);

    if (indice !== -1) {

        lista[indice] = {
            ...lista[indice],
            ...novosDados
        };

        salvarAgendamentos(lista);
    }

}