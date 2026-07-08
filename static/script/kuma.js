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
    const images = [...track.querySelectorAll("img")];

    if (images.length <= 1) {
      slider.querySelector(".prev-button").classList.add("hidden");
      slider.querySelector(".next-button").classList.add("hidden");
      return;
    }

    let i = 0;

    const prev = slider.querySelector(".prev-button");
    const next = slider.querySelector(".next-button");

    const update = () => {
      track.style.transform = `translateX(-${i * 100}%)`;

      prev.classList.toggle("hidden", i === 0);
      next.classList.toggle("hidden", i === images.length - 1);
    };

    prev.addEventListener("click", () => {
      if (i > 0) {
        i--;
        update();
      }
    });

    next.addEventListener("click", () => {
      if (i < images.length - 1) {
        i++;
        update();
      }
    });

    update();
  });
});
