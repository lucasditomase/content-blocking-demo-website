// Vanilla JS: i18n (EN/ES) + show/hide demo elements + fake tracker log.

var translations = {
  en: {
    masthead_kicker: "Test news site for Safari content blockers",
    ad_label: "Advertisement",
    ad_leaderboard_title: "Leaderboard Ad — 728x90 (test box)",
    ad_leaderboard_desc: "This is a fake display ad. A content blocker should hide or collapse this box.",
    test_note_title: "What is this page?",
    test_note_desc: "A plain HTML/CSS/JS news mockup to test Safari content blockers. Colored boxes below simulate ads, cookie banners, popups, social embeds, video ads, network beacons, ad blocker detection and trackers.",
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
    mr1: "City Council Approves New Bike Lane Network",
    mr2: "New Browser Update Promises Faster Page Loads",
    mr3: "Local Team Wins Championship in Overtime",
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
    lang_label: "Language",
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
    aria_email: "email",
    aria_cookie: "Cookie consent",
    aria_popup: "Popup",
    aria_close: "Close",
    btn_show_prefs: "Show cookie preferences",
    pref_label: "Granular consent (test box)",
    pref_title: "Cookie preferences (test dialog)",
    pref_desc: "Choose which cookies to allow. Necessary cookies are always on.",
    pref_necessary: "Necessary",
    pref_necessary_desc: "Required for the site to work.",
    pref_always: "Always on",
    pref_functional: "Functional",
    pref_functional_desc: "Remember language and preferences.",
    pref_analytics: "Analytics",
    pref_analytics_desc: "Help us measure visits and traffic.",
    pref_ads: "Advertising",
    pref_ads_desc: "Used for personalized ads.",
    pref_accept_all: "Accept all",
    pref_reject_all: "Reject all",
    pref_save: "Save choices",
    log_prefs_saved: "cookie choices saved (fake)",
    aria_prefs: "Cookie preferences",
    video_label: "Video player (test box)",
    video_title: "Featured video — fake player",
    video_desc: "Simulates preroll, midroll and overlay banner ads.",
    video_content: "Main video content (fake)",
    video_preroll: "Preroll Ad (test)",
    video_midroll: "Midroll Ad (test)",
    video_overlay: "Overlay banner (test)",
    video_play: "Play",
    video_pause: "Pause",
    video_restart: "Restart video",
    video_skip: "Skip ad",
    video_skip_in: "Skip in",
    video_ad_ends: "Ad ends in",
    log_preroll: "preroll shown (fake)",
    log_midroll: "midroll shown (fake)",
    btn_open_window: "Open test popup window",
    log_popup_opened: "popup window opened (fake)",
    log_popup_blocked: "popup window blocked",
    beacon_label: "Network beacons (test box)",
    beacon_title: "Third-party requests for URL-based rules",
    beacon_desc: "These images and scripts point at hosts blocked by network rules. Compare the statuses below with Safari Web Inspector → Network.",
    beacon_loaded: "loaded",
    beacon_blocked: "blocked / failed",
    net_checking: "Checking network (control probe)…",
    net_online: "Network OK — control reachable, beacon results are meaningful.",
    net_offline: "Control unreachable — offline? Beacon results inconclusive.",
    prefs_net_checking: "Checking consent manager…",
    prefs_net_ok: "Consent manager reachable — choices would sync to the vendor.",
    prefs_net_blocked: "Consent manager blocked — choices stay on this device (fallback).",
    log_cmp_ok: "consent manager reachable (fake)",
    log_cmp_blocked: "consent manager blocked (fake)",
    video_net_wait: "Checking ad servers…",
    video_net_ok: "Ad servers reachable — ads will play.",
    video_net_blocked: "Ad servers blocked — playing content without ads.",
    log_ads_skipped: "ads skipped, servers blocked (fake)",
    log_ad_hidden: "ad hidden by cosmetic rule, skipped (fake)",
    blocker_label: "Ad blocker detection (test box)",
    blocker_title: "Ad blocker detection test",
    blocker_desc: "Loads a well-known advertising script as a probe. If an ad blocker stops it, a paywall notice appears like on real sites.",
    blocker_checking: "Checking…",
    blocker_yes: "Ad blocker detected — paywall notice shown.",
    blocker_no: "No ad blocker detected.",
    blocker_unknown: "Offline? Results inconclusive.",
    btn_recheck: "Re-check",
    paywall_label: "Paywall notice (test box)",
    paywall_title: "Please disable your ad blocker (test paywall)",
    paywall_desc: "Real sites show this when the advertising script fails to load. Subscribe or continue with limited access.",
    paywall_subscribe: "Subscribe (fake)",
    paywall_continue: "Continue anyway",
    log_blocker_on: "ad blocker detected (fake)",
    log_blocker_off: "no ad blocker detected (fake)",
    log_paywall_sub: "paywall subscribed (fake)",
    aria_paywall: "Paywall",
    ad_rail_title: "Side Rail Ad — 160x600 (test box)",
    ad_rail_desc: "Fixed side rail, only visible on wide screens."
  },
  es: {
    masthead_kicker: "Sitio de noticias de prueba para bloqueadores de contenido en Safari",
    ad_label: "Publicidad",
    ad_leaderboard_title: "Anuncio superior — 728x90 (caja de prueba)",
    ad_leaderboard_desc: "Este es un anuncio falso. Un bloqueador de contenido debería ocultar o colapsar esta caja.",
    test_note_title: "¿Qué es esta página?",
    test_note_desc: "Una maqueta sencilla de noticias en HTML/CSS/JS para probar bloqueadores de contenido en Safari. Las cajas de colores simulan anuncios, banners de cookies, popups, embeds sociales, anuncios de video, sondas de red, detección de bloqueadores de anuncios y rastreadores.",
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
    tracker_desc: "Simula un píxel de analítica / script de huella digital. Mira el registro:",
    ad_sidebar_title: "Anuncio lateral — 300x600 (caja de prueba)",
    ad_sidebar_desc: "Anuncio falso tipo rascacielos, típico de la barra lateral.",
    newsletter_label: "Boletín (caja de prueba)",
    newsletter_title: "Suscríbete a nuestro boletín",
    newsletter_desc: "Simula un formulario de correo / aviso de muro de pago.",
    newsletter_btn: "Suscribirse",
    most_read: "Lo más leído",
    mr1: "El concejo aprueba una nueva red de ciclovías",
    mr2: "Una actualización del navegador promete cargas más rápidas",
    mr3: "El equipo local gana el campeonato en tiempo extra",
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
    lang_label: "Idioma",
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
    aria_email: "correo electrónico",
    aria_cookie: "Consentimiento de cookies",
    aria_popup: "Ventana emergente",
    aria_close: "Cerrar",
    btn_show_prefs: "Mostrar preferencias de cookies",
    pref_label: "Consentimiento granular (caja de prueba)",
    pref_title: "Preferencias de cookies (diálogo de prueba)",
    pref_desc: "Elige qué cookies permitir. Las necesarias siempre están activas.",
    pref_necessary: "Necesarias",
    pref_necessary_desc: "Necesarias para que el sitio funcione.",
    pref_always: "Siempre activas",
    pref_functional: "Funcionales",
    pref_functional_desc: "Recuerdan idioma y preferencias.",
    pref_analytics: "Analítica",
    pref_analytics_desc: "Ayudan a medir visitas y tráfico.",
    pref_ads: "Publicidad",
    pref_ads_desc: "Se usan para anuncios personalizados.",
    pref_accept_all: "Aceptar todas",
    pref_reject_all: "Rechazar todas",
    pref_save: "Guardar selección",
    log_prefs_saved: "selección de cookies guardada (falso)",
    aria_prefs: "Preferencias de cookies",
    video_label: "Reproductor de video (caja de prueba)",
    video_title: "Video destacado — reproductor falso",
    video_desc: "Simula anuncios preroll, midroll y banners superpuestos.",
    video_content: "Contenido principal (falso)",
    video_preroll: "Anuncio preroll (prueba)",
    video_midroll: "Anuncio midroll (prueba)",
    video_overlay: "Banner superpuesto (prueba)",
    video_play: "Reproducir",
    video_pause: "Pausar",
    video_restart: "Reiniciar video",
    video_skip: "Omitir anuncio",
    video_skip_in: "Omitir en",
    video_ad_ends: "Termina en",
    log_preroll: "preroll mostrado (falso)",
    log_midroll: "midroll mostrado (falso)",
    btn_open_window: "Abrir popup de prueba",
    log_popup_opened: "ventana popup abierta (falso)",
    log_popup_blocked: "ventana popup bloqueada",
    beacon_label: "Sondas de red (caja de prueba)",
    beacon_title: "Peticiones de terceros para reglas basadas en URL",
    beacon_desc: "Estas imágenes y scripts apuntan a hosts bloqueados por reglas de red. Compara los estados con el Inspector web de Safari → Red.",
    beacon_loaded: "cargado",
    beacon_blocked: "bloqueado / falló",
    net_checking: "Comprobando red (sonda de control)…",
    net_online: "Red OK — control accesible, los resultados son válidos.",
    net_offline: "Control inaccesible — ¿sin conexión? Resultados no concluyentes.",
    prefs_net_checking: "Consultando el gestor de consentimiento…",
    prefs_net_ok: "Gestor de consentimiento accesible — la selección se sincronizaría con el proveedor.",
    prefs_net_blocked: "Gestor de consentimiento bloqueado — la selección queda en este dispositivo (modo alternativo).",
    log_cmp_ok: "gestor de consentimiento accesible (falso)",
    log_cmp_blocked: "gestor de consentimiento bloqueado (falso)",
    video_net_wait: "Consultando servidores de anuncios…",
    video_net_ok: "Servidores de anuncios accesibles — se mostrarán anuncios.",
    video_net_blocked: "Servidores de anuncios bloqueados — reproduciendo sin anuncios.",
    log_ads_skipped: "anuncios omitidos, servidores bloqueados (falso)",
    log_ad_hidden: "anuncio oculto por regla cosmética, omitido (falso)",
    blocker_label: "Detección de bloqueadores de anuncios (caja de prueba)",
    blocker_title: "Prueba de detección de bloqueadores de anuncios",
    blocker_desc: "Carga un conocido script de publicidad como sonda. Si un bloqueador de anuncios lo frena, aparece un aviso de muro de pago como en sitios reales.",
    blocker_checking: "Comprobando…",
    blocker_yes: "Bloqueador de anuncios detectado — mostrando aviso de muro de pago.",
    blocker_no: "Sin bloqueador de anuncios detectado.",
    blocker_unknown: "¿Sin conexión? Resultados no concluyentes.",
    btn_recheck: "Reintentar",
    paywall_label: "Aviso de muro de pago (caja de prueba)",
    paywall_title: "Desactiva tu bloqueador de anuncios (muro de pago de prueba)",
    paywall_desc: "Los sitios reales muestran esto cuando el script de publicidad no carga. Suscríbete o continúa con acceso limitado.",
    paywall_subscribe: "Suscribirse (falso)",
    paywall_continue: "Continuar igual",
    log_blocker_on: "bloqueador de anuncios detectado (falso)",
    log_blocker_off: "sin bloqueador de anuncios detectado (falso)",
    log_paywall_sub: "suscripción al muro de pago (falso)",
    aria_paywall: "Muro de pago",
    ad_rail_title: "Anuncio lateral fijo — 160x600 (caja de prueba)",
    ad_rail_desc: "Rail lateral fijo, solo visible en pantallas anchas."
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
  document.getElementById("lang-select").value = lang;
  vidRender();
  renderArticle();
  renderBeacons();
  setPrefsNet(prefsNetState);
  setBlocker(blockerState);
  setNetStatus();
  stackSticky();
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

function getStoredLang() {
  try {
    return localStorage.getItem("daily-test-lang");
  } catch (e) {
    return null;
  }
}

function storeLang(lang) {
  try {
    localStorage.setItem("daily-test-lang", lang);
  } catch (e) {
    // Private mode or file:// restrictions: the language just won't persist.
  }
}

function detectLang() {
  var stored = getStoredLang();
  if (stored === "en" || stored === "es") {
    return stored;
  }
  var nav = (navigator.language || "en").toLowerCase();
  return nav.indexOf("es") === 0 ? "es" : "en";
}

document.getElementById("lang-select").addEventListener("change", function (e) {
  setLang(e.target.value);
  storeLang(e.target.value);
});

// Cookie banner.
var cookieBanner = document.getElementById("cookies-overlay");

document.getElementById("btn-accept-cookies").addEventListener("click", function () {
  cookieBanner.hidden = true;
  stackSticky();
  updateTrackerLog(translations[currentLang].log_accepted);
});

document.getElementById("btn-reject-cookies").addEventListener("click", function () {
  cookieBanner.hidden = true;
  stackSticky();
  updateTrackerLog(translations[currentLang].log_rejected);
});

document.getElementById("btn-show-cookie").addEventListener("click", function () {
  cookieBanner.hidden = false;
  stackSticky();
});

// Network probes for block-type rules. Probes use fetch in no-cors mode:
// success resolves opaque, a blocked load rejects. A neutral control probe
// tells "offline" apart from "blocked". NOTE: fetch only matches rules with
// resourceType nil/fetch — script/image rules need element beacons instead.
var NET_CONTROL_URL = "https://www.example.com/";
var netControl = "checking";

function probeURL(url) {
  return fetch(url, { mode: "no-cors", cache: "no-store" }).then(
    function () { return "loaded"; },
    function () { return "blocked"; }
  );
}

function setNetStatus() {
  var el = document.getElementById("net-status");
  if (!el) return;
  var t = translations[currentLang];
  if (netControl === "loaded") el.textContent = t.net_online;
  else if (netControl === "blocked") el.textContent = t.net_offline;
  else el.textContent = t.net_checking;
}

// Granular cookie preferences dialog.
var prefsOverlay = document.getElementById("onetrust-consent-sdk");
var prefsNetState = "checking";

function setPrefsNet(state) {
  prefsNetState = state;
  var el = document.getElementById("prefs-netstatus");
  if (!el) return;
  var t = translations[currentLang];
  if (state === "ok") el.textContent = t.prefs_net_ok;
  else if (state === "blocked") el.textContent = t.prefs_net_blocked;
  else el.textContent = t.prefs_net_checking;
}

function openPrefs() {
  prefsOverlay.hidden = false;
  setPrefsNet("checking");
  // cdn.cookielaw.org (OneTrust) is blocked with resourceType nil,
  // so a fetch probe matches the rule.
  probeURL("https://cdn.cookielaw.org/consent/test.js").then(function (state) {
    setPrefsNet(state === "loaded" ? "ok" : "blocked");
    updateTrackerLog(translations[currentLang][state === "loaded" ? "log_cmp_ok" : "log_cmp_blocked"]);
  });
}

function closePrefs(msg) {
  prefsOverlay.hidden = true;
  var f = document.getElementById("pref-functional").checked ? 1 : 0;
  var a = document.getElementById("pref-analytics").checked ? 1 : 0;
  var d = document.getElementById("pref-ads").checked ? 1 : 0;
  updateTrackerLog(msg + " (functional=" + f + ", analytics=" + a + ", ads=" + d + ")");
}

function setAllPrefs(checked) {
  document.getElementById("pref-functional").checked = checked;
  document.getElementById("pref-analytics").checked = checked;
  document.getElementById("pref-ads").checked = checked;
}

document.getElementById("btn-show-prefs").addEventListener("click", openPrefs);

document.getElementById("btn-prefs-accept-all").addEventListener("click", function () {
  setAllPrefs(true);
  closePrefs(translations[currentLang].log_accepted);
});

document.getElementById("btn-prefs-reject-all").addEventListener("click", function () {
  setAllPrefs(false);
  closePrefs(translations[currentLang].log_rejected);
});

document.getElementById("btn-prefs-save").addEventListener("click", function () {
  closePrefs(translations[currentLang].log_prefs_saved);
});

// Popup (auto-show once after 3s, like a real interstitial).
var popup = document.getElementById("credential_picker_container");

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
  stackSticky();
});

