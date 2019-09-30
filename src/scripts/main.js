
$(document).ready(function(){
    document.getElementById('nav-btn').addEventListener('click', handleNavAnimationClick);
});

$(document).scroll(function(){
    $(this).scrollTop() > 600 ?  $(scrollingArrows).addClass('v-hidden') : $(scrollingArrows).removeClass('v-hidden');
})


// Navigation
let nav = $('.navigation-menu-wrapper');
let navBtn = $('#nav-btn');
let sidenav = $('.nav-menu');
let main = $('.main');
let body = $('body');

handleNavAnimationClick = () => {
    if ($(navBtn).hasClass('on')){
        $(navBtn).removeClass('on');
        $(sidenav).removeClass('sidenav-transform-x');
        $(main).removeClass('main-transform-x');
        $(body).removeClass('no-scroll');
    } else {
        $(navBtn).addClass('on');
        $(sidenav).addClass('sidenav-transform-x');
        $(main).addClass('main-transform-x');
        $(body).addClass('no-scroll');
    }
}

// Hero
let scrollingArrows = $('.scroll-down-container');
