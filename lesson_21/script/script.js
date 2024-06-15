
function burger () {
    const burgerIcon = document.querySelector('.top-header__burger');
    const burgerPopap = document.querySelector('.header__nav');
    const burgerBorderLine = document.querySelector('.burger-top-header__border');

    burgerIcon.addEventListener('click', function (e) {
        burgerIcon.classList.toggle('active-burger-menu');
        burgerPopap.classList.toggle('active-burger-menu');
        burgerBorderLine.classList.toggle('active-burger-menu');

    })

};
burger ();

function search() {
    const searchIcon = document.querySelector('.top-header__search');
    const searchPopap = document.querySelector('.search-top-header__wrapper');
    const searchlabel = document.querySelector('.search-top-header__label');


    searchIcon.addEventListener('click', function (e) {
        e.stopPropagation();
        searchPopap.classList.toggle('active-search');
    });

    document.addEventListener('click', function (e) {
        if (!searchlabel.contains(e.target) && !searchIcon.contains(e.target)) {
            searchPopap.classList.remove('active-search');
        }
    });
}

search();