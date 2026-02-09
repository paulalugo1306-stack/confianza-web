function ocultarSecciones() {
  document.querySelectorAll(".seccion").forEach(sec => {
    sec.style.display = "none";
  });
}

function mostrarSeccion(id) {
  ocultarSecciones();
  document.getElementById(id).style.display = "block";
}

// ===== FACTURAS =====
function agregarFactura() {
  const producto = document.getElementById("producto").value;
  if (producto === "") {
    alert("Por favor ingresa el nombre del producto");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `📄 ${producto} (Factura registrada)`;
  document.getElementById("listaFacturas").appendChild(li);

  document.getElementById("producto").value = "";
}

// ===== INICIO =====
window.onload = () => {
  mostrarSeccion("facturas");
};
