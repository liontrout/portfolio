import React, { useRef, useState } from 'react';
import useOnClickOutside from '../hooks/useOnClickOutside';
import projArr from '../json/projArr.json';
import '../styles/Modal.scss';

function Modal({setModalOpen}) {
  const [bnnNum, setBnnNum] = useState(0);
  const ref = useRef();

  const project1 = projArr[0]
  const project2 = projArr[1]
  const project3 = projArr[2]

  const getInspects1 = Object.entries(project1.inspect);
  const getInspects2 = Object.entries(project2.inspect);
  const getInspects3 = Object.entries(project3.inspect);
  const getAllInspects = [getInspects1, getInspects2, getInspects3]

  useOnClickOutside(ref, () => {setModalOpen(false)});

  const onClickPrev = () => {
    setBnnNum(bnnNum - 1);
    if (bnnNum === 0) {
      setBnnNum(2);
    }
  }
  const onClickNext = () => {
    setBnnNum(bnnNum + 1);
    if (bnnNum === 2) {
      setBnnNum(0);
    }
  }
  // console.log(bnnNum);

  return (
    <div className="presentation">
      <div className="wrapper-modal">
        <div className="modal" ref={ref}>
          <span
            className='modal-close'
            onClick={() => setModalOpen(false)}  
          >X</span>
          <span
            className='btnPrev'
            onClick={onClickPrev}
          ></span>
          <span
            className='btnNext'
            onClick={onClickNext}
          ></span>
          <ul className='bannerRoll'>
            {getAllInspects.map((_, index) => (
              bnnNum === index ? (
                <li
                  key={index}
                  className='on'
                  onClick={() => setBnnNum(index)}
                ></li>
              ) : (
                <li
                  key={index}
                  onClick={() => setBnnNum(index)}
                ></li>
              )
            ))}
          </ul>
          <div className='modal-flex'>
            {getInspects1.map((value, index) => (
              <div
                key={index}
                className={`modal__array ${"active"+bnnNum}`}
              >
                <img
                  src={value[1]}
                  alt={value[0]}
                  className='modal__poster-img'
                />
                <div className="modal__content">
                  <h2 className="modal__title">{projArr[0].heading}<br />{value[0]}</h2>
                </div>
              </div>
            ))}
            {getInspects2.map((value, index) => (
              <div
                key={index}
                className={`modal__array ${"active"+bnnNum}`}
              >
                <img
                  src={value[1]}
                  alt={value[0]}
                  className='modal__poster-img'
                />
                <div className="modal__content">
                  <h2 className="modal__title">{projArr[1].heading}<br />{value[0]}</h2>
                </div>
              </div>
            ))}
            {getInspects3.map((value, index) => (
              <div
                key={index}
                className={`modal__array ${"active"+bnnNum}`}
              >
                <img
                  src={value[1]}
                  alt={value[0]}
                  className='modal__poster-img'
                />
                <div className="modal__content">
                  <h2 className="modal__title">{projArr[2].heading}<br />{value[0]}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;