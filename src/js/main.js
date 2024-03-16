// Landing page: Each child should be go top synchronously.
gsap.to(".child", {
  height: 0,
  duration: 1.3,
  ease: "circ.out",
  stagger: 0.1,
});
