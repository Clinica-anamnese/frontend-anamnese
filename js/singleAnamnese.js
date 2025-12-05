const formAddAnamnese = document.querySelector(".formAddAnamnese");
const pacienteNome = document.getElementById("pacienteNome");
const criadoPor = document.getElementById("criadoPor");
const anamneseId = localStorage.getItem("anamneseId");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const tabs = document.getElementsByClassName("tab");
const botaoDeletar = document.getElementById("botaoDeletar");
const botaoCriarRetorno = document.getElementById("botaoCriarRetorno");
let currentTab = 0;

function consultarAnamnese() {
    fetch(urlApi + endpointAnamneses + "/" + anamneseId, { headers: { "Authorization": `${token}` } })
    .then(r => r.json())
    .then(a => {
        // --- 1. Preenchimento do Cabeçalho ---
        if(pacienteNome && a.paciente) pacienteNome.textContent = a.paciente.nome;
        if(criadoPor && a.usuario) criadoPor.textContent = a.usuario.nome;
        if(botaoCriarRetorno) botaoCriarRetorno.href = `./adicionar-retorno.html?id=${a.id}`;

        // --- 2. Funções Auxiliares de Preenchimento ---
        const set = (id, v) => { 
            const el = document.getElementById(id); 
            if(el) el.value = (v === null || v === undefined) ? "" : v; 
        };
        
        const setCheck = (id, v) => { 
            const el = document.getElementById(id); 
            if(el) el.checked = !!v; 
        };

        const setRadio = (name, v) => {
            if (v !== null && v !== undefined) {
                const el = document.querySelector(`input[name="${name}"][value="${v}"]`);
                if (el) el.checked = true;
            }
        };

        // --- 3. Mapeamento dos Campos ---
        
        // Dados Pessoais e Rotina
        set("pacienteId", a.paciente?.id);
        set("escolaridade", a.escolaridade?.id);
        
        // CORREÇÃO: Profissão agora é texto direto, não objeto com ID
        set("profissao", a.profissao); 
        
        set("periodoEstudo", a.periodoEstudo);
        setCheck("lancheEstudo", a.lancheEstudo); 
        set("periodoTrabalho", a.periodoTrabalho);
        setCheck("lancheTrabalho", a.lancheTrabalho); 

        // Socioeconômico
        set("rendaFamiliar", a.rendaFamiliar?.id);
        set("numPessoasDomicilio", a.numPessoasDomicilio);

        // Dados Clínicos
        set("motivo", a.motivo);
        set("apresentaDoenca", a.doenca); 
        set("antecedentesFamiliares", a.antecedentes); 
        set("medicamentosContinuos", a.medicamento); 
        set("suplementosComplementos", a.suplemento); 
        set("frequenciaEvacuacao", a.evacuacao?.id);
        set("consistenciaEvacuacao", a.consistenciaEvacuacao);
        setCheck("praticaAtvFisica", a.praticaAtvFisica);
        set("atvFisica", a.atvFisica); 

        // Recordatório Alimentar (Descrições)
        set("cafeDaManha", a.cafeDaManha);
        set("lancheDaManha", a.lancheDaManha);
        set("almoco", a.almoco);
        set("lancheDaTarde", a.lancheDaTarde);
        set("jantar", a.jantar);
        set("ceia", a.ceia);

        // Comportamento Alimentar (Completo)
        set("quemCozinha", a.quemCozinha);
        set("necessidadeComerEstressadoAnsiosoTriste", a.necessidadeComerEmocional);
        set("realizaRefeicoesSozinhoAcompanhado", a.companhiaRefeicoes);
        set("excessoAlimentosNaoSaudaveisSintomas", a.excessoAlimentosNaoSaudaveisSintomas);
        set("dificuldadeRotinaAlimentarSaudavel", a.dificuldadeRotinaAlimentarSaudavel);
        set("necessidadeConsoloAlimentar", a.necessidadeConsoloAlimentar);
        set("dificuldadePararDeComer", a.dificuldadePararDeComer);
        set("frequenciaFomeFisiologica", a.fomeFisiologica);
        set("frequenciaNecessidadeEmocionalComer", a.necessidadeEmocionalComer);
        set("naoModificarPlanoAlimentar", a.naoModificarPlano);
        set("aversaoAlimentar", a.aversaoAlimentar);
        set("toleraAlimentosProteinaAnimal", a.toleraProteinaAnimal);
        set("alergiaIntoleranciasAlimentares", a.alergias);
        
        // Notas (Radio Buttons)
        setRadio("notaSaciedadePosRefeicoes", a.notaSaciedade);
        setRadio("notaHumorPosRefeicoes", a.notaHumor);
        
        set("metas", a.metas);

        // Antropometria (Dados Fisiológicos)
        if(a.dadosFisiologicos) {
            set("pesoAtual", a.dadosFisiologicos.peso);
            set("estatura", a.dadosFisiologicos.estatura);
            set("imc", a.dadosFisiologicos.imc);
            set("circunferenciaCintura", a.dadosFisiologicos.circunferenciaCintura);
            set("somatoria4Dobras", a.dadosFisiologicos.somatoria4Dobras);
            set("porcentagemGorduraCorporalSomatoria4Dobras", a.dadosFisiologicos.percentualGorduraCalculado);
            set("pesoGordura", a.dadosFisiologicos.pesoGordura);
            set("pesoMassaMagra", a.dadosFisiologicos.pesoMassaMagra);
            set("totalAgua", a.dadosFisiologicos.totalAgua);
            set("porcentagemAguaMassaMagra", a.dadosFisiologicos.porcentagemAguaMassaMagra);
            set("resistencia", a.dadosFisiologicos.resistencia);
            set("reactancia", a.dadosFisiologicos.reactancia);
            set("anguloDeFase", a.dadosFisiologicos.anguloDeFase);
            set("circunferenciaQuadril", a.dadosFisiologicos.circunferenciaQuadril);
            set("circunferenciaPanturrilha", a.dadosFisiologicos.circunferenciaPanturrilha);
            set("emapDireita", a.dadosFisiologicos.emapDireita);
            set("emapEsquerda", a.dadosFisiologicos.emapEsquerda);
            set("forcaPreencaoManualDireita", a.dadosFisiologicos.forcaPreencaoManualDireita);
            set("forcaPreencaoManualEsquerda", a.dadosFisiologicos.forcaPreencaoManualEsquerda);
            
            set("cb", a.dadosFisiologicos.cb);
            set("dct", a.dadosFisiologicos.dct);
            set("dcb", a.dadosFisiologicos.dcb);
            set("dcse", a.dadosFisiologicos.dcse);
            set("dcsi", a.dadosFisiologicos.dcsi);
        }

        // --- 4. Carregar Listas (Refeições e Alimentos) ---
        
        if(a.refeicoes) {
            a.refeicoes.forEach(r => {
                const ck = document.querySelector(`input[name="refeicoes"][value="${r.id}"]`);
                if(ck) ck.checked = true;
            });
        }

        if(a.alimentos) {
             a.alimentos.forEach(item => { 
                 const rd = document.querySelector(`input[name="f_${item.alimento.id}"][value="${item.frequencia}"]`); 
                 if(rd) rd.checked = true; 
             });
        }
    })
    .catch(err => {
        console.error("Erro ao carregar anamnese:", err);
        alert("Erro ao carregar dados da anamnese.");
    });
}

