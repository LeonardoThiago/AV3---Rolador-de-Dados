let dados = [
    { tipo: '2d4', quantidade: 2, faces: 4 },
    { tipo: '2d6', quantidade: 2, faces: 6 },
    { tipo: '2d8', quantidade: 2, faces: 8 },
    { tipo: '2d10', quantidade: 2, faces: 10 },
    { tipo: '2d12', quantidade: 2, faces: 12 },
    { tipo: '2d20', quantidade: 2, faces: 20 },
    { tipo: '2d100', quantidade: 2, faces: 100 },
    { tipo: '2d1000', quantidade: 2, faces: 1000 }
];
let dadoAtual = 5;

function atualizarNome() {
    const nome = document.getElementById('nome').value.trim();
    const nivel = parseInt(document.getElementById('nivel').value);
    let nomeAtualizado = nome;
    if (nivel <= 5) {
        nomeAtualizado += " [INICIANTE]";
    } else {
        nomeAtualizado += " [VETERANO]";
    }
    document.getElementById('nomeAtualizado').value = nomeAtualizado;
}

function atualizarPoderAtaque() {
    const nivel = parseInt(document.getElementById('nivel').value);
    const forca = parseInt(document.getElementById('forca').value);
    const poderAtaque = (forca - 10) / 2 + nivel / 2;
    document.getElementById('poderAtaque').value = poderAtaque.toFixed(2);
}

function atualizarPoderMagico() {
    const nivel = parseInt(document.getElementById('nivel').value);
    const inteligencia = parseInt(document.getElementById('inteligencia').value);
    const poderMagico = (inteligencia - 10) / 2 + nivel / 2;
    document.getElementById('poderMagico').value = poderMagico.toFixed(2);
}

function atualizarDefesa() {
    const agilidade = parseInt(document.getElementById('agilidade').value);
    const armadura = parseInt(document.getElementById('armadura').value);
    const defesa = agilidade + armadura;
    document.getElementById('defesa').value = defesa;
}

function atualizarVida() {
    const nivel = parseInt(document.getElementById('nivel').value);
    const constituicao = parseInt(document.getElementById('constituicao').value);
    const vida = constituicao * nivel;
    document.getElementById('vida').value = vida;
}

function atualizarMana() {
    const nivel = parseInt(document.getElementById('nivel').value);
    const inteligencia = parseInt(document.getElementById('inteligencia').value);
    const sabedoria = parseInt(document.getElementById('sabedoria').value);
    const mana = (inteligencia + sabedoria) * nivel;
    document.getElementById('mana').value = mana;
}

function rolarDados() {
    const dado = dados[dadoAtual];
    const resultados = [];
    const atributos = ['forca', 'agilidade', 'armadura', 'inteligencia', 'sabedoria', 'constituicao'];

    
    document.getElementById('resultados').innerText = '';

    for (let i = 0; i < 6; i++) {
        let resultadoTotal = 0;
        let resultadoIndividual = [];
        for (let j = 0; j < dado.quantidade; j++) {
            const resultado = Math.floor(Math.random() * dado.faces) + 1;
            resultadoIndividual.push(resultado);
            resultadoTotal += resultado;
        }

        
        const atributoAleatorio = atributos.splice(Math.floor(Math.random() * atributos.length), 1)[0];
        document.getElementById(atributoAleatorio).value = resultadoTotal;

        
        const resultadosElement = document.getElementById('resultados');
        const novoResultado = document.createElement('div');
        novoResultado.innerText = `${dado.tipo}: ${resultadoIndividual.join(', ')} (Total: ${resultadoTotal}) aplicado a ${atributoAleatorio}`;
        resultadosElement.appendChild(novoResultado);
    }

    atualizarAtributos();
}

function trocarDado(direcao) {
    dadoAtual = (dadoAtual + direcao + dados.length) % dados.length;
    document.querySelector('.botao-rolar').innerText = `Rolar ${dados[dadoAtual].tipo}`;
}

function atualizarAtributos() {
    atualizarPoderAtaque();
    atualizarPoderMagico();
    atualizarDefesa();
    atualizarVida();
    atualizarMana();
}


trocarDado(0);
atualizarAtributos();
