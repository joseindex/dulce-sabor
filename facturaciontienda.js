let carrito = {};

function actualizarFactura() {
  const listaFactura = document.getElementById("lista-factura");
  listaFactura.innerHTML = "";

  let subtotal = 0;

  for (let nombre in carrito) {
    const item = carrito[nombre];
    subtotal += item.precio * item.cantidad;

    const li = document.createElement("li");
    li.textContent = `${nombre} x${item.cantidad} - $${(item.precio * item.cantidad).toFixed(2)}`;
    listaFactura.appendChild(li);
  }

  const iva = subtotal * 0.15;
  const total = subtotal + iva;

  document.getElementById("subtotal").textContent = subtotal.toFixed(2);
  document.getElementById("iva").textContent = iva.toFixed(2);
  document.getElementById("total").textContent = total.toFixed(2);
}

function mostrarFactura() {
  document.getElementById("facturacion").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const botones = document.querySelectorAll(".btn-comprar");

  botones.forEach(boton => {
    boton.addEventListener("click", function () {
      const nombre = this.dataset.nombre;
      const precio = parseFloat(this.dataset.precio);

      if (!carrito[nombre]) {
        carrito[nombre] = { precio: precio, cantidad: 1 };
      } else {
        carrito[nombre].cantidad += 1;
      }

      mostrarFactura();
      actualizarFactura();
    });
  });
});
