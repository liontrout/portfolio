addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

setTimeout(() => {
  const sections = document.getElementsByClassName('section');
  const menu = document.querySelectorAll('#menu-lists li');
  const menuProjects = document.getElementById('menu-projects');
  const projectLists = document.querySelectorAll('#menu-projects li');
  const menuLists = [...menu].filter(item => {
    return item !== menuProjects;
  });


  // 초기 설정
  sections[0].classList.add('on');
  menuLists[0].classList.add('on');


  // 타이핑 효과
  const typingTitle = document.getElementById('typing-title');
  const landingTitle = '<h1>Front End</h1>';
  let titleNum = 0;
  let typingInterval = setInterval(() => {
    if (titleNum >= landingTitle.length-1) {
      clearInterval(typingInterval);
    }

    typingTitle.innerText = landingTitle.slice(0, ++titleNum);
  }, 300);


  // 섹션 전환 효과 함수
  let sectionNum = 0;
  const stepFunc = (isActive) => {
    sections[sectionNum].querySelectorAll('*').forEach(item => {
      item.style.transitionDelay = isActive ? `${Math.floor(Math.random() * 2000)}ms` : '0ms';
    });
    sections[sectionNum].classList[isActive ? 'add' : 'remove']('on');
    menuLists[sectionNum].classList[isActive ? 'add' : 'remove']('on');

    // 프로젝트 섹션에 진입했을 때
    const isProject = [...projectLists].some(item => {
      return item.className === 'on';
    });
    if (isProject) {
      menuProjects.classList.add('on');
    } else {
      menuProjects.classList.remove('on');
    }
  };

  const sectionStep = (isDown) => {
    stepFunc(false);
  
    isDown ? sectionNum++ : sectionNum--;
  
    stepFunc(true);
  };

  // 섹션 이동 함수 by using wheel, touch, keydown event
  addEventListener('mousewheel', debounce(e => {
    if (e.wheelDeltaY < 0) {
      if (sectionNum < sections.length-1) {
        sectionStep(true);
      }
    } else {
      if (sectionNum > 0) {
        sectionStep(false);
      }
    }
  }, 300));

  let touchStartY = 0;
  addEventListener('touchstart', e => {
    touchStartY = e.touches[0].clientY;
  });
  addEventListener('touchend', e => {
    const touchEndY = e.changedTouches[0].clientY;
    
    if (touchEndY - touchStartY < -50) {
      if (sectionNum < sections.length-1) {
        sectionStep(true);
      }
    } else if (touchEndY - touchStartY > 50) {
      if (sectionNum > 0) {
        sectionStep(false);
      }
    }
  });

  addEventListener('keydown', e => {
    const down = ['ArrowDown', 'KeyJ', 'KeyS'];
    const up = ['ArrowUp', 'KeyK', 'KeyW'];

    if (down.includes(e.code)) {
      if (sectionNum < sections.length-1) {
        sectionStep(true);
      }
    } else if (up.includes(e.code)) {
      if (sectionNum > 0) {
        sectionStep(false);
      }
    }
  });

  // 메뉴 클릭 시 섹션 전환 이벤트
  menuLists.forEach((item, index) => {
    item.addEventListener('click', e => {
      stepFunc(false);

      if ([...menuLists].includes(e.target)) {
        sectionNum = index;
        stepFunc(true);
      }
    });
  });

  // 프로젝트 메뉴 클릭 시 ITFIN 섹션으로 이동
  menuProjects.addEventListener('click', e => {
    const targetText = e.target.innerText;

    if (targetText.includes('Projects')) {
      stepFunc(false);

      sectionNum = 2;
      stepFunc(true);
    }
  });
}, 5500);


// cloud raining effect
const randomIcon = (data) => {
  const iconArr = Object.values(data);
  const source = iconArr[Math.floor(Math.random() * iconArr.length)];
  
  return source;
};

