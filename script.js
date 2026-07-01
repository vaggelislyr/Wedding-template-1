const weddingDate = new Date("2026-09-21T18:30:00").getTime();
const timer = document.getElementById("timer");

function updateTimer(){
  const now = Date.now();
  const diff = Math.max(0, weddingDate - now);
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  const values = [d,h,m,s].map(v => String(v).padStart(2,"0"));
  timer.querySelectorAll("strong").forEach((el,i)=> el.textContent = values[i]);
}
setInterval(updateTimer,1000);
updateTimer();

const music = document.getElementById("music");
document.getElementById("enterBtn").addEventListener("click", async () => {
  try { await music.play(); } catch(e) {}
  document.querySelector("#story").scrollIntoView({behavior:"smooth"});
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.15});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
