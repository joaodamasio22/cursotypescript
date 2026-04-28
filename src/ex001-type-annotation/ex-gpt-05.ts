const verificarAprovacao = (media:number): string => {
    if(media >= 7){
        return "Aprovado!!"
    }
    else{
        return "Reprovado!!"
    }
}
