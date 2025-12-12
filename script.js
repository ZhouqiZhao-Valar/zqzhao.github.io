console.log("script.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  // 1) 页脚年份
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2) 导航点击高亮
  const navLinks = document.querySelectorAll(".nav a");
  navLinks.forEach((a) => {
    a.addEventListener("click", () => {
      navLinks.forEach((x) => x.classList.remove("active"));
      a.classList.add("active");
    });
  });

  // 3) 暗色模式切换 + 记忆
  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) {
    console.error("themeToggle button not found");
    return;
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️ 亮色";
  } else {
    toggleBtn.textContent = "🌙 暗色";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleBtn.textContent = isDark ? "☀️ 亮色" : "🌙 暗色";
  });
});
