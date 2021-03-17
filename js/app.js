const caravanStartBtn = document.querySelector(".startCarBtn");
const caravan = document.querySelector(".caravan");
const windCover = document.querySelector(".cover1");
const windImg = document.querySelector(".wind1");
const windCover2 = document.querySelector(".cover2");
const windImg2 = document.querySelector(".wind2");
const burger = document.querySelector(".menuWrapper");
const line1 = document.querySelector('.line1');
const line3 = document.querySelector('.line3');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const html = document.querySelector('html');
const navLinks = document.querySelectorAll('.navLinks a');

/* Kullanıcı linklerden birine tıklayıp sayfayı yenilerse sayfanın otomatik hep aynı yere dönmesini engellemek için */
window.scrollTo(0, 0);

// Winds

function createWind() {
  reset_animation(windImg);
  reset_animation(windCover);
  windImg.style.animation = "opacity 3s forwards linear";
  windCover.style.animation = "left-to-right-wind 3s forwards linear";
  setTimeout(createWind, 3500);
}

setTimeout(createWind, 3525);

function createSecondWind() {
  reset_animation(windImg2);
  reset_animation(windCover2);
  windImg2.style.animation = "opacity 3s forwards linear";
  windCover2.style.animation = "left-to-right-wind 3s forwards linear";
  setTimeout(createSecondWind, 3500);
}

setTimeout(createSecondWind, 4750);

// Caravan

let caravanStatus = false;

caravanStartBtn.addEventListener("click", () => {
  if (caravanStatus === false) {
    caravan.style.animation = "caravan-left-to-right 8s linear infinite";
    caravanStartBtn.innerText = "Stop";
    caravanStatus = true;
  } else {
    caravanStartBtn.innerText = "Start";
    caravanStatus = false;
    reset_animation(caravan);
  }
});

function reset_animation(el) {
  el.style.animation = "none";
  el.offsetHeight;
  el.style.animation = null;
}

// Navbar

let active = false;

function openNavbar() {
  line3.classList.add('lineSize');
  gsap.to(".line1", 0.5, {
    rotate: "45",
    y: '1.225rem',
    background: "black"
  });
  gsap.to(".line3", 0.5, {
    rotate: "-45",
    y: '-1.225rem',
    background: "black"
  });
  gsap.to(".fullScreenNavbar", 1, {
    clipPath: "circle(2500px at 100% -10%)"
  });
  menu.style.color = 'black';
  body.classList.add("hide");
  html.classList.add("hide");
  active = true;
}

function closeNavbar() {
  gsap.to(".line1", 0.5, {
    rotate: "0",
    y: 0,
    background: "white"
  });
  gsap.to(".line3", 0.5, {
    rotate: "0",
    y: 0,
    background: "white"
  });
  menu.style.color = 'white';
  gsap.to(".fullScreenNavbar", 1, {
    clipPath: "circle(50px at 100% -10%)"
  });
  body.classList.remove("hide");
  html.classList.remove("hide");
  line3.classList.remove('lineSize');
  active = false;
}

burger.addEventListener("click", () => {
  if (active === false)
    openNavbar();
  else
    closeNavbar();
});

navLinks.forEach(el => {
  el.addEventListener('click', () => {
    closeNavbar();
  })
})