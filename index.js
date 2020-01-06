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
// the .to method takes the element we specify (in this case anything with .star class) and animates its properties to the values we specify (in this case, animating the x property over a duration of 3 seconds).
// the ".star" part of the command above is the Target
// next is the vars object ({x:750, duration:3}) that contains the properties we are animating and a special series of properties that tell us how the tween is going to run (duration) .  Also note that the "x:" property is the shorthand for css translateX(750px) property
