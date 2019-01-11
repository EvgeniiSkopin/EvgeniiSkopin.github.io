let scrollPositions = [
  { pageName: 'home', className: 'first-page-content', index: 0 },
  { pageName: 'projects', className: 'second-page-content', index: 1 },
  { pageName: 'contacts', className: 'third-page-content', index: 2 }
];
let scrollPosition = scrollPositions[0];
let scrolling = false;

// change tab
changeTab = (tab) => {
  if (scrolling) { return; }
  scrolling = true;
  let newScrollPosition = scrollPositions.find(x => x.pageName == tab);
  changePage(scrollPosition, newScrollPosition);
  scrollPosition = newScrollPosition;
  changeMenuUnderline(newScrollPosition.pageName);
  setTimeout(() => {
    scrolling = false;
  }, 1000);
}

changeMenuUnderline = (tabName) => {
  $(`.menu-underline`).animate({ left: '50%', width: '0'}, 500);
  $(`.menu-underline.${tabName}`).animate({ left: '15%', width: '85%'}, 500);
}

changePage = (prevScrollPosition, newScrollPosition) => {
  if (prevScrollPosition) {
    if (prevScrollPosition.index == 0) {
      $('.first-page-content .greeting h1').animate({ opacity: 0, top: '-75px' }, 500);
      $('.first-page-content .greeting .info-block').animate({ opacity: 0, top: '-50px' }, 700);
      $('.first-page-content .scroll').animate({ opacity: 0 }, 500);
      setTimeout(() => {
        $('.first-page-content').addClass('hidden');
      }, 800);
    }
    else if (prevScrollPosition.index == 1) {
      $('.second-page-content .slider-control').animate({ opacity: 0 }, 500);
      $('.second-page-content .morph-wrap').animate({ opacity: 0, marginTop: '-50px' }, 500);
      $('.second-page-content .sliders-wrapper .slider-content').animate({ opacity: 0, marginTop: '50px' }, 500);
      $('.second-page-content').animate({ opacity: 0 }, 500);
      setTimeout(() => {
        $('.second-page-content').addClass('hidden');
      }, 600);

      changeSlider($('#slider0')[0]);
    }
    else if (prevScrollPosition.index == 2) {
      $('.third-page-content .contacts-main .contacts-content').animate({ opacity: 0, left: '-50px' }, 500,
        () => {
          $('.third-page-content .contacts-main').animate({ opacity: 0, marginLeft: '-100px' }, 100);
        });
      setTimeout(() => {
        $('.third-page-content').addClass('hidden');
      }, 700);
    }
  }
  if (newScrollPosition) {
    if (newScrollPosition.index == 0) {
      setTimeout(() => {
        $('.first-page-content').removeClass('hidden');
        $('.first-page-content .greeting h1').animate({ opacity: 1, top: 0 }, 500);
        $('.first-page-content .greeting .info-block').animate({ opacity: 1, top: 0 }, 1000);
        setTimeout(() => {
          $('.first-page-content .scroll').animate({ opacity: 1 }, 500);
        }, 600);
      }, 600);
    }
    else if (newScrollPosition.index == 1) {
      setTimeout(() => {
        $('.second-page-content').removeClass('hidden');
        $('.second-page-content').animate({ opacity: 1 }, 500,
          () => {
            $('.second-page-content .morph-wrap').animate({ opacity: 1, marginTop: '0' }, 500);
            $('.second-page-content .sliders-wrapper .slider-content').animate({ opacity: 1, marginTop: '0' }, 500);
            setTimeout(() => {
              animateSliderParts('slider0');
              $('.second-page-content .slider-control').animate({ opacity: 1 }, 500);
            }, 500);
          });
      }, 600);
    }
    else if (newScrollPosition.index == 2) {
      setTimeout(() => {
        $('.third-page-content').removeClass('hidden');
        $('.third-page-content .contacts-main').animate({ opacity: 1, marginLeft: '0' }, 100,
          () => {
            $('.third-page-content .contacts-main .contacts-content').animate({ opacity: 1, left: '0' }, 500);
          });
      }, 700);
    }
  }
}

