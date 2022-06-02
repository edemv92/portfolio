document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.testimonials__open-link').addEventListener('click', function() {
        document.querySelectorAll('.testimonials__item').forEach(function(item) {
            item.classList.remove('other-testimonial');
        })
        document.querySelector('.testimonials__container').removeChild(document.querySelector('.testimonials__open'))
    }) 
})