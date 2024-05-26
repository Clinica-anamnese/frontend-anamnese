const formAddAnamnese = document.querySelector(".formAddAnamnese");
const divStepButtons = document.querySelector(".div-step-buttons");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const tabs = document.getElementsByClassName("tab");
const fPacienteSelect = document.getElementById("pacienteSelect");
let currentTab = 0;

function cadastrarAnamnese() {
  const data = getData();
  let forbidden = false;
  return new Promise((resolve, reject) => {
    if (validateForm(formAddAnamnese)) {
      fetch(urlApi + endpointAnamneses, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${token}`
        },
        method: "POST",
        body: JSON.stringify(data)
      })
        .then(response => {
          if (!response.ok) {
            forbidden = true;
            return Promise.reject();
          }
          goodWarning.textContent = "Anamnese cadastrada com sucesso!";
          resolve(response);
        })
        .catch(error => {
          if (forbidden) {
            badWarning.textContent = "Dados inválidos.";
          } else {
            badWarning.textContent = "Erro na comunicação com a API.";
          }
          reject(error);
        })
    } else {
      badWarning.textContent = "Preencha todos os campos obrigatórios";
    }
  })
}

function getData() {
  // Seleciona todos os inputs e checkboxes dentro do formulário
  const inputs = document.querySelectorAll('.formAddAnamnese input, .formAddAnamnese select, .formAddAnamnese textarea');
  const data = { usuarioId: usuarioId, };

  // Itera sobre cada elemento e adiciona seu valor ao objeto data
  inputs.forEach(input => {
    let value = input.value;

    if (input.type === 'checkbox') {
      value = input.checked;
    } else if (input.type === 'radio') {
      if (input.checked) {
        value = input.value;
      } else {
        return;
      }
    } else if (value === "") {
      value = null;
    }

    data[input.name] = value;
  });

  return data;
}

verificarAutenticacao();
listarPacientesSelect(fPacienteSelect);
showTab(currentTab);
