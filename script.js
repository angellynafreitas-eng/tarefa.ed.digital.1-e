const botoesCurtir=document.querySelectorAll(".curtir");
botoesCurtir.forEach(function(botaoCurtir){
    let curtir = false;
    botaoCurtir. addEventLitener("click", curtir);
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
