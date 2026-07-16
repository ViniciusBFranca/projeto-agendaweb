const tabela = document.getElementById("listaAgendamentos");

const filtroData = document.getElementById("filtroData");

const semAgendamentos = document.getElementById("semAgendamentos");

const tabelaContainer = document.querySelector(".tabela-container");


// Cards do dashboard

const total = document.getElementById("total");

const agendados = document.getElementById("agendados");

const confirmados = document.getElementById("confirmados");

const concluidos = document.getElementById("concluidos");

const cancelados = document.getElementById("cancelados");



function carregarDashboard(lista){


    total.textContent = lista.length;


    agendados.textContent = lista.filter(item =>

        item.status === "Agendado"

    ).length;



    confirmados.textContent = lista.filter(item =>

        item.status === "Confirmado"

    ).length;



    concluidos.textContent = lista.filter(item =>

        item.status === "Concluído"

    ).length;



    cancelados.textContent = lista.filter(item =>

        item.status === "Cancelado"

    ).length;


}



function carregarAgendamentos(){


    const todos = buscarAgendamentos();


    carregarDashboard(todos);



    let lista = todos;



    // filtro por data

    if(filtroData.value !== ""){


        lista = todos.filter(item =>

            item.data === filtroData.value

        );


    }



    tabela.innerHTML = "";



    if(lista.length === 0){


        tabelaContainer.style.display = "none";

        semAgendamentos.style.display = "block";


        return;


    }



    tabelaContainer.style.display = "block";

    semAgendamentos.style.display = "none";




    // organiza por data e horário

    lista.sort((a,b)=>{


        if(a.data === b.data){

            return a.horario.localeCompare(b.horario);

        }


        return a.data.localeCompare(b.data);


    });





    lista.forEach(item=>{


        tabela.innerHTML += `

        <tr>


            <td>

                ${item.nome}

            </td>


            <td>

                ${item.telefone}

            </td>



            <td>

                ${item.servico}

            </td>



            <td>

                ${formatarData(item.data)}

            </td>



            <td>

                ${item.horario}

            </td>



            <td>


                <select onchange="alterarStatus(${item.id}, this.value)">


                    <option value="Agendado"

                    ${item.status === "Agendado" ? "selected" : ""}>

                    🟡 Agendado

                    </option>



                    <option value="Confirmado"

                    ${item.status === "Confirmado" ? "selected" : ""}>

                    🔵 Confirmado

                    </option>



                    <option value="Concluído"

                    ${item.status === "Concluído" ? "selected" : ""}>

                    🟢 Concluído

                    </option>



                    <option value="Cancelado"

                    ${item.status === "Cancelado" ? "selected" : ""}>

                    🔴 Cancelado

                    </option>


                </select>


            </td>



            <td>


                <button

                class="btn-excluir"

                onclick="removerAgendamento(${item.id})">

                Excluir

                </button>


            </td>



        </tr>


        `;


    });


}





function alterarStatus(id,status){


    atualizarAgendamento(id,{

        status

    });



    carregarAgendamentos();


}





function removerAgendamento(id){



    const confirmar = confirm(

        "Deseja excluir este agendamento?"

    );



    if(!confirmar){

        return;

    }



    excluirAgendamento(id);



    carregarAgendamentos();



}




filtroData.addEventListener(

    "change",

    carregarAgendamentos

);




carregarAgendamentos();