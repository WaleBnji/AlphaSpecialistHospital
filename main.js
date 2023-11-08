// MOBILE NAVIGATION MENU

let hamburger = document.getElementById('hamburgerMenu');
let navMobile = document.getElementById('navMobile');
let navArrow = document.getElementsByClassName('navArrow');
let mobileOp = document.querySelectorAll('.mobileOp');

hamburger.onclick = function () {
  hamburger.classList.toggle('show');
  navMobile.classList.toggle('show');
  // console.log(34);
};

mobileOp.onclick = function () {
  for (let i = 0; i < mobileOp.length; i++) {
    navMobile.classList.remove('show')[i];
  }
};

// NavMobile Toggle
// function undo(){

//    for(let i = 0; i < mobileOp.length; i++){
//     navMobile.classList.remove('show')[i]
//    }
// };

// SUB-NavMobile Toggle
function more() {
  let aboutMobile = document.getElementById('subAbMobile');
  aboutMobile.classList.toggle('show');
}

// Service mobile
function sore() {
  let subMobile = document.getElementById('subServMobile');
  subMobile.classList.toggle('reveal');
}

// SUB-NAV MOBILE ENDS

// FAQS

let faqsAccordion = document.getElementsByClassName('faqsBox');

for (let i = 0; i < faqsAccordion.length; i++) {
  faqsAccordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}

// FAQS END

// Footer

let footerSearchBtn = document.getElementsByClassName('footer_btn');
let footerInput = document.getElementsByClassName('footer_input').value;

footerSearchBtn.onclick = function reveal() {
  console.log(9494);
};

$('.testimonials-container').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 6000,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: true,
    },
    768: {
      items: 2,
    },
  },
});

/*=============== ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.accordion__item');

// 1. Selecionar cada item
accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.accordion__header');

  // 2. Seleccionar cada click del header
  accordionHeader.addEventListener('click', () => {
    // 7. Crear la variable
    const openItem = document.querySelector('.accordion-open');

    // 5. Llamar a la funcion toggle item
    toggleItem(item);

    // 8. Validar si existe la clase
    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

// 3. Crear una funcion tipo constante
const toggleItem = (item) => {
  // 3.1 Crear la variable
  const accordionContent = item.querySelector('.accordion__content');

  // 6. Si existe otro elemento que contenga la clase accorion-open que remueva su clase
  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
  } else {
    // 4. Agregar el height maximo del content
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
  }
};
