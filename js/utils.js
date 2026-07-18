/*
    Funções auxiliares
    Agenda Web
*/


// ============================
// GERAR ID ÚNICO
// ============================

function gerarId(){

    return Date.now();

}



// ============================
// FORMATAR DATA
// De: 2026-07-20
// Para: 20/07/2026
// ============================

function formatarData(data){


    const partes = data.split("-");


    return `${partes[2]}/${partes[1]}/${partes[0]}`;


}



// ============================
// HORÁRIOS DISPONÍVEIS
// ============================


const horariosPadrao = [

    "09:00",

    "10:00",

    "11:00",

    "13:00",

    "14:00",

    "15:00",

    "16:00"

];





function horariosDisponiveis(data){


    const agendamentos = buscarAgendamentos();



    const horariosOcupados = agendamentos

        .filter(item =>

            item.data === data &&

            item.status !== "Cancelado"

        )

        .map(item => item.horario);





    return horariosPadrao.filter(horario =>

        !horariosOcupados.includes(horario)

    );


}



// ============================
// VERIFICAR HORÁRIO
// ============================


function horarioDisponivel(data, horario){


    const agendamentos = buscarAgendamentos();



    return !agendamentos.some(item =>


        item.data === data &&

        item.horario === horario &&

        item.status !== "Cancelado"


    );


}