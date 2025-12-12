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
