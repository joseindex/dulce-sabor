let carrito = {};

function actualizarFactura() {
  const listaFactura = document.getElementById("lista-factura");
  listaFactura.innerHTML = "";

  let subtotal = 0;

  for (let nombre in carrito) {
    const item = carrito[nombre];
    subtotal += item.precio * item.cantidad;

    const li = document.createElement("li");
    li.innerHTML = `
      ${nombre} x${item.cantidad} - $${(item.precio * item.cantidad).toFixed(2)}
      <button class="btn-mas" data-nombre="${nombre}">+1</button>
      <button class="btn-menos" data-nombre="${nombre}">-1</button>
    `;
    listaFactura.appendChild(li);
  }

  const iva = subtotal * 0.15;
  const total = subtotal + iva;

  document.getElementById("subtotal").textContent = subtotal.toFixed(2);
  document.getElementById("iva").textContent = iva.toFixed(2);
  document.getElementById("total").textContent = total.toFixed(2);

  agregarEventosCantidad();
}

function agregarEventosCantidad() {
  document.querySelectorAll(".btn-mas").forEach(btn => {
    btn.addEventListener("click", () => {
      const nombre = btn.dataset.nombre;
      carrito[nombre].cantidad += 1;
      actualizarFactura();
    });
  });

  document.querySelectorAll(".btn-menos").forEach(btn => {
    btn.addEventListener("click", () => {
      const nombre = btn.dataset.nombre;
      carrito[nombre].cantidad -= 1;
      if (carrito[nombre].cantidad <= 0) delete carrito[nombre];
      actualizarFactura();
    });
  });
}

function mostrarFactura() {
  document.getElementById("facturacion").style.display = "block";
}

function ocultarFactura() {
  document.getElementById("facturacion").style.display = "none";
}

function vaciarCarrito() {
  carrito = {};
  actualizarFactura();
  ocultarFactura();
}

function mostrarResumenCompra() {
  const resumen = document.getElementById("resumen-final");
  resumen.innerHTML = "";

  for (let nombre in carrito) {
    const item = carrito[nombre];
    const p = document.createElement("p");
    p.textContent = `${nombre} x${item.cantidad} - $${(item.precio * item.cantidad).toFixed(2)}`;
    resumen.appendChild(p);
  }

  const subtotal = parseFloat(document.getElementById("subtotal").textContent);
  const iva = parseFloat(document.getElementById("iva").textContent);
  const total = parseFloat(document.getElementById("total").textContent);

  resumen.innerHTML += `<p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>`;
  resumen.innerHTML += `<p><strong>IVA:</strong> $${iva.toFixed(2)}</p>`;
  resumen.innerHTML += `<p><strong>Total:</strong> $${total.toFixed(2)}</p>`;

  document.getElementById("modal-compra").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal-compra").style.display = "none";
  vaciarCarrito();
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

  document.getElementById("btn-cancelar").addEventListener("click", vaciarCarrito);
  document.getElementById("btn-confirmar").addEventListener("click", mostrarResumenCompra);
  document.getElementById("cerrar-modal").addEventListener("click", cerrarModal);
});


