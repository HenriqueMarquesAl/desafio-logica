const mensagem = gets();

function converterParaMaiusculo(mensagemUsuario) {
    return mensagemUsuario.toUpperCase();
}

const resultado = converterParaMaiusculo(mensagem);

print(resultado);