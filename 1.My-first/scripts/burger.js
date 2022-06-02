document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.header__burger').addEventListener('click', function() {
        document.querySelector('.header__nav').classList.add('header__burger-active');
        document.querySelector('.header__search-img').disabled = true;
        document.querySelector('.header__search-img').classList.add('search-svg-disabled');
    }) 

    document.querySelector('.header__nav-close').addEventListener('click', function() {
        document.querySelector('.header__nav').classList.remove('header__burger-active');
        document.querySelector('.header__search-img').disabled = false;
        document.querySelector('.header__search-img').classList.remove('search-svg-disabled');
    })
})