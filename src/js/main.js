// Landing page: Each child should be go top synchronously.
gsap.to(".child", {
  y: -1000,
  duration: 1,
  ease: "expoScale(0.5,7,none)",
  stagger: 0.1,
});
