const loading = document.getElementById('loading');
const loadingTop = document.getElementById('loading-top');
const loadingBottom = document.getElementById('loading-bottom');
const loadingSection = document.getElementsByClassName('loading-section');
const loadingGauge = document.getElementById('loading-gauge');
const loadingNumber = document.getElementById('loading-number');
const loadedMessage = document.getElementsByClassName('loaded-message');
let loadingPercent = 0;

const spinner = () => {
  loadingTop.classList.add('on');
  loadingBottom.classList.add('on');

  [...loadedMessage].forEach(item => {
    item.classList.add('on');
  });

  setTimeout(() => {
    [...loadingSection].forEach(item => {
      item.classList.add('on');
    });
  }, 3500);

  setTimeout(() => {
    loading.classList.add('on');
  }, 4500);
};

let loadingInterval = setInterval(() => {
  if (++loadingPercent <= 100) {
    loadingGauge.style.width = `${loadingPercent}%`;
    loadingNumber.innerText = `${loadingPercent}%`;
  } else {
    clearInterval(loadingInterval);
    spinner();
  }
}, 15);