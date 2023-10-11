// 테마 데이터 저장
const html = document.firstElementChild;
let theme = localStorage.getItem('theme');

if (!theme) {
  localStorage.setItem('theme', 'dark');
  theme = localStorage.getItem('theme');
} else if (theme === 'dark') {
  html.classList.remove('light');
} else if (theme === 'light') {
  html.classList.add('light');
}

// 디바운싱 함수
const debounce = (func, delay) => {
  let timeoutId;
  
  return (e) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(()=>func(e), delay);
  };
};

// 로컬 이미지 url
const assetUrl = {
  itfin: [
    'itfin01',
    'itfin02',
    'itfin03',
    'itfin04',
    'itfin05',
    'itfin06'
  ],
  ods: [
    'pension01',
    'pension02',
    'pension03',
    'pension04',
    'pension05',
    'pension06'
  ]
};