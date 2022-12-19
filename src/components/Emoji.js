import React from 'react'
import '../styles/Emoji.scss'

function Emoji() {
  return (
    <div className="emojiArr">
      <div className="emoji emoji_like">
        <div className="emoji_hand">
          <div className="emoji_thumb"></div>
        </div>
      </div>
      <div className="emoji emoji_love">
        <div className="emoji_heart"></div>
      </div>
      <div className="emoji emoji_haha">
        <div className="emoji_face">
          <div className="emoji_eyes"></div>
          <div className="emoji_mouth">
            <div className="emoji_tongue"></div>
          </div>
        </div>
      </div>
      <div className="emoji emoji_yay">
        <div className="emoji_face">
          <div className="emoji_eyebrows"></div>
          <div className="emoji_mouth"></div>
        </div>
      </div>
      <div className="emoji emoji_wow">
        <div className="emoji_face">
          <div className="emoji_eyebrows"></div>
          <div className="emoji_eyes"></div>
          <div className="emoji_tongue"></div>
        </div>
      </div>
      <div className="emoji emoji_sad">
        <div className="emoji_face">
          <div className="emoji_eyebrows"></div>
          <div className="emoji_eyes"></div>
          <div className="emoji_mouth"></div>
        </div>
      </div>
      <div className="emoji emoji_angry">
        <div className="emoji_face">
          <div className="emoji_eyebrows"></div>
          <div className="emoji_eyes"></div>
          <div className="emoji_mouth"></div>
        </div>
      </div>
    </div>
  )
}

export default Emoji