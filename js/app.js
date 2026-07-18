const formulario = document.getElementById("formAgendamento");
const mensagem = document.getElementById("mensagem");
const campoData = document.getElementById("data");
const campoHorario = document.getElementById("horario");
const campoTelefone = document.getElementById("telefone");


// ============================
// BLOQUEAR DATAS ANTERIORES
// ============================


const hoje = new Date()
    .toISOString()
    .split("T")[0];


campoData.min = hoje;



// ============================
// MÁSCARA TELEFONE
// ============================


campoTelefone.addEventListener("input", () => {


    let valor = campoTelefone.value
        .replace(/\D/g, "");


    valor = valor.replace(
        /^(\d{2})(\d)/,
        "($1) $2"
    );


    valor = valor.replace(
        /(\d{5})(\d)/,
        "$1-$2"
    );


    campoTelefone.value = valor;


});


// ============================
// CARREGAR HORÁRIOS
// ============================


campoData.addEventListener("change", () => {


    const horarios = horariosDisponiveis(
        campoData.value
    );


    campoHorario.innerHTML = "";



    if (horarios.length === 0) {


        campoHorario.innerHTML = `

        <option>

        Nenhum horário disponível

        </option>

        `;


        return;


    }




    campoHorario.innerHTML = `

    <option value="">

    Selecione o horário

    </option>

    `;



    horarios.forEach(horario => {


        campoHorario.innerHTML += `

        <option value="${horario}">

        ${horario}

        </option>

        `;


    });



});



// ============================
// ENVIAR FORMULÁRIO
// ============================


formulario.addEventListener(
    "submit",
    (event) => {


        event.preventDefault();




        const nome =
            document.getElementById("nome")
                .value
                .trim();



        const telefone =
            campoTelefone.value.trim();



        const servico =
            document.getElementById("servico")
                .value;



        const data =
            campoData.value;



        const horario =
            campoHorario.value;




        if (
            nome === "" ||
            telefone === "" ||
            servico === "" ||
            data === "" ||
            horario === ""
        ) {


            alert(
                "Preencha todos os campos."
            );


            return;


        }





        if (!horarioDisponivel(
            data,
            horario
        )) {


            alert(
                "Este horário já está ocupado."
            );


            return;


        }




        const novoAgendamento = {


            id: gerarId(),


            nome,


            telefone,


            servico,


            data,


            horario,


            status: "Agendado"



        };





        adicionarAgendamento(
            novoAgendamento
        );





        mensagem.innerHTML = `

    <div class="sucesso">


        <h3>

        ✅ Agendamento realizado!

        </h3>


        <p>

        <strong>Cliente:</strong>

        ${nome}

        </p>



        <p>

        <strong>Serviço:</strong>

        ${servico}

        </p>



        <p>

        <strong>Data:</strong>

        ${formatarData(data)}

        </p>



        <p>

        <strong>Horário:</strong>

        ${horario}

        </p>


    </div>

 `;




        formulario.reset();


        campoHorario.innerHTML = `

    <option>

    Selecione uma data

    </option>

    `;


    });