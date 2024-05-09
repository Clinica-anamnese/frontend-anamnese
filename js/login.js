endpoint = "auth/login";
const badWarning = document.getElementById("badWarning");
const formLogin = document.getElementById("formLogin");
const matricula = document.getElementById("matricula");
const senha = document.getElementById("senha");

function fazerLogin() {
    return new Promise((resolve, reject) => {
        fetch(urlApi + endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ login: matricula.value, password: senha.value })
        })
            .then(response => {
                if (!response.ok) {
                    badWarning.textContent = "Matrícula ou senha incorretos.";
                    throw new Error("Login inválido.");
                } else {
                    resolve(response);
                    return response.json();
                }
            })
            .then(data => {
                localStorage.setItem("jwtToken", data.token);
                window.location.href = "pacientes.html";
            })
            .catch(error => {
                reject(error);
            });
    })
}

formLogin.addEventListener('submit', async event => {
    event.preventDefault();
    try {
        await fazerLogin();
    }
    catch {
        console.log("Erro ao fazer login");
    }
})