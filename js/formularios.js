const formAddAnamnese = document.querySelector(".formAddAnamnese");
const fNome = document.getElementById("nome");
const fSexo = document.getElementById("sexo");
const fDataNasc = document.getElementById("dataNasc");
const tbodyAnamneses = document.querySelector(".tabela-tbody-anamneses");
const tbodyRetornos = document.querySelector(".tabela-tbody-retornos");
let itensTabela = "";

function listarAnamneses() {
    fetch(urlApi + endpointAnamneses, {
        headers: {
            "Authorization": `${token}`
        }
    })
        .then(response => response.json())
        .then(data => {
            data.forEach(anamnese => {
                const itemAnamnese = document.createElement("tr");
                itemAnamnese.classList.add("itemAnamnese");
                itemAnamnese.classList.add("clickable");
                itemAnamnese.id = anamnese.id;
                tbodyAnamneses.appendChild(itemAnamnese);
                const colunaId = document.createElement("th");
                colunaId.textContent = `${anamnese.id}`
                itemAnamnese.appendChild(colunaId);
                const colunaPaciente = document.createElement("td");
                colunaPaciente.textContent = `${anamnese.pacienteNome}`
                itemAnamnese.appendChild(colunaPaciente);
                const colunaAt = document.createElement("td");
                const dataValue = anamnese.criadoEm;
                const partes = dataValue.split("-");
                const dataFormatada = partes[2] + "/" + partes[1] + "/" + partes[0];
                colunaAt.textContent = dataFormatada;
                itemAnamnese.appendChild(colunaAt);
            });
            let itensAnamnese = document.querySelectorAll(".itemAnamnese");
            itensAnamnese.forEach((anamnese) => {
                anamnese.addEventListener("click", () => {
                    localStorage.setItem("anamneseId", anamnese.id);
                    window.location.href = "anamnese.html";
                })
            })
        })
        .catch(error => {
            console.error(error);
            fallback.textContent = "Sem conexão com a API.";
        })
}

function listarRetornos() {
    fetch(urlApi + endpointRetornos, {
        headers: {
            "Authorization": `${token}`
        }
    })
        .then(response => response.json())
        .then(data => {
            data.forEach(retorno => {
                const itemTabela = document.createElement("tr");
                itemTabela.classList.add("itemTabela");
                itemTabela.classList.add("clickable");
                itemTabela.id = retorno.id;
                tbodyRetornos.appendChild(itemTabela);
                const colunaId = document.createElement("th");
                colunaId.textContent = `${retorno.id}`
                itemTabela.appendChild(colunaId);
                const colunaPaciente = document.createElement("td");
                colunaPaciente.textContent = `${retorno.pacienteNome}`
                itemTabela.appendChild(colunaPaciente);
                const colunaRetorno = document.createElement("td");
                colunaRetorno.textContent = `${retorno.retorno}`
                itemTabela.appendChild(colunaRetorno);
                const colunaAt = document.createElement("td");
                const dataValue = retorno.criadoEm;
                const partes = dataValue.split("-");
                const dataFormatada = partes[2] + "/" + partes[1] + "/" + partes[0];
                colunaAt.textContent = dataFormatada;
                itemTabela.appendChild(colunaAt);
            });
            let itensTabela = document.querySelectorAll(".itemTabela");
            itensTabela.forEach((retorno) => {
                retorno.addEventListener("click", () => {
                    localStorage.setItem("retornoId", retorno.id);
                    window.location.href = "retorno.html";
                })
            })
        })
        .catch(error => {
            console.error(error);
            fallback.textContent = "Sem conexão com a API.";
        })
}

verificarAutenticacao();
listarAnamneses();
listarRetornos();
