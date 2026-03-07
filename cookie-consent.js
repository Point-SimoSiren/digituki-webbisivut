(() => {
  const CONSENT_KEY = "tcg-cookie-consent-v1";
  const GA_ID = "G-8M7EXFFWLD";
  const state = {
    analyticsLoaded: false,
    banner: null,
    manageButton: null
  };

  function readConsent() {
    try {
      return localStorage.getItem(CONSENT_KEY);
    } catch (error) {
      return null;
    }
  }

  function writeConsent(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch (error) {
      return;
    }
  }

  function ensureDataLayer() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments);
    };
  }

  function loadAnalytics() {
    if (state.analyticsLoaded) {
      return;
    }

    state.analyticsLoaded = true;
    ensureDataLayer();

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.gtag("js", new Date());
    window.gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "granted"
    });
    window.gtag("config", GA_ID, {
      anonymize_ip: true
    });
  }

  function updateAnalyticsConsent(granted) {
    if (!state.analyticsLoaded || typeof window.gtag !== "function") {
      return;
    }

    window.gtag("consent", "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: granted ? "granted" : "denied"
    });
  }

  function syncUi(showBanner) {
    if (state.banner) {
      state.banner.hidden = !showBanner;
    }
    if (state.manageButton) {
      state.manageButton.hidden = showBanner;
    }
  }

  function setConsent(granted) {
    const value = granted ? "granted" : "denied";
    writeConsent(value);

    if (granted) {
      loadAnalytics();
    }
    updateAnalyticsConsent(granted);

    syncUi(false);
  }

  function buildBanner() {
    const banner = document.createElement("section");
    banner.className = "cookie-consent-banner";
    banner.setAttribute("aria-label", "Evästeasetukset");
    banner.innerHTML = [
      '<p><strong class="cookie-consent-banner__title">Analytiikka vain luvalla</strong>',
      'Käytämme Google Analyticsia kävijämäärän seurantaan vain suostumuksellasi.</p>',
      '<div class="cookie-consent-banner__actions">',
      '<button type="button" class="cookie-consent-button cookie-consent-button--primary" data-consent-action="accept">Hyväksy analytiikka</button>',
      '<button type="button" class="cookie-consent-button cookie-consent-button--secondary" data-consent-action="reject">Jatka ilman analytiikkaa</button>',
      "</div>"
    ].join("");

    banner.addEventListener("click", (event) => {
      const action = event.target instanceof HTMLElement ? event.target.dataset.consentAction : null;
      if (action === "accept") {
        setConsent(true);
      }
      if (action === "reject") {
        setConsent(false);
      }
    });

    document.body.appendChild(banner);
    state.banner = banner;
  }

  function buildManageButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "cookie-consent-manage";
    button.textContent = "Evästeasetukset";
    button.addEventListener("click", () => {
      syncUi(true);
    });

    document.body.appendChild(button);
    state.manageButton = button;
  }

  document.addEventListener("DOMContentLoaded", () => {
    buildBanner();
    buildManageButton();

    const consent = readConsent();
    if (consent === "granted") {
      loadAnalytics();
      syncUi(false);
      return;
    }

    if (consent === "denied") {
      syncUi(false);
      return;
    }

    syncUi(true);
  });
})();
