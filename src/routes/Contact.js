import React from 'react'
import Emoji from '../components/Emoji'
import '../styles/Contact.scss'

function Contact() {
  return (
    <div className="contactId">
      <span>Contact</span>
      <div className="contactBox">
        <dl>
          <dt>Name</dt>
          <dd>김문혁</dd>
          <dt>Phone</dt>
          <dd>(+82) 010-3692-5010</dd>
          <dt>E-mail</dt>
          <dd>rlaansgur95@naver.com</dd>
          <dt>Channel</dt>
          <dd><span className='github cnt'><a href="https://github.com/liontrout/" target="_blank" rel="noreferrer">Github</a></span></dd>
        </dl>
      </div>
      <Emoji />
    </div>
  )
}

export default Contact