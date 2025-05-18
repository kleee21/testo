// script.js
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
});

orang = document.getElementById('orang');
tebing = document.getElementById('tebing');
pohon1 = document.getElementById('pohon1');
pohon2 = document.getElementById('pohon2');
title = document.getElementById('title');
asep = document.getElementById('asep');
gunung1 = document.getElementById('gunung1');
gunung2 = document.getElementById('gunung2');

window.addEventListener('scroll', () => {
    value = window.scrollY;

    orang.style.left = value * -0.03 + '%';
    tebing.style.left = value * -0.02 + '%';
    pohon1.style.left = value * -0.02 + '%';
    pohon2.style.left = value * -0.04 + '%';
    asep.style.right = value * -0.07 + '%';
    gunung1.style.right = value * -0.06 + '%';
    gunung2.style.right = value * -0.04 + '%'; 

    nav = document.getElementById('nav');
    if(value > 0){
        nav.classList.add('nav');
    } else {
        nav.classList.remove('nav');
    }
})
