let contador = 0;
const listaX = [];
const listaO = [];
const ganhadores = [];
let jogo = true;


function verifica(lista, a, b, c) {
    if (lista.includes(a) && lista.includes(b) && lista.includes(c) === true) {
        return true;
    } else {
        return false;
    }
}

function ganhou(lista) {
    if (verifica(lista, 1, 2, 3)) {
        ganhadores.push(10, 20, 30);
        return 10;
    } else if (verifica(lista, 4, 5, 6)) {
        ganhadores.push(40, 50, 60);
        return 20;
    } else if (verifica(lista, 7, 8, 9)) {
        ganhadores.push(70, 80, 90);
        return 30;
    } else if (verifica(lista, 1, 4, 7)) {
        ganhadores.push(10, 40, 70);
        return 40;
    } else if (verifica(lista, 2, 5, 8)) {
        ganhadores.push(20, 50, 80);
        return 50;
    } else if (verifica(lista, 3, 6, 9)) {
        ganhadores.push(30, 60, 90);
        return 60;
    } else if (verifica(lista, 1, 5, 9)) {
        ganhadores.push(10, 50, 90);
        return 70;
    } else if (verifica(lista, 3, 5, 7)) {
        ganhadores.push(30, 50, 70);
        return 80;
    } else {
        return 0;
    }
}

function marca(id) {
    let botao = document.getElementById(id);
    let casa = parseInt(id);
    if (botao.className !== "botaoClicado" && jogo === true) {
        if (contador % 2 === 0) {
            botao.innerHTML = `<span id="${id*10}"class="mdi mdi-star-three-points"></span>`;
            listaX.push(casa);
        } else {
            botao.innerHTML = `<span id="${id*10}"class="mdi mdi-circle-outline"></span>`;
            listaO.push(casa);
        }
        if (ganhou(listaX) !== 0) {

            document.getElementById("p").innerHTML = "X VENCEU!";
            jogo = false;
            let x;
            for (x = 0; x < 3; x++) {
                let figura = document.getElementById(ganhadores[x]);
                figura.style.color = "green";
            }
        } else if (ganhou(listaO) !== 0) {
            document.getElementById("p").innerHTML = "O VENCEU!";
            jogo = false;
            let x;
            for (x = 0; x < 3; x++) {
                let figura = document.getElementById(ganhadores[x]);
                figura.style.color = "green";
            }
        }
        contador += 1;
        if (contador === 9) {
            document.getElementById("p").innerHTML = "Deu velha!";
        }
        botao.className = "botaoClicado";
    }
}

function abreInsta() {
    window.open("https://www.instagram.com/joa0__lima/", "_blank");
}

function restart() {
    location.reload();
}