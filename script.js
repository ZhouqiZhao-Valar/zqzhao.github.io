console.log("script.js loaded");

const posts = [
  {
    title: "第一次学 Git",
    date: "2025-01-01",
    link: "#post1"
  },
  {
    title: "HTML 入门踩坑记录",
    date: "2025-01-03",
    link: "#post2"
  },
  {
    title: "CSS 基础知识总结",
    date: "2025-01-05",
    link: "#post3"
  },
];

// 渲染文章列表
const postList = document.getElementById("postList");

console.log(posts);
posts.forEach(post => {
  const li = document.createElement("li");
  li.classList.add("post-item");
  li.innerHTML = `<a href="${post.link}">${post.title}</a> <span>(${post.date})</span>`;
  postList.appendChild(li);
});


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