// Keep the sticky ad glued to the top of the cookie banner while both are
// visible. A fixed CSS offset can't do this: the banner height changes with
// language and viewport width, leaving a gap or an overlap.
function stackSticky() {
  var banner = document.getElementById("cookies-overlay");
  var bar = document.getElementById("ad-sticky-bottom");
  if (banner.hidden) {
    bar.style.bottom = "0";
    // Keep the matched height so the bar doesn't jump when the banner hides.
  } else {
    bar.style.bottom = banner.offsetHeight + "px";
    bar.style.height = banner.offsetHeight + "px";
  }
}

window.addEventListener("resize", stackSticky);
window.addEventListener("load", stackSticky);

// Fake video player with preroll / midroll / overlay banner ads.
var VID_DURATION = 30;
var VID_AD_LEN = 10;
var VID_UNSKIPPABLE = 5;
var vidTime = 0;
var vidPlaying = false;
var vidPrerollDone = false;
var vidMidrollDone = false;
var vidOverlayDone = false;
var vidAd = null;
var vidAdLeft = 0;
var vidCheckTimer = null;

var vidPlayBtn = document.getElementById("btn-play");
var vidRestartBtn = document.getElementById("btn-restart");
var vidFill = document.getElementById("video-progress-fill");
var vidBar = document.getElementById("video-progress");
var vidTimeEl = document.getElementById("video-time");
var vidPrerollEl = document.getElementById("video-preroll");
var vidMidrollEl = document.getElementById("video-midroll");
var vidOverlayEl = document.getElementById("video-overlay");
var vidSkipBtn = document.getElementById("btn-skip-preroll");
var vidPreCount = document.getElementById("preroll-count");
var vidMidCount = document.getElementById("midroll-count");

