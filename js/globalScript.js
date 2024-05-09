const urlApi = "http://localhost:8080/"
let endpoint = "pacientes";
const token = localStorage.getItem("jwtToken");

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
