import React from "react";
import { ReactComponent as Facebook } from "./images/icon-facebook.svg";
import { ReactComponent as YouTube } from "./images/icon-youtube.svg";
import { ReactComponent as Twitter } from "./images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "./images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "./images/icon-instagram.svg";
import { ReactComponent as LogoDarkSvg } from "./images/logo-dark.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <a href="#" className="footer__logo">
          <LogoDarkSvg className="img" />
        </a>

        <div className="footer__social">
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <YouTube />
          </a>
          <a href="#">
            <Twitter />
          </a>
          <a href="#">
            <Pinterest />
          </a>
          <a href="#">
            <Instagram />
          </a>
        </div>

        <div className="footer__links col1">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
        </div>
        <div className="footer__links col2">
          <a href="#">Career</a>
          <a href="#">Support</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer__cta">
          <a href="#" class="button">
            Request Invite
          </a>
        </div>
        <div className="footer__copyright">
          &copy; Easybank. All Right Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