function fmtTime(s) {
  s = Math.max(0, Math.floor(s));
  return Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2);
}

function vidRender() {
  vidFill.style.width = (vidTime / VID_DURATION * 100) + "%";
  vidTimeEl.textContent = fmtTime(vidTime) + " / " + fmtTime(VID_DURATION);
  vidPlayBtn.textContent = translations[currentLang][vidPlaying ? "video_pause" : "video_play"];
}

function vidRenderAd() {
  var left = Math.max(0, Math.ceil(vidAdLeft));
  if (vidAd === "preroll") {
    vidPreCount.textContent = translations[currentLang].video_ad_ends + " " + left + "s";
    // Skip counts its own unskippable portion (3, 2, 1), not the ad total.
    var skipLeft = Math.ceil(vidAdLeft - (VID_AD_LEN - VID_UNSKIPPABLE));
    if (skipLeft <= 0) {
      vidSkipBtn.disabled = false;
      vidSkipBtn.textContent = translations[currentLang].video_skip;
    } else {
      vidSkipBtn.disabled = true;
      vidSkipBtn.textContent = translations[currentLang].video_skip_in + " " + skipLeft;
    }
  } else if (vidAd === "midroll") {
    vidMidCount.textContent = translations[currentLang].video_ad_ends + " " + left + "s";
  }
}

