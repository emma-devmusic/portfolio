import React from "react";
import ReactDOM from "react-dom/client";
import { ServicePricing } from "./components/ServicePricing/ServicePricing";
import "./styles/styles.scss";
import "./styles/main.css";
import "./components/ServicePricing/_service-pricing.scss";

ReactDOM.createRoot(document.getElementById("presupuesto-root")!).render(
  <React.StrictMode>
    <main className="presupuesto-page">
      <header className="presupuesto-top">
        <a href="/" aria-label="Ir al portafolio de Emmanuel Araujo">
          <img
            src="/emmanuel-logo.svg"
            alt=""
            width={44}
            height={44}
            className="presupuesto-top__logo"
          />
        </a>
      </header>

      <ServicePricing />

      <footer className="presupuesto-footer">
        <div className="presupuesto-footer__brand">
          <img
            src="/emmanuel-logo.svg"
            alt=""
            width={36}
            height={36}
            className="presupuesto-footer__logo"
          />
          <div>
            <p className="presupuesto-footer__name">Emmanuel Araujo</p>
            <p className="presupuesto-footer__role">Developer</p>
          </div>
        </div>
        <a className="service-pricing__button" href="/">
          Ver portafolio
          <span aria-hidden="true">→</span>
        </a>
      </footer>
    </main>
  </React.StrictMode>,
);
