endpoint = "pacientes";
const modal = document.getElementById("modalPaciente");
const goodWarning = document.getElementById("goodWarning");
const badWarning = document.getElementById("badWarning");
const fallback = document.getElementById("fallback");
const tbody = document.querySelector(".tabela-tbody");
const formAddPaciente = document.querySelector(".formAddPaciente");
const fNome = document.getElementById("nome");
const fSexo = document.getElementById("sexo");
const fDataNasc = document.getElementById("dataNasc");

function limparTabela() {
    tbody.innerHTML = "";
    fallback.textContent = "";
}

function listarPacientes() {
    fetch(urlApi + endpoint, {
        headers: {
            "Authorization": `${token}`
        }
    })
        .then(response => response.json())
        .then(data => {
            data.forEach(paciente => {
                const itemTabela = document.createElement('tr');
                itemTabela.id = paciente.id;
                itemTabela.classList.add = "clickable";
                itemTabela.setAttribute("data-bs-toggle", "modal");
                itemTabela.setAttribute("data-bs-target", "#modalPaciente");
                tbody.appendChild(itemTabela);
                const colunaID = document.createElement('th');
                colunaID.textContent = `${paciente.id}`
                itemTabela.appendChild(colunaID);
                const colunaPaciente = document.createElement('td');
                colunaPaciente.textContent = `${paciente.nome}`
                itemTabela.appendChild(colunaPaciente);
                const colunaAt = document.createElement('td');
                const dataValue = paciente.criadoEm;
                const partes = dataValue.split("-");
                const dataFormatada = partes[2] + "/" + partes[1] + "/" + partes[0];
                colunaAt.textContent = dataFormatada;
                itemTabela.appendChild(colunaAt);
            });
        })
        .catch(error => {
            console.error(error);
            fallback.textContent = 'Sem conexão com a API.';
        })
}

function consultarPaciente(id) {
    return new Promise((resolve, reject) => {
        fetch(urlApi + endpoint + "/" + id, {
            headers: {
                "Authorization": `${token}`
            }
        })
            .then(response => response.json())
            .then(paciente => {
                var pacienteNome = paciente.nome;
                document.querySelector(".modal-title").textContent = pacienteNome;
                resolve(paciente);
            })
            .catch(error => {
                reject(error);
            })

    })
}

function cadastrarPaciente() {
    return new Promise((resolve, reject) => {
        if (validateForm()) {
            fetch(urlApi + endpoint, {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": `${token}`
                },
                method: 'POST',
                body: JSON.stringify({
                    nome: fNome.value,
                    sexo: fSexo.value,
                    dataNascimento: fDataNasc.value
                })
            })
                .then(response => {
                    goodWarning.textContent = "Paciente cadastrado com sucesso!";
                    resolve(response);
                })
                .catch(error => reject(error))
        }
    });
}

function validateForm() {
    if (!formAddPaciente.checkValidity()) {
        formAddPaciente.classList.add("was-validated")
        return false;
    }
    return true;
}

formAddPaciente.addEventListener('submit', async event => {
    event.preventDefault();
    try {
        await cadastrarPaciente();
        limparTabela();
        listarPacientes();
    }
    catch {
        console.log("Erro ao cadastrar paciente");
        badWarning.textContent = "Erro ao cadastrar paciente.";
    }
});

modal.addEventListener('show.bs.modal', async event => {
    var pacienteId = event.relatedTarget.id;
    try {
        await consultarPaciente(pacienteId);
    }
    catch {
        console.log("Erro ao consultar paciente");
    }
});

verificarAutenticacao();
listarPacientes();
