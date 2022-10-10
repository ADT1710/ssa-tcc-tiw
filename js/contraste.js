const btnContraste = document.querySelector("#modo_contraste");

contrasteOn = false

btnContraste.addEventListener('click', function () {
    if (contrasteOn == false){
        document.documentElement.style.setProperty('--primaria', '#1C1C1C');
        document.documentElement.style.setProperty('--secundaria', '#363636');
        document.documentElement.style.setProperty('--claro', 'black');
        document.documentElement.style.setProperty('--escuro', 'white');
        document.documentElement.style.setProperty('--botaoPri', 'white');
        document.documentElement.style.setProperty('--botaoSec', 'gray');
        document.documentElement.style.setProperty('--botaoText', 'black');
    }
})