import React, { useState, useEffect } from "react";
import { ReactComponent as LogoSvg } from "./images/logo.svg";

function Header() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nonscroll", on);
  }, [on]);
  return (
    <header className={`header ${on ? "open" : "closed"}`}>
      <div className={`overlay has-fade ${on ? "fade-in" : "fade-out"}`}>
        <div className={`header__menu`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>
      </div>
      <nav className="container container--pall flex flex-jc-sb flex-ai-c">
        <a href="/" className="header__logo">
          <LogoSvg className="img" />
        </a>

        <a
          onClick={() => setOn(!on)}
          href="#"
          className={`header__toggle hide-for-desktop`}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
        <div className="header__links hide-for-mobile">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>

        <button type="button" className="hide-for-mobile">
          Request Invite
        </button>
      </nav>
    </header>
  );
}

export default Header;
