endpoint = "usuarios";
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
                const colunaTipo = document.createElement('td');
                colunaTipo.textContent = `${usuario.role}`
                itemTabela.appendChild(colunaTipo);
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
                resolve(usuario);
            })
            .catch(error => {
                reject(error);
            })

    })
}

function cadastrarUsuario() {
    return new Promise((resolve, reject) => {
        if (validateForm(formAddUsuario)) {
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
                    role: fRole.value
                })
            })
                .then(response => {
                    if (response.ok) {
                        goodWarning.textContent = "Usuário cadastrado com sucesso!";
                        console.log(response);
                        formAddUsuario.reset();
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

formAddUsuario.addEventListener('submit', async event => {
    event.preventDefault();
    badWarning.textContent = "";
    goodWarning.textContent = "";
    await cadastrarUsuario();
    limparTabela();
    listarUsuarios();
});

verificarAutenticacao();
listarUsuarios();
