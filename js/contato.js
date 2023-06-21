// ---------- VALIDAÇÃO NOME ---------- //
let usernameInput = document.getElementById("nome");
let usernameLabel = document.querySelector('label[for="nome"]');
let usernameHelper = document.getElementById("nome-ajuda");

// Mostrar popup de campo obrigatório

function mostrarPopup(input, label) {
  usernameInput.addEventListener("focus", function () {
    usernameLabel.classList.add("required-popup");
  });

  usernameInput.addEventListener("blur", function () {
    usernameLabel.classList.remove("required-popup");
  });
}

mostrarPopup(usernameInput, usernameLabel);
// Ocultar popup de campo obrigatório

// Validar valor do input
usernameInput.addEventListener("change", function (evento) {
  let valor = evento.target.value;
  console.log(valor);
  if (valor.length < 3) {
    usernameInput.classList.remove("correct");
    usernameInput.classList.add("error");
    usernameHelper.innerText = "O nome deve ter 3 ou mais caracteres";
    usernameHelper.classList.add("visible");
  } else {
    usernameInput.classList.remove("error");
    usernameHelper.classList.remove("visible");
    usernameHelper.innerText = "";
    usernameInput.classList.add("correct");
  }
});

// ---------- VALIDAÇÃO E-MAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector("label[for='email']");
let emailHelper = document.getElementById("email-ajuda");

function mostrarPopupEmail(input, label) {
  emailInput.addEventListener("change", function (evento) {
    let valor = evento.target.value;

    if (valor.includes("@") && valor.includes(".com")) {
      emailInput.classList.remove("error");
      emailHelper.classList.remove("visible");
      emailHelper.innerText = "";
      emailInput.classList.add("correct");
    } else {
      emailInput.classList.remove("correct");
      emailInput.classList.add("error");
      emailHelper.innerText = "E-mail inválido";
      emailHelper.classList.add("visible");
    }
  });
}

mostrarPopupEmail(emailInput, emailLabel);

// ---------- VALIDAÇÃO PHONE NUMBER ---------- //
let telefoneInput = document.getElementById("telefone");
let telefoneLabel = document.querySelector('label[for="telefone"]');
let telefoneHelper = document.getElementById("telefone-ajuda");

// Mostrar popup de campo obrigatório
function mostrarPopupTelefone(input, label) {
  telefoneInput.addEventListener("focus", function () {
    telefoneLabel.classList.add("required-popup");
  });

  telefoneInput.addEventListener("blur", function () {
    telefoneLabel.classList.remove("required-popup");
  });
}

mostrarPopupTelefone(telefoneInput, telefoneLabel);

telefoneInput.addEventListener("change", function (evento) {
  let valor = evento.target.value;
  console.log(valor);
  if (valor.length < 10 || valor.length > 11) {
    telefoneInput.classList.remove("correct");
    telefoneInput.classList.add("error");
    telefoneHelper.innerText = "De 10 a 11 dígitos, com DDD. Ex.: 51998877665";
    telefoneHelper.classList.add("visible");
  } else {
    telefoneInput.classList.remove("error");
    telefoneHelper.classList.remove("visible");
    telefoneHelper.innerText = "";
    telefoneInput.classList.add("correct");
  }
});

// ---------- VALIDAÇÃO TEXT ---------- //
let textInput = document.getElementById("mensagem");
let textLabel = document.querySelector('label[for="mensagem"]');
let textHelper = document.getElementById("mensagem-ajuda");

// Mostrar popup de campo obrigatório

function mostrarPopupMensagem(input, label) {
  textInput.addEventListener("focus", function () {
    textLabel.classList.add("required-popup");
  });

  textInput.addEventListener("blur", function () {
    textLabel.classList.remove("required-popup");
  });
}

mostrarPopup(textInput, textLabel);
// Ocultar popup de campo obrigatório

// Validar valor do input
textInput.addEventListener("change", function (evento) {
  let valor = evento.target.value;
  console.log(valor);
  if (valor.length < 50) {
    textInput.classList.remove("correct");
    textInput.classList.add("error");
    textHelper.innerText = "A mensagem deve conter mais de 50 caracteres";
    textHelper.classList.add("visible");
  } else {
    textInput.classList.remove("error");
    textHelper.classList.remove("visible");
    textHelper.innerText = "";
    textInput.classList.add("correct");
  }
});
