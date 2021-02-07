/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 



let myVideo = document.getElementById("vid9"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
}  



let sign = document.getElementById("vid10"); 

function loadsign() { 
  if (sign.paused) 
    sign.play(); 
  else 
    sign.pause(); 
}  

let shob = document.getElementById("vid8"); 

function shobkisu() { 
  if (shob.paused) 
    shob.play(); 
  else 
    shob.pause(); 
}  
let cbox = document.getElementById("vid13"); 

function color() { 
  if (cbox.paused) 
    cbox.play(); 
  else 
    cbox.pause(); 
}  
let char = document.getElementById("vid12"); 

function character() { 
  if (char.paused) 
    char.play(); 
  else 
    char.pause(); 
}  
let grn = document.getElementById("vid11"); 

function green() { 
  if (grn.paused) 
    grn.play(); 
  else 
    grn.pause(); 
}
    
let bill = document.getElementById("vid7"); 

function pubg() { 
  if (bill.paused) 
    bill.play(); 
  else 
    bill.pause(); 
}  
let elec = document.getElementById("vid6"); 

function electric() { 
  if (elec.paused) 
    elec.play(); 
  else 
    elec.pause(); 
}  
let dia = document.getElementById("vid5"); 

function diamond() { 
  if (dia.paused) 
    dia.play(); 
  else 
    dia.pause(); 
}  
let create = document.getElementById("vid4"); 

function creative() { 
  if (create.paused) 
    create.play(); 
  else 
    create.pause(); 
}  
let hi = document.getElementById("vid3"); 

function hive() { 
  if (hi.paused) 
    hi.play(); 
  else 
    hi.pause(); 
}  
let mia = document.getElementById("vid2"); 

function chindi() { 
  if (mia.paused) 
    mia.play(); 
  else 
    mia.pause(); 
}  
let pac = document.getElementById("vid1"); 

function pacman() { 
  if (pac.paused) 
    pac.play(); 
  else 
    pac.pause(); 
}  
function gltch() { 
  if (glitch.paused) 
    glitch.play(); 
  else 
    glitch.pause(); 
}  
function lower() { 
  if (low.paused) 
    low.play(); 
  else 
    low.pause(); 
}  
function car() { 
  if (cars.paused) 
    cars.play(); 
  else 
    cars.pause(); 
}  
