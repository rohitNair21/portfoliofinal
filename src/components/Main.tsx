import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { TypeAnimation } from 'react-type-animation';
import avatar from '../assets/images/avatar.png';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img className="profile-avatar" src={avatar} alt="Avatar"/>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/rohitNair21" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rohit-n-345957192/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <p>
              <TypeAnimation
                sequence={[
                  'Hello, I am', 2500,
                  'Greetings, I go by', 2500,
                  "Hey, it's", 2500
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block', fontWeight: 'bold' }}
                repeat={Infinity}
              />
          </p>
          <h1>Rohit Nair</h1>
          <div className="mobile_social_icons">
            <a href="https://github.com/rohitNair21" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rohit-n-345957192/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Main;