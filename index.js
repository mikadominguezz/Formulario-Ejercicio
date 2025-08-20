document.getElementById("btnEnviar").addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;

  if (nombre && apellido && edad) {
    alert(`¡Hola ${nombre} ${apellido}!`);
  } else {
    alert("Por favor, completa todos los campos.");
  }
});
