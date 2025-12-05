const formAddAnamnese = document.querySelector(".formAddAnamnese");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const tabs = document.getElementsByClassName("tab");
const fPacienteSelect = document.getElementById("pacienteId");
let currentTab = 0;

function cadastrarAnamnese() {
  const data = getData();
  
  const originalText = nextBtn.textContent;
  nextBtn.disabled = true;
  nextBtn.textContent = "Enviando...";

  return new Promise((resolve, reject) => {
    if (!data.paciente || !data.paciente.id) {
        badWarning.textContent = "Erro: Selecione um paciente na primeira etapa.";
        nextBtn.disabled = false;
        nextBtn.textContent = originalText;
        reject("Paciente não selecionado");
        return;
    }

    fetch(urlApi + endpointAnamneses, {
      headers: { "Content-Type": "application/json", "Authorization": `${token}` },
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
          return response.text().then(text => Promise.reject(text));
      }
      return response.json();
    })
    .then(data => {
      goodWarning.textContent = "Anamnese salva com sucesso!";
      badWarning.textContent = "";
      setTimeout(() => { window.location.href = "formularios.html"; }, 1500);
      resolve(data);
    })
    .catch(error => {
      console.error("Erro:", error);
      nextBtn.disabled = false;
      nextBtn.textContent = originalText;
      badWarning.textContent = "Erro ao salvar: " + error;
      reject(error);
    })
  })
}

