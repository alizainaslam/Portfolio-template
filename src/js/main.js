const loadingContainer = document.querySelector(".loading-container");
const showNavContainer = document.querySelector(".show-nav");
const hideNav = document.querySelector(".hide-nav");
const navContainer = document.querySelector(".nav-container");
const listLink = document.querySelectorAll(".list-link");

setTimeout(() => {
  loadingContainer.style.zIndex = 0;
  loadingContainer.style.display = "none";
}, 1500);

// Landing page: Each child should be go top synchronously.
gsap.to(".child", {
  height: 0,
  duration: 1.4,
  ease: "circ.out",
  stagger: 0.1,
});

Array.from(listLink).forEach((link) => {
  link.addEventListener("click", () => {
    navContainer.style.display = "none";
  });
});
showNavContainer.addEventListener("click", () => {
  navContainer.style.display = "none" ? "block" : "null";
});
hideNav.addEventListener("click", () => {
  navContainer.style.display = "block" ? "none" : "null";
});
