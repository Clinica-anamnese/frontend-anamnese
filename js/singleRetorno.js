const formAddRetorno = document.querySelector(".formAddRetorno");
// CORREÇÃO: Buscando o elemento do título com o novo ID
const tituloPacienteNome = document.getElementById("tituloPacienteNome");
const criadoPor = document.getElementById("criadoPor");
const retornoId = localStorage.getItem("retornoId");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const tabs = document.getElementsByClassName("tab");
const botaoDeletar = document.getElementById("botaoDeletar");
let currentTab = 0;

function consultarRetorno() {
    fetch(urlApi + endpointRetornos + "/" + retornoId, {
        headers: { "Authorization": `${token}` }
    })
    .then(response => response.json())
    .then(retorno => {
        // Preencher header
        // CORREÇÃO: Usando a nova referência do título
        if(retorno.paciente) tituloPacienteNome.textContent = retorno.paciente.nome;
        if(retorno.usuario) criadoPor.textContent = retorno.usuario.nome;
        
        // Helper
        const setVal = (id, v) => { 
            const el = document.getElementById(id);
            if(el) el.value = v || ""; 
        };

        setVal("anamneseId", retorno.anamnese?.id);
        setVal("pacienteId", retorno.paciente?.id);
        
        // CORREÇÃO: Agora o 'pacienteNome' no HTML é único (o input), então setVal funcionará
        setVal("pacienteNome", retorno.paciente?.nome);

        setVal("metasUltimasConsultas", retorno.metasUltimasConsultas);
        setVal("comentariosObservacao", retorno.comentariosObservacao);
        setVal("metasForamCumpridas", retorno.metasForamCumpridas);
        setVal("motivoAssinaladoCumprimentoMetas", retorno.motivoCumprimentoMetas);
        setVal("comoSentiuMudancaHabitos", retorno.sentiuMudancaHabitos);
        setVal("adaptacaoMudancaHabitos", retorno.adaptacaoMudanca);
        setVal("motivosDificuldadeAdaptacao", retorno.dificuldadeAdaptacao);
        setVal("sentePrecisaMelhorarAlimentacao", retorno.melhorarAlimentacao);
        setVal("habitoIntestinal", retorno.habitoIntestinal);
        setVal("atvFisica", retorno.atividadeFisica);
        setVal("metasProximoRetorno", retorno.metasProximoRetorno);
        
        setVal("pesoAtual", retorno.peso);
        setVal("imc", retorno.imc);
        setVal("circunferenciaAbdominal", retorno.circunferenciaAbdominal);
        
        setVal("valoresBioimpedancia", retorno.valoresBioimpedancia);
        
        // CORREÇÃO: Como o HTML foi corrigido, este campo agora será encontrado
        setVal("observacoesBioimpedancia", retorno.observacoesBioimpedancia);

        // Radio desempenho
        if(retorno.desempenhoMetas) {
            const rad = document.querySelector(`input[name="desempenhoCumprimentoMetas"][value="${retorno.desempenhoMetas}"]`);
            if(rad) rad.checked = true;
        }
    })
    .catch(console.error);
}

// Atualizar (PUT) usando mesma lógica do addRetorno
function atualizarRetorno() {
    const data = getDataLocal(); 
    return new Promise((resolve, reject) => {
        if (validateForm(formAddRetorno)) {
            fetch(urlApi + endpointRetornos + "/" + retornoId, {
                headers: { "Content-Type": "application/json", "Authorization": `${token}` },
                method: "PUT",
                body: JSON.stringify(data)
            })
            .then(r => {
                if(!r.ok) return Promise.reject();
                goodWarning.textContent = "Atualizado!";
                resolve(r);
            })
            .catch(reject);
        }
    });
}

function getDataLocal() {
    // Helper seguro
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
        // Desempenho tratado separadamente
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
    const desempenhoRadio = document.querySelector('input[name="desempenhoCumprimentoMetas"]:checked');
    data.desempenhoMetas = desempenhoRadio ? desempenhoRadio.value : null;
    
    return data;
}

botaoDeletar.addEventListener("click", async () => {
    try {
        await deletarItem(retornoId, endpointRetornos);
        window.location.href = "formularios.html";
    } catch { verificarAutenticacao(); }
});

verificarAutenticacao();
consultarRetorno();
showTab(currentTab);