$("#box1 .colorLayer").animate({ left: "0px" }, 300);
$("#box1 .colorLayer").delay(400).animate({ left: "425px" }, 300);
$("#box1 .backGroundLayer").delay(800).animate({ left: "0px" }, 500);
$("#box1 .title").animate({ left: "0px" });

$("#box2 .colorLayer").delay(300).animate({ left: "0px" }, 300);
$("#box2 .colorLayer").delay(400).animate({ left: "390px" }, 300);
$("#box2 .backGroundLayer").delay(1100).animate({ left: "0px" }, 500);
$("#box2 .title").delay(300).animate({ left: "0px" });

changeTab = (tab) => {
    $('.menu-underline').addClass('hidden');
    $(`.menu-underline.${tab}`).removeClass('hidden');
}

let currentSlider = 'slider0';

let slidersData =
{
    slide0: {
        points: '300 200, 300 400, 600 400, 600 200',
        duration: 1000,
        rotate: 0
    },
    slide1: {
        points: '300 200, 400 500, 400 500, 200 500',
        duration: 1000,
        rotate: -20
    },
    slide2: {
        points: '300 200, 300 400, 600 400, 600 200',
        duration: 1000,
        rotate: -10
    },
    slide3: {
        points: '300 200, 400 500, 400 500, 200 500',
        duration: 1000,
        rotate: -20
    }
}

changeSlider = (el) => {
    if (el.id != currentSlider) {
        currentSlider = el.id;

        $('.control-line.active').removeClass('active');
        $(el).addClass('active');

        anime({
            targets: '.morph polygon',
            points: slidersData[el.id].points,
            duration: slidersData[el.id].duration,
            rotate: slidersData[el.id].rotate
        });
    }
}