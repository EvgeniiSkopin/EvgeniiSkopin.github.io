let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%$';

let originalText = 'Home';

$('.rand-text').mouseenter((event) => {
  let currentTarget = $(event.currentTarget).find('span');
  let text = '';

  for (let i = 0; i < currentTarget.text().length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  currentTarget.text(text);

  setTimeout(() => {
    currentTarget.text(originalText);
  }, 300);
});


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
  let workTypeElem = $('.updating.work-type');
  let i = 1;

  workTypeElem.text(updatingWorkType[0].name);

  let timerUpdatingWorkType = setInterval(() => {
    let text = '';

    for (let y = 0; y < updatingWorkType[i].count; y++) {
      setTimeout(() => {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        workTypeElem.text(text);
      }, 100 * y + 1);
    }

    setTimeout(() => {
      workTypeElem.text(updatingWorkType[i].name);
      i = i == 2 ? 0 : i + 1;
    }, 100 * updatingWorkType[i].count + 2);
  }, 5000);

  clearTimers = () => {
    clearInterval(timerUpdatingWorkType);
  }
});
