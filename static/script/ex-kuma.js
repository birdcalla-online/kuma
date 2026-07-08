const colorThemes = [
  { bg: "LemonChiffon", text: "FireBrick" },
  { bg: "LightCyan", text: "MediumBlue" },
  { bg: "HoneyDew", text: "DarkGreen" },
  { bg: "Lavender", text: "DarkMagenta" },
  { bg: "Moccasin", text: "SaddleBrown" },
  { bg: "MistyRose", text: "DarkRed" },
  { bg: "PapayaWhip", text: "Indigo" },
  { bg: "PaleGreen", text: "DarkBlue" },
  { bg: "Aquamarine", text: "DarkSlateBlue" },
  { bg: "LightGoldenRodYellow", text: "Crimson" },
  { bg: "AliceBlue", text: "DarkOrchid" },
  { bg: "BlanchedAlmond", text: "MediumVioletRed" },
  { bg: "PaleTurquoise", text: "Purple" },
  { bg: "Cornsilk", text: "Teal" },
  { bg: "Thistle", text: "DarkOliveGreen" },
  { bg: "PowderBlue", text: "Maroon" },
  { bg: "LightPink", text: "Navy" },
  { bg: "PaleGoldenRod", text: "DarkSlateGray" },
  { bg: "MediumSpringGreen", text: "FireBrick" },
  { bg: "Khaki", text: "Blue" },
];

document.addEventListener("DOMContentLoaded", () => {
  const exKumaLangButton = document.querySelector(".lang-button.ex-kuma");
  const rightContainer = document.querySelector(".container.ex-kuma");

  exKumaLangButton.addEventListener("click", () => {
    const now = rightContainer.dataset.language || "ko";
    const next = now === "ko" ? "en" : "ko";

    setLanguage(next, exKumaLangButton, rightContainer, "exkuma");
  });

  setLanguage(
    localStorage.getItem("exkuma-language") || "ko",
    exKumaLangButton,
    rightContainer,
    "exkuma",
  );

  document.querySelectorAll(".workshop-item").forEach((details) => {
    details.addEventListener("toggle", function () {
      if (!this.open) return;

      document.querySelectorAll(".workshop-item").forEach((other) => {
        if (other !== this) {
          other.open = false;
        }
      });
    });
  });

  const selected = colorThemes[Math.floor(Math.random() * colorThemes.length)];

  rightContainer.style.setProperty("--exkuma-bg", selected.bg);
  rightContainer.style.setProperty("--exkuma-text", selected.text);
});
