const setLanguage = (lang, button, container, type) => {
  container.dataset.language = lang;
  localStorage.setItem(`${type}-language`, lang);

  button.textContent = lang === "ko" ? "EN" : "KO";
};
