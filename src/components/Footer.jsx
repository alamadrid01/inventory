import React from 'react'
import "./styles/Footer.scss"
import letter from "./assets/letter.png";
import twitter from './assets/twitter.png'
import whatsapp from './assets/whatsapp.png'
import instagram from './assets/instagram.png'
import linkedin from './assets/linkedin.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="project">
            <h3>Start a project</h3>
            <p>Interested in working together? We should queue up a time to chat. I’ll buy the coffee.</p>
            <button>Lets do this</button>
        </div>
      <footer>
        <img src={letter} alt="letter" />
        <h3>Living, learning, & leveling up one day at a time.</h3>
        <div className="social">
                    <div className="a linkedin"> <a href="www.linkedin.com/in/adebayo-al-ameen-351a34252"><img src={linkedin}  alt="icon" /></a></div>
                    <div className="a twitter"> <a href="https://twitter.com/AdebayoAlameen?t=3L1ljJkyQUhndD4AviGltg&s=09"><img src={twitter}  alt="icon" /></a></div>
                    <div className="a whatsapp"> <a href="https://api.whatsapp.com/send?phone=+234 813 689 4051&text=hi"><img src= {whatsapp} alt="icon" /></a>  </div>
                    <div className="a instagram"><a href="https://instagram.com/alamadrid_d"> <img src= {instagram} alt="icon" /></a></div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
