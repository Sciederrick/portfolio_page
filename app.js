'use strict'

// opening and closing of navbar on smaller sized devices
let openEl = document.getElementsByClassName('fa-bars')[0];
let closeEl = document.getElementsByClassName('fa-angle-up')[0];
let navlinkEls = document.getElementsByClassName('nav-links');
let navEl = document.getElementById('navbar');

openEl.addEventListener('click', function () {
  openEl.style.display='none';
  navlinkEls[2].textContent='interests_and_hobbies';
  for(let x = 0; x < navlinkEls.length; x++) {
    navlinkEls[x].setAttribute('style', 'display: block;');
  }
  navEl.setAttribute('style', 'height: auto;');
  closeEl.setAttribute('style', 'display: block; text-align: left; color: white;');
}, false);

closeEl.addEventListener('click', function () {
  for(let x = 0; x < navlinkEls.length; x++) {
    navlinkEls[x].setAttribute('style', 'visibility: hidden;');
  }
  navEl.setAttribute('style', 'padding-bottom: 0.1rem;');
  openEl.style.display="inline";
  closeEl.style.display='none';
}, false);