const raining = (data) => {
  const cloud = document.getElementById('cloud-inner');
  const icon = document.createElement('div');
  const left = Math.floor(Math.random() * 100);
  const size = Math.floor(Math.random() * 20);
  const duration = Math.random() * 1;

  icon.classList.add('icon');
  icon.style.backgroundImage = `url(${randomIcon(data)})`;
  icon.style.left = left + '%';
  icon.style.width = size + 'px';
  icon.style.animationDuration = 1 + duration + 's';

  cloud.appendChild(icon);

  setTimeout(() => {
    cloud.removeChild(icon);
  }, 2000);
};


// 로컬 JSON fetch
(async function fetchData() {
  try {
    const response = await fetch(
      './assets/json/data.json',
      {
        headers: {
          Accept: "application / json"
        },
        method: "GET"
      }
    );
    const jsonData = await response.json();

    const profileSkills = document.querySelectorAll('#profile-description li');
    const projectSkills = document.querySelectorAll('.used-skills > li');
    const keys = Object.keys(jsonData);
    
    setInterval(() => {
      raining(jsonData);
    }, 20);


    const loopFunc = (item, skills) => {
      skills.forEach(skill => {
        const text = skill.textContent.toLowerCase();

        if (text.includes(item)) {
          skill.style.backgroundImage = `url(${jsonData[item]})`;
        }
      });
    };
    keys.forEach(item => loopFunc(item, profileSkills));
    keys.forEach(item => loopFunc(item, projectSkills));
  } catch (error) {
    console.error(error);
  }
})();


// 아이패드 목업 이미지 생성
const createImg = (projectName) => {
  if (!assetUrl[projectName].length) return false;

  const projectIpad = document.querySelector(`#${projectName} .ipad-image`);

  let isGif = false;
  const projectUrl = [...assetUrl[projectName], assetUrl[projectName][0]];
  projectUrl.forEach((item) => {
    const mockupImg = document.createElement('div');
    mockupImg.classList.add('img');
    mockupImg.style.backgroundImage = `url('./assets/image/${item}')`;
    projectIpad.appendChild(mockupImg);

    if (item.includes('.gif')) {
      isGif = true;
    }
  });

  if (isGif) return false;

  let leftNum = 0;
  const intervalFunc = () => {
    if (++leftNum >= projectUrl.length) {
      leftNum = 0;
      projectIpad.classList.add('active');
    } else {
      projectIpad.classList.remove('active');
    }
    projectIpad.style.left = `${-(leftNum * 100)}%`;
  };
  setInterval(() => intervalFunc(), 5000);
};

Object.keys(assetUrl).forEach(item => {
  createImg(item);
});


// 테마 아이콘 클릭 이벤트
const mode = document.getElementById('mode');
mode.addEventListener('click', () => {
  html.classList.toggle('light');

  if (html.className === 'light') {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.removeItem('theme');
  }
});


// 카카오 모달 이벤트
const kakaoButton = document.getElementById('kakao-button');
const modal = document.getElementById('modal');
const modalSection = document.querySelector('.modal-section');

kakaoButton.addEventListener('click', e => {
  e.preventDefault();
  modal.classList.add('on');
  setTimeout(() => {
    modalSection.classList.add('on');
  }, 0);
});

modal.addEventListener('click', e => {
  if (e.target.id === 'modal' || e.target.className === 'modal-close') {
    setTimeout(() => {
      modal.classList.remove('on');
    }, 500);
    modalSection.classList.remove('on');
  }
});


// 클립보드 클릭 이벤트
const clipboard = document.querySelectorAll('.clipboard');
const clipHandler = (e) => {
  const currentTarget = e.currentTarget;
  const currentText = currentTarget.parentElement.innerText.trim();

  (async function copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      
      currentTarget.classList.add('copied');
      setTimeout(() => {
        currentTarget.classList.remove('copied');
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  })(currentText);
};

clipboard.forEach(item => {
  item.addEventListener('click', e => clipHandler(e));
});