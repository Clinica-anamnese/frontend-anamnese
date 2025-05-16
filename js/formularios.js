const formAddAnamnese = document.querySelector(".formAddAnamnese");
const fNome = document.getElementById("nome");
const fSexo = document.getElementById("sexo");
const fDataNasc = document.getElementById("dataNasc");
const tbodyRetornos = document.querySelector(".tabela-tbody-retornos");
const botaoExportarAnamneses = document.getElementById("botaoExportarAnamneses");
const botaoExportarRetornos = document.getElementById("botaoExportarRetornos");
const inputPesquisaFormularios = document.getElementById("inputPesquisaFormularios");
let itensTabela = "";

function listarFormularios() {
    var data = selecionarParametrosFormularios();
    limparTabelaFormularios();

    fetch(`${urlApi + endpointFormularios}?nome=${data.nome}`, {
        headers: {
            "Authorization": `${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(formulario => {
            const parentRow = document.createElement("tr");
            parentRow.classList.add("itemTabela", "clickable");
            parentRow.id = `formulario-${formulario.id}`;
            tbody.appendChild(parentRow);

            parentRow.innerHTML = `
                <th class="text-center">${formulario.id}</th>
                <td>${formulario.tipoFormulario}</td>
                <td>${formulario.pacienteNome}</td>
                <td class="text-center">${formatDate(formulario.criadoEm)}</td>
                <td class="text-center">
                    ${formulario.tipoFormulario === 'Anamnese' 
                        ? `<a href="./adicionar-retorno.html?id=${formulario.id}" class="btn btn-sm btn-outline-success" title="Adicionar retorno" style="padding: 0 5px;">+</a>` 
                        : ""}
                </td>
            `;

            if (Array.isArray(formulario.retornos) && formulario.retornos.length > 0) {
                formulario.retornos.forEach(retorno => {
                    const childRow = document.createElement("tr");
                    childRow.classList.add("child-row", `child-of-${formulario.id}`);
                    childRow.style.display = "none"; // Hide initially

                    childRow.innerHTML = `
                        <td>↳ ${retorno.id}</td>
                        <td>${retorno.tipoFormulario}</td>
                        <td>${retorno.pacienteNome}</td>
                        <td class="text-center">${formatDate(retorno.criadoEm)}</td>
                    `;

                    tbody.appendChild(childRow);
                });
            }

            parentRow.addEventListener("click", (e) => {
                if (e.target.closest("a")) return;

                const childRows = document.querySelectorAll(`.child-of-${formulario.id}`);
                childRows.forEach(row => {
                    row.style.display = row.style.display === "none" ? "table-row" : "none";
                });

                if (formulario.tipoFormulario === "Anamnese") {
                    localStorage.setItem("anamneseId", formulario.id);
                    // Optional: only navigate if not clicked for expanding
                    // window.location.href = "anamnese.html";
                } else {
                    localStorage.setItem("retornoId", formulario.id);
                    window.location.href = "retorno.html";
                }
            });
        });
    })
    .catch(error => {
        console.error(error);
        fallback.textContent = "Sem conexão com a API.";
    });
}


function limparTabelaFormularios() {
    const tbody = document.getElementById("tabelaFormulariosCorpo")
    tbody.innerHTML = ""; 
}

function exportarAnamneses() {
    return new Promise((resolve, reject) => {
        fetch(urlApi + endpointFormularios + "/" + "export-anamnese", {
            headers: {
                "Authorization": `${token}`,
                'Content-Type': 'text/csv'
            }
        })
            .then(response => {
                return response.blob();
            })
            .then(blob => {
                var url = window.URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = url;
                a.download = "anamnese.csv";
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
                resolve();
            })
            .catch(error => {
                console.error(error);
                reject(error);
            })
    })
}

function exportarRetornos() {
    return new Promise((resolve, reject) => {
        fetch(urlApi + endpointFormularios + "/" + "export-retorno", {
            headers: {
                "Authorization": `${token}`,
                'Content-Type': 'text/csv'
            }
        })
            .then(response => {
                return response.blob();
            })
            .then(blob => {
                var url = window.URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = url;
                a.download = "retorno.csv";
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
                resolve();
            })
            .catch(error => {
                console.error(error);
                reject(error);
            })
    })
}

botaoExportarAnamneses.addEventListener("click", async () => {
    try {
        await exportarAnamneses();
    } catch {
        verificarAutenticacao();
    }
});

botaoExportarRetornos.addEventListener("click", async () => {
    try {
        await exportarRetornos();
    } catch {
        verificarAutenticacao();
    }
});

inputPesquisaFormularios.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        listarFormularios();
    }
});

inputPesquisaFormularios.addEventListener("blue", function(e) {
    listarFormularios();
});

function selecionarParametrosFormularios() {
    data = {
        nome: inputPesquisaFormularios.value ?? null
    }

    return data;
}

verificarAutenticacao();
listarFormularios();
