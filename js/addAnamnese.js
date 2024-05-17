const formAddAnamnese = document.querySelector(".formAddAnamnese");
const selectPacientes = document.getElementById('selectPacientes');
const divStepButtons = document.querySelector(".div-step-buttons");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const fPacienteId = document.getElementById("selectPacientes");
const fEscolaridade = document.getElementById("escolaridade");
const fPeriodoEstudo = document.getElementById("periodoEstudo");
const fLancheEstudo = document.getElementById("lancheEstudo");
const fPeriodoTrabalho = document.getElementById("periodoTrabalho");
const fLancheTrabalho = document.getElementById("lancheTrabalho");
const fProfissao = document.getElementById("profissao");
const fRendaFamiliar = document.getElementById("rendaFamiliar");
const fNumPessoasDomicilio = document.getElementById("numPessoasDomicilio");
const fMotivo = document.getElementById("motivo");
const fApresentaDoenca = document.getElementById("apresentaDoenca");
const fAntecedentesFamiliares = document.getElementById("antecedentesFamiliares");
const fMedicamentosContinuos = document.getElementById("medicamentosContinuos");
const fSuplementosComplementos = document.getElementById("suplementosComplementos");
const fFrequenciaEvacuacao = document.getElementById("frequenciaEvacuacao");
const fConsistenciaEvacuacao = document.getElementById("consistenciaEvacuacao");
const fPraticaAtvFisica = document.getElementById("praticaAtvFisica");
const fAtvFisica = document.getElementById("atvFisica");

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

// exibe os Anamneses no select do formulario
function listarPacientesSelect() {
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
        selectPacientes.appendChild(optionElement);
      });
    })
    .catch(error => {
      console.error(error);
      fallback.textContent = "Sem conexão com a API.";
    })
}

function cadastrarAnamnese() {
  console.log("Karai jao");
  fetch(urlApi + endpointAnamneses, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${token}`
    },
    method: "POST",
    body: JSON.stringify({
      pacienteId: fPacienteId.value,
      escolaridade: fEscolaridade.value,
      periodoEstudo: fPeriodoEstudo.value,
      lancheEstudo: fLancheEstudo.checked,
      periodoTrabalho: fPeriodoTrabalho.value,
      lancheTrabalho: fLancheTrabalho.checked,
      profissao: fProfissao.value,
      rendaFamiliar: fRendaFamiliar.value,
      numPessoasDomicilio: fNumPessoasDomicilio.value,
      motivo: fMotivo.value,
      apresentaDoenca: fApresentaDoenca.value,
      antecedentesFamiliares: fAntecedentesFamiliares.value,
      medicamentosContinuos: fMedicamentosContinuos.value,
      suplementosComplementos: fSuplementosComplementos.value,
      frequenciaEvacuacao: fFrequenciaEvacuacao.value,
      consistenciaEvacuacao: fConsistenciaEvacuacao.value,
      praticaAtvFisica: fPraticaAtvFisica.checked,
      atvFisica: fAtvFisica.value
    })
  })
    .then(response => {
      console.log("awdawda");
      if (!response.ok) {
        console.log("22222222222");
        forbidden = true;
        // return Promise.reject();
      }
      goodWarning.textContent = "Anamnese cadastrada com sucesso!";
      resetForm(formAddAnamnese);
      // resolve(response);
    })
    .catch(error => {
      console.log(error);
      console.error(error);
      console.log("awdawda");
      if (forbidden) {
        console.log(error);
        console.log("awdawda");
        badWarning.textContent = "Dados inválidos.";
      } else {
        console.log(error);
        console.log("awdawda");
        badWarning.textContent = "Erro na comunicação com a API.";
      }
      // reject(error);
    });
  console.log("depoisdofetch");
}

function showTab(n) {
  console.log(n);
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "flex";
  x[n].style.flexDirection = "column";
  x[n].style.gap = "10px";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    prevBtn.style.display = "none";
    divStepButtons.style.flexDirection = "row-reverse"
  } else {
    prevBtn.style.display = "inline";
    divStepButtons.style.flexDirection = "row"
  }
  if (n == (x.length - 1)) {
    nextBtn.textContent = "Enviar";
  } else {
    nextBtn.textContent = "Próximo";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n, event) {
  event.preventDefault();
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    cadastrarAnamnese();
  } else {
    showTab(currentTab);
  }
  // Otherwise, display the correct tab:
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

/* formAddAnamnese.addEventListener("submit", async event => {
  event.preventDefault();
  badWarning.textContent = "";
  goodWarning.textContent = "";
  try {
    await cadastrarAnamnese();
    window.location.href = "formularios.html";
  } catch {
    console.log("hohow");
    verificarAutenticacao();
  }
}); */

listarPacientesSelect();
