// Vanilla JS: i18n (EN/ES) + show/hide demo elements + fake tracker log.

var translations = {
  en: {
    masthead_kicker: "Test news site for Safari content blockers",
    ad_label: "Advertisement",
    ad_leaderboard_title: "Leaderboard Ad — 728x90 (test box)",
    ad_leaderboard_desc: "This is a fake display ad. A content blocker should hide or collapse this box.",
    test_note_title: "What is this page?",
    test_note_desc: "A plain HTML/CSS/JS news mockup to test Safari content blockers. Colored boxes below simulate ads, cookie banners, popups, social embeds and trackers.",
    btn_show_cookie: "Show cookie banner",
    btn_show_popup: "Show popup",
    btn_show_sticky: "Show sticky ad",
    article_title: "Local Developer Builds Tiny Website to Test Content Blockers",
    article_byline: "By Jane Reporter — October 13, 2026 — 4 min read",
    hero_label: "Hero image (placeholder)",
    p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    p2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    h2_1: "Why blockers matter",
    p3: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    ad_inarticle_title: "In-Article Ad (test box)",
    ad_inarticle_desc: "Fake ad placed between paragraphs, like AdSense in-article ads.",
    ad_cta: "Buy now",
    p4: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.",
    h2_2: "A second section with more text",
    p5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Ut labore et dolore magna aliqua — quis ipsum suspendisse ultrices gravida.",
    p6: "Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    social_label: "Social embed (test box)",
    social_title: "Embedded post — simulates X / Facebook / Instagram widget",
    social_desc: "Content blockers often block third-party social widgets and their trackers.",
    p7: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    sponsored_label: "Sponsored content (test box)",
    sponsored_title: "You may also like",
    sponsored_desc: "Simulates Taboola / Outbrain recommendation widgets.",
    h2_3: "Comments",
    comments_label: "Comments widget (test box)",
    comments_title: "3 comments — simulates Disqus",
    comments_desc: "Third-party comment systems usually load tracking scripts.",
    tracker_label: "Tracker (test box)",
    tracker_desc: "Simulates an analytics pixel / fingerprinting script. Check the log:",
    ad_sidebar_title: "Sidebar Ad — 300x600 (test box)",
    ad_sidebar_desc: "Fake skyscraper ad, typical sidebar inventory.",
    newsletter_label: "Newsletter (test box)",
    newsletter_title: "Subscribe to our newsletter",
    newsletter_desc: "Simulates an email capture form / paywall prompt.",
    newsletter_btn: "Subscribe",
    most_read: "Most read",
    mr1: "Lorem ipsum dolor sit amet",
    mr2: "Consectetur adipiscing elit",
    mr3: "Sed do eiusmod tempor",
    footer: "The Daily Test — plain demo page for content-blocker testing. No real ads or tracking.",
    cookie_title: "We use cookies (test banner)",
    cookie_desc: "This is a fake cookie-consent notice. Real ones ask permission for analytics and advertising cookies. A blocker may hide this automatically.",
    cookie_accept: "Accept",
    cookie_reject: "Reject",
    ad_sticky_desc: "Sticky bottom ad (test box)",
    popup_label: "Popup / Interstitial (test box)",
    popup_title: "Wait! Special offer (fake popup)",
    popup_desc: "Simulates a newsletter interstitial or full-screen ad shown after 3 seconds.",
    popup_close: "Close",
    page_title: "The Daily Test — Content Blocker Demo",
    nav_home: "Home",
    nav_world: "World",
    nav_tech: "Tech",
    nav_sports: "Sports",
    nav_culture: "Culture",
    share_x: "Share on X",
    share_facebook: "Share on Facebook",
    share_copy: "Copy link",
    sponsored_1: "Sponsored 1",
    sponsored_2: "Sponsored 2",
    sponsored_3: "Sponsored 3",
    tracker_wait: "tracker: waiting…",
    log_pageview: "pageview (fake)",
    log_accepted: "cookies accepted (fake)",
    log_rejected: "cookies rejected (fake)",
    log_popup: "popup shown after 3s (fake interstitial)",
    log_heartbeat: "heartbeat — page_url=",
    log_fake: " (fake)",
    aria_lang: "Language",
    aria_email: "email",
    aria_cookie: "Cookie consent",
    aria_popup: "Popup",
    aria_close: "Close"
  },
  es: {
    masthead_kicker: "Sitio de noticias de prueba para bloqueadores de contenido en Safari",
    ad_label: "Publicidad",
    ad_leaderboard_title: "Anuncio superior — 728x90 (caja de prueba)",
    ad_leaderboard_desc: "Este es un anuncio falso. Un bloqueador de contenido debería ocultar o colapsar esta caja.",
    test_note_title: "¿Qué es esta página?",
    test_note_desc: "Una maqueta sencilla de noticias en HTML/CSS/JS para probar bloqueadores de contenido en Safari. Las cajas de colores simulan anuncios, banners de cookies, popups, embeds sociales y rastreadores.",
    btn_show_cookie: "Mostrar banner de cookies",
    btn_show_popup: "Mostrar popup",
    btn_show_sticky: "Mostrar anuncio fijo",
    article_title: "Un desarrollador crea un sitio diminuto para probar bloqueadores de contenido",
    article_byline: "Por Jane Reporter — 13 de octubre de 2026 — 4 min de lectura",
    hero_label: "Imagen principal (marcador)",
    p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    p2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    h2_1: "Por qué importan los bloqueadores",
    p3: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    ad_inarticle_title: "Anuncio dentro del artículo (caja de prueba)",
    ad_inarticle_desc: "Anuncio falso entre párrafos, como los anuncios in-article de AdSense.",
    ad_cta: "Comprar ahora",
    p4: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.",
    h2_2: "Una segunda sección con más texto",
    p5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Ut labore et dolore magna aliqua — quis ipsum suspendisse ultrices gravida.",
    p6: "Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    social_label: "Contenido social (caja de prueba)",
    social_title: "Publicación embebida — simula un widget de X / Facebook / Instagram",
    social_desc: "Los bloqueadores suelen bloquear los widgets sociales de terceros y sus rastreadores.",
    p7: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    sponsored_label: "Contenido patrocinado (caja de prueba)",
    sponsored_title: "También te puede interesar",
    sponsored_desc: "Simula los widgets de recomendaciones de Taboola / Outbrain.",
    h2_3: "Comentarios",
    comments_label: "Widget de comentarios (caja de prueba)",
    comments_title: "3 comentarios — simula Disqus",
    comments_desc: "Los sistemas de comentarios de terceros suelen cargar scripts de rastreo.",
    tracker_label: "Rastreador (caja de prueba)",
    tracker_desc: "Simula un píxel de analítica / script de fingerprinting. Mira el registro:",
    ad_sidebar_title: "Anuncio lateral — 300x600 (caja de prueba)",
    ad_sidebar_desc: "Anuncio falso tipo rascacielos, típico de la barra lateral.",
    newsletter_label: "Boletín (caja de prueba)",
    newsletter_title: "Suscríbete a nuestro boletín",
    newsletter_desc: "Simula un formulario de correo / aviso de paywall.",
    newsletter_btn: "Suscribirse",
    most_read: "Lo más leído",
    mr1: "Lorem ipsum dolor sit amet",
    mr2: "Consectetur adipiscing elit",
    mr3: "Sed do eiusmod tempor",
    footer: "The Daily Test — página sencilla para probar bloqueadores de contenido. Sin anuncios ni rastreo reales.",
    cookie_title: "Usamos cookies (banner de prueba)",
    cookie_desc: "Este es un aviso falso de consentimiento de cookies. Los reales piden permiso para cookies de analítica y publicidad. Un bloqueador puede ocultarlo automáticamente.",
    cookie_accept: "Aceptar",
    cookie_reject: "Rechazar",
    ad_sticky_desc: "Anuncio fijo inferior (caja de prueba)",
    popup_label: "Popup / Intersticial (caja de prueba)",
    popup_title: "¡Espera! Oferta especial (popup falso)",
    popup_desc: "Simula un intersticial de boletín o un anuncio de pantalla completa mostrado tras 3 segundos.",
    popup_close: "Cerrar",
    page_title: "The Daily Test — Demo de bloqueo de contenido",
    nav_home: "Inicio",
    nav_world: "Mundo",
    nav_tech: "Tecnología",
    nav_sports: "Deportes",
    nav_culture: "Cultura",
    share_x: "Compartir en X",
    share_facebook: "Compartir en Facebook",
    share_copy: "Copiar enlace",
    sponsored_1: "Patrocinado 1",
    sponsored_2: "Patrocinado 2",
    sponsored_3: "Patrocinado 3",
    tracker_wait: "tracker: en espera…",
    log_pageview: "vista de página (falsa)",
    log_accepted: "cookies aceptadas (falso)",
    log_rejected: "cookies rechazadas (falso)",
    log_popup: "popup mostrado tras 3 s (intersticial falso)",
    log_heartbeat: "latido — page_url=",
    log_fake: " (falso)",
    aria_lang: "Idioma",
    aria_email: "correo electrónico",
    aria_cookie: "Consentimiento de cookies",
    aria_popup: "Ventana emergente",
    aria_close: "Cerrar"
  }
};

