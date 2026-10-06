const botoesCurtir=document.querySelectorAll(".curtir");
botoesCurtir.forEach(function(botaoCurtir){
    let curtiu = false;
    botaoCurtir. addEventListener("click", curtir);
funcion curtir(){
        const contador = botaoCurtir. querySelection ("span");
            if(curtir === false){
                contador.textCotent++;
                curtiu = true;

            }else{
                contador.textCotent--;
                curtiu = false;
            }
    }
    
})
