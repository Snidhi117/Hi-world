const title = document.getElementById("title");
const btn = document.getElementById("actionBtn");

const greetings = [
  "Hello Web! 👋",
  "Namaste, Internet! 🙏",
  "Bonjour, World Wide Web! 🥐",
  "Hola, Web! 🌮",
  "Hello again! GitHub + VS Code = 🚀",
];

let i = 0;

btn.addEventListener("click", () => {
  i = (i + 1) % greetings.length;
  title.textContent = greetings[i];

  // Little color flair: swap CSS variables
  const root = document.documentElement;
  const current = getComputedStyle(root).getPropertyValue("--accent").trim();
  const newAccent = current === "#22c55e" ? "#06b6d4" : "#22c55e";
  root.style.setProperty("--accent", newAccent);
});
