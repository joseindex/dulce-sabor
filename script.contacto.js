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
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";

    modal.innerHTML = `
      <div style="background: white; padding: 20px; border-radius: 10px; text-align: center;">
        <h3>Mensaje enviado</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pastel:</strong> ${pastel}</p>
        <p><strong>Comentarios:</strong> ${comentarios}</p>
        <p>Enviado, nos pondremos en contacto.</p>
        <button id="cerrar-modal">OK</button>
      </div>
    `;

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
