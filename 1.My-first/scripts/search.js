document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.header__search-img').addEventListener('click', function() {
        document.querySelector('.header__search').classList.add('header__search-active');
        document.querySelector('.header__search-img').classList.add('invisible');
        document.querySelector('.header__social').classList.add('invisible');
        document.querySelector('.header__languages').classList.add('invisible');
        document.querySelector('.header__title').classList.add('invisible');
        document.querySelector('.header__burger').classList.add('invisible');
    }) 

    document.querySelector('.header__search-close').addEventListener('click', function() {
        document.querySelector('.header__search').classList.remove('header__search-active');
        document.querySelector('.header__search-img').classList.remove('invisible');
        document.querySelector('.header__social').classList.remove('invisible');
        document.querySelector('.header__languages').classList.remove('invisible');
        document.querySelector('.header__title').classList.remove('invisible');
        document.querySelector('.header__burger').classList.remove('invisible');
    })
})