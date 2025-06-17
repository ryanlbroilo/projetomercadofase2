// Mensagem de boas-vindas baseada no horário
document.addEventListener('DOMContentLoaded', function() {
    const hora = new Date().getHours();
    let saudacao;
    if (hora < 12) saudacao = "Bom dia!";
    else if (hora < 18) saudacao = "Boa tarde!";
    else saudacao = "Boa noite!";
    alert(saudacao + " Bem-vindo ao MiniMercado Central!");
});
