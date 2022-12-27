import React from "react";
import me from "./assets/me.jpg";
import hero from "./assets/hero.svg";
import frontend from "./assets/frontend-icon.png";
import "./styles/HeroSection.scss";

function HeroSection() {
  return (
    <div className="hero">
      <main className="heroSection">
        <h1>Full Stack Developer & Gamer</h1>
        <p>Hi! I am a developer and I code things. </p>
        <div className="picture">
          <img src={me} alt="myself" />
        </div>
        <img className="hero-image" src={hero} alt="hero_image" />
      </main>
      <main className="about">
        <h2>Hi! I'am Al-ameen. Nice to meet you.</h2>
        <p>
          Since beginning my journey as a freelancer for over 2 years, I've
          done remote work for agencies, Worked as an intern, and collaborated
          with talented people to create digital products for both business and
          consumer use. I'm quietly confident, naturally curious, fast learner
          and self motivated person that's willing to go beyond and above any
          project.
        </p>

        <div className="card_holder">
          <div className="card">
            <div className="icon_holder">
            <img src={frontend} alt="front-end" />
            </div>
            <h3>Front-End Developer</h3>
            <p className="title">
              I like to code things from scratch,
              and enjoy bringing ideas to life in the browser.
            </p>
            <p className="language">Languages i speak:</p>
            <p className="languages">HTML, Tailwind, Javascript, CSS, Sass, Git and Github.</p>
            <p className="tools">Dev Tools:</p>
            <ul>
              <li>VS Code</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Terminal</li>
              <li>Netlify</li>
              <li>Render</li>
            </ul>
          </div>
          <div className="card">
            <div className="icon_holder">
            <img src={frontend} alt="front-end" />
            </div>
            <h3>Back-End Developer</h3>
            <p className="title">
             I value simple content structure, clean code and thoughtful interactions.
            </p>
            <p className="language" >Languages i speak:</p>
            <p className="languages">PHP, Javascript, SQL, NoSQL, Git and Github.</p>
            <p className="tools">Dev Tools:</p>
            <ul>
              <li>VS Code</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Terminal</li>
              <li>Netlify</li>
              <li>Render</li>
            </ul>
          </div>
          <div className="card">
            <div className="icon_holder">
            <img src={frontend} alt="front-end" />
            </div>
            <h3>Designer</h3>
            <p className="title">
            I value , clean design patterns, and thoughtful interactions.
            </p>
            <p className="language">Experiences I draw from:</p>
            <p className="languages">UX/UI, Product design, Freelancing, Websites, Web apps.</p>
            <p className="tools">Design Tools:</p>
            <ul>
              <li>Figma</li>
              <li>Font Awesome</li>
              <li>Sketch</li>
              <li>Corel Draw</li>
              <li>Adobe Photoshop</li>
              <li>PicsArt</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HeroSection;
