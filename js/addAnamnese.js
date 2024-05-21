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
/* let fLegumesCenoura = null;
let fLegumesBeterraba = null;
let fLegumesBerinjela = null;
let fLegumesPepino = null;
let fLegumesAbobrinha = null;
let fLegumesChuchu = null;
let fLegumesTomate = null;
let fVerdurasAcelga = null;
let fVerdurasAgriao = null;
let fVerdurasAlface = null;
let fVerdurasBrocolis = null;
let fVerdurasChicoria = null;
let fVerdurasCouveManteiga = null;
let fVerdurasCouveFlor = null;
let fVerdurasEspinafre = null;
let fVerdurasRucula = null;
let fFrutasCLaranja = null;
let fFrutasCTangerina = null;
let fFrutasCLimao = null;
let fFrutasCAbacaxi = null;
let fFrutasCAcerola = null;
let fFrutasCMorango = null;
let fFrutasCKiwi = null;
let fFrutasCMaracuja = null;
let fDemaisFrutasBanana = null;
let fDemaisFrutasGoiaba = null;
let fDemaisFrutasMaca = null;
let fDemaisFrutasMamao = null;
let fDemaisFrutasManga = null;
let fDemaisFrutasMelancia = null;
let fDemaisFrutasMelao = null;
let fDemaisFrutasPera = null;
let fDemaisFrutasPessego = null;
let fDemaisFrutasUva = null;
let fLeguminosasFeijao = null;
let fLeguminosasLentilha = null;
let fLeguminosasErvilha = null;
let fLeguminosasSoja = null;
let fLeguminosasGraoDeBico = null;
let fLeguminosasVagem = null;
let fCarnesBovina = null;
let fCarnesSuina = null;
let fCarnesAves = null;
let fCarnesPeixe = null;
let fFrutosDoMar = null;
let fOvo = null;
let fArrozBrancoPolido = null;
let fArrozIntegral = null;
let fLacteosLeiteIntegralDesnatadoSemi = null;
let fLacteosLeiteSemLactose = null;
let fLacteosQueijosPedacoOuFatia = null;
let fLacteosIogurtes = null;
let fCereaisAveia = null;
let fCereaisGranolaInNatura = null;
let fCereaisQuinoa = null;
let fCereaisLinhaca = null;
let fCereaisChia = null;
let fPaesFrancesMediaNormal = null;
let fPaesFrancesMediaIntegral = null;
let fPaesForma = null;
let fPaesFormaIntegral = null;
let fPaesCara = null;
let fPastasRequeijao = null;
let fPastasMargarina = null;
let fPastasManteiga = null;
let fPastasRicota = null;
let fPastasCottage = null;
let fPastasDoceDeLeite = null;
let fPastasCremeDeAvela = null;
let fPastasGeleia = null;
let fSalgadosMistinhoEsfiha = null;
let fSalgadosCoxinhaCroquete = null;
let fSalgadosEmpadas = null;
let fSalgadosPaoDeQueijo = null;
let fUltraprocessadosSalgadinhoDePacote = null;
let fUltraprocessadosBiscoitoSalgado = null;
let fUltraprocessadosBiscoitoDoce = null;
let fUltraprocessadosChocolate = null;
let fUltraprocessadosRefrigerante = null;
let fUltraprocessadosSucoEmPoCaixinha = null;
let fUltraprocessadosPratosProntosCongelados = null;
let fUltraprocessadosMacarraoInstantaneo = null;
let fUltraprocessadosBolinho = null;
let fUltraprocessadosFastFood = null;
let fEmbutidosSalame = null;
let fEmbutidosPresunto = null;
let fEmbutidosApresuntadoMortadela = null;
let fEmbutidosLinguicaToscanaCalabresa = null;
let fEmbutidosSalsicha = null;
let fEmbutidosPeitoDePeru = null;
let fEmbutidosRosbife = null;
let fEmbutidosNuggets = null;
let fEmbutidosHamburguerTradicional = null;
let fAcucaresAcucar = null;
let fAcucaresAdocante = null;
let fAcucaresMelMelado = null;
let fAcucaresProdutosConfeitaria = null;
let fAcucaresGuloseimas = null;
let fAcucaresAchocolatados = null;
let fMolhosKetchup = null;
let fMolhosMostarda = null;
let fMolhosShoyu = null;
let fMolhosTare = null;
let fMolhosMaionese = null; */

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

