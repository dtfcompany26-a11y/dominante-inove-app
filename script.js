const videoButton = document.querySelector("#videoButton");
const faqItems = document.querySelectorAll(".faq-item");

if (videoButton) {
  videoButton.addEventListener("click", () => {
    videoButton.classList.toggle("watched");
    const label = videoButton.querySelector("small");
    label.textContent = videoButton.classList.contains("watched")
      ? "Apresentacao marcada como assistida"
      : "Toque para marcar como assistido";
  });
}

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
    const icon = item.querySelector("strong");
    icon.textContent = item.classList.contains("open") ? "-" : "+";
  });
});
