const formAddAnamnese = document.querySelector(".formAddAnamnese");
const fNome = document.getElementById("nome");
const fSexo = document.getElementById("sexo");
const fDataNasc = document.getElementById("dataNasc");
const tbodyRetornos = document.querySelector(".tabela-tbody-retornos");
const botaoExportarAnamneses = document.getElementById("botaoExportarAnamneses");
const botaoExportarRetornos = document.getElementById("botaoExportarRetornos");
const inputPesquisaFormularios = document.getElementById("inputPesquisaFormularios");
const switchTipoVisualizacaoFormulario = document.getElementById("switchTipoVisualizacaoFormulario");
const selectTipoFormulario = document.getElementById("selectTipoFormulario");
const inputCriadoEmInicio = document.getElementById("inputCriadoEmInicio");
const inputCriadoEmTermino = document.getElementById("inputCriadoEmTermino");
let itensTabela = "";

function listarFormularios() {
    var data = selecionarParametrosFormularios();
    limparTabelaFormularios();

    var queryFilter = `?retornoAgrupado=${data.retornoAgrupado}&nome=${data.nome}&tipo=${data.tipo}`;
    queryFilter += data.criadoEmInicio ? `&criadoEmInicio=${data.criadoEmInicio}` : "";
    queryFilter += data.criadoEmTermino ? `&criadoEmTermino=${data.criadoEmTermino}` : "";

    fetch(`${urlApi + endpointFormularios + queryFilter}`, {
        headers: {
            "Authorization": `${token}`
        }
    })
        .then(response => response.json())
        .then(formularios => {
            if (data.retornoAgrupado == true && data.tipo != "retorno") {
                listarFormulariosRetornoAgrupado(formularios);
            } else {
                listarFormulariosSeparados(formularios);
            }
        })
        .catch(error => {
            console.error(error);
            fallback.textContent = "Sem conexão com a API.";
        });
}

function listarFormulariosRetornoAgrupado(data) {
    data.forEach(formulario => {
        const parentRow = document.createElement("tr");
        parentRow.classList.add("itemTabela", "clickable");
        tbody.appendChild(parentRow);

        parentRow.innerHTML = `
                <th class="text-center">${formulario.id}</th>
                <td>${formulario.tipoFormulario}</td>
                <td>${formulario.pacienteNome}</td>
                <td class="text-center">${formatDate(formulario.criadoEm)}</td>
                <td class="text-center">
                    ${formulario.tipoFormulario === 'Anamnese'
                ? `<a onclick="abrirAnamnese(${formulario.id})" class="btn btn-sm btn-outline-success" title="Abrir anamnese" style="padding: 0 3px;">↳</a>
                        <a href="./adicionar-retorno.html?id=${formulario.id}" class="btn btn-sm btn-outline-success" title="Adicionar retorno" style="padding: 0 5px;">+</a>`
                : ""}
                </td>
            `;

        if (Array.isArray(formulario.retornos) && formulario.retornos.length > 0) {
            formulario.retornos.forEach(retorno => {
                const childRow = document.createElement("tr");
                childRow.classList.add("child-row", `child-of-${formulario.id}`);
                childRow.style.display = "none";

                childRow.innerHTML = `
                        <td class="text-center">↳ ${retorno.id}</td>
                        <td>${retorno.tipoFormulario}</td>
                        <td>${retorno.pacienteNome}</td>
                        <td class="text-center">${formatDate(retorno.criadoEm)}</td>
                    `;

                childRow.addEventListener("click", (e) => {
                    localStorage.setItem("retornoId", retorno.id);
                    window.location.href = "retorno.html";
                });

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
            } else {
                localStorage.setItem("retornoId", formulario.id);
                window.location.href = "retorno.html";
            }
        });
    });
}

function listarFormulariosSeparados(data) {
    data.forEach(formulario => {
        const itemTabela = document.createElement("tr");
        itemTabela.classList.add("itemTabela", "clickable");
        tbody.appendChild(itemTabela);

        const colunaId = document.createElement("th");
        colunaId.classList.add("text-center");
        colunaId.textContent = `${formulario.id}`
        itemTabela.appendChild(colunaId);

        const colunaTipoForm = document.createElement("td");
        colunaTipoForm.textContent = `${formulario.tipoFormulario}`
        itemTabela.appendChild(colunaTipoForm);

        const colunaPaciente = document.createElement("td");
        colunaPaciente.textContent = `${formulario.pacienteNome}`
        itemTabela.appendChild(colunaPaciente);

        const colunaAt = document.createElement("td");
        colunaAt.classList.add("text-center");
        const dataValue = formatDate(formulario.criadoEm);
        colunaAt.textContent = dataValue;
        itemTabela.appendChild(colunaAt);

        const colunaAcoes = document.createElement("td");
        colunaAcoes.classList.add("text-center");
        if (formulario.tipoFormulario == 'Anamnese') {
            colunaAcoes.innerHTML = `<a href="./adicionar-retorno.html?id=${formulario.id}" class="btn btn-sm btn-outline-success" title="Adicionar retorno" style="padding: 0 5px;">+</a>`;
        }
        itemTabela.appendChild(colunaAcoes);


        itemTabela.addEventListener("click", () => {
            if (formulario.tipoFormulario == "Anamnese") {
                localStorage.setItem("anamneseId", formulario.id);
                window.location.href = "anamnese.html";
            } else {
                localStorage.setItem("retornoId", formulario.id);
                window.location.href = "retorno.html";
            }
        })
    });
}

function abrirAnamnese(anamneseId) {
    localStorage.setItem("anamneseId", anamneseId);
    window.location.href = "anamnese.html";
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

inputPesquisaFormularios.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        listarFormularios();
    }
});

inputPesquisaFormularios.addEventListener("blur", function (e) {
    listarFormularios();
});

switchTipoVisualizacaoFormulario.addEventListener("change", function (e) {
    listarFormularios();
});

selectTipoFormulario.addEventListener("change", function (e) {
    listarFormularios();
});

inputCriadoEmInicio.addEventListener("blur", function (e) {
    listarFormularios();
});

inputCriadoEmTermino.addEventListener("blur", function (e) {
    listarFormularios();
});

function selecionarParametrosFormularios() {
    data = {
        nome: inputPesquisaFormularios.value ?? null,
        retornoAgrupado: switchTipoVisualizacaoFormulario.checked,
        tipo: selectTipoFormulario.value,
        criadoEmInicio: inputCriadoEmInicio.value,
        criadoEmTermino: inputCriadoEmTermino.value
    }

    return data;
}

verificarAutenticacao();
listarFormularios();
