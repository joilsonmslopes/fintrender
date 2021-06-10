//-== Header fixed on top animation
(function () {
  var headerScroll = getId('header-main'),
    scrollHeight = 10,
    classHeader = 'active';

  //SCROLL
  window.addEventListener('scroll', scrollOn);

  function scrollOn() {
    animatedScroll(headerScroll, classHeader, scrollHeight);
  }

  //Função que on scroll muda o comportamento do elemento
  function animatedScroll(element, classN, height) {
    y = pageYOffset; //resgata do objeto window o valor pageYOffset e guarda na variável
    if (y > height) {
      element.className = classN;
    } else {
      element.className = '';
    }
  }

  // Função toggle adiciona ou tira a class do elemento
  function toggle(element, classe) {
    element.className = element.className ? '' : classe;
  }

  //Função que retorna o id do elemento
  function getId(id) {
    return document.getElementById(id);
  }
})();
//------------------------ Header

//-== HamburgerMenu Toggle
(function () {
  function hamburgueToggle() {
    document.getElementById('hamb').classList.toggle('open');
    document.getElementById('header-main').classList.toggle('open');
  }

  // Select all the elements with example class.
  var hambComponent = document.querySelectorAll('.hamb');
  var itemNavComponent = document.querySelectorAll('.itemNav');

  // Loop through the elements.
  for (var i = 0; i < hambComponent.length; i++) {
    hambComponent[i].addEventListener('click', hamburgueToggle);
  }
  for (var i = 0; i < itemNavComponent.length; i++) {
    itemNavComponent[i].addEventListener('click', hamburgueToggle);
  }
})();
//======================== /HamburgerMenu Toggle

//== Anchor Scrollsmooth
// Vanilla JavaScript Scroll to Anchor @ https://perishablepress.com/vanilla-javascript-scroll-anchor/
(function () {
  function scrollTo() {
    const links = document.querySelectorAll('.menu-item a');
    links.forEach((each) => (each.onclick = scrollAnchors));
  }

  function scrollAnchors(e, respond = null) {
    const distanceToTop = (el) => Math.floor(el.getBoundingClientRect().top);
    e.preventDefault();
    var targetID = respond
      ? respond.getAttribute('href')
      : this.getAttribute('href');
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
    const checkIfDone = setInterval(function () {
      const atBottom =
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 2;
      if (distanceToTop(targetAnchor) === 0 || atBottom) {
        targetAnchor.tabIndex = '-1';
        targetAnchor.focus();
        window.history.pushState('', '', targetID);
        clearInterval(checkIfDone);
      }
    }, 150);
  }

  scrollTo();
})();

//======================== /Anchor Scrollsmooth

//-== NewsletterModal Toggle
(function () {
  function modalToggle() {
    document.getElementById('form-sticker').classList.toggle('in');
    document.getElementById('modal-backdrop').classList.toggle('in');
    document.getElementById('modal-backdrop-btn').classList.toggle('in');
    document.getElementById('body').classList.toggle('in');
  }

  // Select all the elements with example class.
  var btnModal = document.querySelectorAll('.btn-modal');
  var backdropBtn = document.querySelectorAll('.modal-bta');

  // Loop through the elements.
  for (var i = 0; i < btnModal.length; i++) {
    btnModal[i].addEventListener('click', modalToggle);
  }
  for (var i = 0; i < backdropBtn.length; i++) {
    backdropBtn[i].addEventListener('click', modalToggle);
  }
})();
//======================== /NewsletterModal Toggle
