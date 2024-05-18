
function burger () {
    const burgerIcon = document.querySelector('.main-header__burger');
    const burgerContainer = document.querySelector('.burger-header__container');
    const burgerIconContainer = document.querySelector('.main-header__burger');
    burgerIcon.addEventListener('click', function (e) {
        burgerContainer.classList.toggle('burger-header-active')
        burgerIconContainer.classList.toggle('active-burger-icon')
    
    })

};
burger ();
