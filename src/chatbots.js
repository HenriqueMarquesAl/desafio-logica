const tipoMensagem = gets();
let contador = 0;

let mensagem = gets();

while (mensagem !== "FIM") {

    if (mensagem.startsWith(tipoMensagem + ":")) {
        contador++;
    }
    mensagem = gets();
}

print(contador);