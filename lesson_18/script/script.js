
function burger () {
    const burgerIcon = document.querySelector('.header__burger');
    const burgerPopap = document.querySelector('.header__popap');
    const burgerPopapNav = document.querySelector('.header__list');
    const burgerPopapLogo = document.querySelector('.header__logo');


    burgerIcon.addEventListener('click', function (e) {
        burgerIcon.classList.toggle('active-burger-menu');
        if(burgerIcon.classList.contains('active-burger-menu')) {
            burgerPopap.style.transform = 'translateY(0)';
            burgerPopapNav.style.display = 'flex';
        } else {
            burgerPopap.style.transform = 'translateY(-200%)';
            burgerPopapNav.style.display = 'none';
        }

    })

};
burger ();
