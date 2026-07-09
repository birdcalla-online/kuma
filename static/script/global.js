// close sticker
document.addEventListener("DOMContentLoaded", () => {
  const sticker = document.querySelector(".sticker");

  if (sticker) {
    sticker.addEventListener("click", () => {
      sticker.style.display = "none";
    });
  }
});

const setLanguage = (lang, button, container, type) => {
  container.dataset.language = lang;
  localStorage.setItem(`${type}-language`, lang);

  button.textContent = lang === "ko" ? "EN" : "KO";
};

const setClock = (clockId, date) => {
  const clock = document.getElementById(clockId);
  if (!clock) return;

  const hourHand = clock.querySelector(".hour-hand");
  const minuteHand = clock.querySelector(".minute-hand");
  const secondHand = clock.querySelector(".second-hand");

  if (!hourHand || !minuteHand || !secondHand) return;

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const secondDeg = seconds * 6;

  hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

const  updateClocks = () => {
  const now = new Date();

  // 방문자(클라이언트) 로컬 시간
  setClock("local-clock", now);

  // 한국 시간 (Asia/Seoul)
  const koreaNow = new Date(
    now.toLocaleString("en-US", {
      timeZone: "Asia/Seoul",
    })
  );
  setClock("korea-clock", koreaNow);
}

const randomizeClockPosition = () => {
  const clock = document.getElementById("local-clock");
  if (!clock) return;

  const margin = 90;

  const isSplitLayout = !!clock.closest("main .container.ex-kuma");

  let left, right;

  if (isSplitLayout) {
    left = window.innerWidth / 2 + margin;
    right = window.innerWidth - margin;
  } else {
    left = margin;
    right = window.innerWidth - margin;
  }

  const x = Math.random() * (right - left) + left;
  const y = Math.random() * (window.innerHeight - margin * 2) + margin;

  clock.style.left = `${x}px`;
  clock.style.top = `${y}px`;
  clock.style.transform = "none";
};

let resizeTimer;

document.addEventListener("DOMContentLoaded", () => {
  randomizeClockPosition();
  updateClocks();
  setInterval(updateClocks, 1000);
});

window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(randomizeClockPosition, 200);
});
