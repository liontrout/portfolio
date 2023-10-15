// 테마 데이터 저장
const html = document.firstElementChild;
const theme = localStorage.getItem('theme');

if (theme === 'light') {
  html.classList.add(theme);
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
    'itfin01.jpg',
    'itfin02.jpg',
    'itfin03.jpg',
    'itfin04.jpg',
    'itfin05.jpg',
    'itfin06.jpg'
  ],
  ods: [
    'pension01.jpg',
    'pension02.jpg',
    'pension03.jpg',
    'pension04.jpg',
    'pension05.jpg',
    'pension06.jpg',
    'pension07.jpg'
  ],
  netflix: [
    'netflix01.gif'
  ],
  kakao: [
    'kakao01.gif'
  ]
};