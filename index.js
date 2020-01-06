//very basic animation moving the h2 element on the x axis 400 pixels
gsap.to("h2", {x:400});

/* 
Gsap has 3 main methods for creating Tweens and optionally adding them to timelines:
gsap.to()
gsap.from()
gsap.fromTo()
*/

// A Tween can change a single propery of a single object over time
// gsap.to(".star", {x:750, duration:3})
// the .to method takes the element we specify (in this case anything with .star class) and animates its properties to the values we specify (in this case, animating the x property over a duration of 3 seconds).
// the ".star" part of the command above is the Target
// next is the vars object ({x:750, duration:3}) that contains the properties we are animating and a special series of properties that tell us how the tween is going to run (duration) .  Also note that the "x:" property is the shorthand for css translateX(750px) property

// So Tweens can actually change multiple properties of a single object over time too.
gsap.to(".star2", {x:750, scale:2, rotation: 360, fill: "purple", duration:3})

// Tweens can change multiple properties of multiple objects over time too!!! 
// gsap.to(".star", {x:750, rotation:360, duration:3})
// In this case, since there were mulitple items with the 'star' class all of them got the same animation

// Tweens can animate multiple objects with staggered start times!! 
gsap.to(".star", {stagger: .5, x:750, rotation:360, duration:3})