var currentLang = "en";

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.title = translations[lang].page_title;
  var els = document.querySelectorAll("[data-i18n]");
  for (var i = 0; i < els.length; i++) {
    var key = els[i].getAttribute("data-i18n");
    if (translations[lang][key]) {
      els[i].textContent = translations[lang][key];
    }
  }
  var ariaEls = document.querySelectorAll("[data-i18n-aria-label]");
  for (var j = 0; j < ariaEls.length; j++) {
    var ariaKey = ariaEls[j].getAttribute("data-i18n-aria-label");
    if (translations[lang][ariaKey]) {
      ariaEls[j].setAttribute("aria-label", translations[lang][ariaKey]);
    }
  }
  document.getElementById("lang-en").classList.toggle("is-active", lang === "en");
  document.getElementById("lang-es").classList.toggle("is-active", lang === "es");
  updateTrackerLog("lang: " + lang);
}

function updateTrackerLog(msg) {
  var log = document.getElementById("tracker-log");
  if (log) {
    var time = new Date().toLocaleTimeString();
    log.textContent = "tracker: [" + time + "] " + msg;
  }
  // Also visible in console for blocker testing.
  if (window.console) {
    console.log("[tracker-test]", msg);
  }
}

document.getElementById("lang-en").addEventListener("click", function () {
  setLang("en");
});

