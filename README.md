# CLÍNICA ANAMNESE - FRONTEND 

<p>Frontend desenvolvida na linguagem JavaScript, junto ao HTML e CSS.</p>

<br/>

## CONFIGURAÇÕES

### INICIAR PROGRAMA LOCALMENTE

<p>Instalar a extensão Live Server do Visual Studio Code.</p>
<p>Clicar com direito em qualquer arquivo HTML do programa e ir em <em>Open with Live Server (Abrir com Live Server)</em>. - o programa irá abrir na porta 5500.</p>

<br/>

### SERVIDOR NGINX

<p>Caso necessário, é possível alterar o arquivo de configuração do servidor Nginx. Nele é configurado porta (5500) onde aplicação irá inicializar, arquivo HTML para redirecionamento e localização da API (porta 8080). É necessário apenas alterar o arquivo nginx.conf.</p>

<br/>

### DOCKER


**Gerar Imagem**

 <p><strong>docker build -t frontend-anamnese:x.x .</strong> <em>- x.x é a versão</em>.</p> 

 <br/>

 **Iniciar Container**

 <p><strong>docker run -d --rm -it --network host --name frontend-container frontend-anamnese:x.x</strong> <em>- x.x deve ser igual a versão de imagem gerada</em>.</p> 

<br/>

https://anamnese-unisantos.github.io/frontend-anamnese/login.html

