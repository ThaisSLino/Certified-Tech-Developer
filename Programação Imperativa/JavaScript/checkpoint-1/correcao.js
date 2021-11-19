function microondas(opcao,tempo){
    let tempoPadrao = 0;
    switch(opcao){
        case 1: //Pipoca
            tempoPadrao = 10;
            break;
        case 2: //Macarrão
            tempoPadrao = 8;
            break;
        case 3: //Carne
            tempoPadrao = 15;
            break;
        case 4: //Feijão
            tempoPadrao = 12;
            break;
        case 5: //Brigadeiro
            tempoPadrao = 8;
            break;
        default:
            console.log("Opção Inválida")
        break;
    }
}

if(tempo < tempoPadrao)
    console.log("Tempo Insuficiente")
else if(tempo > 3*tempoPadrao)
    console.log("Kabumm")
else(tempo > 2*tempoPadrao)
    console.log("A comida queimou")


console.log("Tempo de entrada: " + tempo + "Tempo padrão: " + tempoPadrao);
console.log("Prato pronto, bom apetite!")

microondas(5,10)