function getData() {
  // Helpers para capturar valores com tratamento de nulos/vazios
  const getString = (id) => { const el = document.getElementById(id); return (el && el.value.trim() !== "") ? el.value.trim() : null; };
  const getInt = (id) => { const el = document.getElementById(id); if(!el || el.value.trim() === "") return null; const v = parseInt(el.value, 10); return isNaN(v) ? null : v; };
  const getFloat = (id) => { const el = document.getElementById(id); if(!el || el.value.trim() === "") return null; const v = parseFloat(el.value.replace(',', '.')); return isNaN(v) ? null : v; };
  const getObjId = (id) => { const v = getInt(id); return v ? { id: v } : null; };
  const getCheck = (id) => { const el = document.getElementById(id); return el ? el.checked : false; };

  const usuarioIdLocal = localStorage.getItem("usuarioId");

  const data = {
    usuario: { id: parseInt(usuarioIdLocal) },
    paciente: { id: getInt("pacienteId") },
    
    // --- Dados Pessoais e Rotina ---
    escolaridade: getObjId("escolaridade"),
    profissao: getString("profissao"), // ALTERADO PARA getString
    periodoEstudo: getString("periodoEstudo"),
    periodoTrabalho: getString("periodoTrabalho"),
    lancheEstudo: getCheck("lancheEstudo"),
    lancheTrabalho: getCheck("lancheTrabalho"),

    // --- Dados Clínicos ---
    rendaFamiliar: getObjId("rendaFamiliar"),
    evacuacao: getObjId("frequenciaEvacuacao"), 
    motivo: getString("motivo"),
    doenca: getString("apresentaDoenca"), 
    antecedentes: getString("antecedentesFamiliares"), 
    medicamento: getString("medicamentosContinuos"), 
    suplemento: getString("suplementosComplementos"), 
    consistenciaEvacuacao: getInt("consistenciaEvacuacao"),
    
    // --- Atividade Física ---
    praticaAtvFisica: getCheck("praticaAtvFisica"),
    atvFisica: getString("atvFisica"),

    // --- Descrição das Refeições ---
    cafeDaManha: getString("cafeDaManha"),
    lancheDaManha: getString("lancheDaManha"),
    almoco: getString("almoco"),
    lancheDaTarde: getString("lancheDaTarde"),
    jantar: getString("jantar"),
    ceia: getString("ceia"),
    
    // --- Comportamento Alimentar ---
    quemCozinha: getString("quemCozinha"),
    necessidadeComerEmocional: getString("necessidadeComerEstressadoAnsiosoTriste"),
    companhiaRefeicoes: getString("realizaRefeicoesSozinhoAcompanhado"),
    
    // Novos campos de comportamento
    excessoAlimentosNaoSaudaveisSintomas: getString("excessoAlimentosNaoSaudaveisSintomas"),
    dificuldadeRotinaAlimentarSaudavel: getString("dificuldadeRotinaAlimentarSaudavel"),
    necessidadeConsoloAlimentar: getString("necessidadeConsoloAlimentar"),
    dificuldadePararDeComer: getString("dificuldadePararDeComer"),

    fomeFisiologica: getString("frequenciaFomeFisiologica"),
    necessidadeEmocionalComer: getString("frequenciaNecessidadeEmocionalComer"),
    naoModificarPlano: getString("naoModificarPlanoAlimentar"),
    aversaoAlimentar: getString("aversaoAlimentar"),
    toleraProteinaAnimal: getString("toleraAlimentosProteinaAnimal"),
    alergias: getString("alergiaIntoleranciasAlimentares"),
    
    // --- Metas e Notas ---
    metas: getString("metas"),
    numPessoasDomicilio: getInt("numPessoasDomicilio"),
    notaSaciedade: parseInt(document.querySelector('input[name="notaSaciedadePosRefeicoes"]:checked')?.value || 0),
    notaHumor: parseInt(document.querySelector('input[name="notaHumorPosRefeicoes"]:checked')?.value || 0),
    
    // --- Antropometria Completa ---
    dadosFisiologicos: {
        peso: getFloat("pesoAtual"), 
        estatura: getFloat("estatura"),
        imc: getFloat("imc"),
        circunferenciaCintura: getFloat("circunferenciaCintura"),
        somatoria4Dobras: getFloat("somatoria4Dobras"),
        percentualGorduraCalculado: getFloat("porcentagemGorduraCorporalSomatoria4Dobras"),
        pesoGordura: getFloat("pesoGordura"),
        pesoMassaMagra: getFloat("pesoMassaMagra"),
        totalAgua: getFloat("totalAgua"),
        porcentagemAguaMassaMagra: getFloat("porcentagemAguaMassaMagra"),
        resistencia: getFloat("resistencia"),
        reactancia: getFloat("reactancia"),
        anguloDeFase: getFloat("anguloDeFase"),
        circunferenciaQuadril: getFloat("circunferenciaQuadril"),
        circunferenciaPanturrilha: getFloat("circunferenciaPanturrilha"),
        emapDireita: getFloat("emapDireita"),
        emapEsquerda: getFloat("emapEsquerda"),
        forcaPreencaoManualDireita: getFloat("forcaPreencaoManualDireita"),
        forcaPreencaoManualEsquerda: getFloat("forcaPreencaoManualEsquerda"),
        cb: getFloat("cb"),
        dct: getFloat("dct"),
        dcb: getFloat("dcb"),
        dcse: getFloat("dcse"),
        dcsi: getFloat("dcsi")
    },
    refeicoes: [],
    alimentos: []
  };

  // --- Coleta das Refeições (Checkboxes) ---
  document.querySelectorAll('input[name="refeicoes"]:checked').forEach(ck => {
    data.refeicoes.push({ id: parseInt(ck.value) });
  });

  // --- Coleta dos Alimentos (Tabela de Frequência) ---
  document.querySelectorAll('.food-row').forEach(row => {
      const id = row.getAttribute('data-id');
      const rad = row.querySelector(`input[name="f_${id}"]:checked`);
      if(rad) {
        data.alimentos.push({ 
          alimento: { id: parseInt(id) }, 
          frequencia: rad.value 
        });
      }
  });

  return data;
}

function listarPacientesSelect(select) {
    fetch(urlApi + endpointPacientes, { headers: { "Authorization": `${token}` } })
      .then(r => r.json())
      .then(data => {
        select.innerHTML = '<option selected disabled value="">Selecione...</option>';
        data.forEach(p => {
          const opt = document.createElement('option');
          opt.value = p.id;
          opt.textContent = p.nome;
          select.appendChild(opt);
        });
      });
}

verificarAutenticacao();
if(fPacienteSelect) listarPacientesSelect(fPacienteSelect);
showTab(currentTab);