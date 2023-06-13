cont = 1;
function Adcionar() {
  if (cont > 4) {
    alert("Capacidade máxima atingida!");
  } else if (cont == 1) {
    cont++;
    var txn1 = document.querySelector(".Nome");
    var txn2 = document.querySelector(".Tempo");
    var txn3 = document.querySelector(".Categoria");

    var no = String(txn1.value);
    var te = String(txn2.value);
    var ca = String(txn3.value);

    var a = document.querySelector(".Nome_1");
    var b = document.querySelector(".Tempo_1");
    var c = document.querySelector(".Categoria_1");

    a.innerHTML = no;
    b.innerHTML = te;
    c.innerHTML = ca;
  } else if (cont == 2) {
    cont++;
    var txn1 = document.querySelector(".Nome");
    var txn2 = document.querySelector(".Tempo");
    var txn3 = document.querySelector(".Categoria");

    var no = String(txn1.value);
    var te = String(txn2.value);
    var ca = String(txn3.value);

    var a = document.querySelector(".Nome_2");
    var b = document.querySelector(".Tempo_2");
    var c = document.querySelector(".Categoria_2");

    a.innerHTML = no;
    b.innerHTML = te;
    c.innerHTML = ca;
  } else if (cont == 3) {
    cont++;
    var txn1 = document.querySelector(".Nome");
    var txn2 = document.querySelector(".Tempo");
    var txn3 = document.querySelector(".Categoria");

    var no = String(txn1.value);
    var te = String(txn2.value);
    var ca = String(txn3.value);

    var a = document.querySelector(".Nome_3");
    var b = document.querySelector(".Tempo_3");
    var c = document.querySelector(".Categoria_3");

    a.innerHTML = no;
    b.innerHTML = te;
    c.innerHTML = ca;
  } else if (cont == 4) {
    cont++;
    var txn1 = document.querySelector(".Nome");
    var txn2 = document.querySelector(".Tempo");
    var txn3 = document.querySelector(".Categoria");

    var no = String(txn1.value);
    var te = String(txn2.value);
    var ca = String(txn3.value);

    var a = document.querySelector(".Nome_4");
    var b = document.querySelector(".Tempo_4");
    var c = document.querySelector(".Categoria_4");

    a.innerHTML = no;
    b.innerHTML = te;
    c.innerHTML = ca;
  }
}

function Apagar1() {
  var a = document.querySelector(".Nome_1");
  var b = document.querySelector(".Tempo_1");
  var c = document.querySelector(".Categoria_1");

  a.innerHTML = "Nome";
  b.innerHTML = "Tempo";
  c.innerHTML = "Categoria";

}

function Apagar2() {
  var a = document.querySelector(".Nome_2");
  var b = document.querySelector(".Tempo_2");
  var c = document.querySelector(".Categoria_2");

  a.innerHTML = "Nome";
  b.innerHTML = "Tempo";
  c.innerHTML = "Categoria";

}

function Apagar3() {
  var a = document.querySelector(".Nome_3");
  var b = document.querySelector(".Tempo_3");
  var c = document.querySelector(".Categoria_3");

  a.innerHTML = "Nome";
  b.innerHTML = "Tempo";
  c.innerHTML = "Categoria";

}

function Apagar4() {
  var a = document.querySelector(".Nome_4");
  var b = document.querySelector(".Tempo_4");
  var c = document.querySelector(".Categoria_4");

  a.innerHTML = "Nome";
  b.innerHTML = "Tempo";
  c.innerHTML = "Categoria";

}
