// Anchor
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}


window.addEventListener('DOMContentLoaded', () => {
    const menuItem = document.querySelectorAll('.menu__wrap__content__nav__item');
    const menu = document.querySelectorAll('.menu');

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            document.getElementById('hamburger').style.display = 'none';
        });
    });
});

// More text Georgia
function moreGeorgia() {

  let more = document.getElementById("georgiaTextMob");
  let btn = document.getElementById("btnGeorgia");

  more.style.display = "block";
  btn.style.display = "none";
}

// More text About Us
function moreAboutText() {

  let moreAboutOne = document.getElementById("aboutOne");
  let moreAboutTwo = document.getElementById("aboutTwo");
  let moreAboutThree = document.getElementById("aboutThree");
  let btnAbout = document.getElementById("btnAbout");

  moreAboutOne.style.display = "block";
  moreAboutTwo.style.display = "block";
  moreAboutThree.style.display = "block";
  btnAbout.style.display = "none";
}

// More text Wedding
function moreWeddingText() {

  let moreWeddingOne = document.getElementById("weddingTextOne");
  let moreWeddingTwo = document.getElementById("weddingTextTwo");
  let btnWedding = document.getElementById("btnWeddingMore");

  moreWeddingOne.style.display = "block";
  moreWeddingTwo.style.display = "block";
  btnWedding.style.display = "none";
}

// More text Visa
function moreVisaText() {

  let moreVisaOne = document.getElementById("visaTextOne");
  let btnVisa = document.getElementById("btnVisaMore");

  moreVisaOne.style.display = "block";
  btnVisa.style.display = "none";
}