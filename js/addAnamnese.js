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

function cadastrarAnamnese() {
  const fLegumesCenoura = document.querySelector('input[type=radio][name=legumesCenoura]:checked') ? fLegumesCenoura.value : "";
  const fLegumesBeterraba = document.querySelector('input[type=radio][name=legumesBeterraba]:checked') ? fLegumesBeterraba.value : "";
  const fLegumesBerinjela = document.querySelector('input[type=radio][name=legumesBerinjela]:checked') ? fLegumesBerinjela.value : "";
  const fLegumesPepino = document.querySelector('input[type=radio][name=legumesPepino]:checked') ? fLegumesPepino.value : "";
  const fLegumesAbobrinha = document.querySelector('input[type=radio][name=legumesAbobrinha]:checked') ? fLegumesAbobrinha.value : "";
  const fLegumesChuchu = document.querySelector('input[type=radio][name=legumesChuchu]:checked') ? fLegumesChuchu.value : "";
  const fLegumesTomate = document.querySelector('input[type=radio][name=legumesTomate]:checked') ? fLegumesTomate.value : "";
  const fVerdurasAcelga = document.querySelector('input[type=radio][name=verdurasAcelga]:checked') ? fVerdurasAcelga.value : "";
  const fVerdurasAgriao = document.querySelector('input[type=radio][name=verdurasAgriao]:checked') ? fVerdurasAgriao.value : "";
  const fVerdurasAlface = document.querySelector('input[type=radio][name=verdurasAlface]:checked') ? fVerdurasAlface.value : "";
  const fVerdurasBrocolis = document.querySelector('input[type=radio][name=verdurasBrocolis]:checked') ? fVerdurasBrocolis.value : "";
  const fVerdurasChicoria = document.querySelector('input[type=radio][name=verdurasChicoria]:checked') ? fVerdurasChicoria.value : "";
  const fVerdurasCouveManteiga = document.querySelector('input[type=radio][name=verdurasCouveManteiga]:checked') ? fVerdurasCouveManteiga.value : "";
  const fVerdurasCouveFlor = document.querySelector('input[type=radio][name=verdurasCouveFlor]:checked') ? fVerdurasCouveFlor.value : "";
  const fVerdurasEspinafre = document.querySelector('input[type=radio][name=verdurasEspinafre]:checked') ? fVerdurasEspinafre.value : "";
  const fVerdurasRucula = document.querySelector('input[type=radio][name=verdurasRucula]:checked') ? fVerdurasRucula.value : "";
  const fFrutasCLaranja = document.querySelector('input[type=radio][name=frutasCLaranja]:checked') ? fFrutasCLaranja.value : "";
  const fFrutasCTangerina = document.querySelector('input[type=radio][name=frutasCTangerina]:checked') ? fFrutasCTangerina.value : "";
  const fFrutasCLimao = document.querySelector('input[type=radio][name=frutasCLimao]:checked') ? fFrutasCLimao.value : "";
  const fFrutasCAbacaxi = document.querySelector('input[type=radio][name=frutasCAbacaxi]:checked') ? fFrutasCAbacaxi.value : "";
  const fFrutasCAcerola = document.querySelector('input[type=radio][name=frutasCAcerola]:checked') ? fFrutasCAcerola.value : "";
  const fFrutasCMorango = document.querySelector('input[type=radio][name=frutasCMorango]:checked') ? fFrutasCMorango.value : "";
  const fFrutasCKiwi = document.querySelector('input[type=radio][name=frutasCKiwi]:checked') ? fFrutasCKiwi.value : "";
  const fFrutasCMaracuja = document.querySelector('input[type=radio][name=frutasCMaracuja]:checked') ? fFrutasCMaracuja.value : "";
  const fDemaisFrutasBanana = document.querySelector('input[type=radio][name=demaisFrutasBanana]:checked') ? fDemaisFrutasBanana.value : "";
  const fDemaisFrutasGoiaba = document.querySelector('input[type=radio][name=demaisFrutasGoiaba]:checked') ? fDemaisFrutasGoiaba.value : "";
  const fDemaisFrutasMaca = document.querySelector('input[type=radio][name=demaisFrutasMaca]:checked') ? fDemaisFrutasMaca.value : "";
  const fDemaisFrutasMamao = document.querySelector('input[type=radio][name=demaisFrutasMamao]:checked') ? fDemaisFrutasMamao.value : "";
  const fDemaisFrutasManga = document.querySelector('input[type=radio][name=demaisFrutasManga]:checked') ? fDemaisFrutasMamao.value : "";
  const fDemaisFrutasMelancia = document.querySelector('input[type=radio][name=demaisFrutasMelancia]:checked') ? fDemaisFrutasMelancia.value : "";
  const fDemaisFrutasMelao = document.querySelector('input[type=radio][name=demaisFrutasMelao]:checked') ? fDemaisFrutasMelao.value : "";
  const fDemaisFrutasPera = document.querySelector('input[type=radio][name=demaisFrutasPera]:checked') ? fDemaisFrutasPera.value : "";
  const fDemaisFrutasPessego = document.querySelector('input[type=radio][name=demaisFrutasPessego]:checked') ? fDemaisFrutasPessego.value : "";
  const fDemaisFrutasUva = document.querySelector('input[type=radio][name=demaisFrutasUva]:checked') ? fDemaisFrutasUva.value : "";
  const fLeguminosasFeijao = document.querySelector('input[type=radio][name=leguminosasFeijao]:checked') ? fLeguminosasFeijao.value : "";
  const fLeguminosasLentilha = document.querySelector('input[type=radio][name=leguminosasLentilha]:checked') ? fLeguminosasLentilha.value : "";
  const fLeguminosasErvilha = document.querySelector('input[type=radio][name=leguminosasErvilha]:checked') ? fLeguminosasErvilha.value : "";
  const fLeguminosasSoja = document.querySelector('input[type=radio][name=leguminosasSoja]:checked') ? fLeguminosasSoja.value : "";
  const fLeguminosasGraoDeBico = document.querySelector('input[type=radio][name=leguminosasGraoDeBico]:checked') ? fLeguminosasGraoDeBico.value : "";
  const fLeguminosasVagem = document.querySelector('input[type=radio][name=leguminosasVagem]:checked') ? fLeguminosasVagem.value : "";
  const fCarnesBovina = document.querySelector('input[type=radio][name=carnesBovina]:checked') ? fCarnesBovina.value : "";
  const fCarnesSuina = document.querySelector('input[type=radio][name=carnesSuina]:checked') ? fCarnesSuina.value : "";
  const fCarnesAves = document.querySelector('input[type=radio][name=carnesAves]:checked') ? fCarnesAves.value : "";
  const fCarnesPeixe = document.querySelector('input[type=radio][name=carnesPeixe]:checked') ? fCarnesPeixe.value : "";
  const fFrutosDoMar = document.querySelector('input[type=radio][name=frutosDoMar]:checked') ? fFrutosDoMar.value : "";
  const fOvo = document.querySelector('input[type=radio][name=ovo]:checked') ? fOvo.value : "";
  const fArrozBrancoPolido = document.querySelector('input[type=radio][name=arrozBrancoPolido]:checked') ? fArrozBrancoPolido.value : "";
  const fArrozIntegral = document.querySelector('input[type=radio][name=arrozIntegral]:checked') ? fArrozIntegral.value : "";
  const fLacteosLeiteIntegralDesnatadoSemi = document.querySelector('input[type=radio][name=lacteosLeiteIntegralDesnatadoSemi]:checked') ? fLacteosLeiteIntegralDesnatadoSemi.value : "";
  const fLacteosLeiteSemLactose = document.querySelector('input[type=radio][name=lacteosLeiteSemLactose]:checked') ? fLacteosLeiteSemLactose.value : "";
  const fLacteosQueijosPedacoOuFatia = document.querySelector('input[type=radio][name=lacteosQueijosPedacoOuFatia]:checked') ? fLacteosQueijosPedacoOuFatia.value : "";
  const fLacteosIogurtes = document.querySelector('input[type=radio][name=lacteosIogurtes]:checked') ? fLacteosIogurtes.value : "";
  const fCereaisAveia = document.querySelector('input[type=radio][name=cereaisAveia]:checked') ? fCereaisAveia.value : "";
  const fCereaisGranolaInNatura = document.querySelector('input[type=radio][name=cereaisGranolaInNatura]:checked') ? fCereaisGranolaInNatura.value : "";
  const fCereaisQuinoa = document.querySelector('input[type=radio][name=cereaisQuinoa]:checked') ? fCereaisQuinoa.value : "";
  const fCereaisLinhaca = document.querySelector('input[type=radio][name=cereaisLinhaca]:checked') ? fCereaisLinhaca.value : "";
  const fCereaisChia = document.querySelector('input[type=radio][name=cereaisChia]:checked') ? fCereaisChia.value : "";
  const fPaesFrancesMediaNormal = document.querySelector('input[type=radio][name=paesFrancesMediaNormal]:checked') ? fPaesFrancesMediaNormal.value : "";
  const fPaesFrancesMediaIntegral = document.querySelector('input[type=radio][name=paesFrancesMediaIntegral]:checked') ? fPaesFrancesMediaIntegral.value : "";
  const fPaesForma = document.querySelector('input[type=radio][name=paesForma]:checked') ? fPaesForma.value : "";
  const fPaesFormaIntegral = document.querySelector('input[type=radio][name=paesFormaIntegral]:checked') ? fPaesFormaIntegral.value : "";
  const fPaesCara = document.querySelector('input[type=radio][name=paesCara]:checked') ? fPaesCara.value : "";
  const fPastasRequeijao = document.querySelector('input[type=radio][name=pastasRequeijao]:checked') ? fPastasRequeijao.value : "";
  const fPastasMargarina = document.querySelector('input[type=radio][name=pastasMargarina]:checked') ? fPastasMargarina.value : "";
  const fPastasManteiga = document.querySelector('input[type=radio][name=pastasManteiga]:checked') ? fPastasManteiga.value : "";
  const fPastasRicota = document.querySelector('input[type=radio][name=pastasRicota]:checked') ? fPastasRicota.value : "";
  const fPastasCottage = document.querySelector('input[type=radio][name=pastasCottage]:checked') ? fPastasCottage.value : "";
  const fPastasDoceDeLeite = document.querySelector('input[type=radio][name=pastasDoceDeLeite]:checked') ? fPastasDoceDeLeite.value : "";
  const fPastasCremeDeAvela = document.querySelector('input[type=radio][name=pastasCremeDeAvela]:checked') ? fPastasCremeDeAvela.value : "";
  const fPastasGeleia = document.querySelector('input[type=radio][name=pastasGeleia]:checked') ? fPastasGeleia.value : "";
  const fSalgadosMistinhoEsfiha = document.querySelector('input[type=radio][name=salgadosMistinhoEsfiha]:checked') ? fSalgadosMistinhoEsfiha.value : "";
  const fSalgadosCoxinhaCroquete = document.querySelector('input[type=radio][name=salgadosCoxinhaCroquete]:checked') ? fSalgadosCoxinhaCroquete.value : "";
  const fSalgadosEmpadas = document.querySelector('input[type=radio][name=salgadosEmpadas]:checked') ? fSalgadosEmpadas.value : "";
  const fSalgadosPaoDeQueijo = document.querySelector('input[type=radio][name=salgadosPaoDeQueijo]:checked') ? fSalgadosPaoDeQueijo.value : "";
  const fUltraprocessadosSalgadinhoDePacote = document.querySelector('input[type=radio][name=ultraprocessadosSalgadinhoDePacote]:checked') ? fUltraprocessadosSalgadinhoDePacote.value : "";
  const fUltraprocessadosBiscoitoSalgado = document.querySelector('input[type=radio][name=ultraprocessadosBiscoitoSalgado]:checked') ? fUltraprocessadosBiscoitoSalgado.value : "";
  const fUltraprocessadosBiscoitoDoce = document.querySelector('input[type=radio][name=ultraprocessadosBiscoitoDoce]:checked') ? fUltraprocessadosBiscoitoDoce.value : "";
  const fUltraprocessadosChocolate = document.querySelector('input[type=radio][name=ultraprocessadosChocolate]:checked') ? fUltraprocessadosChocolate.value : "";
  const fUltraprocessadosRefrigerante = document.querySelector('input[type=radio][name=ultraprocessadosRefrigerante]:checked') ? fUltraprocessadosRefrigerante.value : "";
  const fUltraprocessadosSucoEmPoCaixinha = document.querySelector('input[type=radio][name=ultraprocessadosSucoEmPoCaixinha]:checked') ? fUltraprocessadosSucoEmPoCaixinha.value : "";
  const fUltraprocessadosPratosProntosCongelados = document.querySelector('input[type=radio][name=ultraprocessadosPratosProntosCongelados]:checked') ? fUltraprocessadosPratosProntosCongelados.value : "";
  const fUltraprocessadosMacarraoInstantaneo = document.querySelector('input[type=radio][name=ultraprocessadosMacarraoInstantaneo]:checked') ? fUltraprocessadosMacarraoInstantaneo.value : "";
  const fUltraprocessadosBolinho = document.querySelector('input[type=radio][name=ultraprocessadosBolinho]:checked') ? fUltraprocessadosBolinho.value : "";
  const fUltraprocessadosFastFood = document.querySelector('input[type=radio][name=ultraprocessadosFastFood]:checked') ? fUltraprocessadosFastFood.value : "";
  const fEmbutidosSalame = document.querySelector('input[type=radio][name=embutidosSalame]:checked') ? fEmbutidosSalame.value : "";
  const fEmbutidosPresunto = document.querySelector('input[type=radio][name=embutidosPresunto]:checked') ? fEmbutidosPresunto.value : "";
  const fEmbutidosApresuntadoMortadela = document.querySelector('input[type=radio][name=embutidosApresuntadoMortadela]:checked') ? fEmbutidosApresuntadoMortadela.value : "";
  const fEmbutidosLinguicaToscanaCalabresa = document.querySelector('input[type=radio][name=embutidosLinguicaToscanaCalabresa]:checked') ? fEmbutidosLinguicaToscanaCalabresa.value : "";
  const fEmbutidosSalsicha = document.querySelector('input[type=radio][name=embutidosSalsicha]:checked') ? fEmbutidosSalsicha.value : "";
  const fEmbutidosPeitoDePeru = document.querySelector('input[type=radio][name=embutidosPeitoDePeru]:checked') ? fEmbutidosPeitoDePeru.value : "";
  const fEmbutidosRosbife = document.querySelector('input[type=radio][name=embutidosRosbife]:checked') ? fEmbutidosRosbife.value : "";
  const fEmbutidosNuggets = document.querySelector('input[type=radio][name=embutidosNuggets]:checked') ? fEmbutidosNuggets.value : "";
  const fEmbutidosHamburguerTradicional = document.querySelector('input[type=radio][name=embutidosHamburguerTradicional]:checked') ? fEmbutidosHamburguerTradicional.value : "";
  const fAcucaresAcucar = document.querySelector('input[type=radio][name=acucaresAcucar]:checked') ? fAcucaresAcucar.value : "";
  const fAcucaresAdocante = document.querySelector('input[type=radio][name=acucaresAdocante]:checked') ? fAcucaresAdocante.value : "";
  const fAcucaresMelMelado = document.querySelector('input[type=radio][name=acucaresMelMelado]:checked') ? fAcucaresMelMelado.value : "";
  const fAcucaresProdutosConfeitaria = document.querySelector('input[type=radio][name=acucaresProdutosConfeitaria]:checked') ? fAcucaresProdutosConfeitaria.value : "";
  const fAcucaresGuloseimas = document.querySelector('input[type=radio][name=acucaresGuloseimas]:checked') ? fAcucaresGuloseimas.value : "";
  const fAcucaresAchocolatados = document.querySelector('input[type=radio][name=acucaresAchocolatados]:checked') ? fAcucaresAchocolatados.value : "";
  const fMolhosKetchup = document.querySelector('input[type=radio][name=molhosKetchup]:checked') ? fMolhosKetchup.value : "";
  const fMolhosMostarda = document.querySelector('input[type=radio][name=molhosMostarda]:checked') ? fMolhosMostarda.value : "";
  const fMolhosShoyu = document.querySelector('input[type=radio][name=molhosShoyu]:checked') ? fMolhosShoyu.value : "";
  const fMolhosTare = document.querySelector('input[type=radio][name=molhosTare]:checked') ? fMolhosTare.value : "";
  const fMolhosMaionese = document.querySelector('input[type=radio][name=molhosMaionese]:checked') ? fMolhosMaionese.value : "";
  const fNotaSaciedadePosRefeicoes = document.querySelector('input[type=radio][name=notaSaciedadePosRefeicoes]:checked') ? fNotaSaciedadePosRefeicoes.value : "";
  const fNotaHumorPosRefeicoes = document.querySelector('input[type=radio][name=notaHumorPosRefeicoes]:checked') ? fNotaHumorPosRefeicoes.value : "";
  console.log("function")
  return new Promise((resolve, reject) => {
    if (validateForm(formAddAnamnese)) {
      fetch(urlApi + endpointAnamneses, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${token}`
        },
        method: "POST",
        body: JSON.stringify({
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
          legumesCenoura: fLegumesCenoura.value,
          legumesBeterraba: fLegumesBeterraba.value,
          legumesBerinjela: fLegumesBerinjela.value,
          legumesPepino: fLegumesPepino.value,
          legumesAbobrinha: fLegumesAbobrinha.value,
          legumesChuchu: fLegumesChuchu.value,
          legumesTomate: fLegumesTomate.value,
          verdurasAcelga: fVerdurasAcelga.value,
          verdurasAgriao: fVerdurasAgriao.value,
          verdurasAlface: fVerdurasAlface.value,
          verdurasBrocolis: fVerdurasBrocolis.value,
          verdurasChicoria: fVerdurasChicoria.value,
          verdurasCouveManteiga: fVerdurasCouveManteiga.value,
          verdurasCouveFlor: fVerdurasCouveFlor.value,
          verdurasEspinafre: fVerdurasEspinafre.value,
          verdurasRucula: fVerdurasRucula.value,
          frutasCLaranja: fFrutasCLaranja.value,
          frutasCTangerina: fFrutasCTangerina.value,
          frutasCLimao: fFrutasCLimao.value,
          frutasCAbacaxi: fFrutasCAbacaxi.value,
          frutasCAcerola: fFrutasCAcerola.value,
          frutasCMorango: fFrutasCMorango.value,
          frutasCKiwi: fFrutasCKiwi.value,
          frutasCMaracuja: fFrutasCMaracuja.value,
          demaisFrutasBanana: fDemaisFrutasBanana.value,
          demaisFrutasGoiaba: fDemaisFrutasGoiaba.value,
          demaisFrutasMaca: fDemaisFrutasMaca.value,
          demaisFrutasMamao: fDemaisFrutasMamao.value,
          demaisFrutasManga: fDemaisFrutasManga.value,
          demaisFrutasMelancia: fDemaisFrutasMelancia.value,
          demaisFrutasMelao: fDemaisFrutasMelao.value,
          demaisFrutasPera: fDemaisFrutasPera.value,
          demaisFrutasPessego: fDemaisFrutasPessego.value,
          demaisFrutasUva: fDemaisFrutasUva.value,
          leguminosasFeijao: fLeguminosasFeijao.value,
          leguminosasLentilha: fLeguminosasLentilha.value,
          leguminosasErvilha: fLeguminosasErvilha.value,
          leguminosasSoja: fLeguminosasSoja.value,
          leguminosasGraoDeBico: fLeguminosasGraoDeBico.value,
          leguminosasVagem: fLeguminosasVagem.value,
          carnesBovina: fCarnesBovina.value,
          carnesSuina: fCarnesSuina.value,
          carnesAves: fCarnesAves.value,
          carnesPeixe: fCarnesPeixe.value,
          frutosDoMar: fFrutosDoMar.value,
          ovo: fOvo.value,
          arrozBrancoPolido: fArrozBrancoPolido.value,
          arrozIntegral: fArrozIntegral.value,
          lacteosLeiteIntegralDesnatadoSemi: fLacteosLeiteIntegralDesnatadoSemi.value,
          lacteosLeiteSemLactose: fLacteosLeiteSemLactose.value,
          lacteosQueijosPedacoOuFatia: fLacteosQueijosPedacoOuFatia.value,
          lacteosIogurtes: fLacteosIogurtes.value,
          cereaisAveia: fCereaisAveia.value,
          cereaisGranolaInNatura: fCereaisGranolaInNatura.value,
          cereaisQuinoa: fCereaisQuinoa.value,
          cereaisLinhaca: fCereaisLinhaca.value,
          cereaisChia: fCereaisChia.value,
          paesFrancesMediaNormal: fPaesFrancesMediaNormal.value,
          paesFrancesMediaIntegral: fPaesFrancesMediaIntegral.value,
          paesForma: fPaesForma.value,
          paesFormaIntegral: fPaesFormaIntegral.value,
          paesCara: fPaesCara.value,
          pastasRequeijao: fPastasRequeijao.value,
          pastasMargarina: fPastasMargarina.value,
          pastasManteiga: fPastasManteiga.value,
          pastasRicota: fPastasRicota.value,
          pastasCottage: fPastasCottage.value,
          pastasDoceDeLeite: fPastasDoceDeLeite.value,
          pastasCremeDeAvela: fPastasCremeDeAvela.value,
          pastasGeleia: fPastasGeleia.value,
          salgadosMistinhoEsfiha: fSalgadosMistinhoEsfiha.value,
          salgadosCoxinhaCroquete: fSalgadosCoxinhaCroquete.value,
          salgadosEmpadas: fSalgadosEmpadas.value,
          salgadosPaoDeQueijo: fSalgadosPaoDeQueijo.value,
          ultraprocessadosSalgadinhoDePacote: fUltraprocessadosSalgadinhoDePacote.value,
          ultraprocessadosBiscoitoSalgado: fUltraprocessadosBiscoitoSalgado.value,
          ultraprocessadosBiscoitoDoce: fUltraprocessadosBiscoitoDoce.value,
          ultraprocessadosChocolate: fUltraprocessadosChocolate.value,
          ultraprocessadosRefrigerante: fUltraprocessadosRefrigerante.value,
          ultraprocessadosSucoEmPoCaixinha: fUltraprocessadosSucoEmPoCaixinha.value,
          ultraprocessadosPratosProntosCongelados: fUltraprocessadosPratosProntosCongelados.value,
          ultraprocessadosMacarraoInstantaneo: fUltraprocessadosMacarraoInstantaneo.value,
          ultraprocessadosBolinho: fUltraprocessadosBolinho.value,
          ultraprocessadosFastFood: fUltraprocessadosFastFood.value,
          embutidosSalame: fEmbutidosSalame.value,
          embutidosPresunto: fEmbutidosPresunto.value,
          embutidosApresuntadoMortadela: fEmbutidosApresuntadoMortadela.value,
          embutidosLinguicaToscanaCalabresa: fEmbutidosLinguicaToscanaCalabresa.value,
          embutidosSalsicha: fEmbutidosSalsicha.value,
          embutidosPeitoDePeru: fEmbutidosPeitoDePeru.value,
          embutidosRosbife: fEmbutidosRosbife.value,
          embutidosNuggets: fEmbutidosNuggets.value,
          embutidosHamburguerTradicional: fEmbutidosHamburguerTradicional.value,
          acucaresAcucar: fAcucaresAcucar.value,
          acucaresAdocante: fAcucaresAdocante.value,
          acucaresMelMelado: fAcucaresMelMelado.value,
          acucaresProdutosConfeitaria: fAcucaresProdutosConfeitaria.value,
          acucaresGuloseimas: fAcucaresGuloseimas.value,
          acucaresAchocolatados: fAcucaresAchocolatados.value,
          molhosKetchup: fMolhosKetchup.value,
          molhosMostarda: fMolhosMostarda.value,
          molhosShoyu: fMolhosShoyu.value,
          molhosTare: fMolhosTare.value,
          molhosMaionese: fMolhosMaionese.value,
          notaSaciedadePosRefeicoes: fNotaSaciedadePosRefeicoes.value,
          notaHumorPosRefeicoes: fNotaHumorPosRefeicoes.value
        })
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
