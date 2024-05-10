let endpoint = "pacientes";
const urlApi = "http://localhost:8080/"
const token = localStorage.getItem("jwtToken");
const goodWarning = document.getElementById("goodWarning");
const badWarning = document.getElementById("badWarning");
const fallback = document.getElementById("fallback");
const tbody = document.querySelector(".tabela-tbody");

function verificarAutenticacao() {
    if (!token) {
        window.location.href = "login.html";
    }

    fetch(urlApi + endpoint, {
        headers: {
            "Authorization": `${token}`
        }
    })
        .then(response => {
            if (!response.ok) {
                window.location.href = "login.html";
            }
        })
        .catch(error => {
            console.log("Erro ao realizar autenticação: ", error);
            window.location.href = "login.html";
        })
}

function validateForm(form) {
    if (!form.checkValidity()) {
        form.classList.add("was-validated")
        return false;
    }
    return true;
}

function limparTabela() {
    tbody.innerHTML = "";
    fallback.textContent = "";
}
