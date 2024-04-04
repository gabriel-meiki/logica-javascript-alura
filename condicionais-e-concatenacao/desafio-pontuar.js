// Saber pontuação

pontos = prompt('Digite sua pontuação: ')

// Condição da pontuação

if (pontos >= 100){
    alert(`Parabéns, você venceu com ${pontos - 100} a mais.`)
} else{
    alert(`Faltou ${100 - pontos} para você ganhar. Tente novamente para ganhar.`)
}