import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/muccijacopo/codicefiscale">
        <img className="github" src="./assets/images/github.svg"></img>
      </a>
      <a href="https://web.dev/progressive-web-apps/">
        <img className="pwa" src="./assets/images/pwa.svg"></img>
      </a>
    </footer>
  );
};

export default Footer;
