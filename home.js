// swipers start

var swiper = new Swiper('.swiper-container-appointment', {
    loop: true,
    pagination: {
        el: '.swiper-pagination-appointment',
        clickable: true,
    },
    spaceBetween: 20,
    navigation: {
        // nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev',
    },
});

var swiper2 = new Swiper('.swiper-container-stock', {
    loop: true,
    pagination: {
        // el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: 40,
    breakpoints: {
        576: {
            slidesPerView: 1.8,
        },
        840: {
            slidesPerView: 2.3,
        },
        1500: {
            slidesPerView: 3,
        },

    },

    navigation: {
        nextEl: '.swiper-button-next-stock',
        prevEl: '.swiper-button-prev-stock',
    },
});

var swiper3 = new Swiper('.swiper-container-specialists', {
    loop: true,
    pagination: {
        // el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 1.6,
            spaceBetween: 30,
        },
        840: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1500: {
            slidesPerView: 2.8,
            spaceBetween: 40,

        },

    },
    navigation: {
        nextEl: '.swiper-button-next-specialists',
        prevEl: '.swiper-button-prev-specialists',
    },
});

var swiper4 = new Swiper('.swiper-container-license', {
    loop: true,
    pagination: {
        // el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: 20,
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        769: {
            slidesPerView: 4,
        },
        1500: {
            slidesPerView: 5,
        },

    },
    navigation: {
        // nextEl: '.swiper-button-next-specialists',
        // prevEl: '.swiper-button-prev-specialists',
    },
});

var swiper5 = new Swiper('.swiper-container-patient', {
    loop: true,
    pagination: {
        // el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 1.3,
            spaceBetween: 30,
        },
        769: {
            slidesPerView: 1.8,
            spaceBetween: 30,

        },
        1500: {
            slidesPerView: 2.9,
            spaceBetween: 40,

        },

    },
    navigation: {
        nextEl: '.swiper-button-next-patient',
        prevEl: '.swiper-button-prev-patient',
    },
});

// swipers end
