const formAddPaciente = document.querySelector(".formAddPaciente");
const fNome = document.getElementById("nome");
const fCpf = document.getElementById("cpf");
const fSexo = document.getElementById("sexo");
const fDataNasc = document.getElementById("dataNasc");
const inputPesquisaPacientes = document.getElementById("inputPesquisaPacientes");
let itensTabela = "";

function listarPacientes() {
    limparTabelaPacientes();
    var data = selecionarParametrosPacientes();

    fetch(`${urlApi + endpointPacientes}?nome=${data.nome}`, {
        headers: {
            "Authorization": `${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(paciente => {
            const itemTabela = document.createElement("tr");
            itemTabela.classList.add("itemTabela");
            itemTabela.classList.add("clickable");
            itemTabela.id = paciente.id;
            tbody.appendChild(itemTabela);

            const colunaID = document.createElement("th");
            colunaID.textContent = `${paciente.id}`;
            itemTabela.appendChild(colunaID);

            const colunaPaciente = document.createElement("td");
            colunaPaciente.textContent = `${paciente.nome}`;
            itemTabela.appendChild(colunaPaciente);

            const colunaAt = document.createElement("td");
            const dataValue = formatDate(paciente.criadoEm);
            colunaAt.textContent = dataValue;
            itemTabela.appendChild(colunaAt);

            itemTabela.addEventListener("click", () => {
                localStorage.setItem("pacienteId", paciente.id);
                window.location.href = "paciente.html";
            })

            // Adiciona alerta caso não tenha CPF
            if (!paciente.cpf || paciente.cpf.trim() === "") {
                const alertaCpf = document.createElement("span");
                alertaCpf.textContent = "Adicionar CPF";
                alertaCpf.classList.add("alerta-cpf");
                colunaPaciente.appendChild(alertaCpf);
            }
        });
    })
    .catch(error => {
        console.error(error);
        fallback.textContent = "Sem conexão com a API.";
    })
}

function cadastrarPaciente() {
    return new Promise((resolve, reject) => {
        let forbidden = false;
        
        if (validateForm(formAddPaciente)) {
            
            // CORREÇÃO: Montando o objeto Sexo para o novo padrão do backend
            const payload = {
                nome: fNome.value,
                cpf: desformatarCPF(fCpf.value),
                dataNascimento: fDataNasc.value,
                sexo: { 
                    id: parseInt(fSexo.value) // Envia como objeto { id: 1 }, por exemplo
                }
            };

            fetch(urlApi + endpointPacientes, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                },
                method: "POST",
                body: JSON.stringify(payload)
            })
            .then(response => {
                if (!response.ok) {
                    forbidden = true;
                    return Promise.reject();
                }
                return response.json();
            })
            .then(data => {
                goodWarning.textContent = "Paciente cadastrado com sucesso!";
                resetForm(formAddPaciente);
                // Opcional: fechar modal automaticamente se desejar
                // bootstrap.Modal.getInstance(document.getElementById('modalAddPaciente')).hide();
                resolve(data);
            })
            .catch(error => {
                if (forbidden) {
                    // Mensagem mais clara se for erro de validação (400)
                    badWarning.textContent = "Dados inválidos. Verifique se todos os campos estão corretos.";
                } else {
                    badWarning.textContent = "Erro na comunicação com a API.";
                }
                reject(error);
            });
        } else {
            // Se o formulário HTML (required, types) não for válido
            badWarning.textContent = "Preencha todos os campos obrigatórios corretamente.";
            reject("Formulário inválido");
        }
    });
}

formAddPaciente.addEventListener("submit", async event => {
    event.preventDefault();
    badWarning.textContent = "";
    goodWarning.textContent = "";
    try {
        await cadastrarPaciente();
        limparTabelaPacientes(); // Limpa tabela visual antes de recarregar
        listarPacientes();       // Atualiza a lista na tela
    } catch (e) {
        console.error(e);
        // Se o erro não foi apenas de validação de formulário, verifica a sessão
        if(e !== "Formulário inválido" && !badWarning.textContent) {
             verificarAutenticacao();
        }
    }
});

inputPesquisaPacientes.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        listarPacientes();
    }
});

inputPesquisaPacientes.addEventListener("blur", function(e) {
    listarPacientes();
});

function limparTabelaPacientes() {
    const tbody = document.getElementById("tabelaPacientesCorpo")
    if(tbody) tbody.innerHTML = ""; 
}

function selecionarParametrosPacientes() {
    return {
        nome: inputPesquisaPacientes.value ?? null
    };
}

function desformatarCPF(valor) {
    if(!valor) return null;
    const desformatado = valor.replace(/[.\-]/g, '');
    return desformatado.length === 11 ? desformatado : null;
}

// Máscara de CPF
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

verificarAutenticacao();
listarPacientes();