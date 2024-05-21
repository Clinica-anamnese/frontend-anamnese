const formAddAnamnese = document.querySelector(".formAddAnamnese");
const selectPacientes = document.getElementById('selectPacientes');
const divStepButtons = document.querySelector(".div-step-buttons");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const tabs = document.getElementsByClassName("tab");
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
const fQuemCozinha = document.getElementById("quemCozinha");
const fNecessidadeComerEstressadoAnsiosoTriste = document.getElementById("necessidadeComerEstressadoAnsiosoTriste");
const fRealizaRefeicoesSozinhoAcompanhado = document.getElementById("realizaRefeicoesSozinhoAcompanhado");
const fExcessoAlimentosNaoSaudaveisSintomas = document.getElementById("excessoAlimentosNaoSaudaveisSintomas");
const fDificuldadeRotinaAlimentarSaudavel = document.getElementById("dificuldadeRotinaAlimentarSaudavel");
const fNecessidadeConsoloAlimentar = document.getElementById("necessidadeConsoloAlimentar");
const fDificuldadePararDeComer = document.getElementById("dificuldadePararDeComer");
const fFrequenciaFomeFisiologica = document.getElementById("frequenciaFomeFisiologica");
const fFrequenciaNecessidadeEmocionalComer = document.getElementById("frequenciaNecessidadeEmocionalComer");
const fNaoModificarPlanoAlimentar = document.getElementById("naoModificarPlanoAlimentar");
const fAversaoAlimentar = document.getElementById("aversaoAlimentar");
const fToleraAlimentosProteinaAnimal = document.getElementById("toleraAlimentosProteinaAnimal");
const fAlergiaIntoleranciasAlimentares = document.getElementById("alergiaIntoleranciasAlimentares");
const fPesoAtual = document.getElementById("pesoAtual");
const fEstatura = document.getElementById("estatura");
const fImc = document.getElementById("imc");
const fCb = document.getElementById("cb");
const fDct = document.getElementById("dct");
const fDcb = document.getElementById("dcb");
const fDcse = document.getElementById("dcse");
const fDcsi = document.getElementById("dcsi");
const fSomatoria4Dobras = document.getElementById("somatoria4Dobras");
const fPorcentagemGorduraCorporalSomatoria4Dobras = document.getElementById("porcentagemGorduraCorporalSomatoria4Dobras");
const fPesoGordura = document.getElementById("pesoGordura");
const fPesoMassaMagra = document.getElementById("pesoMassaMagra");
const fTotalAgua = document.getElementById("totalAgua");
const fPorcentagemAguaMassaMagra = document.getElementById("porcentagemAguaMassaMagra");
const fResistencia = document.getElementById("resistencia");
const fReactancia = document.getElementById("reactancia");
const fAnguloDeFase = document.getElementById("anguloDeFase");
const fCircunferenciaCintura = document.getElementById("circunferenciaCintura");
const fCircunferenciaQuadril = document.getElementById("circunferenciaQuadril");
const fCircunferenciaPanturrilha = document.getElementById("circunferenciaPanturrilha");
const fEmapDireita = document.getElementById("emapDireita");
const fEmapEsquerda = document.getElementById("emapEsquerda");
const fForcaPreencaoManualDireita = document.getElementById("forcaPreencaoManualDireita");
const fForcaPreencaoManualEsquerda = document.getElementById("forcaPreencaoManualEsquerda");
const fMetas = document.getElementById("metas");
let currentTab = 0;

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

// obtem os valores dos campos
function getSelectedRadioValues() {
  const questions = document.querySelectorAll('.question');
  const data = {
    pacienteId: fPacienteId.value,
    usuarioId: usuarioId,
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
    atvFisica: fAtvFisica.value,
    quemCozinha: fQuemCozinha.value,
    necessidadeComerEstressadoAnsiosoTriste: fNecessidadeComerEstressadoAnsiosoTriste.value,
    realizaRefeicoesSozinhoAcompanhado: fRealizaRefeicoesSozinhoAcompanhado.value,
    realizaRefeicoesSozinhoAcompanhado: fRealizaRefeicoesSozinhoAcompanhado.value,
    excessoAlimentosNaoSaudaveisSintomas: fExcessoAlimentosNaoSaudaveisSintomas.value,
    dificuldadeRotinaAlimentarSaudavel: fDificuldadeRotinaAlimentarSaudavel.value,
    necessidadeConsoloAlimentar: fNecessidadeConsoloAlimentar.value,
    dificuldadePararDeComer: fDificuldadePararDeComer.value,
    frequenciaFomeFisiologica: fFrequenciaFomeFisiologica.value,
    frequenciaNecessidadeEmocionalComer: fFrequenciaNecessidadeEmocionalComer.value,
    naoModificarPlanoAlimentar: fNaoModificarPlanoAlimentar.value,
    aversaoAlimentar: fAversaoAlimentar.value,
    toleraAlimentosProteinaAnimal: fToleraAlimentosProteinaAnimal.value,
    alergiaIntoleranciasAlimentares: fAlergiaIntoleranciasAlimentares.value,
    pesoAtual: fPesoAtual.value,
    estatura: fEstatura.value,
    imc: fImc.value,
    cb: fCb.value,
    dct: fDct.value,
    dcb: fDcb.value,
    dcse: fDcse.value,
    dcsi: fDcsi.value,
    somatoria4Dobras: fSomatoria4Dobras.value,
    porcentagemGorduraCorporalSomatoria4Dobras: fPorcentagemGorduraCorporalSomatoria4Dobras.value,
    pesoGordura: fPesoGordura.value,
    pesoMassaMagra: fPesoMassaMagra.value,
    totalAgua: fTotalAgua.value,
    porcentagemAguaMassaMagra: fPorcentagemAguaMassaMagra.value,
    resistencia: fResistencia.value,
    reactancia: fReactancia.value,
    anguloDeFase: fAnguloDeFase.value,
    circunferenciaCintura: fCircunferenciaCintura.value,
    circunferenciaQuadril: fCircunferenciaQuadril.value,
    circunferenciaPanturrilha: fCircunferenciaPanturrilha.value,
    emapDireita: fEmapDireita.value,
    emapEsquerda: fEmapEsquerda.value,
    forcaPreencaoManualDireita: fForcaPreencaoManualDireita.value,
    forcaPreencaoManualEsquerda: fForcaPreencaoManualEsquerda.value,
    metas: fMetas.value,
  };

  questions.forEach(question => {
    const name = question.getAttribute('question-name');
    const selectedOption = question.querySelector(`input[name="${name}"]:checked`);

    if (selectedOption) {
      data[name] = selectedOption.value;
    } else {
      data[name] = null; // Ou qualquer outro valor padrão
    }
  });

  return data;
}

function cadastrarAnamnese() {
  const data = getSelectedRadioValues();
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
          resetForm(formAddAnamnese);
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

async function showTab(n) {
  tabs[n].style.display = "block"

  if (n == 0) {
    prevBtn.style.display = "none";
    divStepButtons.style.flexDirection = "row-reverse"
  } else if (n == (tabs.length - 1)) {
    nextBtn.textContent = "Enviar";
    prevBtn.style.display = "inline";
  } else {
    nextBtn.textContent = "Próximo";
    divStepButtons.style.flexDirection = "row"
    prevBtn.style.display = "inline";
  }
  fixStepIndicator(n)
}
async function nextTab() {
  if (currentTab >= tabs.length - 1) {
    try {
      goodWarning.textContent = "";
      badWarning.textContent = "";
      await cadastrarAnamnese();
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

verificarAutenticacao();
listarPacientesSelect();
showTab(currentTab);
