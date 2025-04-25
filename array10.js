let jogos = ["Borderlands 2", "Payday 2", "Minecraft"];
let jogoFavorito = "Payday 2";
let quantidade = jogos.length;

for(let i = 0; i < quantidade ; i++){
    if(jogoFavorito === jogos[i]){
        console.log(`Meu jogo favorito é ${jogos[i]} está no ranking na posição ${i+1}`);
    }
}



