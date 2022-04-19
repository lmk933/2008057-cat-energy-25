let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-header__nav-toggle');

navToggle.classList.remove('main-header__nav-toggle--no-js');
navMain.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');

    navToggle.classList.remove('main-header__nav-toggle--nav-closed');
    navToggle.classList.add('main-header__nav-toggle--nav-opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');

    navToggle.classList.remove('main-header__nav-toggle--nav-opened');
    navToggle.classList.add('main-header__nav-toggle--nav-closed');
  }
});
