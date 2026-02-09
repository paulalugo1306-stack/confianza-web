function mostrarSeccion(id) {
  document.querySelectorAll("section").forEach(sec => {
    sec.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

function agregarFactura() {
  const producto = document.getElementById("producto").value;
  if (producto === "") return;

  const li = document.createElement("li");
  li.textContent = producto + " - Factura registrada";
  document.getElementById("listaFacturas").appendChild(li);

  document.getElementById("producto").value = "";
}
