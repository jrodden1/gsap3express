//very basic animation moving the h2 element on the x axis 400 pixels
gsap.to("h2", {x:400});

/* 
Gsap has 3 main methods for creating Tweens and optionally adding them to timelines:
gsap.to()
gsap.from()
gsap.fromTo()
*/

// A Tween can change a single propery of a single object over time
gsap.to(".star", {x:750, duration:3})