const weddingDate = new Date("2026-09-21T18:30:00").getTime();

const intro = document.getElementById("intro");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");
const timer = document.getElementById("timer");

enterBtn.addEventListener("click", async () => {
  intro.classList.add("hide");

  try {
    await music.play();
  } catch (error) {
    console.log("Music blocked until user interaction.");
  }
});

function updateCountdown() {
  const now = new Date().getTime();
  const distance = Math.max(0, weddingDate - now);

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  const values = [days, hours, minutes, seconds].map(value =>
    String(value).padStart(2, "0")
  );

  timer.querySelectorAll("strong").forEach((item, index) => {
    item.textContent = values[index];
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.16
  }
);

revealElements.forEach(element => {
  revealObserver.observe(element);
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.documentElement.style.setProperty("--scroll", scrollY);
});
