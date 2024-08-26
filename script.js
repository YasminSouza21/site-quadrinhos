function mudarConteudo(botao) {
    if (botao == 1) {
        document.getElementById("text-p").innerHTML = "HQS";
        document.getElementById("text-1").innerHTML = "Lanterna Verde 06";
        document.getElementById("text-2").innerHTML = "Batman Vol.21";
        document.getElementById("text-3").innerHTML = "Arlequina: Edição Especial";
        document.getElementById("text-4").innerHTML = "Homem De Ferro Vol.1";
    } else if (botao == 2) {
        document.getElementById("text-p").innerHTML = "Marvel";
        document.getElementById("text-1").innerHTML = "Capitain America";
        document.getElementById("text-2").innerHTML = "Thor Vol.2";
        document.getElementById("text-3").innerHTML = "Homem De Ferro Vol.3";
        document.getElementById("text-4").innerHTML = "Homem-Aranha Vol.20";
    } else if (botao == 3) {
        document.getElementById("text-p").innerHTML = "DC";
        document.getElementById("text-1").innerHTML = "Batman & Coringa Vol.1";
        document.getElementById("text-2").innerHTML = "A Saga Do Flash 10";
        document.getElementById("text-3").innerHTML = "Injustiça: Deuses";
        document.getElementById("text-4").innerHTML = "Mulher-Maravilha 03";
    } else if (botao == 4) {
        document.getElementById("text-p").innerHTML = "Outros";
        document.getElementById("text-1").innerHTML = "Homem-Aranha Vol.3";
        document.getElementById("text-2").innerHTML = "Clássicos X-Men (Omnibus)";
        document.getElementById("text-3").innerHTML = "Sandman";
        document.getElementById("text-4").innerHTML = "Spawn Vol.1";
    }

    if (botao == 1) {
        document.getElementById("img-1").src = "images/hqs1.png";
        document.getElementById("img-2").src = "images/hqs2.png";
        document.getElementById("img-3").src = "images/hqs3.png";
        document.getElementById("img-4").src = "images/hqs4.png";
    } else if (botao == 2) {
        document.getElementById("img-1").src = "images/hq-marvel1.png";
        document.getElementById("img-2").src = "images/hq-marvel2.png";
        document.getElementById("img-3").src = "images/hq-marvel3.png";
        document.getElementById("img-4").src = "images/hq-marvel4.png";
    } else if (botao == 3) {
        document.getElementById("img-1").src = "images/hq-dc1.png";
        document.getElementById("img-2").src = "images/hq-dc2.png";
        document.getElementById("img-3").src = "images/hq-dc3.png";
        document.getElementById("img-4").src = "images/hq-dc4.png";
    } else if (botao == 4) {
        document.getElementById("img-1").src = "images/hq-outros1.png";
        document.getElementById("img-2").src = "images/hq-outros2.png";
        document.getElementById("img-3").src = "images/hq-outros3.png";
        document.getElementById("img-4").src = "images/hq-outros4.png";
    }
}

ScrollReveal().reveal('#container-spider', {
    origin: 'left',
    duration: 2000,
    distance: "20%",
});

ScrollReveal().reveal('#iron-man', {
    origin: 'right',
    duration: 2000,
    distance: "20%",
});

ScrollReveal().reveal('#hulk', {
    origin: 'left',
    duration: 2000,
    distance: "20%",
});

ScrollReveal().reveal('#batman', {
    origin: 'right',
    duration: 2000,
    distance: "20%",
});

ScrollReveal().reveal('#coringa', {
    origin: 'left',
    duration: 2000,
    distance: "20%",
});

ScrollReveal().reveal('#flash', {
    origin: 'right',
    duration: 2000,
    distance: "20%",
});