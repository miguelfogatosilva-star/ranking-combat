const jogadores = [
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
];

const ranking = document.getElementById("ranking");

function atualizarRanking(){

    ranking.innerHTML = "";

    jogadores.sort((a, b) => b.pontos - a.pontos);

    jogadores.forEach((jogador, index) =>{

        const item = document.createElement("div");

        item.classList.add("ranking-item");

        if(index == 0) item.classList.add("top1");
        if(index == 1) item.classList.add("top2");
        if(index == 2) item.classList.add("top3");
        if(index == 3) item.classList.add("top4");
        if(index == 4) item.classList.add("top5");

        item.innerHTML = `
            <span>${index + 1}</span>
            <span>${jogador.nome}</span>
            <span>${jogador.pontos} pts</span>
        `;

        ranking.appendChild(item);

    });

}

function alterarPontos(nome, pontos) {

    const jogador = jogadores.find(j => j.nome === nome);

    if (jogador) {
        jogador.pontos = pontos;
        atualizarRanking();
    }

}

atualizarRanking();