function vidStartAd(kind) {
  var adEl = kind === "preroll" ? vidPrerollEl : vidMidrollEl;
  function markDone() {
    if (kind === "preroll") vidPrerollDone = true;
    else vidMidrollDone = true;
  }
  // Adaptive behavior: with the ad servers blocked, skip the ad break and
  // play content directly, like a real player with an unreachable ad server.
  if (adServersBlocked()) {
    markDone();
    updateTrackerLog(translations[currentLang].log_ads_skipped);
    vidRender();
    return;
  }
  vidAd = kind;
  vidAdLeft = VID_AD_LEN;
  adEl.hidden = false;
  // Cosmetic verdict: if a blocker hides the ad element itself, there is no
  // visible break — skip its timer instead of playing dead air.
  if (adHidden(adEl)) {
    vidAd = null;
    adEl.hidden = true;
    markDone();
    updateTrackerLog(translations[currentLang].log_ad_hidden);
    vidRender();
    return;
  }
  updateTrackerLog(translations[currentLang][kind === "preroll" ? "log_preroll" : "log_midroll"]);
  // Verdict still pending: show the break, but cut it the moment the
  // beacons prove blocked (plus a short cap), so a blocked ad never plays
  // in full just because we pressed Play early.
  if (adBeaconsPending()) {
    vidCheckTimer = setTimeout(function () {
      if (vidAd && adServersBlocked()) {
        vidEndAd();
        updateTrackerLog(translations[currentLang].log_ads_skipped);
      }
    }, 2000);
  }
  vidRenderAd();
}

