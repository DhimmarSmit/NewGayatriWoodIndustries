// gsap.from('.paragraph',{
//     y:100,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#mission .paragraph",
//         scroller:'body',
//         markers:false,
//         start:'top 50%'
//     }
// })

// gsap.from('.mission-img',{
//     y:100,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#mission .mission-img",
//         scroller:'body',
//         markers:false,
//         start:'top 50%'
//     }
// })

// gsap.from('.product-details',{
//     y:100,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#products .product-details",
//         scroller:'body',
//         markers:false,
//         start:'top 50%'
//     }
// })


// gsap.from('.service-inside-content',{
//     y:100,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#service .service-inside-content",
//         scroller:'body',
//         markers:false,
//         start:'top 50%'
//     }
// })

// gsap.from('.about-content',{
//     y:100,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#about .about-content",
//         scroller:'body',
//         markers:false,
//         start:'top 50%'
//     }
// })


// gsap.from('.left-pallet-content',{
//     x:-100,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#uses .left-pallet-content",
//         scroller:'body',
//         markers:false,
//         start:'top 50%'
//     }
// })

// gsap.from('.right-pallet-content',{
//     x:100,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#uses .right-pallet-content",
//         scroller:'body',
//         markers:false,
//         start:'top 50%'
//     }
// })

// gsap.from('.contact-content',{
//     y:100,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#contact .contact-content",
//         scroller:'body',
//         markers:false,
//         start:'top 50%'
//     }
// })


const navBar = document.getElementById('navbar');
const bars = document.querySelector('#bars');
const close = document.querySelector('#close');

bars.addEventListener('click',() =>{
    gsap.to(navBar,{
        right:0,
        duration:0.4,
        stagger:0.5,
        ease:'power2.inOut',
    })
})

close.addEventListener('click',() =>{
    navBar.style.right = '-100%';
})