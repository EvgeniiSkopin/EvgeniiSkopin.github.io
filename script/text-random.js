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