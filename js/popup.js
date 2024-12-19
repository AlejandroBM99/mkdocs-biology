document.addEventListener("DOMContentLoaded", function () {
  // Crea el contenedor de la imagen popup
  const popupContainer = document.createElement("div");
  popupContainer.classList.add("image-popup");
  popupContainer.innerHTML = `
    <span class="image-popup-close">&times;</span>
    <img src="" alt="Popup Image">
  `;
  document.body.appendChild(popupContainer);

  const popupImage = popupContainer.querySelector("img");
  const closeButton = popupContainer.querySelector(".image-popup-close");

  // Evento para abrir el popup
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", () => {
      popupImage.src = img.src; // Carga la imagen clicada
      popupContainer.style.display = "flex"; // Muestra el popup
    });
  });

  // Evento para cerrar el popup
  closeButton.addEventListener("click", () => {
    popupContainer.style.display = "none";
  });

  popupContainer.addEventListener("click", (e) => {
    if (e.target === popupContainer) {
      popupContainer.style.display = "none"; // Cierra al hacer clic fuera de la imagen
    }
  });
});
