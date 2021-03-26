


// Hero slider
var HeroSlider = new Swiper('.hero-slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });


// Category slider
var BrandSlider = new Swiper('.featured-brand-slider', {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 10,
    },
  }
});



// Mobile toggle menu
function OpenMobileMenu() {
  var MobileSidebarMenu = document.getElementById("LeftSidebar");
  if (MobileSidebarMenu.style.display === "none" || MobileSidebarMenu.style.display === "") {
    MobileSidebarMenu.style.display = "block";
  } else {
    MobileSidebarMenu.style.display = "none";
  }
}

// toggle left profile sidebar
function SidebarToggle() {
  var SidebarMenu = document.getElementById("LeftSidebar");
  if (SidebarMenu.style.display === "none" || SidebarMenu.style.display === "") {
    SidebarMenu.style.display = "block";

  } else {
    SidebarMenu.style.display = "none";
  }
}


// Click to top

const ClickToTop = document.querySelector('.ClickTop');

window.addEventListener('scroll', () => {

    if (window.pageYOffset > 100) {
        ClickToTop.classList.add("active");
    } else {
        ClickToTop.classList.remove("active");
    }
})

ClickToTop.addEventListener("click", function(){
    window.scrollTo(0, 0);
});


// Sticky menu
window.onscroll = function() {myFunction()};

var MainMenu = document.getElementById("MainMenu");
var stickyMenu = MainMenu.offsetTop;

function myFunction() {

  if (window.pageYOffset >= stickyMenu) {

    MainMenu.classList.add("stickyMenu")
    document.querySelector('stickyMenu').style.zIndex = "1000";

  } else {

    MainMenu.classList.remove("stickyMenu");

  }

}

// Animate items
new WOW().init();



