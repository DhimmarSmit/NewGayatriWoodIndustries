gsap.from('.paragraph',{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#mission .paragraph",
        scroller:'body',
        markers:false,
        start:'top 50%'
    }
})

gsap.from('.mission-img',{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#mission .mission-img",
        scroller:'body',
        markers:false,
        start:'top 50%'
    }
})

gsap.from('.product-details',{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#products .product-details",
        scroller:'body',
        markers:false,
        start:'top 50%'
    }
})


gsap.from('.service-inside-content',{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#service .service-inside-content",
        scroller:'body',
        markers:false,
        start:'top 50%'
    }
})

gsap.from('.about-content',{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about .about-content",
        scroller:'body',
        markers:false,
        start:'top 50%'
    }
})


gsap.from('.left-pallet-content',{
    x:-100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#uses .left-pallet-content",
        scroller:'body',
        markers:false,
        start:'top 50%'
    }
})

gsap.from('.right-pallet-content',{
    x:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#uses .right-pallet-content",
        scroller:'body',
        markers:false,
        start:'top 50%'
    }
})

gsap.from('.contact-content',{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#contact .contact-content",
        scroller:'body',
        markers:false,
        start:'top 50%'
    }
})



const bars = document.querySelector('#bars');
const close = document.querySelector('#close');

var tl = gsap.timeline();

tl.to('#navbar',{
    right:0,
    duration:0.7,
})

tl.from('.mobile-nav ol li',{
    x:100,
    opacity:0,
    duration:0.5,
    stagger:0.1,
})

tl.from('.mobile-img, .social-logo, #close',{
    opacity:0,
    duration:0.5,
})

tl.pause();

bars.addEventListener('click',function(){
    tl.play();
});

close.addEventListener('click',function(){
    tl.reverse();
});

function whatsapp(){
    var phonenumber = "+917573086008";
  
    var name = document.getElementById("name").value;
    var phoneno = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var cname = document.getElementById("cname").value;
    var query = document.getElementById("query").value;
  
    var url = "https://wa.me/" + phonenumber + '?text='
    +"*Name :* " + name + "%0a"
    +"*email :* " + email + "%0a"
    +"*Phoneno. :* " + phoneno + "%0a"
    +"*Company-name :* " + cname + "%0a"
    +"*Query :* " + query + "%0a%0a"
  
    window.open(url, '_blank').focus();
  }
