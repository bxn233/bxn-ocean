let ocean = document.querySelector('.bxn');
let dayNight = document.querySelector('.dayNight');
let menuHeader = document.querySelector('.menuHeader');
let navigation = document.querySelector('.navigation');
let menuItems = document.querySelectorAll('.navigation li');

let darkMode = localStorage.getItem('darkMode', 'enable');

const enableDarkMode = () => {
    // thêm class dark và trong element body
    var darkMode = ocean.classList.add('dark');
    navigation.classList.add('dark');
    // thêm class active vào trong element dayNight
    dayNight.classList.add('active');

    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    // thêm class dark và trong element body
    var darkMode = ocean.classList.remove('dark');
    navigation.classList.remove('dark');

    // thêm class active vào trong element dayNight
    dayNight.classList.remove('active');

    localStorage.setItem('darkMode', null);
}

dayNight.onclick = function() {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

menuHeader.onclick = () => {
    menuHeader.classList.toggle('active')
    navigation.classList.toggle('active')
    menuItems.forEach((menuItem) => {
        let navigation = document.querySelector('.navigation')
        menuItem.onclick = function() {
            menuHeader.classList.toggle('active')
            navigation.classList.toggle('active')
            
        }
    })
}


// slider
var indexValue = 5;
showImg(indexValue);

function btn_slide(e) {
    showImg(indexValue = e);
}
var autoSlide = function() {
    setInterval(() => {
        showImg(indexValue)
        indexValue++
    }, 3000);
}
autoSlide();



function showImg(e) {
    var i;
    const imgs = document.querySelectorAll('.slider__img')
    const sliders_btn = document.querySelectorAll('.slider__btn span')

    if(e > imgs.length ) {indexValue = 1}
    if(e < 1) {indexValue = imgs.length}

    for(i = 0; i < imgs.length; i++){
        imgs[i].style.display = "none";
    }
    for(i = 0; i < sliders_btn.length; i++){
        sliders_btn[i].style.backgroundColor = "white";
    }
    imgs[indexValue - 1].style.display = "block"
    sliders_btn[indexValue - 1].style.backgroundColor = "rgb(63,208,212)"
}