$(window).bind('DOMMouseScroll mousewheel', (event) => {
  if (scrolling) { return; }
  scrolling = true;
  if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
    // down
    if (scrollPosition.index < 2) {
      let newScrollPosition = scrollPositions[scrollPosition.index + 1];
      changePage(scrollPosition, newScrollPosition);
      scrollPosition = newScrollPosition;
    }
  } else {
    // up
    if (scrollPosition.index > 0) {
      let newScrollPosition = scrollPositions[scrollPosition.index - 1];
      changePage(scrollPosition, newScrollPosition);
      scrollPosition = newScrollPosition;
    }
  }
  changeMenuUnderline(scrollPosition.pageName);
  setTimeout(() => {
    scrolling = false;
  }, 1000);

  return;
});

// scroll line animation
setInterval(() => {
  if (scrollPosition.index == 0) {
    $(".scroll-line").animate({ width: "0px", opacity: "0.1" }, 500, () => { $(".scroll-line").css({ left: "125px" }); });
    $(".scroll-line").animate({ width: "60px", left: "60px", opacity: "1" }, 500);
  }
}, 1500);

// animated div blocks with text first page
$(`.menu-underline.home`).animate({ left: '15%', width: '85%'}, 500);

$(" #box1 .colorLayer").animate({ left: "0px" }, 300);
$("#box1 .colorLayer").delay(400).animate({ left: "425px" }, 300);
$("#box1 .backGroundLayer").delay(800).animate({ left: "0px" }, 500);
$("#box1 .title").animate({ left: "0px" });

$("#box2 .colorLayer").delay(300).animate({ left: "0px" }, 300);
$("#box2 .colorLayer").delay(400).animate({ left: "390px" }, 300);
$("#box2 .backGroundLayer").delay(1100).animate({ left: "0px" }, 500);
$("#box2 .title").delay(300).animate({ left: "0px" });

// slider
let currentSlider = 'slider0';

let slidersData =
{
  slider0: {
    points: '50 50, 50 450, 450 450, 450 50, 50 50, 50 50',
    duration: 1000,
    rotate: 0,
    left: 0,
    isLoaded: false
  },
  slider1: {
    points: '50 225, 137.41 73.49, 312.33 73.35, 399.99 224.72, 312.82 376.36, 137.90 376.78',
    duration: 1000,
    rotate: 10,
    left: '-100%',
    isLoaded: false
  },
  slider2: {
    points: '50 80, 225 480, 450 80, 50 80, 50 80, 50 80',
    duration: 1000,
    rotate: -8,
    left: '-200%',
    isLoaded: false
  },
  slider3: {
    points: '50 50, 50 450, 450 450, 450 50, 50 50, 50 50',
    duration: 1000,
    rotate: 0,
    left: '-300%',
    isLoaded: false
  }
}

changeSlider = (el) => {
  if (el.id != currentSlider) {
    currentSlider = el.id;

    $(".sliders-wrapper").animate({ left: slidersData[el.id].left }, 500, 
      () => {
        animateSliderParts(el.id);
      });
    $('.slider-control a.active').removeClass('active');
    $(el).addClass('active');

    anime({
      targets: '.morph polygon',
      points: slidersData[el.id].points,
      duration: slidersData[el.id].duration,
      rotate: slidersData[el.id].rotate
    });
  }
}

animateSliderParts = (slideId) => {
  if(!slidersData[slideId].isLoaded){
    slidersData[slideId].isLoaded = true;
    $(`.${slideId} .animate-box .colorLayer`).animate({ left: "0px" }, 300);
    $(`.${slideId} .animate-box .colorLayer`).delay(400).animate({ left: "425px" }, 300);
    $(`.${slideId} .animate-box .backGroundLayer`).delay(800).animate({ left: "0px" }, 500);
    $(`.${slideId} .animate-box .title`).animate({ left: "0px" });
    setTimeout(() =>{
      $(`.${slideId} .slider-title .slider-proj-name`).animate({ top: '10px' }, 500);
    }, 900);
  }
}

// var i, N = 6, X = -225, Y = -225, R = 175;
// var angle;
// var s = "";
// for (i = 0; i < N; i++) {
//     angle = 2 * 3.14 * i / N;
//     s += String(-(R * Math.cos(angle) + X)) + " " + String(-(R * Math.sin(angle) + Y)) + ",";
// }
// console.log(s);