document.getElementById("lang-es").addEventListener("click", function () {
  setLang("es");
});

// Cookie banner.
var cookieBanner = document.getElementById("cookie-consent-banner");

document.getElementById("btn-accept-cookies").addEventListener("click", function () {
  cookieBanner.hidden = true;
  updateTrackerLog(translations[currentLang].log_accepted);
});

document.getElementById("btn-reject-cookies").addEventListener("click", function () {
  cookieBanner.hidden = true;
  updateTrackerLog(translations[currentLang].log_rejected);
});

document.getElementById("btn-show-cookie").addEventListener("click", function () {
  cookieBanner.hidden = false;
});

// Popup (auto-show once after 3s, like a real interstitial).
var popup = document.getElementById("popup-overlay");

document.getElementById("btn-close-popup").addEventListener("click", function () {
  popup.hidden = true;
});

document.getElementById("btn-show-popup").addEventListener("click", function () {
  popup.hidden = false;
});

setTimeout(function () {
  if (popup.hidden) {
    popup.hidden = false;
    updateTrackerLog(translations[currentLang].log_popup);
  }
}, 3000);

// Sticky ad.
var sticky = document.getElementById("ad-sticky-bottom");

document.getElementById("btn-close-sticky").addEventListener("click", function () {
  sticky.style.display = "none";
});

document.getElementById("btn-show-sticky").addEventListener("click", function () {
  sticky.style.display = "block";
});

// Fake tracker heartbeat, so blocking its JS is observable.
setInterval(function () {
  updateTrackerLog(translations[currentLang].log_heartbeat + location.pathname + translations[currentLang].log_fake);
}, 10000);

updateTrackerLog(translations[currentLang].log_pageview);