function adHidden(el) {
  if (el.getBoundingClientRect().width === 0) return true;
  if (window.getComputedStyle && getComputedStyle(el).display === "none") return true;
  return false;
}

function vidEndAd() {
  if (vidCheckTimer) {
    clearTimeout(vidCheckTimer);
    vidCheckTimer = null;
  }
  vidPrerollEl.hidden = true;
  vidMidrollEl.hidden = true;
  if (vidAd === "preroll") vidPrerollDone = true;
  if (vidAd === "midroll") vidMidrollDone = true;
  vidAd = null;
  vidRender();
}

vidPlayBtn.addEventListener("click", function () {
  vidRestartBtn.disabled = false;
  if (vidPlaying) {
    vidPlaying = false;
  } else if (!vidPrerollDone && !vidAd) {
    vidPlaying = true;
    vidStartAd("preroll");
  } else {
    vidPlaying = true;
  }
  vidRender();
});

vidSkipBtn.addEventListener("click", function () {
  if (vidAd === "preroll" && vidAdLeft <= VID_AD_LEN - VID_UNSKIPPABLE) vidEndAd();
});

document.getElementById("btn-close-overlay").addEventListener("click", function () {
  vidOverlayEl.hidden = true;
});

vidRestartBtn.addEventListener("click", function () {
  if (vidCheckTimer) {
    clearTimeout(vidCheckTimer);
    vidCheckTimer = null;
  }
  vidTime = 0;
  vidPrerollDone = false;
  vidMidrollDone = false;
  vidOverlayDone = false;
  vidAd = null;
  vidPrerollEl.hidden = true;
  vidMidrollEl.hidden = true;
  vidOverlayEl.hidden = true;
  // Restart implies playback: run the preroll flow again like Play does.
  vidPlaying = true;
  vidStartAd("preroll");
  vidRender();
});

