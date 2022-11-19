const nav = document.querySelector(".navIcon");
const close = document.querySelector(".closeIcon");

nav.addEventListener("click", openNav);
function openNav() {
    const menu = document.querySelector(".mob-nav");
    menu.style.width = "100%"
}

close.addEventListener("click", closeNav)
function closeNav() {
    const menu = document.querySelector(".mob-nav");
    menu.style.width = "0%";
}

// For nav dropdown


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el))

// For fade in hero-section




const observerNode = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showcard");
    } else {
      entry.target.classList.remove("showcard");
    }
  })
})

const hide = document.querySelectorAll(".hiddenCards");
hide.forEach((ed) => observerNode.observe(ed))




const easySteps = document.querySelectorAll(".clipped-bg");

easySteps.forEach(easyStep => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(easyStep, {
    // clipPath: "circle(5% at 77% 40%)",
    clipPath: "circle(5% at 20% 20%)",
},
{
    // clipPath: "circle(75% at 50% 50%)",
    clipPath: "circle(75% at 50% 50%)",
    ease: "none",
    scrollTrigger: {
        trigger: easyStep,
        scrub: 1,
        start: "top center",
        end: "top center-=300",
    },
})
})



// For expanding BgImage



ScrollTrigger.matchMedia({

  "(min-width: 760px)": function() {
    var duration = 10,
    cards = gsap.utils.toArray(".stepsCard"),
    cardIncrement = duration / (cards.length - 1)
        tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".cards-container",
                pin: true,
                scrub: 1,
                snap: 1 / (cards.length - 1),
                start: "top top",
                end: "+=7000"
            }
        });
    

    tl.to(cards, {
        xPercent: -100 * (cards.length - 1),
        duration: duration,
        ease: "none",
    });
  },

})



// For fake horizontal scrolling




const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        const activeAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        if (activeAccordionItemHeader && activeAccordionItemHeader !== accordionItemHeader) {
            // this checks if the active class exists and if so ensure its different from the click event
            activeAccordionItemHeader.classList.toggle("active");
            activeAccordionItemHeader.nextElementSibling.style.maxHeight = 0
        }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});


// For FAQ




const videoWrappers = document.querySelectorAll(".video-wrapper");
const videoClips = document.querySelectorAll(".video-clip");
const posters = document.querySelectorAll(".poster");

$('.video-wrapper').each(function(i, obj) {
	let card = $(obj);
	let video = card.find('.video-clip')[0];
    let cardTop = card.find('.poster');

  card.hover(
    function() {
      video.play().catch(function(e) {
        console.log(e.message);
      }); 
      cardTop.hide();
    },
    function() {      
      video.pause();
      cardTop.show();
    }
  );
});

$('.platform-video-wrapper').each(function(i, gruveCard) {
	  let platformCard = $(gruveCard);
	  let platformVideo = platformCard.find('.platform-card-video')[0];
    let platformcardTop = platformCard.find('.platform-card-img');

    platformCard.hover(
    function() {
      platformVideo.play().catch(function(e) {
        console.log(e.message);
      }); 
      platformcardTop.hide();
    },
    function() {      
      platformVideo.pause();
      platformcardTop.show();
    }
  );
});


// For video hover



AOS.init({
    duration: 1800,
})


// For animate on scroll



const lapCards = document.querySelectorAll(".overlapping-card")
gsap.set(lapCards, {position: 'absolute'});
gsap.to('.overlapping-card', {
  yPercent: -100,
  stagger: 0.5,
  scrollTrigger: {
    trigger: '.overlapping-cards-container',
    start: 'top top',
    end: '+=1250px',
    pin: true,
    scrub: true
  }
})

// gsap.utils.toArray(".overlapping-card").forEach((panel, i) => {
  
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top top", 
//     pin: true, 
//     pinSpacing: false 
//   });
// });