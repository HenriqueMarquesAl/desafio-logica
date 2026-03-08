const canal = gets();
const cliente = gets();

function criarSaudacao(canal, cliente) {
    return "Ola, " + cliente + "! Bem-vindo ao canal " + canal + ".";
}

print(criarSaudacao(canal, cliente));
