const botoes = document.querySelectorAll(".botao");

for(let i=0; i <botoes.length;i++){
    botoes[i].onclick = funtion(){
        for(let j=0;j<botoes.length;j++){
            botoes[j.classList.remoce("ativo")]
        }
        botoes[i].classList.add("ativo")
    }
}