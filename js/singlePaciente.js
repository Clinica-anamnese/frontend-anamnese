const formAtualizarPaciente = document.querySelector(".formAtualizarPaciente");
const fNome = document.getElementById("nome");
const fSexo = document.getElementById("sexo");
const fDataNasc = document.getElementById("dataNasc");
const pacienteId = localStorage.getItem("pacienteId");
const botaoDeletar = document.getElementById("botaoDeletar");
let itensTabela = "";

function consultarPaciente(id) {
    fetch(urlApi + endpointPacientes + "/" + id, {
        headers: {
            "Authorization": `${token}`
        }
    })
        .then(response => response.json())
        .then(paciente => {
            fNome.value = paciente.nome;
            fSexo.value = paciente.sexo;
            fDataNasc.value = paciente.dataNascimento;
        })
        .catch(error => {
            console.error(error);
        })
}

function atualizarPaciente(id) {
    return new Promise((resolve, reject) => {
        let forbidden = false;
        if (validateForm(formAtualizarPaciente)) {
            fetch(urlApi + endpointPacientes + "/" + id, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                },
                method: "PUT",
                body: JSON.stringify({
                    nome: fNome.value,
                    sexo: fSexo.value,
                    dataNascimento: fDataNasc.value
                })
            })
                .then(response => {
                    if (!response.ok) {
                        forbidden = true;
                        return Promise.reject();
                    }
                    goodWarning.textContent = "Paciente atualizado com sucesso!";
                    resolve(response);
                })
                .catch(error => {
                    if (forbidden) {
                        badWarning.textContent = "Dados inválidos.";
                    } else {
                        badWarning.textContent = "Erro na comunicação com a API.";
                    }
                    reject(error);
                });
        }
    })
}

formAtualizarPaciente.addEventListener("submit", async event => {
    event.preventDefault();
    badWarning.textContent = "";
    goodWarning.textContent = "";
    try {
        await atualizarPaciente(pacienteId);
    } catch {
        verificarAutenticacao();
    }
});

botaoDeletar.addEventListener("click", async () => {
    try {
        await deletarItem(pacienteId, endpointPacientes);
        window.location.href = "pacientes.html";
    } catch {
        verificarAutenticacao();
    }
});

verificarAutenticacao();
consultarPaciente(pacienteId);
