document.addEventListener("DOMContentLoaded", () => {
  const kumaLangButton = document.querySelector(".lang-button.kuma");
  const leftContainer = document.querySelector(".container.kuma");

  kumaLangButton.addEventListener("click", () => {
    const now = leftContainer.dataset.language || "ko";
    const next = now === "ko" ? "en" : "ko";

    setLanguage(next, kumaLangButton, leftContainer, "kuma");
  });

  setLanguage(
    localStorage.getItem("kuma-language") || "ko",
    kumaLangButton,
    leftContainer,
    "kuma",
  );

  document.querySelectorAll(".exhibition-item").forEach((details) => {
    details.addEventListener("toggle", function () {
      if (!this.open) return;

      document.querySelectorAll(".exhibition-item").forEach((other) => {
        if (other !== this) {
          other.open = false;
        }
      });
    });
  });

  document.querySelectorAll(".gallery-slider").forEach((slider) => {
    const track = slider.querySelector(".gallery-track");
    const slides = [...track.querySelectorAll(".image-container")];

    const prev = slider.querySelector(".prev-button");
    const next = slider.querySelector(".next-button");

    if (slides.length <= 1) {
      prev.classList.add("hidden");
      next.classList.add("hidden");
      return;
    }

    let i = 0;

    const update = () => {
      track.style.transform = `translateX(-${i * 100}%)`;

      prev.classList.toggle("hidden", i === 0);
      next.classList.toggle("hidden", i === slides.length - 1);
    };

    prev.addEventListener("click", () => {
      if (i > 0) {
        i--;
        update();
      }
    });

    next.addEventListener("click", () => {
      if (i < slides.length - 1) {
        i++;
        update();
      }
    });

    update();
  });
});
