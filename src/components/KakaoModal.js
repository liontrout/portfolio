import React, { useRef, useState } from 'react';
import useOnClickOutside from '../hooks/useOnClickOutside';
import '../styles/KakaoModal.scss';

function KakaoModal({setModalKakao}) {
  const ref = useRef();

  useOnClickOutside(ref, () => {setModalKakao(false)});

  const iframeKakao = () => {
    return {
      __html:
      "<iframe src='https://liontrout.github.io/kakao_app_2022_firebase/' width='375' height='812'></iframe>"
    }
  }

  return (
    <div className="presentation-kakao">
      <div className="wrapper-modal">
        <div className="modal-kakao" ref={ref}>
          <span
            className='modal-close'
            onClick={() => setModalKakao(false)}  
          >X</span>
          <div className='modal-flex'>
            <div dangerouslySetInnerHTML={iframeKakao()} className="modal" />
            <span className="modal-title">Kakao 구동 페이지</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KakaoModal;