import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/rohitNair21" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/rohit-n-345957192/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Rohit Nair©</p>
    </footer>
  );
}

export default Footer;