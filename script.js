// Saudação baseada no horário
document.addEventListener('DOMContentLoaded', function () {
    const hora = new Date().getHours();
    let saudacao;
    if (hora < 12) saudacao = "Bom dia!";
    else if (hora < 18) saudacao = "Boa tarde!";
    else saudacao = "Boa noite!";
    alert(saudacao + " Bem-vindo ao MiniMercado Central!");

    // Validação do formulário e alerta de sucesso
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // impede o envio real
            if (form.checkValidity()) {
                alert("Cadastro realizado com sucesso!");
                form.reset();
            } else {
                alert("Por favor, preencha todos os campos obrigatórios corretamente.");
            }
        });
    }
});
