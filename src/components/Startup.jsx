import React, { useState } from "react";
import "./styles/Startup.scss";
import coverly from "./assets/coverly.svg";
import aloy from "./assets/logo.png";
import music from "./assets/logo.svg";

function Startup() {
  const [show, setShow] = useState(false);
  return (
    <div className="startup-holder">
      <main className="startup">
        <h2>My Startup Projects</h2>
        <p>
          I'm a bit of a digital product junky. Over the years, I've used
          hundreds of web and mobile apps in different industries and verticals.
          Eventually, I decided that it would be a fun challenge to try
          designing and building my own.
        </p>
        <div className="card-holder">
          <div className="card" onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(false)}>
            {show ? (
                <h1>Hello</h1>
            ) : (
              <>
                <div className="image">
                  <img src={aloy} alt="coverly" />
                  <h3>Aloy</h3>
                </div>
                <p>
                  A Fintech platform that transacts crypto and fiat currency
                </p>
                <a href="https://coverly.hng.tech/">
                  {" "}
                  <span>in development</span>
                </a>
              </>
            )}
          </div>
          <div className="card" >
                <div className="image">
                    <img src={aloy} alt="coverly" />
                    <h3>Aloy Tech</h3>
                </div>
                <p>An Electrical platform that that shows the projects i am working on.</p>
                <a href="https://coverly.hng.tech/"> <span>in development</span></a>
            </div>
          <div className="card" >
                <div className="image">
                    <img src={music} alt="coverly" />
                    <h3>Music-app</h3>
                </div>
                <p>A Music platform where users can play and download musics of their choice.</p>
                <a href="https://coverly.hng.tech/"> <span>in development</span></a>
            </div>
        </div>
      </main>
    </div>
  );
}

export default Startup;
