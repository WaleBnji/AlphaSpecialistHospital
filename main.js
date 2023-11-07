// MOBILE NAVIGATION MENU

let hamburger = document.getElementById("hamburgerMenu");
let navMobile = document.getElementById('navMobile');
let navArrow = document.getElementsByClassName('navArrow');
let mobileOp = document.querySelectorAll('.mobileOp');



hamburger.onclick = function () {
    hamburger.classList.toggle('show');
    navMobile.classList.toggle('show');
    // console.log(34);
}

mobileOp.onclick = function(){
    for(let i = 0; i < mobileOp.length; i++){
        navMobile.classList.remove('show')[i]
   }
}


// NavMobile Toggle
// function undo(){
   
//    for(let i = 0; i < mobileOp.length; i++){
//     navMobile.classList.remove('show')[i]
//    }
// };


// SUB-NavMobile Toggle
function more(){
    let aboutMobile = document.getElementById('subAbMobile');
    aboutMobile.classList.toggle('show');
};


// Service mobile
function sore(){
    let subMobile = document.getElementById('subServMobile');
    subMobile.classList.toggle('reveal');
}

// SUB-NAV MOBILE ENDS

// FAQS

let faqsAccordion = document.getElementsByClassName('faqsBox');

for (let i = 0; i < faqsAccordion.length; i++){
    faqsAccordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}

// FAQS END


// Footer

let footerSearchBtn = document.getElementsByClassName('footer_btn');
let footerInput = document.getElementsByClassName('footer_input').value;

footerSearchBtn.onclick = function reveal() {
    console.log(9494)
}