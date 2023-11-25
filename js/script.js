gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Logo to header animation
const tl = gsap.timeline()
const texts = gsap.utils.toArray(".header_container .header_text")
texts.forEach((text, index) => {
  if (index == 0) {
    tl.from(text, { opacity: 1, duration: 1, delay: .5})
}
  //don't fade in first
  if (index != 0) {
      tl.from(text, { opacity: 0, duration: 1})
  }
  //don't fade out last box
  if (index < texts.length - 1) {
      tl.to(text, { opacity: 0,  duration: 1})
  }
})

tl.to(".header_container", {
  scrollTrigger: {
    trigger: ".header_container",
    start: "top top",
    end: "+=" + ( window.innerHeight - 48),
    scrub: true,
  },
  ease: 'none',
  height: "10vh",
});

tl.to(".header_text", {
  scrollTrigger: {
    trigger: ".header_container",
    start: "top top",
    end: "+=" + ( window.innerHeight - 48),
    scrub: true,
  },
  ease: 'none',
  scale: ".3vh",
});


const project = gsap.utils.toArray('.project_item');
const height = 100 * project.length;
const stl = gsap.timeline({
  duration: project.length,
  scrollTrigger: {
    trigger: ".project_items",
    start: "top center",
    end: "+="+height+"%",
    scrub: true,
  }
})

const pinner = gsap.timeline({
  scrollTrigger: {
    trigger: ".project_items",
    start: "top top",
    end: "+="+height+"%",
    scrub: true,
    pin: ".project_items",
  }
})

project.forEach(function(project, i) {
  gsap.set(project, {position: "absolute", left: "50%", transform: "translate(-50%, -5%)"});

  stl.from(project.querySelector('img'), {autoAlpha:0}, i)
  stl.from(project.querySelector('.info'), {autoAlpha:0, translateY: 100}, i)
  
  if (i != project.length-1) {
    stl.to(project.querySelector('.info'), {autoAlpha:0, translateY: -100}, i + 0.5)
    stl.to(project.querySelector('img'), {autoAlpha:0}, i + 0.5)
  }
  
});