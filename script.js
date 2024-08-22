function mudarConteudo(botao) {
    if (botao == 1) {
        document.getElementById("text-p").innerHTML = "HQS";
        document.getElementById("text-1").innerHTML = "HQS";
        document.getElementById("text-2").innerHTML = "HQS";
        document.getElementById("text-3").innerHTML = "HQS";
        document.getElementById("text-4").innerHTML = "HQS";
    } else if (botao == 2) {
        document.getElementById("text-p").innerHTML = "Marvel";
        document.getElementById("text-1").innerHTML = "HQS";
        document.getElementById("text-2").innerHTML = "HQS";
        document.getElementById("text-3").innerHTML = "HQS";
        document.getElementById("text-4").innerHTML = "HQS";
    } else if (botao == 3) {
        document.getElementById("text-p").innerHTML = "DC";
        document.getElementById("text-1").innerHTML = "HQS";
        document.getElementById("text-2").innerHTML = "HQS";
        document.getElementById("text-3").innerHTML = "HQS";
        document.getElementById("text-4").innerHTML = "HQS";
    } else if (botao == 4) {
        document.getElementById("text-p").innerHTML = "Outros";
        document.getElementById("text-1").innerHTML = "HQS";
        document.getElementById("text-2").innerHTML = "HQS";
        document.getElementById("text-3").innerHTML = "Sandman";
        document.getElementById("text-4").innerHTML = "HQS";
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
