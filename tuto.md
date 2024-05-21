Para lidar com um grande número de perguntas e radio buttons de forma eficiente, você pode adotar uma abordagem mais dinâmica e programática. Em vez de criar manualmente código JavaScript para cada grupo de radio buttons, você pode usar loops e funções para coletar e enviar os dados. Aqui está um exemplo de como você pode fazer isso:

### Estrutura HTML para as Perguntas

Suponha que cada pergunta tenha uma estrutura como esta, com uma classe comum para facilitar a seleção:

```html
<form id="myForm">
    <div class="question" data-question="necessidade_consolo_alimentar">
        <label><input type="radio" name="necessidade_consolo_alimentar" value="sim"> Sim</label>
        <label><input type="radio" name="necessidade_consolo_alimentar" value="nao"> Não</label>
        <label><input type="radio" name="necessidade_consolo_alimentar" value="as_vezes"> Às vezes</label>
    </div>
    <div class="question" data-question="dificuldade_parar_de_comer">
        <label><input type="radio" name="dificuldade_parar_de_comer" value="sim"> Sim</label>
        <label><input type="radio" name="dificuldade_parar_de_comer" value="nao"> Não</label>
        <label><input type="radio" name="dificuldade_parar_de_comer" value="as_vezes"> Às vezes</label>
    </div>
    <!-- Adicione mais perguntas aqui com a mesma estrutura -->
    <button type="button" onclick="submitForm()">Enviar</button>
</form>
```

### JavaScript Dinâmico

Em vez de escrever código individualmente para cada pergunta, você pode usar uma função para percorrer todas as perguntas, coletar os valores selecionados e enviar os dados:

```javascript
function getSelectedRadioValues() {
    const questions = document.querySelectorAll('.question');
    const data = {};

    questions.forEach(question => {
        const name = question.getAttribute('data-question');
        const selectedOption = question.querySelector(`input[name="${name}"]:checked`);

        if (selectedOption) {
            data[name] = selectedOption.value;
        } else {
            data[name] = null; // Ou qualquer outro valor padrão
        }
    });

    return data;
}

function submitForm() {
    const data = getSelectedRadioValues();

    fetch('https://sua-api.com/endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
```

### Explicação do Código

1. **Função `getSelectedRadioValues`:**
   - Seleciona todas as divs com a classe `question`.
   - Para cada `question`, obtém o atributo `data-question` para usar como chave no objeto `data`.
   - Encontra o radio button selecionado dentro dessa `question` e adiciona seu valor ao objeto `data`. Se nenhum radio button estiver selecionado, define o valor como `null`.

2. **Função `submitForm`:**
   - Chama `getSelectedRadioValues` para obter os dados do formulário.
   - Envia os dados para a API usando a Fetch API.

### Estrutura HTML Dinâmica

Se as perguntas são geradas dinamicamente (por exemplo, a partir de um banco de dados ou de uma configuração JSON), você pode usar um loop para gerar o HTML no lado do cliente ou servidor. Aqui está um exemplo simples de como fazer isso com JavaScript no lado do cliente:

```html
<div id="questionContainer"></div>
<button type="button" onclick="submitForm()">Enviar</button>

<script>
    const questions = [
        { name: "necessidade_consolo_alimentar", options: ["sim", "nao", "as_vezes"] },
        { name: "dificuldade_parar_de_comer", options: ["sim", "nao", "as_vezes"] },
        // Adicione mais perguntas conforme necessário
    ];

    function renderQuestions() {
        const container = document.getElementById('questionContainer');
        questions.forEach(question => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            questionDiv.setAttribute('data-question', question.name);

            question.options.forEach(option => {
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = question.name;
                input.value = option;
                label.appendChild(input);
                label.appendChild(document.createTextNode(option.charAt(0).toUpperCase() + option.slice(1)));
                questionDiv.appendChild(label);
            });

            container.appendChild(questionDiv);
        });
    }

    renderQuestions();
</script>
```

### Conclusão

Com essa abordagem, você pode facilmente gerenciar e enviar respostas de um grande número de perguntas com radio buttons de forma eficiente e dinâmica. O código JavaScript é compacto e escalável, lidando automaticamente com qualquer número de perguntas e opções que você adicionar.