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
    slidesPerView: 1.4,
    spaceBetween: 20,
    breakpoints: {
        500: {
            slidesPerView: 1.4,
            spaceBetween: 20,

        },
        640: {
            slidesPerView: 1.8,
            spaceBetween: 30,
        },
        840: {
            slidesPerView: 2.3,
            spaceBetween: 30,

        },
        1500: {
            slidesPerView: 3,
            spaceBetween: 40,

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
    slidesPerView: 1.2,
    spaceBetween: 10,
    breakpoints: {
        500: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        640: {
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
    slidesPerView: 1.4,
    spaceBetween: 10,
    breakpoints: {
        500: {
            slidesPerView: 2.3,
            spaceBetween: 10,
        },
        640: {
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
    slidesPerView: 1.1,
    spaceBetween: 10,
    breakpoints: {
        500: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        640: {
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

let specialistsTitle = document.querySelector('.specialists-top > h2');
let licenseTitle = document.querySelector('.license .stock-top > h2');
let stockSwiper = document.querySelector('.swiper-container-stock .swiper-wrapper');
function updateTitles() {
    let windowWidth = window.innerWidth;
    if (windowWidth <= 640) {
        if (specialistsTitle) specialistsTitle.textContent = 'Специалисты';
        if (licenseTitle) licenseTitle.textContent = 'Лицензии';
    } else {
        if (specialistsTitle) specialistsTitle.textContent = 'Наши специалисты';
        if (licenseTitle) licenseTitle.textContent = 'Наши лицензии';
    }
}
function removeClass() {
    let windowWidth = window.innerWidth;
    if (windowWidth <= 500) {
        if (stockSwiper) stockSwiper.classList.remove('swiper-wrapper');
    } else {
        if (stockSwiper) stockSwiper.classList.add('swiper-wrapper');
    }
}

updateTitles();
removeClass();

window.addEventListener('resize', updateTitles);
window.addEventListener('resize', removeClass);


// Comment

let comments = document.querySelectorAll('.comment > p');
let openComments = document.querySelectorAll('.comment-bottom > p');

openComments.forEach((btn, ind) => {
    btn.onclick = () => {
        if (!comments[ind].classList.contains('comment-open')) {
            comments[ind].classList.add('comment-open');
        } else {
            comments[ind].classList.remove('comment-open');
            comments[ind].scrollTop = 0;
        }
    }
});


let searchLaptop = document.querySelector('.for-search');
let headerSearchLaptop = document.querySelector('.header-mobile-search');

let closeSearch = document.querySelectorAll('.close-mobile-search');

let searchMobile = document.querySelector('.mobile-search-btn');
let searchMobileBlock = document.querySelector('.mobile-search');

searchLaptop.onclick = () => {
    if (window.innerWidth <= 840) {
        headerSearchLaptop.style.display = 'flex';
    }
}

searchMobile.onclick = () => {
    searchMobileBlock.style.display = 'flex';
}

closeSearch.forEach(el => {
    el.onclick = () => {
        headerSearchLaptop.style.display = 'none';
        searchMobileBlock.style.display = 'none';
    }
})


// burger menu

let burgerMenu = document.querySelector('.burger-menu-block');
let burgerMenuClose = document.querySelector('.burger-menu-close');
let burgerMenuOpen = document.querySelectorAll('.burgerMenuOpen');

burgerMenuOpen.forEach(el => {
    el.onclick = () => {
        burgerMenu.style.display = 'flex';
    }
})

burgerMenuClose.onclick = () => {
    burgerMenu.style.display = 'none';
}