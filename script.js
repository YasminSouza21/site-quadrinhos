let mudarConteudoDentro;
function hqEscolhida(hqTitle, hqImage, hqTexto) {
    localStorage.setItem('hqTitle', hqTitle);
    localStorage.setItem('hqImage', hqImage);
    localStorage.setItem('hqTexto', hqTexto);
    window.location.href = 'book.html';
}

let primeiroBotao = document.getElementById("btn-one");
let segundoBotao = document.getElementById("btn-two");
let terceiroBotao = document.getElementById("btn-three");
let quartoBotao = document.getElementById("btn-four");

function mudarConteudo(botao) {
    if (botao == 1) {
        document.getElementById("text-p").innerHTML = "HQS";
        document.getElementById("text-1").innerHTML = "Lanterna Verde 06";
        document.getElementById("text-2").innerHTML = "Batman Vol.21";
        document.getElementById("text-3").innerHTML = "Arlequina: Edição Especial";
        document.getElementById("text-4").innerHTML = "Homem De Ferro Vol.1";
        document.getElementById("img-1").src = "images/hqs1.png";
        document.getElementById("img-2").src = "images/hqs2.png";
        document.getElementById("img-3").src = "images/hqs3.png";
        document.getElementById("img-4").src = "images/hqs4.png";

        primeiroBotao.addEventListener("click", function () {
            hqEscolhida('Lanterna Verde 06', 'images/hqs1.png', 'Chegou a hora! Hal Jordan finalmente enfrenta Sinestro, cujo poder de incutir medo foi substituído por uma fúria elemental capaz de arrasar o planeta que, um dia, Hal jurou proteger! Por sua vez, John Stewart passou por sua primeira batalha contra um novo adversário mortífero e é infectado pelos Mortos Radiantes. Será que seus poderes ajudarão a desacelerar o contágio sobrenatural… Ou irão todos se transformar nos hospedeiros mais terríveis de todos?');
        });
        segundoBotao.addEventListener("click", function () {
            hqEscolhida('Batman Vol.21', 'images/hqs2.png', 'O cerco está se fechando para a melhor dupla do mundo quando o Menino-Trovão se encontra sob o jugo de Gog no universo do Reino do Amanhã! Superman e Batman precisam correm contra o relógio não só para evitar que o Menino-Trovão se torne Magog, mas também para salvar o próprio Multiverso! Será que os heróis acabarão tendo que presenciar eventos cataclísmicos?');
        });
        terceiroBotao.addEventListener("click", function () {
            hqEscolhida('Arlequina: Edição Especial De 30 Anos', 'images/hqs3.png', 'Vocês estão cordialmente convidados para uma festança celebrando o 30º aniversário da Princesa Palhaça do Crime nesta fantástica edição especial! É isso mesmo, a Arlequina fez 30 anos em grande estilo e convidou um batalhão de suas antigas equipes criativas para se juntar a ela nesta coletânea matadora de histórias imperdíveis destas três décadas! Incluindo obras com histórias e arte de grandes nomes dos quadrinhos, como: Paul Dini, Amanda Conner, Rafael Albuquerque, Terry e Rachel Dodson, e muito mais!');
        });
        quartoBotao.addEventListener("click", function () {
            hqEscolhida('Coleção Clássica Marvel Vol. 8 - Homem De Ferro Vol. 1', 'images/hqs4.png', 'Criado em 1963 pela imaginação explosiva de Stan Lee, Larry Lieber, Jack Kirby e Don Heck, o Homem de Ferro em pouco tempo conquistou seu lugar no panteão dos maiores heróis da Marvel Comics, com suas aventuras cheias de ação e emoção. Nessas primeiras narrativas, o empresário transformado em super-herói Tony Stark tem sua dramática origem revelada e encara seus primeiros desafios, ainda bastante influenciadas pela Guerra Fria entre Estados Unidos e União Soviética, que pesava sobre o mundo');
        });

    } else if (botao == 2) {
        document.getElementById("text-p").innerHTML = "Marvel";
        document.getElementById("text-1").innerHTML = "Capitain America";
        document.getElementById("text-2").innerHTML = "Thor Vol.2";
        document.getElementById("text-3").innerHTML = "Homem De Ferro Vol.3";
        document.getElementById("text-4").innerHTML = "Homem-Aranha Vol.20";
        document.getElementById("img-1").src = "images/hq-marvel1.png";
        document.getElementById("img-2").src = "images/hq-marvel2.png";
        document.getElementById("img-3").src = "images/hq-marvel3.png";
        document.getElementById("img-4").src = "images/hq-marvel4.png";

        primeiroBotao.addEventListener("click", function () {
            hqEscolhida('Captain America Lives Again!', 'images/hq-marvel1.png', 'Hoje em dia, quase não conseguimos imaginar Os Vingadores sem o Capitão América, mas foi somente nesta capa da quarta edição em 1963 que vemos Steve Rogers entrar na era moderna após ser congelado no gelo e se juntar aos históricos Vingadores da Marvel! Este gráfico ousado e brilhante de edição limitada, baseado na arte da capa de Jack Kirby, captura a vibração não apenas do traje estrelado do Capitão América, mas também dos designs inesquecíveis dos personagens Thor, Homem de Ferro, Vespa e Gigante!');
        });
        segundoBotao.addEventListener("click", function () {
            hqEscolhida('Coleção Clássica Marvel Vol. 12 - Thor Vol. 2', 'images/hq-marvel2.png', 'Quem é verdadeiramente Thor, o consagrado personagem da Marvel, tanto nas HQs quanto no cinema? As respostas estão sem dúvida estão nessas clássicas primeiras histórias do Deus do Trovão, por gênios do calibre de Stan Lee e Jack Kirby! Descubra como começou a aventura do filho de Odin na Terra, conheça as raízes do conflito com seu meio-irmão diabólico Loki e testemunhe muito outras aventuras que desvendam a essência desse verdadeiro ícone!');
        });
        terceiroBotao.addEventListener("click", function () {
            hqEscolhida('Coleção Clássica Marvel Vol. 21 - Homem De Ferro Vol. 3', 'images/hq-marvel3.png', 'Aqui você vai testemunhar o retorno do Mandarim às histórias clássicas do Homem de Ferro... e apenas o Vingador Dourado conseguirá frustrar os planos maquiavélicos do vilão num confronto sem igual! Mas outros inimigos levarão nosso herói ao limite extremo: Viúva-Negra, Gavião Arqueiro, Unicórnio, Kraven, Camaleão, Cavaleiro Negro e um perigoso sabotador chamado Fantasma. No entanto, nenhum adversário será tão inesperado quanto o... Capitão América!');
        });
        quartoBotao.addEventListener("click", function () {
            hqEscolhida('O Espetacular Homem-Aranha Vol. 20 / 64', 'images/hq-marvel4.png', 'O novo e evoluído Doutor Octopus leva os seus tentáculos para um passeio na Oscorp! Derrotado, enfraquecido e ensanguentado, o Homem-Aranha chegou a um beco sem saída, e pode ser que finalmente tenha encontrado um oponente à sua altura! Em seguida, Homem-Aranha versus Electro, tudo ou nada! E, enquanto o escalador de paredes enfrenta a batalha de sua vida, Norman Osborn faz algo que pode destruir de vez sua nova relação amigável com Peter Parker. ');
        });
    } else if (botao == 3) {
        document.getElementById("text-p").innerHTML = "DC";
        document.getElementById("text-1").innerHTML = "Batman & Coringa Vol.1";
        document.getElementById("text-2").innerHTML = "A Saga Do Flash 10";
        document.getElementById("text-3").innerHTML = "Injustiça: Deuses";
        document.getElementById("text-4").innerHTML = "Mulher-Maravilha 03";
        document.getElementById("img-1").src = "images/hq-dc1.png";
        document.getElementById("img-2").src = "images/hq-dc2.png";
        document.getElementById("img-3").src = "images/hq-dc3.png";
        document.getElementById("img-4").src = "images/hq-dc4.png";

        primeiroBotao.addEventListener("click", function () {
            hqEscolhida('Batman & Coringa: Dupla Letal 01 (de 3)', 'images/hq-dc1.png', 'O Coringa fará de tudo para trazer a Arlequina de volta depois que ela for sequestrada. Mas… por quem? Monstros misteriosos estão perambulando pelas ruas de Gotham, coletando cabeças decepadas. Mas… por quê? Jim Gordon está desaparecido, e, após receber um pacote contendo um pedaço sangrento do comissário de Gotham, Batman sabe que deve estar disposto a fazer qualquer coisa para salvá-lo. Mas… como?');
        });
        segundoBotao.addEventListener("click", function () {
            hqEscolhida('A Saga Do Flash 10', 'images/hq-dc2.png', 'Wally West tem novos poderes ligados à Força de Aceleração! Agora, o herói de Keystone City terá que colocá-los à prova contra inimigos poderosíssimos, tais quais Mongul, o alienígena responsável pela destruição de Coast City, e criaturas de outra dimensão! Mas, quando Linda desaparece, caberá ao Homem Mais Rápido do Mundo mover céus e terra para encontrá-la!');
        });
        terceiroBotao.addEventListener("click", function () {
            hqEscolhida('Injustiça: Deuses Entre Nós', 'images/hq-dc3.png', 'Após ser enganado pelo Coringa e pela Arlequina para destruir aquilo que considerava mais importante em sua vida, Superman fica fora de si e comete um ato terrível. Ao decidir governar o mundo em vez de salvá-lo e começar a impor a paz no planeta por qualquer meio necessário, o Homem de Aço se torna uma ameaça para todos que não concordam com sua nova visão de mundo, inclusive o herói que um dia havia sido um dos seus maiores aliados e amigo: o Batman.');
        });
        quartoBotao.addEventListener("click", function () {
            hqEscolhida('A Saga Da Mulher-Maravilha 03', 'images/hq-dc4.png', 'A fase do revolucionário artista John Byrne continua! Neste volume: a estreia de Cassandra Sandsmark como heroína, a nova Moça-Maravilha! Enquanto isso, seres extraterrestres misteriosos têm planos desastrosos para a Terra, atraindo a Mulher-Maravilha e Mike Schorr para o gelo ártico para combatê-los. Participação especial do Campeão! E mais: a volta da Mulher-Leopardo! ');
        });
    } else if (botao == 4) {
        document.getElementById("text-p").innerHTML = "Outros";
        document.getElementById("text-1").innerHTML = "Homem-Aranha Vol.3";
        document.getElementById("text-2").innerHTML = "Clássicos X-Men (Omnibus)";
        document.getElementById("text-3").innerHTML = "Sandman";
        document.getElementById("text-4").innerHTML = "Spawn Vol.1";
        document.getElementById("img-1").src = "images/hq-outros1.png";
        document.getElementById("img-2").src = "images/hq-outros2.png";
        document.getElementById("img-3").src = "images/hq-outros3.png";
        document.getElementById("img-4").src = "images/hq-outros4.png";
        primeiroBotao.addEventListener("click", function () {
            hqEscolhida('Coleção Clássica Marvel Vol. 40 - Homem-Aranha Vol. 7', 'images/hq-outros1.png', 'Neste sétimo volume da COLEÇÃO CLÁSSICA MARVEL dedicado ao Escalador de Paredes, nosso espetacular herói receberá a visita inesquecível do místico Dr. Estranho, numa história de visual lisérgico típico das HQs dos anos 1960! Mas o Homem-Aranha também terá de medir forças com Magma e o letal Escorpião, sem falar nas participações de Gato, Chacal e o Esmaga-Aranha! Mas nenhuma dessas ameaças se compara ao peso dos problemas pessoais de Peter Parker, o atormentado alter ego do Cabeça de Teia!');
        });
        segundoBotao.addEventListener("click", function () {
            hqEscolhida('Clássicos X-Men (Omnibus)', 'images/hq-outros2.png', 'Em 1986, a Marvel lançou nos EUA Classic X-Men, uma série que reimprimiu a era dos “Novos e Diferentes X-Men”, mas com uma reviravolta! Novas histórias de apoio deram corpo aos contos da década de 1970 e se aprofundaram na vida dos personagens, e páginas inéditas de histórias foram inseridas nas reimpressões, expandindo momentos-chave e plantando as sementes para histórias futuras! É uma obra perfeita e indispensável para a sua coleção de Fabulosos X-Men!');
        });
        terceiroBotao.addEventListener("click", function () {
            hqEscolhida('Sandman - Edição Definitiva Vol. 1', 'images/hq-outros3.png', '´Vou revelar-te o que é o medo num punhado de pó.´ Foi essa frase de T.S. Eliot que serviu para embalar o lançamento dessa série e também dar asas à imaginação de Neil Gaiman, um britânico destinado a criar uma das séries mais revolucionárias e inovadoras dos quadrinhos contemporâneos. Poucas HQs na história do mundo ocidental transcenderam o gênero e romperam barreiras como Sandman conseguiu.');
        });
        quartoBotao.addEventListener("click", function () {
            hqEscolhida('Spawn Vol. 01', 'images/hq-outros4.png', 'Este primeiro volume de SPAWN marca o retorno do emblemático personagem aos quadrinhos no Brasil. Além de ser o ponto de partida perfeito para quem quer se inteirar de tudo o que aconteceu na vida do atormentado Al Simmons até os dias de hoje, o volume inicial desta coleção ainda traz o fantástico número 300 da série Spawn, que se tornou a HQ independente mais bem-sucedida e longeva de toda a história.');
        });
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