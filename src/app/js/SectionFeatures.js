import React from "react";
import { ReactComponent as OnlineSvg } from "./images/icon-online.svg";
import { ReactComponent as BudgetSvg } from "./images/icon-budgeting.svg";
import { ReactComponent as OnBoardingSvg } from "./images/icon-onboarding.svg";
import { ReactComponent as APISvg } from "./images/icon-api.svg";

function SectionFeatures() {
  return (
    <section className="features container container--pall">
      <div className="feature__intro">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
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
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </div>
        </div>

        <div className="feature__item">
          <div className="feature__icon">
            <OnBoardingSvg className="img" />
          </div>
          <div className="feature__title">Fast Onboarding</div>
          <div className="feature__description">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
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
  );
}

export default SectionFeatures;
