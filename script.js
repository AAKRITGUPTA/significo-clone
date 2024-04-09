function  homeAnnimation() {
    gsap.set(".slidesm",{scale: 3})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".home",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 2
    },

})
tl.to(".videodiv",{
    '--clip': "0%",
    ease: Power3,
},'a')

.to(".slidesm",{
    scale:1,
    ease: Power2

},'a')


.to(".lft",{
    xPercent: -10,
    stagger: .03,
    ease: Power4

},'b')
.to(".rgt",{
    xPercent: 10,
    stagger: .03,
    ease: Power4

},'b')
    
}
function realPageAnnimation() {
    gsap.to(".slide",{
        scrollTrigger:{
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 2
        },
        x: -3500,
        ease: Power4
    })    
}
function teamPageAnnimation() {
    document.querySelectorAll(".listelem").forEach((el)=>{
        el.addEventListener("mousemove",function (dets) {
            gsap.to(this.querySelector(".picture"),{
                opacity: 1,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                ease: Power4,
                duration: .5,
            })
        })
        el.addEventListener("mouseleave",function(dets){
            gsap.to(this.querySelector(".picture"),{
                opacity: 0,
                ease: Power4,
                duration: .5
    
            })
        })
    })
    
}
function fullparaPageAnnimation() {
    var clutter = "";
document.querySelector(".textpara").textContent.split("").forEach(function (ele) {
    if(ele === " ") clutter += `<span>&nbsp;</span>`
    clutter += `<span>${ele}</span>`
    
})
document.querySelector(".textpara").innerHTML = clutter;

gsap.set(".textpara span",{opacity: .1})

gsap.to(".textpara span",{
    scrollTrigger:{
        trigger: ".textpara",
        start: "top 50%",
        end: "bottom 100%",
        scrub: 5,
       

    },
    opacity: 1,
    stagger: .03,
    ease: Power4
})

var clutter = "";
document.querySelector(".textpara2").textContent.split("").forEach(function (ele) {
    if(ele === " ") clutter += `<span>&nbsp;</span>`
    clutter += `<span>${ele}</span>`
    
})
document.querySelector(".textpara2").innerHTML = clutter;

gsap.set(".textpara2 span",{opacity: .1})

gsap.to(".textpara2 span",{
    scrollTrigger:{
        trigger: ".textpara2",
        start: "top 50%",
        end: "bottom 100%",
        scrub: 5,
       

    },
    opacity: 1,
    stagger: .03,
    ease: Power4
})
    
}

function loco() {
    
(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();
    
}

function  capsulePageAnnimation() {
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsule",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: 0,
        ease: Power4
    })
    
}


document.querySelectorAll(".section").forEach((e)=>{
    ScrollTrigger.create({
        trigger: e,
        start: "top top",
        end:"bottom 50%",
        onEnter: function () {
            document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function () {
            document.body.setAttribute("theme", e.dataset.color);
        },

    })
})

loco()
homeAnnimation()
realPageAnnimation()
teamPageAnnimation()
fullparaPageAnnimation()
capsulePageAnnimation()

