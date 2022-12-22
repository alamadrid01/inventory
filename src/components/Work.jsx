import React from 'react'
import "./styles/Work.scss"
import coverly from "./assets/coverly.svg"

function Work() {
  return (
    <div>
      <div className="work">
        <h2>My Recent Projects</h2>
        <p>Here are a few past design projects I've worked on. Want to see more? <form action="mailto:adebayoalameen88@gmail.com" encType='text/plain' method='post'><button type='submit'>Email me.</button></form> </p>
        <div className="card-holder">
            <div className="card">
                <div className="image">
                    <img src={coverly} alt="coverly" />
                </div>
                <p>A powerful and easy to use app to generate cover letters for users</p>
                <a href="https://coverly.hng.tech/"> <span>coverly.hng.tech</span></a>
            </div>
            <div className="card">
                <div className="image">
                    <img src={coverly} alt="coverly" />
                </div>
                <p>A powerful and easy to use app to generate cover letters for users</p>
                <a href="https://coverly.hng.tech/"> <span>coverly.hng.tech</span></a>
            </div>
            <div className="card">
                <div className="image">
                    <img src={coverly} alt="coverly" />
                </div>
                <p>A powerful and easy to use app to generate cover letters for users</p>
                <a href="https://coverly.hng.tech/"> <span>coverly.hng.tech</span></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Work
