const loadingContainer = document.querySelector(".loading-container");
const showNavContainer = document.querySelector(".show-nav");
const hideNav = document.querySelector(".hide-nav");
const navContainer = document.querySelector(".nav-container");
const listLink = document.querySelectorAll(".list-link");

const tl = gsap.timeline();
// Landing page: Each child should be go top synchronously.
tl.to(".child", {
  height: 0,
  duration: 0.6,
  ease: "circ.out",
  stagger: 0.1,
});

Array.from(listLink).forEach((link) => {
  link.addEventListener("click", () => {
    navContainer.style.display = "none";
    (function () {
      tl.to(".child", {
        height: 0,
        duration: 0.5,
        ease: "circ.out",
        stagger: 0.1,
      });
    })();
  });
});

showNavContainer.addEventListener("click", () => {
  navContainer.style.display = "none" ? "block" : null;
  (function () {
    tl.to(".child", {
      height: "100%",
      duration: 0.2,
      ease: "circ.in",
      stagger: 0.1,
    });
    tl.from(".nav-container", {
      height: 0,
      duration: 0.5,
      ease: "circ.in",
      y: -120,
    });

    tl.from(".hide-nav", {
      opacity: 0,
      duration: 0.3,
    });
    tl.from(".list-link", {
      opacity: 0,
      y: -20,
      duration: 0.8,
      stagger: 0.1,
    });
  })();
});
hideNav.addEventListener("click", () => {
  navContainer.style.display = "block" ? "none" : "null";
  (function () {
    tl.to(".child", {
      height: 0,
      duration: 0.5,
      ease: "circ.out",
      stagger: 0.1,
    });
  })();
});
