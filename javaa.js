
function ElementoNuevo() {
  var li = document.createElement("li");
  var entradavalue = document.getElementById("Entrada").value;
  var t = document.createTextNode(entradavalue);
  li.appendChild(t);
  if (entradavalue === '') {
    alert("No agregaste nada");
  } else {
    document.getElementById("Lista").appendChild(li);
  }
  document.getElementById("Entrada").value = "";

  var span = document.createElement("SPAN");
  var texto = document.createTextNode("\u00D7");
  span.className = "cerrar";
  span.appendChild(texto);
  li.appendChild(span);

  for (i = 0; i < cerrar.length; i++) {
    cerrar[i].onclick = function() {
      var elemento = this.parentElement;
      elemento.style.display = "none";
    }
  }
}

var lista = document.querySelector('ul');
lista.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);

var cerrar = document.getElementsByClassName("cerrar");
var i;
for (i = 0; i < cerrar.length; i++) {
  cerrar[i].onclick = function() {
    var elemento = this.parentElement;
    elemento.style.display = "none";
  }
}
