const formAddRetorno = document.querySelector(".formAddRetorno");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const tabs = document.getElementsByClassName("tab");
let currentTab = 0;

function cadastrarRetorno() {
  const data = getData();
  let forbidden = false;
  return new Promise((resolve, reject) => {
    if (validateForm(formAddRetorno)) {
      fetch(urlApi + endpointRetornos, {
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
          goodWarning.textContent = "Retorno cadastrado com sucesso!";
          resolve(response);
        })
        .catch(error => {
          badWarning.textContent = forbidden ? "Dados inválidos." : "Erro na API.";
          reject(error);
        })
    } else {
      badWarning.textContent = "Preencha os campos obrigatórios";
    }
  })
}

function getData() {
  // Helper para pegar valor de input pelo ID de forma segura
  const getVal = (id) => {
      const el = document.getElementById(id);
      return el ? el.value : null;
  };
  
  const usuarioIdLocal = localStorage.getItem("usuarioId");

  const data = {
      usuario: { id: usuarioIdLocal },
      paciente: { id: getVal("pacienteId") },
      anamnese: { id: getVal("anamneseId") },
      
      metasUltimasConsultas: getVal("metasUltimasConsultas"),
      comentariosObservacao: getVal("comentariosObservacao"),
      metasForamCumpridas: getVal("metasForamCumpridas"),
      // desempenhoMetas removido daqui pois é radio button
      motivoCumprimentoMetas: getVal("motivoAssinaladoCumprimentoMetas"),
      sentiuMudancaHabitos: getVal("comoSentiuMudancaHabitos"),
      adaptacaoMudanca: getVal("adaptacaoMudancaHabitos"),
      dificuldadeAdaptacao: getVal("motivosDificuldadeAdaptacao"),
      melhorarAlimentacao: getVal("sentePrecisaMelhorarAlimentacao"),
      habitoIntestinal: getVal("habitoIntestinal"),
      atividadeFisica: getVal("atvFisica"),
      metasProximoRetorno: getVal("metasProximoRetorno"),
      
      peso: getVal("pesoAtual"),
      imc: getVal("imc"),
      circunferenciaAbdominal: getVal("circunferenciaAbdominal"),
      
      valoresBioimpedancia: getVal("valoresBioimpedancia"),
      observacoesBioimpedancia: getVal("observacoesBioimpedancia")
  };
  
  // Tratamento correto para Radio Button
  const desempenhoRadio = document.querySelector('input[name="desempenhoCumprimentoMetas"]:checked');
  data.desempenhoMetas = desempenhoRadio ? desempenhoRadio.value : null;

  return data;
}

// Lógica para preencher o select de Anamneses e auto-selecionar Paciente
function listarAnamnesesSelect(selectEl) {
    fetch(urlApi + endpointAnamneses, { headers: { "Authorization": `${token}` }})
    .then(r => r.json())
    .then(data => {
        data.forEach(a => {
            const opt = document.createElement('option');
            opt.value = a.id;
            opt.textContent = `Anamnese #${a.id} - ${a.paciente.nome}`;
            selectEl.appendChild(opt);
        });
        verificarUrlParam(); // Verifica se veio ID pela URL
    });
}

async function preencherCampoPaciente(anamneseId) {
    if(!anamneseId) return;
    try {
        const r = await fetch(urlApi + endpointAnamneses + "/" + anamneseId, {
            headers: { "Authorization": `${token}` }
        });
        const anamnese = await r.json();
        if(anamnese && anamnese.paciente) {
            document.getElementById("pacienteId").value = anamnese.paciente.id;
            document.getElementById("pacienteNome").value = anamnese.paciente.nome;
        }
    } catch(e) { console.error(e); }
}

function verificarUrlParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if(id) {
        document.getElementById("anamneseId").value = id;
        preencherCampoPaciente(id);
    }
}

verificarAutenticacao();
listarAnamnesesSelect(document.getElementById("anamneseId"));
showTab(currentTab);