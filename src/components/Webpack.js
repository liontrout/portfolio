import React from 'react'
import '../styles/webpack.scss'

function Webpack() {
  return (
    <div className="container">
      <div className="scene">
        <div className="webpack-cube">
          <div className="outer-cube">
            <div className="face face-top"></div>
            <div className="face face-bottom"></div>
            <div className="face face-left"></div>
            <div className="face face-right"></div>
            <div className="face face-front"></div>
            <div className="face face-back"></div>
          </div>
          <div className="inner-cube">
            <div className="face face-top"></div>
            <div className="face face-bottom"></div>
            <div className="face face-left"></div>
            <div className="face face-right"></div>
            <div className="face face-front"></div>
            <div className="face face-back"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Webpack