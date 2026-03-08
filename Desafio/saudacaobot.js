function saudacaoBot(canal) {
    if (canal === "whatsapp") {
        return "Ola, este e o WhatsAppBot!";
    } 
    else if (canal === "telegram") {
        return "Ola, este e o TelegramBot!";
    } 
    else if (canal === "webchat") {
        return "Ola, este e o WebChatBot!";
    } 
    else {
        return "Canal nao suportado";
    }
}

const canal = gets();

print(saudacaoBot(canal));