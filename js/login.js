endpoint = "auth/login";
const formLogin = document.getElementById("formLogin");
const fMatricula = document.getElementById("matricula");
const fSenha = document.getElementById("senha");

function fazerLogin() {
    return new Promise((resolve, reject) => {
        fetch(urlApi + endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ login: fMatricula.value, password: fSenha.value })
        })
            .then(response => {
                if (!response.ok) {
                    badWarning.textContent = "Matrícula ou senha incorretos.";
                    console.error(response);
                    reject(response);
                } else {
                    resolve(response);
                    return response.json();
                }
            })
            .then(data => {
                localStorage.setItem("jwtToken", data.token);
                localStorage.setItem("userName", data.userName);
                window.location.href = "pacientes.html";
            })
            .catch(error => {
                badWarning.textContent = "Erro na comunicação com a API.";
                console.error(error);
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
