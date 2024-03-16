// Landing page: Each child should be go top synchronously.
gsap.to(".child", {
  y: -1000,
  duration: 1.3,
  ease: "circ.out",
  stagger: 0.1,
});
