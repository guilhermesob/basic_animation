//gsap.to(".logo", {duration: 2, x: 300});

 // gsap.to(".logo", {duration: 2, x: 300, backgroundColor: "#124563",
 //    borderRadius: "10%", border:"5px solid white"});

//gsap.to(".logo", {duration: 2, x: 300, backgroundColor: "#124563",
//    borderRadius: "10%", border:"5px solid white", ease: "elastic"}); //play and show ease


// gsap.set(".logo, .autocad", {transformOrigin: "50% 50%"});
// gsap.to(".logo, .autocad", {duration: 20, rotation: 360});


 //gsap.from(".logo", {duration: 1.5, opacity:0, scale:0.3, ease: "back"})

 //gsap.to(".logo", {duration: 3, opacity:0, scale:0.3, ease: "back"});

// gsap.from(".logo", {duration: 3, opacity:0, scale:0.3, ease: "back"});

gsap.from(".circle", {duration: 1, opacity: 0, y: 150, stagger: 0.25});

//gsap.from(".circle", {duration: 1, opacity: 0, y: "random(-200, 200)", stagger: 0.25});

gsap.from(".logo", {duration: 1.5, opacity:0, scale:0.3, ease: "back"})
gsap.from(".circle", {duration: 1, opacity:0, delay:1.5, y: 150,
 stagger: 0.25});

// var tl = gsap.timeline({repeat: 2});
// tl.from(".logo", {duration: 1.5, opacity:0, scale:0.3, ease: "back"})
// tl.to(".logo", {duration: 1, rotation: 360});
// tl.from(".circle", {duration: 1, opacity:0, delay:1.5, y: 150,
//  stagger: 0.25}, "+=1");