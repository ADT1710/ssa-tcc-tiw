const btnAumentaFonte = document.querySelector("#aumentar_fonte");
const btnDiminuiFonte = document.querySelector("#diminuir_fonte");

let bannerTitulo = document.querySelector(".banner_titulo");
let bannerTexto = document.querySelector(".banner_texto");
let conteudoTitulo = document.querySelectorAll(".conteudo_titulo");
let conteudoTexto = document.querySelectorAll(".conteudo_texto");
let produtoTitulo = document.querySelectorAll(".produto_titulo");
let produtoPreco = document.querySelectorAll(".produto_preço");
let contatoLabel = document.querySelectorAll(".contato_form--label");

let tfBannerTitulo = 3.0;
let tfBannerTexto = 2.0;
let tfConteudoTitulo = 2.7;
let tfConteudoTexto = 1.5;
let tfProdutoTitulo = 36.0;
let tfProdutoPreco = 33.0;
let tfContatoLabel = 1;

btnAumentaFonte.addEventListener("click", () => {
    aumentaFonte();
})
btnDiminuiFonte.addEventListener("click", () => {
    diminuiFonte();
})

function aumentaFonte (){
    tfBannerTitulo *= 1.1;
    tfBannerTexto *= 1.1;
    tfConteudoTitulo *= 1.1;
    tfConteudoTexto *= 1.1;
    tfProdutoTitulo *= 1.1;
    tfProdutoPreco *= 1.1;
    tfContatoLabel *= 1.1;

    bannerTitulo.style.fontSize = tfBannerTitulo + "rem";
    bannerTexto.style.fontSize = tfBannerTexto + "rem";
    conteudoTitulo.forEach((elemento)=>{
        elemento.style.fontSize = tfConteudoTitulo + "rem";
    });
    conteudoTexto.forEach((elemento)=>{
        elemento.style.fontSize = tfConteudoTexto + "rem";
    });
    produtoTitulo.forEach((elemento)=>{
        elemento.style.fontSize = tfProdutoTitulo + "px";
    });
    produtoPreco.forEach((elemento)=>{
        elemento.style.fontSize = tfProdutoPreco + "px";
    });
    contatoLabel.forEach((elemento)=>{
        elemento.style.fontSize = tfContatoLabel + "rem";
    });
}

function diminuiFonte (){
    tfBannerTitulo /= 1.1;
    tfBannerTexto /= 1.1;
    tfConteudoTitulo /= 1.1;
    tfConteudoTexto /= 1.1;
    tfProdutoTitulo /= 1.1;
    tfProdutoPreco /= 1.1;
    tfContatoLabel /= 1.1;

    bannerTitulo.style.fontSize = tfBannerTitulo + "rem";
    bannerTexto.style.fontSize = tfBannerTexto + "rem";
    conteudoTitulo.forEach((elemento)=>{
        elemento.style.fontSize = tfConteudoTitulo + "rem";
    });
    conteudoTexto.forEach((elemento)=>{
        elemento.style.fontSize = tfConteudoTexto + "rem";
    });
    produtoTitulo.forEach((elemento)=>{
        elemento.style.fontSize = tfProdutoTitulo + "px";
    });
    produtoPreco.forEach((elemento)=>{
        elemento.style.fontSize = tfProdutoPreco + "px";
    });
    contatoLabel.forEach((elemento)=>{
        elemento.style.fontSize = tfContatoLabel + "rem";
    });
}