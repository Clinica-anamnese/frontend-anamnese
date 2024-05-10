let endpoint = "";
const urlApi = "http://localhost:8080/"
const token = localStorage.getItem("jwtToken");
const userName = localStorage.getItem("userName");
const goodWarning = document.getElementById("goodWarning");
const badWarning = document.getElementById("badWarning");
const fallback = document.getElementById("fallback");
const tbody = document.querySelector(".tabela-tbody");
const usersTab = document.querySelector(".usersTab");
const header = document.querySelector("header");
const headerUserName = document.getElementById("headerUserName");

function verificarAutenticacao() {
    if (!token) {
        window.location.href = "login.html";
    }

    fetch(urlApi + "pacientes", {
        headers: {
            "Authorization": `${token}`
        }
    })
        .then(response => {
            if (!response.ok) {
                logout();
                window.location.href = "login.html";
            }
        })
        .catch(error => {
            console.log("Erro ao realizar autenticação: ", error);
            window.location.href = "login.html";
        })
}

function verificarAutenticacaoAdmin() {
    if (!token) {
        window.location.href = "login.html";
    }

    fetch(urlApi + "usuarios", {
        headers: {
            "Authorization": `${token}`
        }
    })
        .then(response => {
            if (!response.ok) {
                logout();
                window.location.href = "login.html";
            }
        })
        .catch(error => {
            console.log("Erro ao realizar autenticação: ", error);
            window.location.href = "login.html";
        })
}

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}

function validateForm(form) {
    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return false;
    }
    return true;
}

function resetForm(form) {
    form.reset();
    form.classList.remove("was-validated");
}

function limparTabela() {
    tbody.innerHTML = "";
    fallback.textContent = "";
}

function hideUsersTab() {
    if (!token) {
        window.location.href = "login.html";
    }

    fetch(urlApi + "usuarios", {
        headers: {
            "Authorization": `${token}`
        }
    })
        .then(response => {
            if (!response.ok) {
                usersTab.remove();
            }
        })
}

function getHeaderData() {
    headerUserName.textContent = userName;
}

if (header) {
    const exitIcon = document.getElementById("exitIcon");
    getHeaderData();

    exitIcon.addEventListener('click', logout);
}
