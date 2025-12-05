const formAtualizarPaciente = document.querySelector(".formAtualizarPaciente");
const fNome = document.getElementById("nome");
const fCpf = document.getElementById("cpf");
const fSexo = document.getElementById("sexo");
const fDataNasc = document.getElementById("dataNasc");
const pacienteId = localStorage.getItem("pacienteId");
const botaoDeletar = document.getElementById("botaoDeletar");
const captionName = document.getElementById("captionName");

function consultarPaciente() {
    fetch(urlApi + endpointPacientes + "/" + pacienteId, {
        headers: {
            "Authorization": `${token}`
        }
    })
    .then(response => response.json())
    .then(paciente => {
        fNome.value = paciente.nome;
        fCpf.value = formatarCPF(paciente.cpf);
        
        // CORREÇÃO: Acessar o ID dentro do objeto sexo (se existir)
        if (paciente.sexo) {
            fSexo.value = paciente.sexo.id;
        }
        
        fDataNasc.value = paciente.dataNascimento;
        captionName.textContent = paciente.nome;
    })
    .catch(error => {
        console.error(error);
    })
}

function listarFormulariosDoPaciente() {
    fetch(urlApi + endpointFormularios + "/" + endpointPacientes + "/" + pacienteId, {
        headers: {
            "Authorization": `${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(formulario => {
            const parentRow = document.createElement("tr");
            parentRow.classList.add("itemTabela", "clickable");
            tbody.appendChild(parentRow);
    
            parentRow.innerHTML = `
                    <th class="text-center">${formulario.id}</th>
                    <td>${formulario.tipoFormulario}</td>
                    <td>${formulario.pacienteNome || formulario.paciente.nome}</td> <td class="text-center">${formatDate(formulario.criadoEm)}</td>
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
                            <td>${retorno.pacienteNome || retorno.paciente.nome}</td>
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
    })
    .catch(error => {
        console.error(error);
        fallback.textContent = "Sem conexão com a API.";
    })
}

function atualizarPaciente() {
    return new Promise((resolve, reject) => {
        let forbidden = false;
        if (validateForm(formAtualizarPaciente)) {
            
            // CORREÇÃO: Montar objeto Sexo para envio
            const payload = {
                nome: fNome.value,
                cpf: desformatarCPF(fCpf.value),
                sexo: { id: parseInt(fSexo.value) }, // Objeto com ID
                dataNascimento: fDataNasc.value
            };

            fetch(urlApi + endpointPacientes + "/" + pacienteId, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                },
                method: "PUT",
                body: JSON.stringify(payload)
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
        await atualizarPaciente();
        // Recarrega dados para garantir consistência visual
        consultarPaciente(); 
    } catch {
        // Se falhar por autenticação, redireciona
        if(!badWarning.textContent) verificarAutenticacao();
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

function formatarCPF(valor) {
    if(!valor) return null;
    const digitos = valor.replace(/\D/g, '').slice(0, 11);
    return digitos.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function desformatarCPF(valor) {
    if(!valor) return null;
    const desformatado = valor.replace(/[.\-]/g, '');
    return desformatado.length === 11 ? desformatado : null;
}

if(fCpf) {
    fCpf.addEventListener("input", () => {
        const digitos = fCpf.value.replace(/\D/g, '').slice(0, 11);
        fCpf.value = digitos.replace(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/, (_, p1, p2, p3, p4) => {
            let formatado = '';
            if (p1) formatado += p1;
            if (p2) formatado += '.' + p2;
            if (p3) formatado += '.' + p3;
            if (p4) formatado += '-' + p4;
            return formatado;
        });
    });
}

// Helper para abrir anamnese vindo da lista
function abrirAnamnese(id) {
    localStorage.setItem("anamneseId", id);
    window.location.href = "anamnese.html";
}

verificarAutenticacao();
consultarPaciente();
listarFormulariosDoPaciente();