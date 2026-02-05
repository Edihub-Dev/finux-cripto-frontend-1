import { type CSSProperties, useEffect, useState } from "react";
import { MdOutlineAndroid } from "react-icons/md";

import heroCoins from "../../assets/hero image.webp";

import finuxLogo from "../../assets/Finux (1).svg";

import cardAccent from "../../assets/B0uUXSq0m868oLBfPN2rG3lJCho copy 1.svg";

import transferIcon from "../../assets/kK10BYW7A0IyokkZjS6BKJ8VE copy 1.svg";

import analyticsIcon from "../../assets/z95dq6ks9unrjAjIFNFdd0B3BOE copy 1.svg";

import lockIcon from "../../assets/0dMWvmHmtJtNLyahKB5B0HErpIE copy 1.svg";

import goldIcon from "../../assets/3lQ7907y7C6l2ACYCAQKDOQVYg copy 1.svg";

import stackIcon from "../../assets/kFW9oB0lpLbUlaE5PRMjFjfn0Qc copy 1.svg";

import realtimeIcon from "../../assets/uDGuWbZP77iu7pgjp04gtfeUY copy 1.svg";

import bitcoinImage from "../../assets/hero image.webp";

import cryptoAccessImage from "../../assets/Screenshot 2026-01-27 at 3.41.16 PM copy 1.svg";

import investBackground from "../../assets/124 2.svg";

import investShape from "../../assets/1.svg";

const navLinks = [
  { label: "Home", target: "hero" },

  { label: "About", target: "about" },

  { label: "Blog", target: "features" },

  { label: "Pages", target: "features", hasDropdown: true },

  { label: "Pricing", target: "security" },
];

const stats = [
  { value: "256bits", label: "AES Encryption" },

  { value: "0.", label: "Security incidents" },

  { value: "CISA+", label: "Security certification" },
];

const avatars = [
  { initials: "AL", color: "var(--avatar-1)" },

  { initials: "MJ", color: "var(--avatar-2)" },

  { initials: "RK", color: "var(--avatar-3)" },
];

type FeaturePanelType = "balance" | "transfer" | "analytics";

type FeatureRow = {
  id: string;

  title: string;

  description: string;

  panel: FeaturePanelType;

  icon: string;
};

const featureRows: FeatureRow[] = [
  {
    id: "wallet",

    title: "Built-in wallet",

    description:
      "Your all-in-one crypto tool. Securely store, send, and receive digital assets with our fully integrated wallet.",

    panel: "balance",

    icon: cardAccent,
  },

  {
    id: "transfer",

    title: "Instant crypto transfers",

    description:
      "Move funds between accounts in seconds. Enjoy fast, reliable transactions so you never miss a great opportunity.",

    panel: "transfer",

    icon: transferIcon,
  },

  {
    id: "analytics",

    title: "Visualize your performance",

    description:
      "Track your portfolio with simple charts and analytics. Gain insights to make smarter, well-informed investment decisions.",

    panel: "analytics",

    icon: analyticsIcon,
  },
];

type HowItWorksStepId = "create" | "transferFunds" | "earn";

type HowItWorksStep = {
  id: HowItWorksStepId;

  label: string;

  title: string;

  description: string;

  image: string;

  imageAlt: string;
};

const howItWorksSteps: HowItWorksStep[] = [
  {
    id: "create",

    label: "Create an account",

    title: "Create account",

    description:
      "Begin your journey into cryptocurrency by creating a secure account with us. The process is quick, simple, and straightforward.",

    image: bitcoinImage,

    imageAlt: "Finux account creation screen on mobile",
  },

  {
    id: "transferFunds",

    label: "Transfer your funds",

    title: "Transfer your funds",

    description:
      "Connect your preferred funding methods and move money between wallets in seconds. Track every transfer with real-time status updates.",

    image: bitcoinImage,

    imageAlt: "Finux transfer funds interface on mobile",
  },

  {
    id: "earn",

    label: "Earn passive interest",

    title: "Earn passive interest",

    description:
      "Activate staking and yield strategies with a tap. Watch your assets grow safely while keeping full control of your portfolio.",

    image: bitcoinImage,

    imageAlt: "Finux portfolio analytics on mobile",
  },
];

