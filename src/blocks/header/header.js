import ready from "../../js/utils/documentReady.js";

ready(function () {
  const closeMenu = document.querySelector(".header__close-menu");
  const overlay = document.querySelector(".overlay");

  closeMenu.addEventListener("click", () => {
    overlay.classList.contains("overlay--active") === false
      ? overlay.classList.add("overlay--active")
      : overlay.classList.remove("overlay--active");
  });
});
