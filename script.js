const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(function(botaoCurtir) {
    botaoCurtir.addEventListener("click", function() {
        const contador = botaoCurtir.querySelector("span");
        
        // Verifica se o botão já tem a classe que indica que foi curtido
        const jaCurtiu = botaoCurtir.classList.contains("liked");

        if (!jaCurtiu) {
            contador.textContent = Number(contador.textContent) + 1;
            botaoCurtir.classList.add("liked"); // Marca como curtido
        } else {
            contador.textContent = Number(contador.textContent) - 1;
            botaoCurtir.classList.remove("liked"); // Desmarca
        }
    });
});

const btnTema = document.querySelector(".btn-tema");
btnTema.addEventListener("click", mudarTema);
function mudarTema(){
    document.body.classList.toggle("tema-escuro");
}