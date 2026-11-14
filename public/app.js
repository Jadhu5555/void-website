document.getElementById("year").textContent = new Date().getFullYear();
const button = document.getElementById("timer-button");
const value = document.getElementById("timer-value");
const progress = document.getElementById("timer-progress");
const status = document.getElementById("timer-status");
let remaining = 60;
let interval = null;
button.addEventListener("click", () => {
  if (interval) clearInterval(interval);
  remaining = 60;
  value.textContent = remaining;
  progress.style.width = "100%";
  status.textContent = "DEMO IN PROGRESS";
  button.disabled = true;
  button.textContent = "COUNTING DOWN...";
  interval = setInterval(() => {
    remaining -= 1;
    value.textContent = remaining;
    progress.style.width = (remaining / 60 * 100) + "%";
    if (remaining <= 0) {
      clearInterval(interval);
      interval = null;
      status.textContent = "MOMENT COMPLETE";
      button.disabled = false;
      button.innerHTML = 'REPLAY DEMO <span>↗</span>';
    }
  }, 1000);
});
