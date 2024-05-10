endpoint = "pacientes";
const formAddPaciente = document.querySelector(".formAddPaciente");
const fNome = document.getElementById("nome");
const fSexo = document.getElementById("sexo");
const fDataNasc = document.getElementById("dataNasc");

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
                resolve(paciente);
            })
            .catch(error => {
                reject(error);
            })

    })
}

function cadastrarPaciente() {
    return new Promise((resolve, reject) => {
        if (validateForm(formAddPaciente)) {
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
                    if (response.ok) {
                        goodWarning.textContent = "Paciente cadastrado com sucesso!";
                        console.log(response);
                        resetForm(formAddPaciente);
                        resolve(response);
                    } else {
                        badWarning.textContent = "Erro ao cadastrar: " + response.statusText;
                        console.error(response);
                        reject(response);
                    }
                })
                .catch(error => {
                    badWarning.textContent = "Erro na comunicação com a API.";
                    console.error(error);
                    reject(error);
                });
        }
    });
}

formAddPaciente.addEventListener('submit', async event => {
    event.preventDefault();
    badWarning.textContent = "";
    goodWarning.textContent = "";
    await cadastrarPaciente();
    limparTabela();
    listarPacientes();
});

verificarAutenticacao();
hideUsersTab();
getHeaderData();
listarPacientes();