// text random
let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$';

let tabTexts = [
  { text: 'Home', class: 'home', animating: false, count: 4 },
  { text: 'Projects', class: 'projects', animating: false, count: 8 },
  { text: 'Contacts', class: 'contacts', animating: false, count: 8 }
];

let animating = false;

$('.rand-text').mouseenter((event) => {
  if (animating) {
    return;
  }
  animating = true;

  let currentTarget = $(event.currentTarget);

  if (currentTarget.hasClass(tabTexts[0].class)) {
    changeText(currentTarget, 0);
  }
  else if (currentTarget.hasClass(tabTexts[1].class)) {
    changeText(currentTarget, 1);
  }
  else if (currentTarget.hasClass(tabTexts[2].class)) {
    changeText(currentTarget, 2);
  }

});

changeText = (currentTarget, index) => {
  let changingSpan = currentTarget.find('span')
  let text = tabTexts[index].text;

  for (let y = 0; y < tabTexts[index].count; y++) {
    setTimeout(() => {
      let newText = text = text.replaceAt(y, possible.charAt(Math.floor(Math.random() * possible.length)));
      changingSpan.text(newText);
    }, 50 * y + 1);
  }
  setTimeout(() => {
    for (let z = 0; z < tabTexts[index].count; z++) {
      setTimeout(() => {
        let newText = text = text.replaceAt(z, tabTexts[index].text.charAt(z));
        changingSpan.text(newText);
        if (z == tabTexts[index].count - 1) {
          animating = false;
        }
      }, 80 * z + 1);
    }
  }, 50 * updatingMyself[index].count + 2);
}

// create write work inspire design

let updatingMyself = [
  {
    count: 6,
    name: 'create'
  },
  {
    count: 5,
    name: 'write'
  },
  {
    count: 4,
    name: 'work'
  },
  {
    count: 7,
    name: 'inspire'
  },
  {
    count: 6,
    name: 'design'
  }]
let updatingWorkType = [
  {
    count: 5,
    name: 'UX/UI'
  },
  {
    count: 3,
    name: 'WEB'
  },
  {
    count: 4,
    name: 'LOGO'
  }]

$(document).ready(() => {
  let myselfTypeElem = $('.updating.myself');
  let i2 = 1;

  let timerUpdatingMysef = setInterval(() => {
    let text = '';
    for (let y = 0; y < updatingMyself[i2].count; y++) {
      setTimeout(() => {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        myselfTypeElem.text(text);
      }, 100 * y + 1);
    }
    setTimeout(() => {
      for (let z = 0; z < updatingMyself[i2].count; z++) {
        setTimeout(() => {
          let newText = text = text.replaceAt(z, updatingMyself[i2].name.charAt(z));
          myselfTypeElem.text(newText);
          if (z == updatingMyself[i2].count - 1) {
            i2 = i2 == 4 ? 0 : i2 + 1;
          }
        }, 100 * z + 1);
      }
    }, 100 * updatingMyself[i2].count + 2);
  }, 5000);


  let workTypeElem = $('.updating.work-type');
  let i = 1;

  let timerUpdatingWorkType = setInterval(() => {
    let text = '';

    for (let y = 0; y < updatingWorkType[i].count; y++) {
      setTimeout(() => {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        workTypeElem.text(text);
      }, 100 * y + 1);
    }

    setTimeout(() => {
      for (let z = 0; z < updatingWorkType[i].count; z++) {
        setTimeout(() => {
          let newText = text = text.replaceAt(z, updatingWorkType[i].name.charAt(z));
          workTypeElem.text(newText);

          if (z == updatingWorkType[i].count - 1) {
            i = i == 2 ? 0 : i + 1;
          }
        }, 100 * z + 1);
      }
    }, 100 * updatingWorkType[i].count + 2);

  }, 5000);

  // clearTimers = () => {
  //   clearInterval(timerUpdatingWorkType);
  // }
});

String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
let str = 'abacaba';
let index = 2;
//console.log(str.replaceAt(index, "x")); // result: abxcaba