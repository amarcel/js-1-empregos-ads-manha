function acessarAPI(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function carregarDadosAPI() {
    let dados = acessarAPI(
        "https://mock-json-service.glitch.me/");
    let vagas = JSON.parse(dados);
    console.log(vagas);

    divDados = '';
    vagas.forEach(e => {
        divDados += '<div class="card">';
        divDados += '<div class="container">';
        divDados += '<h4>';
        divDados += '<b>Vaga ID ' + e.id + '</b>';
        divDados += '</h4>';
        divDados += '<p>Empresa: ' + e.company + '</p>';
        divDados += '<p>Descrição: ' + e.description + '</p>';
        divDados += '<p>Tipo: ' + e.employmentType + '</p>';
        divDados += '<p>Localização: ' + e.location + '</p>';
        divDados += '<p>Cargo: ' + e.position + '</p>';
        divDados += '<p>Habilidades: ' + e.skillsRequired + '</p>';
        divDados += '</div></div>';
    }); // fim do vagas.forEach
    document.getElementById("dados_vagas").innerHTML = 
        divDados;
} // fim do carregarDadosAPI