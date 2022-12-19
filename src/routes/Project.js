import React, { useEffect, useRef, useState } from 'react'
import Modal from '../components/Modal';
import KakaoModal from '../components/KakaoModal';
import projArr from '../json/projArr.json'
import '../styles/Project.scss'
import '../styles/Macbook.scss'
import '../styles/Ipad.scss'
import '../styles/Iphone.scss'

function Project({vw}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalKakao, setModalKakao] = useState(false);

  const project1 = projArr[0]
  const project2 = projArr[1]
  const project3 = projArr[2]
  const project4 = projArr[3]
  const project5 = projArr[4]

  const getLinks1 = Object.entries(project1.link);
  const getLinks2 = Object.entries(project2.link);
  const getLinks3 = Object.entries(project3.link);
  const getLinks4 = Object.entries(project4.link);
  const getLinks5 = Object.entries(project5.link);

  const getImages1 = Object.values(project1.image);
  const getImages2 = Object.values(project2.image);
  const getImages3 = Object.values(project3.image);
  const getImages4 = Object.values(project4.image);
  const getImages5 = Object.values(project5.image);

  const handleClick = () => {
    setModalOpen(true);
  }
  const handleKakao = () => {
    setModalKakao(true);
  }

  const targetRef2_1 = useRef(null);
  const targetRef2_2 = useRef(null);
  const targetRef2_3 = useRef(null);
  const targetRef2_4 = useRef(null);
  const targetRef2_5 = useRef(null);
  const handleScroll= () => {
    if (window.scrollY > vw(102)) {
      targetRef2_1.current.style.opacity = "1";
      targetRef2_1.current.style.transform = "translateX(0)";
    }
    if (window.scrollY > vw(155)) {
      targetRef2_2.current.style.opacity = "1";
      targetRef2_2.current.style.transform = "translateX(0)";
    }
    if (window.scrollY > vw(211)) {
      targetRef2_3.current.style.opacity = "1";
      targetRef2_3.current.style.transform = "translateX(0)";
    }
    if (window.scrollY > vw(275)) {
      targetRef2_4.current.style.opacity = "1";
      targetRef2_4.current.style.transform = "translateX(0)";
    }
    if (window.scrollY > vw(344)) {
      targetRef2_5.current.style.opacity = "1";
      targetRef2_5.current.style.transform = "translateX(0)";
    }
  }
  useEffect(() => {    
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="proj projRef1" key={project1.id} ref={targetRef2_1}>
        <span>{project1.subject}</span>
        <span className='proj1'>{project1.heading}</span>
        <div className="projBox">
          <dl>
            <dt>작업 기간</dt>
            <dd>{project1.period}</dd>
            <dt>작업 인원</dt>
            <dd>{project1.personnel}</dd>
            <dt>사용 스킬</dt>
            <dd>{project1.languages}</dd>
            <dt>주요 업무</dt>
            <dd>
              <ul>
                <li>웹 표준, 웹 접근성 준수</li>
                <li>현재 삼성전기 사이트와 비슷하게 리뉴얼</li>
                <li>메인 페이지, 서브1 페이지, 서브2 페이지 제작</li>
              </ul>
            </dd>
          </dl>
          <div className="projLink">
            {getLinks1.map((value, index) => (
              <span key={index}><a href={value[1]} target="_blank" rel="noreferrer" className={`btn-${index}`}>{value[0]}</a></span>
            )).slice(0, -1)}
            {getLinks1.map((value, index) => (
              <span
                key={index}
                onClick={handleClick}
                className={value[0]}
              >{value[0]}</span>
            )).slice(-1)}
          </div>
          <div className="mockList">
            <div className={`Id-${1}`}>
              {getImages1.map((list, index) => (
                <div className="macbook" key={index}>
                  <div className="display">
                    <div className="screen">
                      <img src={list} alt={list} className={`Img${1}-${index+1}`} />
                    </div>
                  </div>
                  <div className="base">
                    <div className="indent"></div>
                  </div>
                  <div className="bottom"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="proj projRef2" key={project2.id} ref={targetRef2_2}>
        <span>{project2.subject}</span>
        <span className='proj2'>{project2.heading}</span>
        <div className="projBox">
          <dl>
            <dt>작업 기간</dt>
            <dd>{project2.period}</dd>
            <dt>작업 인원</dt>
            <dd>{project2.personnel}</dd>
            <dt>사용 스킬</dt>
            <dd>{project2.languages}</dd>
            <dt>주요 업무</dt>
            <dd>
              <ul>
                <li>웹 표준, 웹 접근성 준수</li>
                <li>현재 CJ ONE 사이트와 비슷하게 리뉴얼</li>
                <li>반응형으로 제작하여 화면 해상도에 따라 레이아웃 변경</li>
                <li>이미지 배열 생성을 통해 GIF Animation 구현</li>
              </ul>
            </dd>
          </dl>
          <div className="projLink">
            {getLinks2.map((value, index) => (
              <span key={index}><a href={value[1]} target="_blank" rel="noreferrer">{value[0]}</a></span>
            )).slice(0, -1)}
            {getLinks2.map((value, index) => (
              <span
                key={index}
                onClick={handleClick}
                className={value[0]}
              >{value[0]}</span>
            )).slice(-1)}
          </div>
          <div className="mockList">
            <div className={`Id-${2}`}>
              {getImages2.map((list, index) => (
                <div className="macbook" key={index}>
                  <div className="display">
                    <div className="screen">
                      <img src={list} alt={list} className={`Img${2}-${index+1}`} />
                    </div>
                  </div>
                  <div className="base">
                    <div className="indent"></div>
                  </div>
                  <div className="bottom"></div>
                </div>
              )).slice(0, 1)}
              {getImages2.map((list, index) => (
                <figure className='ipad' key={index}>
                  <img src={list} alt={list} className={`Img${2}-${index+1}`} />
                </figure>
              )).slice(1, 2)}
              {getImages2.map((list, index) => (
                <div className="iphoneFront" key={index}>
                  <div className="frame"></div>
                  <div className="screen">
                    <img src={list} alt={list} className={`Img${2}-${index+1}`} />
                    <div className="island"></div>
                  </div>
                </div>
              )).slice(2, 3)}
            </div>
          </div>
        </div>
      </div>
      <div className="proj projRef3" key={project3.id} ref={targetRef2_3}>
        <span>{project3.subject}</span>
        <span className='proj3'>{project3.heading}</span>
        <div className="projBox">
          <dl>
            <dt>작업 기간</dt>
            <dd>{project3.period}</dd>
            <dt>작업 인원</dt>
            <dd>{project3.personnel}</dd>
            <dt>사용 스킬</dt>
            <dd>{project3.languages}</dd>
            <dt>주요 업무</dt>
            <dd>
              <ul>
                <li>웹 표준, 웹 접근성 준수</li>
                <li>현재 삼성전자서비스 사이트와 비슷하게 리뉴얼</li>
                <li>Sprite 이미지를 이용하여 데이터 낭비 최소화</li>
                <li>반응형으로 제작하여 화면 해상도에 따라 레이아웃 변경</li>
                <li>메인 페이지, 서브1 페이지, 서브2 페이지 제작</li>
              </ul>
            </dd>
          </dl>
          <div className="projLink">
            {getLinks3.map((value, index) => (
              <span key={index}><a href={value[1]} target="_blank" rel="noreferrer">{value[0]}</a></span>
            )).slice(0, -1)}
            {getLinks3.map((value, index) => (
              <span
                key={index}
                onClick={handleClick}
                className={value[0]}
              >{value[0]}</span>
            )).slice(-1)}
          </div>
          <div className="mockList">
            <div className={`Id-${3}`}>
              {getImages3.map((list, index) => (
                <div className="macbook" key={index}>
                  <div className="display">
                    <div className="screen">
                      <img src={list} alt={list} className={`Img${3}-${index+1}`} />
                    </div>
                  </div>
                  <div className="base">
                    <div className="indent"></div>
                  </div>
                  <div className="bottom"></div>
                </div>
              )).slice(0, 1)}
              {getImages3.map((list, index) => (
                <div className="iphoneFront" key={index}>
                  <div className="frame"></div>
                  <div className="screen">
                    <img src={list} alt={list} className={`Img${3}-${index+1}`} />
                    <div className="island"></div>
                  </div>
                </div>
              )).slice(1, 2)}
            </div>
          </div>
        </div>
      </div>
      <div className="proj projRef4" key={project4.id} ref={targetRef2_4}>
        <span>{project4.subject}</span>
        <span className='proj4'>{project4.heading}</span>
        <div className="projBox">
          <dl>
            <dt>작업 기간</dt>
            <dd>{project4.period}</dd>
            <dt>작업 인원</dt>
            <dd>{project4.personnel}</dd>
            <dt>사용 스킬</dt>
            <dd>{project4.languages}</dd>
            <dt>주요 업무</dt>
            <dd>
              <ul>
                <li>Firebase 기반으로 회원가입과 로그인 기능 구현</li>
                <li>Firebase를 이용하여 구글 및 깃허브 계정 로그인 구현</li>
                <li>Firebase 실시간 데이터베이스, 스토리지를 통해 프로필 사진, 이름 변경 및 메시징 구현</li>
                <li>react-router-dom을 통해 SPA 구현</li>
                <li>Axios 통신으로 post api, user api 로드</li>
                <li>실시간 시간 구현</li>
                <li>프로필 데이터가 Friends, More 탭에 표시</li>
                <li>채팅창에 텍스트를 입력할 시에 마이크 버튼이 보내기 버튼으로 변경</li>
                <li>채팅창에 이미지를 업로드할 시에 미리보기 구현 및 텍스트 입력 비활성화</li>
              </ul>
            </dd>
          </dl>
          <div className="projLink">
            {getLinks4.map((value, index) => (
              <span key={index} onClick={handleKakao}>{value[0]}</span>
            )).slice(0, 1)}
            {getLinks4.map((value, index) => (
              <span key={index}><a href={value[1]} target="_blank" rel="noreferrer">{value[0]}</a></span>
            )).slice(1, 2)}
            {getLinks4.map((value, index) => (
              <span
                key={index}
                onClick={handleClick}
                className={value[0]}
              >{value[0]}</span>
            )).slice(-1)}
          </div>
          <div className="mockList">
            <div className={`Id-${4}`}>
              {getImages4.map((list, index) => (
                <div className="iphoneFront" key={index}>
                  <div className="frame"></div>
                  <div className="screen">
                    <img src={list} alt={list} className={`Img${4}`} />
                    <div className="island"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="proj projRef5" key={project5.id} ref={targetRef2_5}>
        <span>{project5.subject}</span>
        <span className='proj5'>{project5.heading}</span>
        <div className="projBox">
          <dl>
            <dt>작업 기간</dt>
            <dd>{project5.period}</dd>
            <dt>작업 인원</dt>
            <dd>{project5.personnel}</dd>
            <dt>사용 스킬</dt>
            <dd>{project5.languages}</dd>
            <dt>주요 업무</dt>
            <dd>
              <ul>
                <li>Firebase 기반으로 회원가입과 로그인 기능 구현</li>
                <li>Firebase를 이용하여 구글 계정으로 로그인 구현</li>
                <li>react-router-dom을 통해 SPA 구현</li>
                <li>Axios 통신으로 영화 api 로드</li>
                <li>play 버튼을 눌렀을 때 영상 데이터가 없으면 홈으로 리다이렉트</li>
                <li>Swiper 라이브러리를 통해 영화 목록 스와이프 구현</li>
                <li>검색창 구현 및 Debouncing Hook을 통해 데이터 낭비 최소화</li>
                <li>검색어가 입력되어있을 때 엔터키를 누르면 영화 결과가 나오게 구현</li>
                <li>디테일 페이지 영화 정보에 장르 추가</li>
              </ul>
            </dd>
          </dl>
          <div className="projLink">
            {getLinks5.map((value, index) => (
              <span key={index}><a href={value[1]} target="_blank" rel="noreferrer">{value[0]}</a></span>
            )).slice(0, -1)}
            {getLinks5.map((value, index) => (
              <span
                key={index}
                onClick={handleClick}
                className={value[0]}
              >{value[0]}</span>
            )).slice(-1)}
          </div>
              <div className="mockList">
            <div className={`Id-${5}`}>
              {getImages5.map((list, index) => (
                <div className="macbook" key={index}>
                  <div className="display">
                    <div className="screen">
                      <img src={list} alt={list} className={`Img${5}`} />
                    </div>
                  </div>
                  <div className="base">
                    <div className="indent"></div>
                  </div>
                  <div className="bottom"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <Modal
          setModalOpen={setModalOpen}
        />
      )}
      {modalKakao && (
        <KakaoModal
          setModalKakao={setModalKakao}
        />
      )}
    </>
  )
}

export default Project