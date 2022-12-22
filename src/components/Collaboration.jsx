import React from 'react'
import "./styles/Collaboration.scss"
import hng from "./assets/hng.jpg"

function Collaboration() {
  return (
    <div >
      <main className='collaboration'>
        <h2>I'm proud to have collaborated with some awesome companies:</h2>
        <div className="logo">
            <img src={hng} alt="hng" />
            <p>HNG</p>
        </div>
        <h3>Interesting in collaborating with me?</h3>
        <p>I’m always open to discussing product design work or partnership opportunities.</p>
        <button>Start a conversation</button>
      </main>
    </div>
  )
}

export default Collaboration
