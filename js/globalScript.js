const urlApi = `${window.location.protocol}//${window.location.hostname}:8080/`;
const endpointPacientes = "pacientes";
const endpointUsuarios = "usuarios";
const endpointAuth = "auth/login";
const endpointAnamneses = "anamneses";
const endpointRetornos = "retornos";
const endpointFormularios = "formularios";
const usuarioId = localStorage.getItem("usuarioId");
const usuarioNome = localStorage.getItem("usuarioNome");
const token = localStorage.getItem("jwtToken");
const goodWarning = document.getElementById("goodWarning");
const goodWarningPass = document.getElementById("goodWarningPass");
const badWarningPass = document.getElementById("badWarningPass");
const badWarning = document.getElementById("badWarning");
const fallback = document.getElementById("fallback");
const tbody = document.querySelector(".tabela-tbody");
const usersTab = document.querySelector(".usersTab");
const header = document.querySelector("header");
const headerusuarioNome = document.getElementById("headerusuarioNome");

let isAdmin = false;
const isEdicao = !!(localStorage.getItem("retornoId") || localStorage.getItem("anamneseId"));


function verificarAutenticacao() {
    if (!token) {
        logout();
    } else {
        fetch(urlApi + endpointPacientes, {
            headers: {
                "Authorization": `${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    return Promise.reject();
                }
            })
            .catch(() => {
                alert("Sessão encerrada.");
                logout();
            })
    }
}

function deletarItem(id, url) {
    return new Promise((resolve, reject) => {
        fetch(urlApi + url + "/" + id, {
            headers: {
                "Authorization": `${token}`
            },
            method: "DELETE"
        })
            .then(response => {
                console.log(response);
                resolve(response);
            })
            .catch(error => {
                console.error(error);
                reject(error);
            })
    })
}

function verificarAutenticacaoAdmin() {
    if (!token) {
        logout();
    } else {
        fetch(urlApi + endpointUsuarios, {
            headers: {
                "Authorization": `${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    return Promise.reject();
                }
            })
            .catch(() => {
                alert("Sessão encerrada.");
                logout();
            })
    }
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

function formatDate(data) {
  const partes = data.split("-");
  return partes[2].slice(0,2) + "/" + partes[1] + "/" + partes[0];
}

function resetForm(form) {
    form.reset();
    form.classList.remove("was-validated");
}

function limparTabela() {
    tbody.innerHTML = "";
    fallback.textContent = "";
}

function esconderElementosSeNaoAdmin() {
  fetch(urlApi + endpointUsuarios, {
      headers: {
          "Authorization": `${token}`
      }
  })
  .then(response => {
      if (!response.ok) {
          throw new Error();
      }
      isAdmin = true; // se chegou aqui, é admin
  })
  .catch(() => {
      isAdmin = false;
      const elementsToHide = document.querySelectorAll(".admin-only");
      elementsToHide.forEach(el => el.remove());
  });
}

function getHeaderData() {
  headerusuarioNome.textContent = usuarioNome;
  esconderElementosSeNaoAdmin();
}

async function showTab(n) {
    tabs[n].style.display = "block";

    if (n === 0) {
        prevBtn.style.display = "none";
        divStepButtons.style.flexDirection = "row-reverse";
    } else if (n === (tabs.length - 1)) {
        if (isEdicao && !isAdmin) {
            nextBtn.style.display = "none";
        } else {
            nextBtn.textContent = "Enviar";
            nextBtn.style.display = "inline";
        }
        prevBtn.style.display = "inline";
    } else {
        nextBtn.textContent = "Próximo";
        nextBtn.style.display = "inline";
        prevBtn.style.display = "inline";
        divStepButtons.style.flexDirection = "row";
    }

    fixStepIndicator(n);
}

  async function nextTab(func) {
    if (currentTab >= tabs.length - 1) {
      try {
        goodWarning.textContent = "";
        badWarning.textContent = "";
        await func();
        window.location.href = "formularios.html";
      }
      catch (error) {
        verificarAutenticacao();
      }
    } else {
      tabs[currentTab].style.display = "none";
      currentTab += 1;
      showTab(currentTab);
      window.scrollTo(0, 0);
    }
  }
  
  function prevTab() {
    tabs[currentTab].style.display = "none";
    currentTab -= 1;
    showTab(currentTab);
    window.scrollTo(0, 0);
  }
  
  function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
  }

function listarPacientesSelect(pacienteSelect) {
    fetch(urlApi + endpointPacientes, {
      headers: {
        "Authorization": `${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        data.forEach(paciente => {
          const optionElement = document.createElement('option');
          optionElement.value = paciente.id;
          optionElement.textContent = paciente.nome;
          pacienteSelect.appendChild(optionElement);
        });
      })
      .catch(error => {
        console.error(error);
      })
}

function listarAnamnesesSelect(anamneseSelect) {
  fetch(urlApi + endpointAnamneses, {
    headers: {
      "Authorization": `${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      data.forEach(anamnese => {
        const dataCriadaEm = new Date(anamnese.criadoEm);

        const optionElement = document.createElement('option');
        optionElement.value = anamnese.id;
        optionElement.textContent = anamnese.pacienteNome;
        anamneseSelect.appendChild(optionElement);
      });
    })
    .catch(error => {
      console.error(error);
    })
}

async function obterAnamnesePorId(pacienteId) {
  try {
    const response = await fetch(urlApi + endpointAnamneses + "/" + pacienteId, {
      headers: {
        "Authorization": `${token}`
      }
    });
    if (!response.ok) {
      throw new Error('Erro ao buscar paciente');
    }
    const anamnese = await response.json();
    return anamnese;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function preencherCampoPaciente(anamneseId) {
  const anamnese = await obterAnamnesePorId(anamneseId);

  const pacienteId = document.getElementById("pacienteId");
  const pacienteNome = document.getElementById("pacienteNome");

  if (anamnese != null) {
    pacienteId.value = anamnese.pacienteId;
    pacienteNome.value = anamnese.pacienteNome;
  } else {
    pacienteId.value = null;
    pacienteNome.value = null;
  }
}

function limparCampoPaciente() {
  const pacienteId = document.getElementById("pacienteId");
  const pacienteNome = document.getElementById("pacienteNome");

  pacienteId.value = null;
  pacienteNome.value = null;
}

if (header) {
    const exitIcon = document.getElementById("exitIcon");
    getHeaderData();

    exitIcon.addEventListener("click", logout);
}