function getData() {
  // Helpers para capturar valores
  const getString = (id) => { const el = document.getElementById(id); return (el && el.value.trim() !== "") ? el.value.trim() : null; };
  const getInt = (id) => { const el = document.getElementById(id); if(!el || el.value.trim() === "") return null; const v = parseInt(el.value, 10); return isNaN(v) ? null : v; };
  const getFloat = (id) => { const el = document.getElementById(id); if(!el || el.value.trim() === "") return null; const v = parseFloat(el.value.replace(',', '.')); return isNaN(v) ? null : v; };
  const getObjId = (id) => { const v = getInt(id); return v ? { id: v } : null; };
  const getCheck = (id) => { const el = document.getElementById(id); return el ? el.checked : false; };

  const uid = localStorage.getItem("usuarioId");
  
  const data = {
    usuario: { id: parseInt(uid) },
    paciente: { id: getInt("pacienteId") },
    escolaridade: getObjId("escolaridade"),
    
    // CORREÇÃO: Profissão como getString (texto), não getObjId
    profissao: getString("profissao"), 
    
    rendaFamiliar: getObjId("rendaFamiliar"),
    evacuacao: getObjId("frequenciaEvacuacao"),
    
    lancheEstudo: getCheck("lancheEstudo"),
    lancheTrabalho: getCheck("lancheTrabalho"),
    praticaAtvFisica: getCheck("praticaAtvFisica"),
    atvFisica: getString("atvFisica"),
    
    cafeDaManha: getString("cafeDaManha"),
    lancheDaManha: getString("lancheDaManha"),
    almoco: getString("almoco"),
    lancheDaTarde: getString("lancheDaTarde"),
    jantar: getString("jantar"),
    ceia: getString("ceia"),

    motivo: getString("motivo"), 
    doenca: getString("apresentaDoenca"),
    antecedentes: getString("antecedentesFamiliares"),
    medicamento: getString("medicamentosContinuos"),
    suplemento: getString("suplementosComplementos"),
    
    periodoEstudo: getString("periodoEstudo"), 
    periodoTrabalho: getString("periodoTrabalho"), 
    quemCozinha: getString("quemCozinha"), 
    
    necessidadeComerEmocional: getString("necessidadeComerEstressadoAnsiosoTriste"),
    companhiaRefeicoes: getString("realizaRefeicoesSozinhoAcompanhado"),
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
    metas: getString("metas"),
    numPessoasDomicilio: getInt("numPessoasDomicilio"), 
    
    notaSaciedade: parseInt(document.querySelector('input[name="notaSaciedadePosRefeicoes"]:checked')?.value || 0),
    notaHumor: parseInt(document.querySelector('input[name="notaHumorPosRefeicoes"]:checked')?.value || 0),
    
    consistenciaEvacuacao: getInt("consistenciaEvacuacao"),
    
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

  document.querySelectorAll('input[name="refeicoes"]:checked').forEach(ck => {
    data.refeicoes.push({ id: parseInt(ck.value) });
  });

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

function atualizarAnamnese() {
    const data = getData();
    return new Promise((resolve, reject) => {
        fetch(urlApi + endpointAnamneses + "/" + anamneseId, {
            headers: { "Content-Type": "application/json", "Authorization": `${token}` },
            method: "PUT",
            body: JSON.stringify(data)
        })
        .then(r => { 
            if(!r.ok) return Promise.reject(); 
            goodWarning.textContent = "Anamnese atualizada com sucesso!";
            setTimeout(() => { resolve(r); }, 1500);
        })
        .catch(error => {
            console.error(error);
            badWarning.textContent = "Erro ao atualizar. Verifique os dados.";
            reject(error);
        });
    });
}

if(botaoDeletar) {
    botaoDeletar.addEventListener("click", async () => { 
        try { 
            await deletarItem(anamneseId, endpointAnamneses); 
            window.location.href = "formularios.html"; 
        } catch { 
            verificarAutenticacao();
        } 
    });
}

function listarPacientesSelect(select) {
    fetch(urlApi + endpointPacientes, { headers: { "Authorization": `${token}` } })
    .then(r => r.json())
    .then(d => {
        d.forEach(p => { 
            const o = document.createElement('option'); 
            o.value = p.id; 
            o.textContent = p.nome; 
            select.appendChild(o); 
        });
        consultarAnamnese();
    });
}

verificarAutenticacao();
if(document.getElementById("pacienteId")) listarPacientesSelect(document.getElementById("pacienteId"));
showTab(currentTab);