const LandingPage = () => {
  const [activeHowItWorksStep, setActiveHowItWorksStep] =
    useState<HowItWorksStepId>("create");

  const [isNavOpen, setIsNavOpen] = useState(false);

  const [showExtraSections] = useState(false);

  const [showHeaderExtras] = useState(false);

  const investBannerStyle = {
    "--invest-bg-image": `url(${investBackground})`,
  } as CSSProperties;

  const orbitIcons = [
    {
      name: "Bitcoin",
      src: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=032",
    },

    {
      name: "Ethereum",
      src: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=032",
    },

    {
      name: "Solana",
      src: "https://cryptologos.cc/logos/solana-sol-logo.png?v=032",
    },

    {
      name: "Tether",
      src: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=032",
    },

    {
      name: "Litecoin",
      src: "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=032",
    },

    {
      name: "Ripple",
      src: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=032",
    },

    {
      name: "Cardano",
      src: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=032",
    },

    {
      name: "Polkadot",
      src: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=032",
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-animate]");

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);
          }
        });
      },

      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  const handleNavClick = (target: string) => {
    const section = document.getElementById(target);

    section?.scrollIntoView({ behavior: "smooth", block: "start" });

    setIsNavOpen(false);
  };

  return (
    <div className="page-shell">
      <header className="hero-surface" id="hero" data-animate>
        <div className={`nav ${isNavOpen ? "nav--open" : ""}`}>
          {showHeaderExtras && (
            <button
              type="button"
              className="nav__toggle"
              aria-label={isNavOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isNavOpen}
              onClick={() => setIsNavOpen((open) => !open)}
            >
              <span />

              <span />

              <span />
            </button>
          )}

          <div className="brand" onClick={() => handleNavClick("hero")}>
            <img src={finuxLogo} alt="Finux logo" className="brand__logo" />

            <span className="brand__name"></span>
          </div>

          {showHeaderExtras && (
            <>
              <nav className="nav__links" aria-label="Primary">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    className="nav__link"
                    onClick={() => handleNavClick(link.target)}
                    aria-label={`Go to ${link.label}`}
                  >
                    {link.label}

                    {link.hasDropdown && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        aria-hidden="true"
                      >
                        <path d="M2.5 4.5 6 8l3.5-3.5" />
                      </svg>
                    )}
                  </button>
                ))}
              </nav>

              <button
                className="pill-button nav__download"
                onClick={() => handleNavClick("download-app")}
              >
                Download
              </button>
            </>
          )}
        </div>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__content">
            <span className="hero__eyebrow">Introducing Finux</span>

            {/* <h1 id="hero-title">Buy &amp; trade crypto securely</h1> */}
            <h1 id="hero-title">
              Future Internet Network for Universal Assets.
            </h1>

            <p>
              A secure crypto wallet and reward ecosystem— earn daily, stake
              smart, and grow with liquidity.
            </p>

            <div className="hero__actions">
              <button
                className="pill-button"
                onClick={() =>
                  window.open(
                    "https://finux-online.s3.ap-south-1.amazonaws.com/apk/finux.apk",
                    "_blank",
                  )
                }
              >
                <span
                  aria-hidden="true"
                  className="pill-button__icon pill-button__icon--android"
                >
                  <MdOutlineAndroid />
                </span>
                <span>Download Apk</span>
              </button>

              <a className="ghost-link" href="#">
                Download Pdf
              </a>
            </div>
            {showHeaderExtras && (
              <div className="hero__social">
                <div className="avatar-group" aria-hidden="true">
                  {avatars.map((avatar) => (
                    <span
                      key={avatar.initials}
                      className="avatar"
                      style={{ background: avatar.color }}
                    >
                      {avatar.initials}
                    </span>
                  ))}
                </div>

                <p>
                  <strong>150k+ people</strong> already joined
                </p>
              </div>
            )}
          </div>

          <div className="hero__visual" role="presentation">
            <div className="glow" />

            <img
              src={heroCoins}
              alt="Floating crypto coins"
              className="coin-cloud"
            />
          </div>
        </section>

        {showHeaderExtras && (
          <section
            className="trust-card"
            id="security"
            aria-label="Security highlights"
          >
            {stats.map((item) => (
              <article key={item.value} className="trust-card__item">
                <h3>{item.value}</h3>

                <p>{item.label}</p>
              </article>
            ))}
          </section>
        )}
      </header>

      {showExtraSections && (
        <>
          <aside
            className={`nav-drawer ${isNavOpen ? "nav-drawer--open" : ""}`}
          >
            <div className="nav-drawer__header">
              <span>Menu</span>

              <button
                className="nav-drawer__close"
                onClick={() => setIsNavOpen(false)}
              >
                ×
              </button>
            </div>

            <nav className="nav-drawer__links" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  className="nav-drawer__link"
                  onClick={() => handleNavClick(link.target)}
                  aria-label={`Go to ${link.label}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </aside>

          <button
            type="button"
            className={`nav-drawer__backdrop ${isNavOpen ? "is-visible" : ""}`}
            aria-hidden={!isNavOpen}
            onClick={() => setIsNavOpen(false)}
          />

          <main>
            <section className="features" id="features">
              <div className="features__intro" data-animate>
                <p className="eyebrow">Why this app for you?</p>

                <h2>Explore how Defichain fits your workflow</h2>

                <p>
                  Discover the features that make our application a dependable
                  option for investors who demand security, clarity, and
                  control.
                </p>
              </div>

              <div className="feature-rows">
                {featureRows.map((row) => (
                  <article key={row.id} className="feature-row" data-animate>
                    <div className="feature-card">
                      <div className="feature-card__text">
                        <h3>{row.title}</h3>

                        <p>{row.description}</p>
                      </div>

                      <div className="feature-card__footer">
                        <img
                          src={row.icon}
                          alt=""
                          aria-hidden="true"
                          className="feature-card__icon"
                        />

                        <button
                          className="icon-button"
                          aria-label="Learn more about feature"
                        >
                          ↗
                        </button>
                      </div>
                    </div>

                    <div className={`feature-panel panel--${row.panel}`}>
                      {renderFeaturePanel(row.panel)}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="toolkit" id="toolkit">
              <div className="toolkit__header" data-animate>
                <div className="toolkit__title">
                  <h2>Everything you need for crypto</h2>
                </div>

                <p className="toolkit__description">
                  Our platform provides tools for all your crypto needs, from
                  advanced trading to strong security, all in one easy-to-use
                  place.
                </p>
              </div>

              <div className="toolkit__grid" data-animate>
                <ToolkitFeatureCard cardId="encryption" />

                <div className="toolkit__right-column">
                  <ToolkitFeatureCard cardId="payments" />

                  <div className="toolkit__row">
                    <ToolkitFeatureCard cardId="visualization" />

                    <ToolkitFeatureCard cardId="realtime" />
                  </div>
                </div>
              </div>

              <div className="toolkit__actions" data-animate>
                <button
                  className="pill-button"
                  type="button"
                  onClick={() => handleNavClick("download-app")}
                >
                  Download
                </button>

                <button className="ghost-pill">Browse all features</button>
              </div>
            </section>

            <section
              className="how-it-works"
              aria-labelledby="how-it-works-title"
              data-animate
            >
              <div className="how-it-works__container">
                <div className="how-it-works__header">
                  <h2 id="how-it-works-title">How does it work?</h2>

                  <p>
                    It&apos;s easy to get started. Follow our simple three-step
                    guide to set up your account and dive into the world of
                    crypto.
                  </p>
                </div>

                <div
                  className="how-it-works__tabs"
                  role="tablist"
                  aria-label="Finux onboarding steps"
                >
                  {howItWorksSteps.map((step) => (
                    <button
                      key={step.id}
                      type="button"
                      role="tab"
                      className={`how-it-works__tab ${step.id === activeHowItWorksStep ? "is-active" : ""}`}
                      aria-selected={step.id === activeHowItWorksStep}
                      onClick={() => setActiveHowItWorksStep(step.id)}
                    >
                      {step.label}
                    </button>
                  ))}
                </div>
              </div>

              <div
                className="how-it-works__surface"
                data-active-step={activeHowItWorksStep}
              >
                <div className="how-it-works__panel" role="tabpanel">
                  {howItWorksSteps.map((step) => (
                    <div
                      key={step.id}
                      className={`how-it-works__panel-inner ${step.id === activeHowItWorksStep ? "is-active" : ""}`}
                      aria-hidden={step.id !== activeHowItWorksStep}
                    >
                      <div className="how-it-works__panel-content">
                        <h3>{step.title}</h3>

                        <p>{step.description}</p>

                        <button
                          className="pill-button how-it-works__cta"
                          type="button"
                          onClick={() => handleNavClick("download-app")}
                        >
                          Download app
                        </button>
                      </div>

                      <div className="how-it-works__panel-visual">
                        <img src={step.image} alt={step.imageAlt} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section
              className="crypto-access"
              aria-labelledby="crypto-access-title"
              data-animate
            >
              <div className="crypto-access__surface">
                <div className="crypto-access__visual" role="presentation">
                  <img src={cryptoAccessImage} alt="Floating crypto coins" />
                </div>

                <div className="crypto-access__content">
                  <span className="crypto-access__eyebrow">
                    Global asset coverage
                  </span>

                  <h2 id="crypto-access-title">
                    Access 1,000+ cryptocurrencies
                  </h2>

                  <p>
                    Explore a wide range of digital currencies and expand your
                    portfolio with access to over a thousand cryptocurrencies.
                  </p>

                  <button className="crypto-access__cta" type="button">
                    Browse all crypto
                  </button>
                </div>
              </div>
            </section>

            <section
              className="invest-banner"
              aria-labelledby="invest-banner-title"
              data-animate
            >
              <div className="invest-banner__surface" style={investBannerStyle}>
                <div className="invest-banner__content">
                  <h2 id="invest-banner-title">
                    Start investing in crypto today
                  </h2>

                  <p>
                    Seize the opportunity to enter the digital finance arena.
                    Get our application and start your investment journey now.
                  </p>

                  <button
                    className="pill-button"
                    type="button"
                    onClick={() => handleNavClick("download-app")}
                  >
                    Download app
                  </button>
                </div>

                <div className="invest-banner__visual" role="presentation">
                  <img src={investShape} alt="" />
                </div>
              </div>
            </section>

            <section
              className="app-promo"
              id="download-app"
              aria-labelledby="app-promo-title"
              data-animate
            >
              <div className="app-promo__inner">
                <div className="app-promo__content">
                  <p className="app-promo__eyebrow">Mobile first</p>

                  <h2 id="app-promo-title">Get our iOS and Android app</h2>

                  <p>
                    Take Finux wherever you go. Track markets, move funds, and
                    receive realtime alerts with a beautifully crafted
                    experience that mirrors our desktop dashboard.
                  </p>

                  <div
                    className="app-promo__badges"
                    aria-label="App download badges"
                  >
                    <a
                      className="store-badge store-badge--apple"
                      href="#download-ios"
                    >
                      <span className="store-badge__icon" aria-hidden>
                        <svg
                          viewBox="0 0 30 30"
                          fill="currentColor"
                          role="img"
                          aria-hidden="true"
                        >
                          <path d="M19.74 13.58c-.02-2.08 1.71-3.09 1.79-3.14-0.98-1.43-2.51-1.63-3.05-1.65-1.3-.21-2.53.78-3.18.78-.67 0-1.68-.76-2.77-.73-1.42.02-2.74.82-3.47 2.07-1.48 2.56-.38 6.34 1.06 8.42.7 1 1.54 2.12 2.66 2.08 1.05-.04 1.45-.68 2.73-.68 1.29 0 1.65.68 2.78.66 1.15-.02 1.88-1.03 2.57-2.03.81-1.17 1.15-2.31 1.16-2.37-.03-.01-3.08-1.18-3.09-3.5zm-1.93-6.35c.59-.73.99-1.74.88-2.76-.85.03-1.9.57-2.52 1.3-.55.64-1.04 1.68-.91 2.66.96.08 1.88-.49 2.55-1.2z" />
                        </svg>
                      </span>

                      <span className="store-badge__label">
                        <span>Download on the</span>
                        <strong>App Store</strong>
                      </span>
                    </a>

                    <a
                      className="store-badge store-badge--google"
                      href="#download-android"
                    >
                      <span className="store-badge__icon" aria-hidden="true">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                          alt=""
                          loading="lazy"
                        />
                      </span>

                      <span className="store-badge__label">
                        <span>Get it on</span>
                        <strong>Google Play</strong>
                      </span>
                    </a>

                    <a
                      className="store-badge store-badge--apk"
                      href="#download-apk"
                    >
                      <span className="store-badge__icon" aria-hidden="true">
                        <img src={finuxLogo} alt="" />
                      </span>

                      <span className="store-badge__label">
                        <span>Download</span>
                        <strong>APK</strong>
                      </span>
                    </a>
                  </div>

                  {/* Ratings display intentionally disabled until real-time data is integrated */}
                </div>

                <div className="app-promo__visual" role="presentation">
                  <div className="app-promo__phone">
                    <img
                      src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80"
                      alt="Hand holding smartphone"
                      loading="lazy"
                    />

                    <ul className="app-promo__orbit" aria-hidden="true">
                      {orbitIcons.map((icon, index) => (
                        <li
                          key={icon.name}
                          style={
                            {
                              "--angle": `${(index / orbitIcons.length) * 360}deg`,
                            } as CSSProperties
                          }
                        >
                          <img src={icon.src} alt={icon.name} loading="lazy" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer className="site-footer" data-animate>
            <div className="footer-shell">
              <div className="footer-top">
                <div className="footer-cta">
                  <p className="footer-cta__eyebrow">Ready to begin?</p>

                  <h2>Start investing in crypto today</h2>

                  <p>
                    Download our app and join thousands shaping their financial
                    future through cryptocurrency. Secure, intuitive, and built
                    for momentum.
                  </p>

                  <button
                    className="pill-button footer-cta__button"
                    type="button"
                    onClick={() => handleNavClick("download-app")}
                  >
                    Download app
                  </button>
                </div>

                <div className="footer-links">
                  <div className="footer-column">
                    <h3>Main pages</h3>

                    <ul>
                      <li>
                        <a href="#hero">Preview</a>
                      </li>

                      <li>
                        <a href="#features">Features</a>
                      </li>

                      <li>
                        <a href="#toolkit">Toolkit</a>
                      </li>

                      <li>
                        <a href="#how-it-works">How it works</a>
                      </li>

                      <li>
                        <a href="#crypto-access">Assets</a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer-column">
                    <h3>Resources</h3>

                    <ul>
                      <li>
                        <a href="#">Blog</a>
                      </li>

                      <li>
                        <a href="#">Pricing</a>
                      </li>

                      <li>
                        <a href="#">Support</a>
                      </li>

                      <li>
                        <a href="#">Security</a>
                      </li>

                      <li>
                        <a href="#">Status</a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer-column">
                    <h3>Utility pages</h3>

                    <ul>
                      <li>
                        <a href="#">Contact</a>
                      </li>

                      <li>
                        <a href="#">Careers</a>
                      </li>

                      <li>
                        <a href="#">Legal</a>
                      </li>

                      <li>
                        <a href="#">404</a>
                      </li>

                      <li>
                        <a href="#">Coming soon</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="footer-newsletter">
                <div className="footer-newsletter__copy">
                  <h3>Stay tuned for more updates</h3>

                  <p>Receive the latest news & market insights from Finux.</p>
                </div>

                <form className="footer-newsletter__form">
                  <label className="sr-only" htmlFor="footer-email">
                    Email address
                  </label>

                  <input
                    id="footer-email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />

                  <button type="submit">Subscribe</button>
                </form>
              </div>

              <div className="footer-bottom flex flex-wrap justify-center text-center text-[0.9rem] text-[rgba(255,235,214,0.7)]">
                <p className="w-full">
                  © {new Date().getFullYear()} Finux. Designed for builders of
                  the crypto economy.
                </p>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

const renderFeaturePanel = (type: FeaturePanelType) => {
  const analyticsPanel = (
    <div className="panel-analytics">
      <div className="panel-balance__header">
        <div>
          <span>Bitcoin</span>
          <span className="panel-tag">USDT</span>
        </div>
        <span className="panel-change positive">+8.74%</span>
      </div>
      <p className="panel-amount">$98,418.05</p>
      <div className="panel-tabs">
        {["1W", "6M", "1Y", "YTD"].map((label) => (
          <span key={label} className={label === "6M" ? "active" : ""}>
            {label}
          </span>
        ))}
      </div>
      <div className="panel-chart">
        {[60, 45, 75, 50, 85, 40].map((value, index) => (
          <span key={index} style={{ height: `${value}%` }} />
        ))}
      </div>
    </div>
  );

  switch (type) {
    case "balance":
      return (
        <div className="panel-balance">
          <div className="panel-balance__header">
            <span>Balance</span>
            <span className="panel-change">+4.6%</span>
          </div>
          <p className="panel-amount">
            $48,296.24 <span>USD</span>
          </p>
          <ul className="asset-list">
            <li>
              <span>Bitcoin</span>
              <span>$2,950.75</span>
            </li>
            <li>
              <span>Litecoin</span>
              <span>$1,984.02</span>
            </li>
            <li>
              <span>Ethereum</span>
              <span>$2,724.16</span>
            </li>
          </ul>
        </div>
      );

    case "transfer":
      return (
        <div className="panel-transfer">
          <div className="panel-field">
            <label>From</label>
            <div className="panel-select">
              <span>Ethereum</span>
            </div>
            <strong>24.32</strong>
          </div>
          <div className="panel-field">
            <label>To</label>
            <div className="panel-select">
              <span>Bitcoin</span>
            </div>
            <strong>0.594</strong>
          </div>
          <button className="pill-button pill-button--soft">Send</button>
        </div>
      );

    case "analytics":
    default:
      return analyticsPanel;
  }
};

const toolkitCards = [
  {
    id: "encryption",

    title: "Secure wallet encryption",

    description:
      "Advanced encryption safeguards your digital assets with hardware-backed protection.",

    icon: realtimeIcon,

    featured: true,
  },

  {
    id: "payments",

    title: "Easy payments",

    icon: lockIcon,
  },

  {
    id: "visualization",

    title: "Data visualization",

    icon: goldIcon,
  },

  {
    id: "realtime",

    title: "Real-time transaction engine",

    icon: stackIcon,
  },
];

const toolkitCardMap = Object.fromEntries(
  toolkitCards.map((card) => [card.id, card]),
) as Record<(typeof toolkitCards)[number]["id"], (typeof toolkitCards)[number]>;

const ToolkitFeatureCard = ({
  cardId,
}: {
  cardId: (typeof toolkitCards)[number]["id"];
}) => {
  const card = toolkitCardMap[cardId];

  if (!card) return null;

  const hasDescription = Boolean(card.description);

  return (
    <article
      className={`toolkit-card toolkit-card--${card.id}${hasDescription ? "" : " toolkit-card--no-description"}`}
    >
      <div className="toolkit-card__body">
        <h3>{card.title}</h3>
        {hasDescription && <p>{card.description}</p>}
      </div>

      <div className="toolkit-card__visual">
        <img src={card.icon} alt={card.title} />
      </div>
    </article>
  );
};

export default LandingPage;
