setTimeout(() => {
  const sections = document.getElementsByClassName('section');
  const typingTitle = document.getElementById('typing-title');
  const menuLists = document.querySelectorAll('#menu-lists > li');

  sections[0].classList.add('on');
  menuLists[0].classList.add('on');

  const landingTitle = '<h1>Front End</h1>';
  let titleNum = 0;
  let typingInterval = setInterval(() => {
    if (titleNum >= landingTitle.length-1) {
      clearInterval(typingInterval);
    }

    typingTitle.innerText = landingTitle.slice(0, ++titleNum);
  }, 300);


  let sectionNum = 0;
  const stepFunc = (isActive) => {
    sections[sectionNum].querySelectorAll('*').forEach((item) => {
      item.style.transitionDelay = isActive ? `${Math.floor(Math.random() * 2000)}ms` : '0ms';
    });
    sections[sectionNum].classList[isActive ? 'add' : 'remove']('on');
    menuLists[sectionNum].classList[isActive ? 'add' : 'remove']('on');
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
    console.log(sectionNum)
  }, 300));

  let touchStartY = 0;
  addEventListener('touchstart', e => {
    touchStartY = e.touches[0].clientY;
  });
  addEventListener('touchend', e => {
    const touchEndY = e.changedTouches[0].clientY;

    if (touchEndY - touchStartY > 0) {
      console.log('--');
    } else {
      console.log('++');
    }
  });

  addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') {
      if (sectionNum < sections.length-1) {
        sectionStep(true);
      }
    } else if (e.key === 'ArrowUp') {
      if (sectionNum > 0) {
        sectionStep(false);
      }
    }
  });

  // 메뉴 클릭 이벤트
  menuLists.forEach((item, index) => {
    item.addEventListener('click', e => {
      stepFunc(false);

      if ([...menuLists].includes(e.target)) {
        sectionNum = index;
        stepFunc(true);
      }
    });
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

async function fetchData() {
  try {
    const response = await fetch(
      './assets/json/data.json',
      {
        headers: {
          Accept: "application / json"
        },
        method: "GET"
      },
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
}
fetchData();


const createImg = (projectName) => {
  const projectIpad = document.querySelector(`#${projectName} .ipad-image`);

  const projectUrl = [...assetUrl[projectName], assetUrl[projectName][0]];
  projectUrl.forEach((item) => {
    const mockupImg = document.createElement('div');
    mockupImg.classList.add('img');
    mockupImg.style.backgroundImage = `url('./assets/image/${item}.jpg')`;
    projectIpad.appendChild(mockupImg);
  });

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

createImg('itfin');
createImg('ods');


const mode = document.getElementById('mode');
mode.addEventListener('click', e => {
  console.log(e)
  html.classList.toggle('light');
});