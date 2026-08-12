const rankings = {

    mapa1: [
        { nome: "Miguel", pontos: 5000 },
        { nome: "Matheus", pontos: 4800 },
        { nome: "Kaike", pontos: 4500 },
        { nome: "Lucas", pontos: 4200 },
        { nome: "Pedro", pontos: 4000 },
        { nome: "João", pontos: 3900 },
        { nome: "Carlos", pontos: 3750 },
        { nome: "Arthur", pontos: 3600 },
        { nome: "Rafael", pontos: 3400 },
        { nome: "Diego", pontos: 3200 }
    ],

    mapa2: [
        { nome: "Miguel", pontos: 4700 },
        { nome: "Matheus", pontos: 5100 },
        { nome: "Kaike", pontos: 4300 },
        { nome: "Lucas", pontos: 4600 },
        { nome: "Pedro", pontos: 3800 },
        { nome: "João", pontos: 4200 },
        { nome: "Carlos", pontos: 3500 },
        { nome: "Arthur", pontos: 3900 },
        { nome: "Rafael", pontos: 3300 },
        { nome: "Diego", pontos: 3000 }
    ],

    mapa3: [
        { nome: "Miguel", pontos: 4500 },
        { nome: "Matheus", pontos: 4400 },
        { nome: "Kaike", pontos: 5200 },
        { nome: "Lucas", pontos: 4000 },
        { nome: "Pedro", pontos: 4100 },
        { nome: "João", pontos: 3700 },
        { nome: "Carlos", pontos: 3900 },
        { nome: "Arthur", pontos: 3500 },
        { nome: "Rafael", pontos: 3300 },
        { nome: "Diego", pontos: 3100 }
    ]
};

let mapaAtual = "mapa1";

const ranking = document.getElementById("ranking");


function atualizarRanking() {

    ranking.innerHTML = "";

    const jogadores = rankings[mapaAtual];

    jogadores.sort((a, b) => b.pontos - a.pontos);

    jogadores.forEach((jogador, index) => {

        const item = document.createElement("div");

        item.classList.add("ranking-item");

        if (index == 0) item.classList.add("top1");
        if (index == 1) item.classList.add("top2");
        if (index == 2) item.classList.add("top3");
        if (index == 3) item.classList.add("top4");
        if (index == 4) item.classList.add("top5");

        item.innerHTML = `
            <span class="position">${index + 1}</span>
            <span class="nome">${jogador.nome}</span>
            <span class="pontos">${jogador.pontos} pts</span>
        `;

        ranking.appendChild(item);

    });
}

function mostrarRanking(mapa) {

    mapaAtual = mapa;

    atualizarRanking();

}

function alterarPontos(nome, pontos) {

    const jogador = rankings[mapaAtual].find(j => j.nome === nome);

    if (jogador) {
        jogador.pontos = pontos;
        atualizarRanking();
    }

}

atualizarRanking();