let scrollPositions = [
    { pageName: 'main', index: 0 },
    { pageName: '', index: 1 },
    { pageName: '', index: 2 }
];
let scrollPosition = scrollPositions[0].index;
let scrolling = false;

changePostion = () => {

}

$(window).bind('DOMMouseScroll mousewheel', (event) => {
    if (scrolling) {
        return;
    }
    scrolling = true;

    if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
        // down

        console.log('down');
    } else {
        // up

        console.log('up');
    }

    setTimeout(() => {
        scrolling = false;
      }, 1000);

    return;
});

$("#box1 .colorLayer").animate({ left: "0px" }, 300);
$("#box1 .colorLayer").delay(400).animate({ left: "425px" }, 300);
$("#box1 .backGroundLayer").delay(800).animate({ left: "0px" }, 500);
$("#box1 .title").animate({ left: "0px" });

$("#box2 .colorLayer").delay(300).animate({ left: "0px" }, 300);
$("#box2 .colorLayer").delay(400).animate({ left: "390px" }, 300);
$("#box2 .backGroundLayer").delay(1100).animate({ left: "0px" }, 500);
$("#box2 .title").delay(300).animate({ left: "0px" });

$("#box3 .colorLayer").animate({ left: "0px" }, 300);
$("#box3 .colorLayer").delay(400).animate({ left: "425px" }, 300);
$("#box3 .backGroundLayer").delay(800).animate({ left: "0px" }, 500);
$("#box3 .title").animate({ left: "0px" });

changeTab = (tab) => {
    $('.menu-underline').addClass('hidden');
    $(`.menu-underline.${tab}`).removeClass('hidden');
}

var i, N = 6, X = -225, Y = -225, R = 175;
var angle;
var s = "";
for (i = 0; i < N; i++) {
    angle = 2 * 3.14 * i / N;
    s += String(-(R * Math.cos(angle) + X)) + " " + String(-(R * Math.sin(angle) + Y)) + ",";
}
console.log(s);

// slider

let currentSlider = 'slider0';

let slidersData =
{
    slide0: {
        points: '50 50, 50 450, 450 450, 450 50, 50 50, 50 50',
        duration: 1000,
        rotate: 0,
        left: 0
    },
    slide1: {
        points: '50 225, 137.41 73.49, 312.33 73.35, 399.99 224.72, 312.82 376.36, 137.90 376.78',
        duration: 1000,
        rotate: 10,
        left: '-100%'
    },
    slide2: {
        points: '50 80, 225 480, 450 80, 50 80, 50 80, 50 80',
        duration: 1000,
        rotate: -8,
        left: '-200%'
    },
    slide3: {
        points: '50 50, 50 450, 450 450, 450 50, 50 50, 50 50',
        duration: 1000,
        rotate: 0,
        left: '-300%'
    }
}

changeSlider = (el) => {
    if (el.id != currentSlider) {
        currentSlider = el.id;

        $(".sliders-wrapper").animate({ left: slidersData[el.id].left }, 500);
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