
document.addEventListener('DOMContentLoaded', function () {
    const splide = new Splide('.splide', {
        type: 'loop',
        perPage: 1,
        mediaQuery: "min",
        breakpoints: {
            768: {
                perPage: 2,
            },
            976: {
                perPage: 3,
            },
        },
        pagination: 'splide__pagination border bg-red-500', // container
        page: 'splide__pagination__page my_splide_single_page_indicator',
        arrows: 'splide__arrows your-class-arrows ',
        arrow: 'splide__arrow your-class-arrow',
        prev: 'splide__arrow--prev bg-red-500',
        next: 'splide__arrow--next bg-red-500',

    }).mount();



    const nextSlide = document.getElementById('next_slide');

    nextSlide.addEventListener('click', function () {
        splide.go('>');
    });
}); 
