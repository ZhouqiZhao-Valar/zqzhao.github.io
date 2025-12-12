console.log("script.js loaded")
// 1) 页脚年份
document.getElementById("year").textContent = new Date().getFullYear();

// 2) 给导航点击加一个“当前高亮”（你会立刻感受到 JS 的价值）
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((a) => {
  a.addEventListener("click", () => {
    navLinks.forEach((x) => x.classList.remove("active"));
    a.classList.add("active");
  });
});

// 暗色模式切换 + 记忆
const toggleBtn = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️ 亮色";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  toggleBtn.textContent = isDark ? "☀️ 亮色" : "🌙 暗色";
});
