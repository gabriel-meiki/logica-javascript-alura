alert('Bem vindo ao novo jogo de advinhar números!!!');

let numeroMaximo = 10;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let chute;

let tentativas = 1;

console.log(numeroSecreto);

// enquanto chute não for igual ao número secreto.
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // Se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
       break
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTetativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso aí! Você descobriu o número secreto é ${numeroSecreto} com ${tentativas} ${palavraTetativa}.`)

// if (tentativas > 1){
//    alert(`Isso aí! Você descobriu o número secreto é ${numeroSecreto} com ${tentativas} tentativassss.`);
// } else {
//    alert(`Isso aí! Você descobriu o número secreto é ${numeroSecreto} com ${tentativas} tentativa.`);
// }
