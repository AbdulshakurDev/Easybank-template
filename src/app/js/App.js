import React, { useEffect, useState } from "react";
import "../sass/App.scss";
import { ReactComponent as LogoSvg } from "./images/logo.svg";
import { ReactComponent as LogoDarkSvg } from "./images/logo-dark.svg";
import { ReactComponent as OnlineSvg } from "./images/icon-online.svg";
import { ReactComponent as BudgetSvg } from "./images/icon-budgeting.svg";
import { ReactComponent as OnBoardingSvg } from "./images/icon-onboarding.svg";
import { ReactComponent as APISvg } from "./images/icon-api.svg";
import CurrencyImg from "./images/image-currency.jpg";
import RestaurantImg from "./images/image-restaurant.jpg";
import PlaneImg from "./images/image-plane.jpg";
import ConfettiImg from "./images/image-confetti.jpg";
//Icons share
import { ReactComponent as Facebook } from "./images/icon-facebook.svg";
import { ReactComponent as YouTube } from "./images/icon-youtube.svg";
import { ReactComponent as Twitter } from "./images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "./images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "./images/icon-instagram.svg";

function App() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nonscroll", on);
  }, [on]);

  return (
    <div className="App">
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

      <section className="hero">
        <div className="container">
          <div className="hero__image"></div>
          <div className="hero__text container--pall">
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing and much
              more.
            </p>
            <a href="#" className="button hero__cta">
              Request Invite
            </a>
          </div>
        </div>
      </section>

      <section className="features container container--pall">
        <div className="feature__intro">
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="feature__grid ">
          <div className="feature__item">
            <div className="feature__icon">
              <OnlineSvg className="img" />
            </div>
            <div className="feature__title">Online Banking</div>
            <div className="feature__description">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </div>
          </div>

          <div className="feature__item">
            <div className="feature__icon">
              <BudgetSvg className="img" />
            </div>
            <div className="feature__title">Simple Budgeting</div>
            <div className="feature__description">
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </div>
          </div>

          <div className="feature__item">
            <div className="feature__icon">
              <OnBoardingSvg className="img" />
            </div>
            <div className="feature__title">Fast Onboarding</div>
            <div className="feature__description">
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </div>
          </div>

          <div className="feature__item">
            <div className="feature__icon">
              <APISvg className="img" />
            </div>
            <div className="feature__title">Open API</div>
            <div className="feature__description">
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </div>
          </div>
        </div>
      </section>

      <section className="articles">
        <div className="article__content container container--pall">
          <h2>Lastest Articles</h2>

          <div className="article__grid">
            <div className="article__item">
              <div
                className="article__image"
                style={{ backgroundImage: `url(${CurrencyImg})` }}
              ></div>
              <div className="article__text">
                <div className="article__author">By Claire Robinson</div>
                <div className="article__title">
                  Receive money in any currency with no fees
                </div>
                <div className="article__description">
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </div>
              </div>
            </div>
            <div className="article__item">
              <div
                className="article__image"
                style={{ backgroundImage: `url(${RestaurantImg})` }}
              ></div>
              <div className="article__text">
                <div className="article__author">By Wilson Hutton</div>
                <div className="article__title">
                  Treat yourself without worrying about money
                </div>
                <div className="article__description">
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </div>
              </div>
            </div>
            <div className="article__item">
              <div
                className="article__image"
                style={{ backgroundImage: `url(${PlaneImg})` }}
              ></div>
              <div className="article__text">
                <div className="article__author">By Wilson Hutton</div>
                <div className="article__title">
                  Take your Easybank card wherever you go
                </div>
                <div className="article__description">
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                  …
                </div>
              </div>
            </div>
            <div className="article__item">
              <div
                className="article__image"
                style={{ backgroundImage: `url(${ConfettiImg})` }}
              ></div>
              <div className="article__text">
                <div className="article__author">By Claire Robinson</div>
                <div className="article__title">
                  Our invite-only Beta accounts are now live!
                </div>
                <div className="article__description">
                  After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site …
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}

export default App;
