/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')


if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}


if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header')

  this.scrollY >= 50 ? header.classList.add('header-bg')
    : header.classList.remove('header-bg')
}
window.addEventListener('scroll', scrollHeader)


gsap.from('.home-img img', {y: 100, opacity: 0, delay: .3, duration: 1})
gsap.from('.home-head', {x: 100, opacity: 0, delay: 1, duration: 1, distance: '-80px'})
gsap.from('.home-content p', {x: -100, opacity: 0, delay: 1.2, duration: 1})


ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 300
})

ScrollReveal().reveal(".about-grid h1", { origin: 'left', duration: '2000'})
ScrollReveal().reveal(".about-grid img, .build-link", { origin: 'bottom', duration: '2000'})
ScrollReveal().reveal(".about-grid-2 img, .services-header h1, .grid-2-div, .feedback-header h1, .blog-header h1", { origin: 'top', duration: '1000'})
ScrollReveal().reveal(".about-grid-2 p", { origin: 'right', duration: '2000'})
ScrollReveal().reveal(".f-1, .grid-1-div, .g-7, .build-header h1, .learn-header-content h1", { origin: 'right', duration: '2000'})
ScrollReveal().reveal(".f-2, .services-header p, .feedback-header p, .blog-header p", { origin: 'bottom', duration: '2000'})
ScrollReveal().reveal(".f-3, .grid-1-div-2, .g-6, .build-header p, .learn-header-content p", { origin: 'left', duration: '2000'})
ScrollReveal().reveal(".feedbacks-grid p", { scale: 0.8, origin: 'top', duration: '2000'})
ScrollReveal().reveal(".bg-1", { scale: 0.8, origin: 'right', duration: '2000'})
ScrollReveal().reveal(".bg-2", { scale: 0.8, origin: 'left', duration: '2000'})
ScrollReveal().reveal(".bg-3", { scale: 0.8, origin: 'bottom', duration: '2000'})


$('.learn-grid-1').owlCarousel({
  autoplay:true,
  slideSpeed:3000,
  items:1,
  loop:true,
  nav:false,
  margin:30,
  dots:true,
  responsive:{
    320:{
      items:1
    },
    767:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
  }
});


$('.feedback-grid-1').owlCarousel({
  autoplay:true,
  slideSpeed:1000,
  items:1,
  loop:true,
  nav:false,
  margin:30,
  dots:true,
  responsive:{
    320:{
      items:1
    },
    767:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
  }
});