vidBar.addEventListener("click", function (e) {
  var rect = vidBar.getBoundingClientRect();
  var ratio = (e.clientX - rect.left) / rect.width;
  vidTime = Math.min(VID_DURATION, Math.max(0, ratio * VID_DURATION));
  vidRender();
});

setInterval(function () {
  if (!vidPlaying) return;
  if (vidAd) {
    vidAdLeft -= 0.5;
    if (vidAdLeft <= 0) {
      vidEndAd();
    } else {
      vidRenderAd();
    }
    return;
  }
  vidTime += 0.5;
  if (!vidMidrollDone && vidTime >= VID_DURATION / 2) {
    vidStartAd("midroll");
    return;
  }
  if (vidTime >= VID_DURATION) {
    vidTime = VID_DURATION;
    vidPlaying = false;
  }
  if (!vidOverlayDone && vidTime >= 5) {
    vidOverlayDone = true;
    // Like the ad breaks, the overlay only shows when servers are reachable.
    if (!adServersBlocked()) vidOverlayEl.hidden = false;
  }
  vidRender();
}, 500);

vidRender();

// Fake articles for the nav and Most-read links. Bodies reuse the same
// lorem ipsum filler; only headlines and bylines change per story.
var articles = {
  home: {
    title: {
      en: "Local Developer Builds Tiny Website to Test Content Blockers",
      es: "Un desarrollador crea un sitio diminuto para probar bloqueadores de contenido"
    },
    byline: {
      en: "By Jane Reporter — October 13, 2026 — 4 min read",
      es: "Por Jane Reporter — 13 de octubre de 2026 — 4 min de lectura"
    }
  },
  world: {
    title: {
      en: "City Council Approves New Bike Lane Network",
      es: "El concejo aprueba una nueva red de ciclovías"
    },
    byline: {
      en: "By Marco Diaz — October 12, 2026 — 3 min read",
      es: "Por Marco Díaz — 12 de octubre de 2026 — 3 min de lectura"
    }
  },
  tech: {
    title: {
      en: "New Browser Update Promises Faster Page Loads",
      es: "Una actualización del navegador promete cargas más rápidas"
    },
    byline: {
      en: "By Tech Desk — October 11, 2026 — 5 min read",
      es: "Por Redacción Tech — 11 de octubre de 2026 — 5 min de lectura"
    }
  },
  sports: {
    title: {
      en: "Local Team Wins Championship in Overtime",
      es: "El equipo local gana el campeonato en tiempo extra"
    },
    byline: {
      en: "By Sam Coach — October 10, 2026 — 2 min read",
      es: "Por Sam Coach — 10 de octubre de 2026 — 2 min de lectura"
    }
  },
  culture: {
    title: {
      en: "Museum Opens Free Weekend Exhibition",
      es: "El museo abre una exhibición gratuita el fin de semana"
    },
    byline: {
      en: "By Ana Ruiz — October 9, 2026 — 4 min read",
      es: "Por Ana Ruiz — 9 de octubre de 2026 — 4 min de lectura"
    }
  }
};

