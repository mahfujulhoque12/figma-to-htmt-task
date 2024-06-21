$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})



    document.addEventListener('DOMContentLoaded', function () {
        var accordionButtons = document.querySelectorAll('.accordion-button');

        accordionButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                var plusIcon = this.querySelector('.fa-plus');
                var minusIcon = this.querySelector('.fa-minus');
                
                setTimeout(() => {
                    if (this.getAttribute('aria-expanded') === 'true') {
                        plusIcon.classList.add('d-none');
                        minusIcon.classList.remove('d-none');
                    } else {
                        plusIcon.classList.remove('d-none');
                        minusIcon.classList.add('d-none');
                    }
                }, 300); // Delay for animation effect
            });
        });
    });

