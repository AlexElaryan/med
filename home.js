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

let isSLOpen = false;
// let isSLMOpen = false;

searchLaptop.onclick = () => {
    if (window.innerWidth <= 840) {
        if (!isSLOpen) {
            headerSearchLaptop.style.display = 'flex';
            isSLOpen = true;
        }
        else if (isSLOpen) {
            headerSearchLaptop.style.display = 'none';
            isSLOpen = false;
        }
    }
}

searchMobile.onclick = () => {
    searchMobileBlock.style.display = 'flex';
}

closeSearch.forEach(el => {
    el.onclick = () => {
        headerSearchLaptop.style.display = 'none';
        isSLOpen = false;
        searchMobileBlock.style.display = 'none';
    }
})


// burger menu start

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

// burger menu end

// services menu start

let servicesMenu = document.querySelector('.mobile-services-popup');
let servicesMenuOpen = document.querySelectorAll('.forServicesMb');
let servicesMenuClose = document.querySelector('.close-services-popup');
let servicesMenuBlock = document.querySelector('.mobile-services-popup > ul');
let servicesMenuPrev = document.querySelector('.mobile-services-popup-prev');

let menuStack = [];

function attachOptionClickListeners() {
    let servicesMenuOptions = document.querySelectorAll('.mobile-services-popup > ul li');
    servicesMenuOptions.forEach((opt) => {
        opt.onclick = (event) => {
            event.stopPropagation(); 
            let optChildBlock = opt.querySelector('ul');
            if (optChildBlock) {
                menuStack.push(servicesMenuBlock.innerHTML);
                servicesMenuPrev.style.display = 'flex';
                servicesMenuBlock.innerHTML = optChildBlock.innerHTML;
                attachOptionClickListeners(); 
            }
        }
    });
}

servicesMenuPrev.onclick = () => {
    if (menuStack.length > 0) {
        servicesMenuBlock.innerHTML = menuStack.pop();
        attachOptionClickListeners(); 
    }
    if (menuStack.length === 0) {
        servicesMenuPrev.style.display = 'none';
    }
}

// Open services menu
servicesMenuOpen.forEach(btn => {
    btn.onclick = (event) => {
        event.preventDefault(); 
        servicesMenu.style.display = 'flex';
        attachOptionClickListeners(); 
    }
});

// Close services menu
servicesMenuClose.onclick = (event) => {
    event.preventDefault();
    servicesMenu.style.display = 'none';
    servicesMenuBlock.innerHTML = menuStack.length > 0 ? menuStack[0] : '';
    menuStack = [];
    servicesMenuPrev.style.display = 'none';
}

attachOptionClickListeners();

// services menu end


// for submit buttons start


function checkWindowSize() {
    const button = document.getElementById('forSearchSubmit');
    if (window.innerWidth <= 840) {
        button.type = 'button';
    } else {
        button.type = 'submit';
        headerSearchLaptop.style.display = 'none';
        isSLOpen = false;
    }
}

// Initial check
checkWindowSize();

// Add event listener for window resize
window.addEventListener('resize', checkWindowSize);

// for submit buttons end


// videp start

document.getElementById('play-button').addEventListener('click', function() {
    var iframe = document.getElementById('youtube-video');
    let videoBg = document.querySelector('.whywe-bottom-forVideo');
    var src = "https://www.youtube.com/embed/F7JBhOWjz_c?enablejsapi=1";
    if (!src.includes("autoplay=1")) {
        iframe.src = src + "&autoplay=1";
    }
    this.style.display = 'none';
    videoBg.style.background= 'none';
});




// videp end