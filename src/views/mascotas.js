 const btn = document.getElementById("menu");
  const menu = document.getElementById("links");

  btn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });