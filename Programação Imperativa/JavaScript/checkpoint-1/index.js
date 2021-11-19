

































[
    // - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com 
//sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que 
//a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a 
//mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".


function microondas (opcao, tempo){

    switch(opcao){
        case 'Pipoca':
            let tempo_padrao = 10;
            if(tempo >= tempo_padrao && tempo < (tempo_padrao*2)){
                return "Prato pronto, bom apetite!";
            } else if(tempo >= (tempo_padrao*2) && tempo < (tempo_padrao*3)){
                return "Sua comida queimou! Prato pronto, bom apetite!";
            }else if(tempo >= (tempo_padrao*3)) {
                return "KABUMMM!";
            }else {
                return "Tempo insuficiente!";
            }
        case 'Macarrão':
            let tempo_padrao = 8;
            if(tempo >= tempo_padrao && tempo < (tempo_padrao*2)){
                return "Prato pronto, bom apetite!";
            } else if(tempo >= (tempo_padrao*2) && tempo < (tempo_padrao*3)){
                return "Sua comida queimou! Prato pronto, bom apetite!";
            }else if(tempo >= (tempo_padrao*3)) {
                return "KABUMMM!";
            }else {
                return "Tempo insuficiente!";
            }
        case 'Carne':
            let tempo_padrao = 15;
            if(tempo >= tempo_padrao && tempo < (tempo_padrao*2)){
                return "Prato pronto, bom apetite!";
            } else if(tempo >= (tempo_padrao*2) && tempo < (tempo_padrao*3)){
                return "Sua comida queimou! Prato pronto, bom apetite!";
            }else if(tempo >= (tempo_padrao*3)) {
                return "KABUMMM!";
            }else {
                return "Tempo insuficiente!";
            }
        case 'Feijão':
            let tempo_padrao = 12;
            if(tempo >= tempo_padrao && tempo < (tempo_padrao*2)){
                return "Prato pronto, bom apetite!";
            } else if(tempo >= (tempo_padrao*2) && tempo < (tempo_padrao*3)){
                return "Sua comida queimou! Prato pronto, bom apetite!";
            }else if(tempo >= (tempo_padrao*3)) {
                return "KABUMMM!";
            }else {
                return "Tempo insuficiente!";
            }
        case 'Brigadeiro':
            let tempo_padrao = 8;
            if(tempo >= tempo_padrao && tempo < (tempo_padrao*2)){
                return "Prato pronto, bom apetite!";
            } else if(tempo >= (tempo_padrao*2) && tempo < (tempo_padrao*3)){
                return "Sua comida queimou! Prato pronto, bom apetite!";
            }else if(tempo >= (tempo_padrao*3)) {
                return "KABUMMM!";
            }else {
                return "Tempo insuficiente!";
            }
            default: 
                return "Prato Inexistente!";             
        }
    }

console.log(microondas('Pipoca',10))