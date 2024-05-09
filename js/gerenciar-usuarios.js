endpoint = "usuarios";
const goodWarning = document.getElementById("goodWarning");
const badWarning = document.getElementById("badWarning");
const fallback = document.getElementById("fallback");
const tbody = document.querySelector(".tabela-tbody");
const formAddUsuario = document.querySelector(".formAddUsuario");
const fNome = document.getElementById("nome");
const fMatricula = document.getElementById("matricula");
const fRole = document.getElementById("role");
const fSenha = document.getElementById("senha");

function limparTabela() {
    tbody.innerHTML = "";
    fallback.textContent = "";
}

function listarUsuarios() {
    fetch(urlApi + endpoint, {
        headers: {
            "Authorization": `${token}`
        }
    })
        .then(response => response.json())
        .then(data => {
            data.forEach(usuario => {
                const itemTabela = document.createElement('tr');
                itemTabela.id = usuario.id;
                itemTabela.classList.add = "clickable";
                itemTabela.setAttribute("data-bs-toggle", "modal");
                itemTabela.setAttribute("data-bs-target", "#modalUsuario");
                tbody.appendChild(itemTabela);
                const colunaID = document.createElement('th');
                colunaID.textContent = `${usuario.id}`
                itemTabela.appendChild(colunaID);
                const colunaUsuario = document.createElement('td');
                colunaUsuario.textContent = `${usuario.nome}`
                itemTabela.appendChild(colunaUsuario);
                const colunaMatricula = document.createElement('td');
                colunaMatricula.textContent = `${usuario.login}`
                itemTabela.appendChild(colunaMatricula);
                const colunaAt = document.createElement('td');
                const dataValue = usuario.criadoEm;
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

function consultarUsuario(id) {
    return new Promise((resolve, reject) => {
        fetch(urlApi + endpoint + "/" + id, {
            headers: {
                "Authorization": `${token}`
            }
        })
            .then(response => response.json())
            .then(usuario => {
                document.querySelector(".modal-title").textContent = usuario.nome;
                resolve(usuario);
            })
            .catch(error => {
                reject(error);
            })

    })
}

function cadastrarUsuario() {
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
                    login: fMatricula.value,
                    password: fSenha.value,
                    userRole: fRole.value
                })
            })
                .then(response => {
                    goodWarning.textContent = "Usuario cadastrado com sucesso!";
                    resolve(response);
                })
                .catch(error => reject(error))
        }
    });
}

function validateForm() {
    if (!formAddUsuario.checkValidity()) {
        formAddUsuario.classList.add("was-validated")
        return false;
    }
    return true;
}

formAddUsuario.addEventListener('submit', async event => {
    event.preventDefault();
    try {
        await cadastrarUsuario();
        limparTabela();
        listarUsuarios();
    }
    catch {
        console.log("Erro ao cadastrar usuario");
        badWarning.textContent = "Erro ao cadastrar usuario.";
    }
});

verificarAutenticacao();
listarUsuarios();