var currentArticle = "home";

function renderArticle() {
  var a = articles[currentArticle] || articles.home;
  document.getElementById("story-title").textContent = a.title[currentLang];
  document.getElementById("story-byline").textContent = a.byline[currentLang];
  document.title = translations[currentLang].page_title + " — " + a.title[currentLang];
  var links = document.querySelectorAll("[data-article]");
  for (var i = 0; i < links.length; i++) {
    var active = links[i].getAttribute("data-article") === currentArticle;
    links[i].classList.toggle("is-active", active);
    if (active) {
      links[i].setAttribute("aria-current", "page");
    } else {
      links[i].removeAttribute("aria-current");
    }
  }
}

function loadArticle(id, fromHash) {
  if (!articles[id]) id = "home";
  currentArticle = id;
  renderArticle();
  updateTrackerLog(translations[currentLang].log_pageview + " /" + id);
  if (!fromHash) location.hash = "#/" + id;
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", function () {
  loadArticle(location.hash.replace("#/", ""), true);
});

// Test window.open popups (FirstParty/ThirdPartyPopupRules block the
// popup resource type). Must run on user click to pass Safari's own gate.
document.getElementById("btn-open-window").addEventListener("click", function () {
  var w = null;
  try {
    w = window.open(location.href, "_blank");
  } catch (e) {
    w = null;
  }
  var opened = false;
  try {
    opened = !!w && !w.closed;
  } catch (e) {
    opened = false;
  }
  updateTrackerLog(translations[currentLang][opened ? "log_popup_opened" : "log_popup_blocked"]);
});

// Network beacons: real third-party requests that URL-based block rules
// target. Statuses update here; confirm in Safari Web Inspector → Network.
// Only the video ad server gates video breaks. The page-level ad loader is
// excluded on purpose: it doubles as the blocker-detection probe, so its
// result must not decide video playback.
var AD_BEACON_NAMES = ["imasdk.googleapis.com"];

function adBeaconStates() {
  var states = [];
  for (var i = 0; i < BEACONS.length; i++) {
    if (AD_BEACON_NAMES.indexOf(BEACONS[i].name) !== -1) states.push(BEACONS[i].state);
  }
  return states;
}

function adServersBlocked() {
  var states = adBeaconStates();
  return states.length === AD_BEACON_NAMES.length && states.every(function (s) { return s === "blocked"; });
}

function adBeaconsPending() {
  return adBeaconStates().some(function (s) { return s === "pending"; });
}

