endpoint = "pacientes";
const formAddPaciente = document.querySelector(".formAddPaciente");
const fNome = document.getElementById("nome");
const fSexo = document.getElementById("sexo");
const fDataNasc = document.getElementById("dataNasc");
const pacienteId = localStorage.getItem("pacienteId");
const botaoDeletar = document.getElementById("botaoDeletar");
let itensTabela = "";

function consultarPaciente(id) {
    fetch(urlApi + endpoint + "/" + id, {
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

botaoDeletar.addEventListener("click", async () => {
    try {
        await deletarItem(pacienteId);
        window.location.href = "pacientes.html";
    } catch {
        verificarAutenticacao();
    }
});

verificarAutenticacao();
consultarPaciente(pacienteId);
