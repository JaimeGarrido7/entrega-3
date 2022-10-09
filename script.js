function vaciar() {
  document.getElementById("pantalla").value = "";
}

function cuadrado() {
  if (validar()) {
    let num = document.getElementById("pantalla");
    num.value = num.value * num.value;
    rellenar_info();
  }
}

function mod() {
  if (validar()) {
    let num = document.getElementById("pantalla");
    num.value = Math.abs(num.value);
    rellenar_info();
  }
}

function fact() {
  if (validar()) {
    let num = document.getElementById("pantalla");
    if (num.value == 0 || num.value == 1) {
      num.value = 1
    }
    else {
      for (var i = num.value - 1; i >= 1; i--) {
        num.value *= i;
      }
      num.value
      rellenar_info();

    }
  }
}

let operador = "";
let total = 0;

function guardaInput(numInput) {
  switch (operador) {
    case "multiplicador":
      total *= numInput;
      break;
    case "":
      total = numInput;
      break;
    case "sumador":
      total += numInput;
      break;
    case "resta":
      total -= numInput;
      break;
    case "division":
      total /= numInput;
      break;
    case "resto":
      total %= numInput;
      break;
    case "potencia":
      total = Math.pow(total, numInput);
      break;
    default:
      break;
  }
}

function mult() {
  if (validar()) {
    guardaInput(Number(document.getElementById("pantalla").value));
    total = document.getElementById("pantalla").value;
    operador = "multiplicador";
    vaciar();
  }
}

function add() {
  if (validar()) {
    guardaInput(Number(document.getElementById("pantalla").value));
    operador = "sumador";
    vaciar();
  }
}

function resta() {
  if (validar()) {
    guardaInput(Number(document.getElementById("pantalla").value));
    operador = "resta";
    vaciar();
  }
}

function div() {
  if (validar()) {
    guardaInput(Number(document.getElementById("pantalla").value));
    operador = "division";
    vaciar();
  }
}

function rest() {
  if (validar()) {
    guardaInput(Number(document.getElementById("pantalla").value));
    operador = "resto";
    vaciar();
  }
}

function pot() {
  if (validar()) {
    guardaInput(Number(document.getElementById("pantalla").value));
    operador = "potencia";
    vaciar();
  }
}

function eq() {

  if (validar()) {
    guardaInput(Number(document.getElementById("pantalla").value));
    operador = "";
    document.getElementById("pantalla").value = total;
    rellenar_info();
  }
}


function sumatorio() {
  if (validar()) {
    var numeros = document.getElementById("pantalla").value.split(",");

    var resultado = 0;

    for (var i = 0; i < numeros.length; i++) {

      resultado += parseInt(numeros[i]);

    }

    document.getElementById("pantalla").value = resultado;
    rellenar_info();
  }
}


function revertir() {
  if (validar()) {
    var num = document.getElementById("pantalla").value;
    document.getElementById("pantalla").value = num.split(",").reverse().toString();
  }
}

function ordenar() {
  if (validar()) {
    var num = document.getElementById("pantalla").value;
    document.getElementById("pantalla").value = num.split(",").sort().toString();
  }
}

function quitar() {
  if (validar()) {
    var num = document.getElementById("pantalla").value.split(",");
    num.pop();
    document.getElementById("pantalla").value = num;
  }
}


function validar() {
  let listaString = document.getElementById("pantalla").value;
  let arrayNumeros = listaString.split(",");
  for (let i = 0; i < arrayNumeros.length; i++) {
    let element = Number(arrayNumeros[i]);
    if (Number.isNaN(element)) {
      document.getElementById("pantalla").value = "Error";
      return false;
    }
  }
  return true;
}


function rellenar_info() {
  if (Number(document.getElementById("pantalla").value) < 100) {
    document.getElementById("info").innerHTML = "Info: El resultado es menor que 100";
  } else if (Number(document.getElementById("pantalla").value) > 200) {
    document.getElementById("info").innerHTML = "Info: El resultado es superior a 200";
  } else {
    document.getElementById("info").innerHTML = "Info: El resultado está entre 100 y 200";
  }
}