function getSelectedRadioValues() {
  const questions = document.querySelectorAll('input[type="radio"]');
  const data = {};

  questions.forEach(question => {
    const name = question.getAttribute("name");
    const selectedOption = question.querySelector(`input[name="${name}"]:checked`);

    if (selectedOption) {
      data[name] = selectedOption.value;
    } else {
      data[name] = null;
    }
  });

  return data;
}

function cadastrarAnamnese() {
  const data = getSelectedRadioValues();
  console.log(data);
  console.log("function")
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
    /*     fLegumesCenoura = document.querySelector('input[type=radio][name=legumesCenoura]:checked').value ? fLegumesCenoura : null;
        fLegumesBeterraba = document.querySelector('input[type=radio][name=legumesBeterraba]:checked').value ? fLegumesBeterraba : null;
        fLegumesBerinjela = document.querySelector('input[type=radio][name=legumesBerinjela]:checked').value ? fLegumesBerinjela : null;
        fLegumesPepino = document.querySelector('input[type=radio][name=legumesPepino]:checked').value ? fLegumesPepino : null;
        fLegumesAbobrinha = document.querySelector('input[type=radio][name=legumesAbobrinha]:checked').value ? fLegumesAbobrinha : null;
        fLegumesChuchu = document.querySelector('input[type=radio][name=legumesChuchu]:checked').value ? fLegumesChuchu : null;
        fLegumesTomate = document.querySelector('input[type=radio][name=legumesTomate]:checked').value ? fLegumesTomate : null;
        fVerdurasAcelga = document.querySelector('input[type=radio][name=verdurasAcelga]:checked').value ? fVerdurasAcelga : null;
        fVerdurasAgriao = document.querySelector('input[type=radio][name=verdurasAgriao]:checked').value ? fVerdurasAgriao : null;
        fVerdurasAlface = document.querySelector('input[type=radio][name=verdurasAlface]:checked').value ? fVerdurasAlface : null;
        fVerdurasBrocolis = document.querySelector('input[type=radio][name=verdurasBrocolis]:checked').value ? fVerdurasBrocolis : null;
        fVerdurasChicoria = document.querySelector('input[type=radio][name=verdurasChicoria]:checked').value ? fVerdurasChicoria : null;
        fVerdurasCouveManteiga = document.querySelector('input[type=radio][name=verdurasCouveManteiga]:checked').value ? fVerdurasCouveManteiga : null;
        fVerdurasCouveFlor = document.querySelector('input[type=radio][name=verdurasCouveFlor]:checked').value ? fVerdurasCouveFlor : null;
        fVerdurasEspinafre = document.querySelector('input[type=radio][name=verdurasEspinafre]:checked').value ? fVerdurasEspinafre : null;
        fVerdurasRucula = document.querySelector('input[type=radio][name=verdurasRucula]:checked').value ? fVerdurasRucula : null;
        fFrutasCLaranja = document.querySelector('input[type=radio][name=frutasCLaranja]:checked').value ? fFrutasCLaranja : null;
        fFrutasCTangerina = document.querySelector('input[type=radio][name=frutasCTangerina]:checked').value ? fFrutasCTangerina : null;
        fFrutasCLimao = document.querySelector('input[type=radio][name=frutasCLimao]:checked').value ? fFrutasCLimao : null;
        fFrutasCAbacaxi = document.querySelector('input[type=radio][name=frutasCAbacaxi]:checked').value ? fFrutasCAbacaxi : null;
        fFrutasCAcerola = document.querySelector('input[type=radio][name=frutasCAcerola]:checked').value ? fFrutasCAcerola : null;
        fFrutasCMorango = document.querySelector('input[type=radio][name=frutasCMorango]:checked').value ? fFrutasCMorango : null;
        fFrutasCKiwi = document.querySelector('input[type=radio][name=frutasCKiwi]:checked').value ? fFrutasCKiwi : null;
        fFrutasCMaracuja = document.querySelector('input[type=radio][name=frutasCMaracuja]:checked').value ? fFrutasCMaracuja : null;
        fDemaisFrutasBanana = document.querySelector('input[type=radio][name=demaisFrutasBanana]:checked').value ? fDemaisFrutasBanana : null;
        fDemaisFrutasGoiaba = document.querySelector('input[type=radio][name=demaisFrutasGoiaba]:checked').value ? fDemaisFrutasGoiaba : null;
        fDemaisFrutasMaca = document.querySelector('input[type=radio][name=demaisFrutasMaca]:checked').value ? fDemaisFrutasMaca : null;
        fDemaisFrutasMamao = document.querySelector('input[type=radio][name=demaisFrutasMamao]:checked').value ? fDemaisFrutasMamao : null;
        fDemaisFrutasManga = document.querySelector('input[type=radio][name=demaisFrutasManga]:checked').value ? fDemaisFrutasManga : null;
        fDemaisFrutasMelancia = document.querySelector('input[type=radio][name=demaisFrutasMelancia]:checked').value ? fDemaisFrutasMelancia : null;
        fDemaisFrutasMelao = document.querySelector('input[type=radio][name=demaisFrutasMelao]:checked').value ? fDemaisFrutasMelao : null;
        fDemaisFrutasPera = document.querySelector('input[type=radio][name=demaisFrutasPera]:checked').value ? fDemaisFrutasPera : null;
        fDemaisFrutasPessego = document.querySelector('input[type=radio][name=demaisFrutasPessego]:checked').value ? fDemaisFrutasPessego : null;
        fDemaisFrutasUva = document.querySelector('input[type=radio][name=demaisFrutasUva]:checked').value ? fDemaisFrutasUva : null;
        fLeguminosasFeijao = document.querySelector('input[type=radio][name=leguminosasFeijao]:checked').value ? fLeguminosasFeijao : null;
        fLeguminosasLentilha = document.querySelector('input[type=radio][name=leguminosasLentilha]:checked').value ? fLeguminosasLentilha : null;
        fLeguminosasErvilha = document.querySelector('input[type=radio][name=leguminosasErvilha]:checked').value ? fLeguminosasErvilha : null;
        fLeguminosasSoja = document.querySelector('input[type=radio][name=leguminosasSoja]:checked').value ? fLeguminosasSoja : null;
        fLeguminosasGraoDeBico = document.querySelector('input[type=radio][name=leguminosasGraoDeBico]:checked').value ? fLeguminosasGraoDeBico : null;
        fLeguminosasVagem = document.querySelector('input[type=radio][name=leguminosasVagem]:checked').value ? fLeguminosasVagem : null;
        fCarnesBovina = document.querySelector('input[type=radio][name=carnesBovina]:checked').value ? fCarnesBovina : null;
        fCarnesSuina = document.querySelector('input[type=radio][name=carnesSuina]:checked').value ? fCarnesSuina : null;
        fCarnesAves = document.querySelector('input[type=radio][name=carnesAves]:checked').value ? fCarnesAves : null;
        fCarnesPeixe = document.querySelector('input[type=radio][name=carnesPeixe]:checked').value ? fCarnesPeixe : null;
        fFrutosDoMar = document.querySelector('input[type=radio][name=frutosDoMar]:checked').value ? fFrutosDoMar : null;
        fOvo = document.querySelector('input[type=radio][name=ovo]:checked').value ? fOvo : null;
        fArrozBrancoPolido = document.querySelector('input[type=radio][name=arrozBrancoPolido]:checked').value ? fArrozBrancoPolido : null;
        fArrozIntegral = document.querySelector('input[type=radio][name=arrozIntegral]:checked').value ? fArrozIntegral : null;
        fLacteosLeiteIntegralDesnatadoSemi = document.querySelector('input[type=radio][name=lacteosLeiteIntegralDesnatadoSemi]:checked').value ? fLacteosLeiteIntegralDesnatadoSemi : null;
        fLacteosLeiteSemLactose = document.querySelector('input[type=radio][name=lacteosLeiteSemLactose]:checked').value ? fLacteosLeiteSemLactose : null;
        fLacteosQueijosPedacoOuFatia = document.querySelector('input[type=radio][name=lacteosQueijosPedacoOuFatia]:checked').value ? fLacteosQueijosPedacoOuFatia : null;
        fLacteosIogurtes = document.querySelector('input[type=radio][name=lacteosIogurtes]:checked').value ? fLacteosIogurtes : null;
        fCereaisAveia = document.querySelector('input[type=radio][name=cereaisAveia]:checked').value ? fCereaisAveia : null;
        fCereaisGranolaInNatura = document.querySelector('input[type=radio][name=cereaisGranolaInNatura]:checked').value ? fCereaisGranolaInNatura : null;
        fCereaisQuinoa = document.querySelector('input[type=radio][name=cereaisQuinoa]:checked').value ? fCereaisQuinoa : null;
        fCereaisLinhaca = document.querySelector('input[type=radio][name=cereaisLinhaca]:checked').value ? fCereaisLinhaca : null;
        fCereaisChia = document.querySelector('input[type=radio][name=cereaisChia]:checked').value ? fCereaisChia : null;
        fPaesFrancesMediaNormal = document.querySelector('input[type=radio][name=paesFrancesMediaNormal]:checked').value ? fPaesFrancesMediaNormal : null;
        fPaesFrancesMediaIntegral = document.querySelector('input[type=radio][name=paesFrancesMediaIntegral]:checked').value ? fPaesFrancesMediaIntegral : null;
        fPaesForma = document.querySelector('input[type=radio][name=paesForma]:checked').value ? fPaesForma : null;
        fPaesFormaIntegral = document.querySelector('input[type=radio][name=paesFormaIntegral]:checked').value ? fPaesFormaIntegral : null;
        fPaesCara = document.querySelector('input[type=radio][name=paesCara]:checked').value ? fPaesCara : null;
        fPastasRequeijao = document.querySelector('input[type=radio][name=pastasRequeijao]:checked').value ? fPastasRequeijao : null;
        fPastasMargarina = document.querySelector('input[type=radio][name=pastasMargarina]:checked').value ? fPastasMargarina : null;
        fPastasManteiga = document.querySelector('input[type=radio][name=pastasManteiga]:checked').value ? fPastasManteiga : null;
        fPastasRicota = document.querySelector('input[type=radio][name=pastasRicota]:checked').value ? fPastasRicota : null;
        fPastasCottage = document.querySelector('input[type=radio][name=pastasCottage]:checked').value ? fPastasCottage : null;
        fPastasDoceDeLeite = document.querySelector('input[type=radio][name=pastasDoceDeLeite]:checked').value ? fPastasDoceDeLeite : null;
        fPastasCremeDeAvela = document.querySelector('input[type=radio][name=pastasCremeDeAvela]:checked').value ? fPastasCremeDeAvela : null;
        fPastasGeleia = document.querySelector('input[type=radio][name=pastasGeleia]:checked').value ? fPastasGeleia : null;
        fSalgadosMistinhoEsfiha = document.querySelector('input[type=radio][name=salgadosMistinhoEsfiha]:checked').value ? fSalgadosMistinhoEsfiha : null;
        fSalgadosCoxinhaCroquete = document.querySelector('input[type=radio][name=salgadosCoxinhaCroquete]:checked').value ? fSalgadosCoxinhaCroquete : null;
        fSalgadosEmpadas = document.querySelector('input[type=radio][name=salgadosEmpadas]:checked').value ? fSalgadosEmpadas : null;
        fSalgadosPaoDeQueijo = document.querySelector('input[type=radio][name=salgadosPaoDeQueijo]:checked').value ? fSalgadosPaoDeQueijo : null;
        fUltraprocessadosSalgadinhoDePacote = document.querySelector('input[type=radio][name=ultraprocessadosSalgadinhoDePacote]:checked').value ? fUltraprocessadosSalgadinhoDePacote : null;
        fUltraprocessadosBiscoitoSalgado = document.querySelector('input[type=radio][name=ultraprocessadosBiscoitoSalgado]:checked').value ? fUltraprocessadosBiscoitoSalgado : null;
        fUltraprocessadosBiscoitoDoce = document.querySelector('input[type=radio][name=ultraprocessadosBiscoitoDoce]:checked').value ? fUltraprocessadosBiscoitoDoce : null;
        fUltraprocessadosChocolate = document.querySelector('input[type=radio][name=ultraprocessadosChocolate]:checked').value ? fUltraprocessadosChocolate : null;
        fUltraprocessadosRefrigerante = document.querySelector('input[type=radio][name=ultraprocessadosRefrigerante]:checked').value ? fUltraprocessadosRefrigerante : null;
        fUltraprocessadosSucoEmPoCaixinha = document.querySelector('input[type=radio][name=ultraprocessadosSucoEmPoCaixinha]:checked').value ? fUltraprocessadosSucoEmPoCaixinha : null;
        fUltraprocessadosPratosProntosCongelados = document.querySelector('input[type=radio][name=ultraprocessadosPratosProntosCongelados]:checked').value ? fUltraprocessadosPratosProntosCongelados : null;
        fUltraprocessadosMacarraoInstantaneo = document.querySelector('input[type=radio][name=ultraprocessadosMacarraoInstantaneo]:checked').value ? fUltraprocessadosMacarraoInstantaneo : null;
        fUltraprocessadosBolinho = document.querySelector('input[type=radio][name=ultraprocessadosBolinho]:checked').value ? fUltraprocessadosBolinho : null;
        fUltraprocessadosFastFood = document.querySelector('input[type=radio][name=ultraprocessadosFastFood]:checked').value ? fUltraprocessadosFastFood : null;
        fEmbutidosSalame = document.querySelector('input[type=radio][name=embutidosSalame]:checked').value ? fEmbutidosSalame : null;
        fEmbutidosPresunto = document.querySelector('input[type=radio][name=embutidosPresunto]:checked').value ? fEmbutidosPresunto : null;
        fEmbutidosApresuntadoMortadela = document.querySelector('input[type=radio][name=embutidosApresuntadoMortadela]:checked').value ? fEmbutidosApresuntadoMortadela : null;
        fEmbutidosLinguicaToscanaCalabresa = document.querySelector('input[type=radio][name=embutidosLinguicaToscanaCalabresa]:checked').value ? fEmbutidosLinguicaToscanaCalabresa : null;
        fEmbutidosSalsicha = document.querySelector('input[type=radio][name=embutidosSalsicha]:checked').value ? fEmbutidosSalsicha : null;
        fEmbutidosPeitoDePeru = document.querySelector('input[type=radio][name=embutidosPeitoDePeru]:checked').value ? fEmbutidosPeitoDePeru : null;
        fEmbutidosRosbife = document.querySelector('input[type=radio][name=embutidosRosbife]:checked').value ? fEmbutidosRosbife : null;
        fEmbutidosNuggets = document.querySelector('input[type=radio][name=embutidosNuggets]:checked').value ? fEmbutidosNuggets : null;
        fEmbutidosHamburguerTradicional = document.querySelector('input[type=radio][name=embutidosHamburguerTradicional]:checked').value ? fEmbutidosHamburguerTradicional : null;
        fAcucaresAcucar = document.querySelector('input[type=radio][name=acucaresAcucar]:checked').value ? fAcucaresAcucar : null;
        fAcucaresAdocante = document.querySelector('input[type=radio][name=acucaresAdocante]:checked').value ? fAcucaresAdocante : null;
        fAcucaresMelMelado = document.querySelector('input[type=radio][name=acucaresMelMelado]:checked').value ? fAcucaresMelMelado : null;
        fAcucaresProdutosConfeitaria = document.querySelector('input[type=radio][name=acucaresProdutosConfeitaria]:checked').value ? fAcucaresProdutosConfeitaria : null;
        fAcucaresGuloseimas = document.querySelector('input[type=radio][name=acucaresGuloseimas]:checked').value ? fAcucaresGuloseimas : null;
        fAcucaresAchocolatados = document.querySelector('input[type=radio][name=acucaresAchocolatados]:checked').value ? fAcucaresAchocolatados : null;
        fMolhosKetchup = document.querySelector('input[type=radio][name=molhosKetchup]:checked').value ? fMolhosKetchup : null;
        fMolhosMostarda = document.querySelector('input[type=radio][name=molhosMostarda]:checked').value ? fMolhosMostarda : null;
        fMolhosShoyu = document.querySelector('input[type=radio][name=molhosShoyu]:checked').value ? fMolhosShoyu : null;
        fMolhosTare = document.querySelector('input[type=radio][name=molhosTare]:checked').value ? fMolhosTare : null;
        fMolhosMaionese = document.querySelector('input[type=radio][name=molhosMaionese]:checked').value ? fMolhosMaionese : null;
        fNotaSaciedadePosRefeicoes = document.querySelector('input[type=radio][name=notaSaciedadePosRefeicoes]:checked').value;
        fNotaHumorPosRefeicoes = document.querySelector('input[type=radio][name=notaHumorPosRefeicoes]:checked').value;
    
        dados = {
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
          legumesCenoura: fLegumesCenoura,
          legumesBeterraba: fLegumesBeterraba,
          legumesBerinjela: fLegumesBerinjela,
          legumesPepino: fLegumesPepino,
          legumesAbobrinha: fLegumesAbobrinha,
          legumesChuchu: fLegumesChuchu,
          legumesTomate: fLegumesTomate,
          verdurasAcelga: fVerdurasAcelga,
          verdurasAgriao: fVerdurasAgriao,
          verdurasAlface: fVerdurasAlface,
          verdurasBrocolis: fVerdurasBrocolis,
          verdurasChicoria: fVerdurasChicoria,
          verdurasCouveManteiga: fVerdurasCouveManteiga,
          verdurasCouveFlor: fVerdurasCouveFlor,
          verdurasEspinafre: fVerdurasEspinafre,
          verdurasRucula: fVerdurasRucula,
          frutasCLaranja: fFrutasCLaranja,
          frutasCTangerina: fFrutasCTangerina,
          frutasCLimao: fFrutasCLimao,
          frutasCAbacaxi: fFrutasCAbacaxi,
          frutasCAcerola: fFrutasCAcerola,
          frutasCMorango: fFrutasCMorango,
          frutasCKiwi: fFrutasCKiwi,
          frutasCMaracuja: fFrutasCMaracuja,
          demaisFrutasBanana: fDemaisFrutasBanana,
          demaisFrutasGoiaba: fDemaisFrutasGoiaba,
          demaisFrutasMaca: fDemaisFrutasMaca,
          demaisFrutasMamao: fDemaisFrutasMamao,
          demaisFrutasManga: fDemaisFrutasManga,
          demaisFrutasMelancia: fDemaisFrutasMelancia,
          demaisFrutasMelao: fDemaisFrutasMelao,
          demaisFrutasPera: fDemaisFrutasPera,
          demaisFrutasPessego: fDemaisFrutasPessego,
          demaisFrutasUva: fDemaisFrutasUva,
          leguminosasFeijao: fLeguminosasFeijao,
          leguminosasLentilha: fLeguminosasLentilha,
          leguminosasErvilha: fLeguminosasErvilha,
          leguminosasSoja: fLeguminosasSoja,
          leguminosasGraoDeBico: fLeguminosasGraoDeBico,
          leguminosasVagem: fLeguminosasVagem,
          carnesBovina: fCarnesBovina,
          carnesSuina: fCarnesSuina,
          carnesAves: fCarnesAves,
          carnesPeixe: fCarnesPeixe,
          frutosDoMar: fFrutosDoMar,
          ovo: fOvo,
          arrozBrancoPolido: fArrozBrancoPolido,
          arrozIntegral: fArrozIntegral,
          lacteosLeiteIntegralDesnatadoSemi: fLacteosLeiteIntegralDesnatadoSemi,
          lacteosLeiteSemLactose: fLacteosLeiteSemLactose,
          lacteosQueijosPedacoOuFatia: fLacteosQueijosPedacoOuFatia,
          lacteosIogurtes: fLacteosIogurtes,
          cereaisAveia: fCereaisAveia,
          cereaisGranolaInNatura: fCereaisGranolaInNatura,
          cereaisQuinoa: fCereaisQuinoa,
          cereaisLinhaca: fCereaisLinhaca,
          cereaisChia: fCereaisChia,
          paesFrancesMediaNormal: fPaesFrancesMediaNormal,
          paesFrancesMediaIntegral: fPaesFrancesMediaIntegral,
          paesForma: fPaesForma,
          paesFormaIntegral: fPaesFormaIntegral,
          paesCara: fPaesCara,
          pastasRequeijao: fPastasRequeijao,
          pastasMargarina: fPastasMargarina,
          pastasManteiga: fPastasManteiga,
          pastasRicota: fPastasRicota,
          pastasCottage: fPastasCottage,
          pastasDoceDeLeite: fPastasDoceDeLeite,
          pastasCremeDeAvela: fPastasCremeDeAvela,
          pastasGeleia: fPastasGeleia,
          salgadosMistinhoEsfiha: fSalgadosMistinhoEsfiha,
          salgadosCoxinhaCroquete: fSalgadosCoxinhaCroquete,
          salgadosEmpadas: fSalgadosEmpadas,
          salgadosPaoDeQueijo: fSalgadosPaoDeQueijo,
          ultraprocessadosSalgadinhoDePacote: fUltraprocessadosSalgadinhoDePacote,
          ultraprocessadosBiscoitoSalgado: fUltraprocessadosBiscoitoSalgado,
          ultraprocessadosBiscoitoDoce: fUltraprocessadosBiscoitoDoce,
          ultraprocessadosChocolate: fUltraprocessadosChocolate,
          ultraprocessadosRefrigerante: fUltraprocessadosRefrigerante,
          ultraprocessadosSucoEmPoCaixinha: fUltraprocessadosSucoEmPoCaixinha,
          ultraprocessadosPratosProntosCongelados: fUltraprocessadosPratosProntosCongelados,
          ultraprocessadosMacarraoInstantaneo: fUltraprocessadosMacarraoInstantaneo,
          ultraprocessadosBolinho: fUltraprocessadosBolinho,
          ultraprocessadosFastFood: fUltraprocessadosFastFood,
          embutidosSalame: fEmbutidosSalame,
          embutidosPresunto: fEmbutidosPresunto,
          embutidosApresuntadoMortadela: fEmbutidosApresuntadoMortadela,
          embutidosLinguicaToscanaCalabresa: fEmbutidosLinguicaToscanaCalabresa,
          embutidosSalsicha: fEmbutidosSalsicha,
          embutidosPeitoDePeru: fEmbutidosPeitoDePeru,
          embutidosRosbife: fEmbutidosRosbife,
          embutidosNuggets: fEmbutidosNuggets,
          embutidosHamburguerTradicional: fEmbutidosHamburguerTradicional,
          acucaresAcucar: fAcucaresAcucar,
          acucaresAdocante: fAcucaresAdocante,
          acucaresMelMelado: fAcucaresMelMelado,
          acucaresProdutosConfeitaria: fAcucaresProdutosConfeitaria,
          acucaresGuloseimas: fAcucaresGuloseimas,
          acucaresAchocolatados: fAcucaresAchocolatados,
          molhosKetchup: fMolhosKetchup,
          molhosMostarda: fMolhosMostarda,
          molhosShoyu: fMolhosShoyu,
          molhosTare: fMolhosTare,
          molhosMaionese: fMolhosMaionese,
          notaSaciedadePosRefeicoes: fNotaSaciedadePosRefeicoes,
          notaHumorPosRefeicoes: fNotaHumorPosRefeicoes
        }
        console.log(dados); */
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
