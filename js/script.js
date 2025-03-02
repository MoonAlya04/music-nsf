'use strict';


AOS.init();

let fabarsA = document.getElementsByClassName('fa-barsA')[0];
let blackBackGround = document.getElementsByClassName('blackBackGround')[0];
let mobileParent = document.getElementsByClassName('mobileParent')[0];
let socialmedia = document.getElementsByClassName('social-media')[0];
let menulink2 = document.querySelectorAll('.menu-link2');
let closeNav =  document.getElementById('closeNav');


// mobile Navigation Javascript

fabarsA.addEventListener('click',() =>{
    if(blackBackGround.classList.contains('blackBackGround')){
        blackBackGround.classList.add('blackBackGroundBlock');
        mobileParent.style.display = 'block';
    }
})

blackBackGround.addEventListener('click', () => {
    blackBackGround.classList.remove('blackBackGroundBlock');
    mobileParent.style.display = 'none';
});

menulink2.forEach((e)=>{
    e.addEventListener('click', () => {
        blackBackGround.classList.remove('blackBackGroundBlock');
        mobileParent.style.display = 'none';
    })
})

closeNav.addEventListener('click',()=>{
    blackBackGround.classList.remove('blackBackGroundBlock');
    mobileParent.style.display = 'none';
})


// mobile Navigation Javascript End