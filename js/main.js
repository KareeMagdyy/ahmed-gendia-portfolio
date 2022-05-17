const navOpen = document.querySelector(".nav-icon");
const mainNavLinks = document.querySelector(".main-nav_links");
const mainNavLis = document.querySelectorAll(".main-nav_links li");
const toTop = document.querySelector(".to-top");

navOpen.addEventListener("click", () => {
  mainNavLinks.classList.toggle("show");
  document.body.classList.toggle("body-overflow");
});

mainNavLis.forEach((link) => {
  link.addEventListener("click", () => {
    mainNavLinks.classList.remove("show");
    document.body.classList.remove("body-overflow");
  });
});

window.onscroll = () => {
  if (window.scrollY >= 400) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
};
toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});