function updateVideoNet() {
  var el = document.getElementById("video-netstatus");
  if (!el) return;
  var t = translations[currentLang];
  var states = adBeaconStates();
  if (adServersBlocked()) {
    el.textContent = t.video_net_blocked;
  } else if (states.some(function (s) { return s === "pending"; })) {
    el.textContent = t.video_net_wait;
  } else {
    el.textContent = t.video_net_ok;
  }
  // Re-evaluate a break already on screen: a blocked verdict landing
  // mid-ad must cut it immediately, not after the countdown.
  if (vidAd && adServersBlocked()) {
    vidEndAd();
    updateTrackerLog(translations[currentLang].log_ads_skipped);
  } else if (!vidAd && adServersBlocked() && !vidOverlayEl.hidden) {
    vidOverlayEl.hidden = true;
  }
}
var BEACONS = [
  { kind: "image", name: "pixel.wp.com", url: "https://pixel.wp.com/g.gif?demo=1", state: "pending" },
  { kind: "script", name: "google-analytics.com", url: "https://www.google-analytics.com/analytics.js", state: "pending" },
  { kind: "script", name: "googletagmanager.com", url: "https://www.googletagmanager.com/gtm.js?id=GTM-TEST", state: "pending" },
  { kind: "script", name: "googlesyndication.com", url: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", state: "pending" },
  { kind: "script", name: "imasdk.googleapis.com", url: "https://imasdk.googleapis.com/js/sdkloader/ima3.js", state: "pending" }
];

function beaconStatusText(state) {
  if (state === "loaded") return translations[currentLang].beacon_loaded;
  if (state === "blocked") return translations[currentLang].beacon_blocked;
  return "…";
}

function renderBeacons() {
  var list = document.getElementById("beacon-list");
  if (!list) return;
  list.textContent = "";
  for (var i = 0; i < BEACONS.length; i++) {
    var li = document.createElement("li");
    var code = document.createElement("code");
    code.textContent = BEACONS[i].kind + " " + BEACONS[i].name;
    var span = document.createElement("span");
    span.textContent = ": " + beaconStatusText(BEACONS[i].state);
    li.appendChild(code);
    li.appendChild(span);
    list.appendChild(li);
  }
  updateVideoNet();
}

function fireBeacons() {
  renderBeacons();
  BEACONS.forEach(function (b) {
    var done = function (state) {
      if (b.state === "pending") {
        b.state = state;
        renderBeacons();
      }
    };
    var el = b.kind === "image" ? new Image() : document.createElement("script");
    el.onload = function () { done("loaded"); };
    el.onerror = function () { done("blocked"); };
    el.src = b.url;
    if (b.kind === "script") document.head.appendChild(el);
    setTimeout(function () { done("blocked"); }, 8000);
  });
}

// Blocker detection via a well-known advertising script used as a probe. If
// the <script> load is stopped, a blocker is assumed and a paywall notice
// appears, like on real sites. The probe URL is intentionally the canonical
// one, without extras.
var PROBE_SCRIPT_URL = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
var blockerState = "checking";

function setBlocker(state) {
  blockerState = state;
  var el = document.getElementById("blocker-status");
  if (!el) return;
  var t = translations[currentLang];
  if (state === "yes") el.textContent = t.blocker_yes;
  else if (state === "no") el.textContent = t.blocker_no;
  else if (state === "unknown") el.textContent = t.blocker_unknown;
  else el.textContent = t.blocker_checking;
}

function runBlockerCheck() {
  setBlocker("checking");
  // Control first: without network, a probe failure means nothing.
  probeURL(NET_CONTROL_URL).then(function (cstate) {
    netControl = cstate;
    setNetStatus();
    var s = document.createElement("script");
    var done = false;
    function finish(blocked) {
      if (done) return;
      done = true;
      if (s.parentNode) s.parentNode.removeChild(s);
      var paywall = document.getElementById("paywall-overlay");
      if (!blocked) {
        setBlocker("no");
        paywall.hidden = true;
        updateTrackerLog(translations[currentLang].log_blocker_off);
      } else if (netControl === "blocked") {
        setBlocker("unknown");
        paywall.hidden = true;
      } else {
        setBlocker("yes");
        paywall.hidden = false;
        updateTrackerLog(translations[currentLang].log_blocker_on);
      }
    }
    s.onload = function () { finish(false); };
    s.onerror = function () { finish(true); };
    s.src = PROBE_SCRIPT_URL;
    document.head.appendChild(s);
    setTimeout(function () { finish(true); }, 8000);
  });
}

document.getElementById("btn-recheck").addEventListener("click", runBlockerCheck);

document.getElementById("btn-paywall-subscribe").addEventListener("click", function () {
  document.getElementById("paywall-overlay").hidden = true;
  updateTrackerLog(translations[currentLang].log_paywall_sub);
});

document.getElementById("btn-paywall-continue").addEventListener("click", function () {
  document.getElementById("paywall-overlay").hidden = true;
});

document.getElementById("btn-close-rail-left").addEventListener("click", function () {
  document.getElementById("ad-rail-left").style.display = "none";
});

document.getElementById("btn-close-rail-right").addEventListener("click", function () {
  document.getElementById("ad-rail-right").style.display = "none";
});

// Fake tracker heartbeat, so blocking its JS is observable.
setInterval(function () {
  updateTrackerLog(translations[currentLang].log_heartbeat + location.pathname + translations[currentLang].log_fake);
}, 10000);

var startId = location.hash.replace("#/", "");
if (articles[startId]) currentArticle = startId;
setLang(detectLang());
// The big preferences dialog shows on its own, independently of the small banner.
openPrefs();
fireBeacons();
runBlockerCheck();
updateTrackerLog(translations[currentLang].log_pageview + " /" + currentArticle);
