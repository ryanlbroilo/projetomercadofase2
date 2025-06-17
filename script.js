document.addEventListener('DOMContentLoaded', function () {
  const hora = new Date().getHours();
  let saudacao;
  if (hora < 12) saudacao = "Bom dia!";
  else if (hora < 18) saudacao = "Boa tarde!";
  else saudacao = "Boa noite!";
  alert(saudacao + " Bem-vindo ao MiniMercado Central!");

  const form = document.getElementById('formCadastro');
  const mensagem = document.getElementById('mensagemConfirmacao');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // impede o envio real

      if (form.checkValidity()) {
        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.style.color = "green";
        form.reset();
      } else {
        mensagem.textContent = "Por favor, preencha todos os campos obrigatórios corretamente.";
        mensagem.style.color = "red";
      }
    });
  }
});
