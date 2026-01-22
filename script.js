/* BOTONES HERO / CTA */
document.getElementById("btnHero")?.addEventListener("click", () => {
  alert("Acá podés redirigir a WhatsApp, Mercado Pago o formulario");
});

document.getElementById("btnCta")?.addEventListener("click", () => {
  alert("Acción final: compra / contacto / registro");
});

/* CARRUSEL */
const carousel = document.querySelector(".carousel");
const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

function next() {
  index = (index + 1) % images.length;
  updateCarousel();
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
}

/* BOTONES */
nextBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // 🔴 evita conflicto con click de imagen
  next();
});

prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  prev();
});

/* CLICK / TAP SOBRE LA IMAGEN */
carousel.addEventListener("click", (e) => {
  const rect = carousel.getBoundingClientRect();
  const clickX = e.clientX - rect.left;

  if (clickX > rect.width / 2) {
    next();
  } else {
    prev();
  }
});
