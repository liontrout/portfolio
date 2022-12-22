import React from 'react'
import '../styles/Profile.scss'

function Profile() {
  return (
    <div className="profileId">
      <span>Profile</span>
      <div className="profileBox">
        <div className="profileImg"></div>
        <dl>
          <dt>Name</dt>
          <dd>김문혁</dd>
          <dt>Channel</dt>
          <dd><span className='github'><a href="https://github.com/liontrout/" target="_blank" rel="noreferrer">Github</a></span></dd>
          <dt>Skills</dt>
          <dd className="skills">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript(ES6)</li>
              <li>React.js</li>
              <li>Axios</li>
              <li>Firebase</li>
              <li>SASS</li>
              <li>Styled-Components</li>
              <li>Git</li>
              <li>Github</li>
            </ul>
          </dd>
          <dt>Etc.</dt>
          <dd className='etc'>
            <ul>
              <li>Figma</li>
              <li>Notion</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Lightroom</li>
            </ul>
          </dd>
          <dt>Institute</dt>
          <dd>이젠아카데미컴퓨터학원 강남점<br />UI/UX 웹&앱 디자인 & 프론트엔드(React.js)_B</dd>
        </dl>
      </div>
    </div>
  )
}

export default Profile