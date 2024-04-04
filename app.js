alert('Bem vindo ao novo jogo de advinhar números!!!');

let numeroSecreto = 4;

let chute;

let tentativas = 1;

console.log(numeroSecreto);

// enquanto chute não for igual ao número secreto.
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');

    // Se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto é ${numeroSecreto} com ${tentativas} tentativas.`);
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