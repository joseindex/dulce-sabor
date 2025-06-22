document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario-contacto");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const pastel = document.getElementById("pastel").value;
    const comentarios = document.getElementById("comentarios").value;

    const modal = document.createElement("div");
modal.id = "modal-mensaje";
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
modal.style.display = "flex";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";
modal.style.zIndex = "1000";
modal.style.animation = "fadeIn 0.3s ease";

modal.innerHTML = `
  <div style="
      background: #fff;
      padding: 2em;
      border-radius: 16px;
      text-align: left;
      max-width: 400px;
      width: 90%;
      font-family: 'Segoe UI', sans-serif;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      animation: slideUp 0.4s ease;
  ">
    <h3 style="color: #a84432; margin-bottom: 0.5em;">🎉 Comentario enviado</h3>
    <p><strong>👤 Nombre:</strong> ${nombre}</p>
    <p><strong>📧 Email:</strong> ${email}</p>
    <p><strong>🍰 Pastel:</strong> ${pastel}</p>
    <p><strong>📝 Comentarios:</strong> ${comentarios}</p>
    <p style="margin-top: 1em; color: #5e3d2b;">Gracias por contactarnos. Te responderemos pronto.</p>
    <button id="cerrar-modal" style="
        margin-top: 1.5em;
        background-color: #d56d4a;
        color: white;
        border: none;
        padding: 0.6em 1.4em;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 0.3s ease;
    ">OK</button>
  </div>
`;

// Estilos animados con CSS
const style = document.createElement("style");
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; } to { opacity: 1; }
  }

  @keyframes slideUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  #cerrar-modal:hover {
    background-color: #a84432;
  }
`;

document.head.appendChild(style);
document.body.appendChild(modal);

// Botón cerrar
document.getElementById("cerrar-modal").addEventListener("click", () => {
  modal.remove();
});


    document.body.appendChild(modal);

    document
      .getElementById("cerrar-modal")
      .addEventListener("click", function () {
        modal.remove();
        form.reset();
        setTimeout(() => {
          document.getElementById("nombre").focus();
        }, 0);
      });
  });
});
