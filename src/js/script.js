var contador = 1;
var tempo = 3000;

setInterval(Exibindo, tempo);

function Exibindo() {
    for (var i = 1; i <= 2; i++) {
        document.getElementById("dep" + i).style.display = "none";
    }

    document.getElementById("dep" + contador).style.display = "flex";

    contador = contador < 2 ? contador + 1 : 1;
}

var menuToggle = document.getElementById('menuHamburguer');
var menuNav = document.getElementById('menuNav');

menuToggle.addEventListener('click', function () {
    menuNav.classList.toggle('active');
});