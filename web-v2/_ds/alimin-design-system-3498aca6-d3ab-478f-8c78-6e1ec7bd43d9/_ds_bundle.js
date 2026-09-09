/* @ds-bundle: {"format":4,"namespace":"AliminDesignSystem_3498ac","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"WA_PATH","sourcePath":"components/actions/WhatsAppButton.jsx"},{"name":"WhatsAppButton","sourcePath":"components/actions/WhatsAppButton.jsx"},{"name":"WhatsAppFloat","sourcePath":"components/actions/WhatsAppFloat.jsx"},{"name":"AdvisorCard","sourcePath":"components/cards/AdvisorCard.jsx"},{"name":"FinancialTable","sourcePath":"components/cards/FinancialTable.jsx"},{"name":"PlaceCard","sourcePath":"components/cards/PlaceCard.jsx"},{"name":"QuoteCard","sourcePath":"components/cards/QuoteCard.jsx"},{"name":"GoogleG","sourcePath":"components/cards/ReviewCard.jsx"},{"name":"Stars","sourcePath":"components/cards/ReviewCard.jsx"},{"name":"ReviewCard","sourcePath":"components/cards/ReviewCard.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"BenefitItem","sourcePath":"components/display/BenefitItem.jsx"},{"name":"PriceChip","sourcePath":"components/display/PriceChip.jsx"},{"name":"SectionHeader","sourcePath":"components/display/SectionHeader.jsx"},{"name":"StatBlock","sourcePath":"components/display/StatBlock.jsx"},{"name":"TrustCheck","sourcePath":"components/display/TrustCheck.jsx"},{"name":"FaqItem","sourcePath":"components/forms/FaqItem.jsx"},{"name":"SelectField","sourcePath":"components/forms/SelectField.jsx"},{"name":"TerrenoPicker","sourcePath":"components/forms/TerrenoPicker.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"8677010d94ef","components/actions/WhatsAppButton.jsx":"880beb464a84","components/actions/WhatsAppFloat.jsx":"d6758689689e","components/cards/AdvisorCard.jsx":"df2caed3d25e","components/cards/FinancialTable.jsx":"54cdbde10af8","components/cards/PlaceCard.jsx":"4e4b5b36e316","components/cards/QuoteCard.jsx":"41dd0c8f740a","components/cards/ReviewCard.jsx":"43ae4be2d9ef","components/display/Badge.jsx":"2673bb479cee","components/display/BenefitItem.jsx":"d64751c47e97","components/display/PriceChip.jsx":"9af9ecb1ea7d","components/display/SectionHeader.jsx":"a91f5cf1f983","components/display/StatBlock.jsx":"86deabaef8c2","components/display/TrustCheck.jsx":"ee1b0a3a8da6","components/forms/FaqItem.jsx":"2cca81fb3f60","components/forms/SelectField.jsx":"24b01e4dbe48","components/forms/TerrenoPicker.jsx":"5e94b3471869","components/forms/TextField.jsx":"ee89b18c66a0","components/navigation/Footer.jsx":"7ffaa0b97838","components/navigation/Navbar.jsx":"60bb39e2d42c","ui_kits/minipie/MiniPieAdvisors.jsx":"719bd63380cc","ui_kits/minipie/MiniPieBenefits.jsx":"18e49903e819","ui_kits/minipie/MiniPieFaq.jsx":"28f17eba035a","ui_kits/minipie/MiniPieForm.jsx":"1c9f5a102ab0","ui_kits/minipie/MiniPieHero.jsx":"182ffeb19701","ui_kits/minipie/MiniPieTerrenos.jsx":"9731e32f6071","ui_kits/minipie/MiniPieTestimonials.jsx":"933ed6ed0e81"},"inlinedExternals":[],"unexposedExports":[{"name":"waLink","sourcePath":"components/actions/WhatsAppButton.jsx"}]} */

(() => {

const __ds_ns = (window.AliminDesignSystem_3498ac = window.AliminDesignSystem_3498ac || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
const VARIANTS = {
  primary: {
    background: 'var(--grad-cta)',
    color: '#fff',
    border: 'none',
    boxShadow: 'var(--shadow-cta)',
    borderRadius: 'var(--radius-btn-lg)'
  },
  ghost: {
    background: 'rgba(255,255,255,.09)',
    color: 'rgba(255,255,255,.85)',
    border: '1px solid var(--border-white-18)',
    borderRadius: 'var(--radius-btn-lg)'
  },
  deep: {
    background: 'var(--grad-deep)',
    color: '#fff',
    border: 'none',
    boxShadow: 'var(--shadow-deep-btn)',
    borderRadius: 'var(--radius-btn)'
  },
  'deep-lima': {
    background: 'var(--grad-deep-lima)',
    color: '#fff',
    border: 'none',
    boxShadow: '0 4px 16px rgba(50,83,102,.35)',
    borderRadius: 'var(--radius-btn)'
  },
  pill: {
    background: 'var(--grad-cta)',
    color: '#fff',
    border: 'none',
    boxShadow: 'var(--shadow-cta-sm)',
    borderRadius: 'var(--radius-pill)'
  },
  'white-pill': {
    background: '#fff',
    color: '#2d7a3a',
    border: 'none',
    boxShadow: '0 4px 16px rgba(0,0,0,.2)',
    borderRadius: 'var(--radius-pill)'
  },
  outline: {
    background: 'rgba(255,255,255,.08)',
    color: '#fff',
    border: '1.5px solid rgba(255,255,255,.2)',
    borderRadius: 'var(--radius-btn-lg)'
  }
};
const SIZES = {
  sm: {
    padding: '10px 20px',
    font: '700 13px var(--font-display)'
  },
  md: {
    padding: '14px 26px',
    font: '700 14px var(--font-display)'
  },
  lg: {
    padding: '15px 32px',
    font: '700 15px var(--font-display)'
  },
  xl: {
    padding: '16px 40px',
    font: '700 16px var(--font-display)'
  }
};
function Button({
  variant = 'primary',
  size = 'lg',
  fullWidth = false,
  href,
  onClick,
  children,
  style
}) {
  const s = {
    display: fullWidth ? 'flex' : 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: fullWidth ? '100%' : undefined,
    cursor: 'pointer',
    letterSpacing: '.01em',
    whiteSpace: 'nowrap',
    transition: 'transform .2s, box-shadow .2s, background .25s',
    textDecoration: 'none',
    ...VARIANTS[variant],
    ...SIZES[size],
    ...style
  };
  if (href) return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: s,
    onClick: onClick
  }, children);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: s
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/WhatsAppButton.jsx
try { (() => {
const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z';

/** Builds the mandatory pre-filled wa.me link. */
function waLink(phone, message) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
function WhatsAppButton({
  phone = '56956654833',
  message = 'Hola, vengo de la web y quiero más información.',
  children = 'WhatsApp',
  fullWidth = true,
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: waLink(phone, message),
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      width: fullWidth ? '100%' : undefined,
      background: 'var(--grad-whatsapp)',
      color: '#fff',
      padding: '13px 20px',
      borderRadius: 'var(--radius-btn)',
      font: '700 14px var(--font-display)',
      boxShadow: 'var(--shadow-wa)',
      transition: 'all .25s',
      textDecoration: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "white"
  }, /*#__PURE__*/React.createElement("path", {
    d: WA_PATH
  })), children);
}
Object.assign(__ds_scope, { WA_PATH, waLink, WhatsAppButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/WhatsAppButton.jsx", error: String((e && e.message) || e) }); }

// components/actions/WhatsAppFloat.jsx
try { (() => {
function WhatsAppFloat({
  phone = '56956654833',
  message = 'Hola, vengo de la web y quiero info sobre Mini Pie 🌲'
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: __ds_scope.waLink(phone, message),
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      width: '58px',
      height: '58px',
      background: 'var(--grad-whatsapp)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 24px rgba(118,216,69,.45)',
      zIndex: 999,
      animation: 'pulseGreen 2.8s ease-in-out infinite',
      transition: 'transform .2s'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "white"
  }, /*#__PURE__*/React.createElement("path", {
    d: __ds_scope.WA_PATH
  })));
}
Object.assign(__ds_scope, { WhatsAppFloat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/WhatsAppFloat.jsx", error: String((e && e.message) || e) }); }

// components/cards/AdvisorCard.jsx
try { (() => {
function AdvisorCard({
  photo,
  name,
  role = 'Asesor inmobiliario',
  description,
  phoneDisplay,
  phone,
  waMessage
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,.06)',
      border: '2px solid var(--border-lima-35)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      transition: 'all .3s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '360px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      objectPosition: 'center bottom',
      display: 'block',
      background: '#0a1a26'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top,rgba(14,26,36,.92) 0%,rgba(14,26,36,.1) 55%,transparent 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '20px',
      left: '22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 10px var(--font-display)',
      color: 'var(--verde-lima)',
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      marginBottom: '4px'
    }
  }, role), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 22px var(--font-display)',
      color: '#fff'
    }
  }, name))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 13px/1.6 var(--font-body)',
      color: 'var(--text-on-dark-55)',
      margin: '0 0 16px'
    }
  }, description), phoneDisplay && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '7px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#76d845",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.62 5a2 2 0 0 1 1.99-2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px var(--font-body)',
      color: 'var(--text-on-dark-45)'
    }
  }, phoneDisplay)), /*#__PURE__*/React.createElement(__ds_scope.WhatsAppButton, {
    phone: phone,
    message: waMessage
  }, "WhatsApp con ", name.split(' ')[0])));
}
Object.assign(__ds_scope, { AdvisorCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/AdvisorCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/FinancialTable.jsx
try { (() => {
function FinancialTable({
  title = 'Detalle financiero',
  rows = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,.07)',
      border: '1px solid rgba(255,255,255,.1)',
      borderRadius: 'var(--radius-btn)',
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px var(--font-display)',
      color: 'rgba(255,255,255,.4)',
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      marginBottom: '12px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '9px'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: i < rows.length - 1 ? '8px' : 0,
      borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,.08)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px var(--font-body)',
      color: 'var(--text-on-dark-55)'
    }
  }, r.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 15px var(--font-display)',
      color: r.highlight ? 'var(--verde-lima)' : '#fff'
    }
  }, r.value)))));
}
Object.assign(__ds_scope, { FinancialTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FinancialTable.jsx", error: String((e && e.message) || e) }); }

// components/cards/PlaceCard.jsx
try { (() => {
function PlaceCard({
  image,
  distance,
  category,
  title,
  description
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-media)',
      overflow: 'hidden',
      aspectRatio: '3/4',
      border: '2px solid var(--border-lima-40)',
      transition: 'transform .35s var(--ease-out-expo), box-shadow .35s'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform .6s ease'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grad-scrim-up)'
    }
  }), distance && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '14px',
      left: '14px',
      background: 'rgba(118,216,69,.9)',
      backdropFilter: 'var(--blur-badge)',
      borderRadius: 'var(--radius-pill)',
      padding: '5px 12px',
      font: '700 11px var(--font-display)',
      color: '#fff'
    }
  }, "\uD83D\uDCCD ", distance), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '24px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 10px var(--font-display)',
      color: 'rgba(255,255,255,.55)',
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      marginBottom: '5px'
    }
  }, category), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 22px var(--font-display)',
      color: '#fff',
      lineHeight: 1.1,
      marginBottom: '6px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 var(--font-body)',
      color: 'rgba(255,255,255,.6)'
    }
  }, description)));
}
Object.assign(__ds_scope, { PlaceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PlaceCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ReviewCard.jsx
try { (() => {
function GoogleG({
  size = 20
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
    fill: "#4285F4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
    fill: "#34A853"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
    fill: "#FBBC05"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
    fill: "#EA4335"
  }));
}
function Stars({
  time
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--star-gold)',
      fontSize: '15px',
      letterSpacing: '1px'
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), time && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, time));
}
function ReviewCard({
  initials,
  name,
  meta,
  time,
  children,
  avatarGradient = 'linear-gradient(135deg,#4ba646,#325366)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "gr-card",
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-review)',
      padding: '26px',
      boxShadow: 'var(--shadow-card-light)',
      border: '1.5px solid var(--border-lima-35)',
      transition: 'transform .3s var(--ease-out-expo), box-shadow .3s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      background: avatarGradient,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '700 15px var(--font-display)',
      color: '#fff',
      flexShrink: 0
    }
  }, initials), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px var(--font-display)',
      color: 'var(--text-heading-light)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, meta)), /*#__PURE__*/React.createElement(GoogleG, null)), /*#__PURE__*/React.createElement(Stars, {
    time: time
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px/1.6 var(--font-body)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { GoogleG, Stars, ReviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ReviewCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/QuoteCard.jsx
try { (() => {
function QuoteCard({
  quote,
  initials,
  name,
  meta,
  time
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--grad-quote)',
      borderRadius: 'var(--radius-card)',
      padding: '36px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: 'var(--shadow-quote)',
      position: 'relative',
      overflow: 'hidden',
      border: '2px solid var(--border-lima-40)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '24px',
      right: '28px',
      font: "900 90px 'Montserrat',serif",
      color: 'rgba(118,216,69,.14)',
      lineHeight: 1
    }
  }, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--star-gold)',
      fontSize: '15px',
      letterSpacing: '1px'
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), time && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px var(--font-body)',
      color: 'rgba(255,255,255,.5)'
    }
  }, time)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 17px/1.7 var(--font-body)',
      color: '#fff',
      marginBottom: '24px',
      marginTop: 0
    }
  }, "\"", quote, "\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '46px',
      height: '46px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg,#6ac28f,#4ba646)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '700 16px var(--font-display)',
      color: '#fff',
      flexShrink: 0
    }
  }, initials), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 15px var(--font-display)',
      color: '#fff'
    }
  }, name), /*#__PURE__*/React.createElement(__ds_scope.GoogleG, {
    size: 15
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-body)',
      color: 'rgba(255,255,255,.5)'
    }
  }, meta))));
}
Object.assign(__ds_scope, { QuoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/QuoteCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const KINDS = {
  urgency: {
    background: 'var(--urgency-red-bg)',
    border: '1px solid var(--urgency-red-border)',
    color: 'var(--urgency-red)'
  },
  live: {
    background: 'rgba(118,216,69,.15)',
    border: '1px solid var(--border-lima-30)',
    color: 'var(--verde-solido)'
  },
  'live-media': {
    background: 'rgba(118,216,69,.2)',
    border: '1px solid var(--border-lima-40)',
    color: 'var(--verde-lima-text)',
    backdropFilter: 'var(--blur-badge)'
  },
  glass: {
    background: 'var(--surface-dark-glass)',
    border: '1px solid var(--border-lima-35)',
    color: '#fff',
    backdropFilter: 'var(--blur-badge)'
  },
  distance: {
    background: 'rgba(118,216,69,.9)',
    border: 'none',
    color: '#fff',
    backdropFilter: 'var(--blur-badge)'
  },
  feature: {
    background: 'rgba(118,216,69,.15)',
    border: '1px solid var(--border-lima-25)',
    color: 'var(--verde-lima-text)'
  },
  promo: {
    background: 'var(--grad-cta)',
    border: 'none',
    color: '#fff',
    boxShadow: '0 4px 12px rgba(118,216,69,.5)'
  }
};
function Badge({
  kind = 'live',
  dot = false,
  pulse = false,
  children,
  style
}) {
  const k = KINDS[kind];
  const dotColor = kind === 'urgency' ? 'var(--urgency-red)' : kind === 'glass' || kind === 'distance' || kind === 'promo' ? '#fff' : 'var(--verde-lima)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      borderRadius: 'var(--radius-pill)',
      padding: kind === 'feature' ? '4px 10px' : '5px 13px',
      font: '700 11px var(--font-display)',
      letterSpacing: '.05em',
      ...k,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '7px',
      height: '7px',
      background: dotColor,
      borderRadius: '50%',
      display: 'inline-block',
      animation: pulse ? 'pulseGreen 2s ease-in-out infinite' : undefined
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/BenefitItem.jsx
try { (() => {
function BenefitItem({
  icon,
  title,
  tag,
  description
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '52px',
      height: '52px',
      background: 'var(--grad-cta)',
      borderRadius: 'var(--radius-icon)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      boxShadow: '0 6px 20px rgba(118,216,69,.45)',
      color: '#fff'
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 22px var(--font-display)',
      color: '#fff',
      lineHeight: 1,
      marginBottom: '3px'
    }
  }, title), tag && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 11px var(--font-display)',
      color: 'var(--verde-lima)',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      marginBottom: '4px'
    }
  }, tag), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.5 var(--font-body)',
      color: 'rgba(255,255,255,.6)'
    }
  }, description)));
}
Object.assign(__ds_scope, { BenefitItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/BenefitItem.jsx", error: String((e && e.message) || e) }); }

// components/display/PriceChip.jsx
try { (() => {
function PriceChip({
  label,
  oldPrice,
  price,
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-dark-chip)',
      border: '1px solid var(--border-lima-35)',
      borderRadius: '14px',
      padding: '10px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '3px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 10px var(--font-display)',
      color: 'var(--text-on-dark-45)',
      textTransform: 'uppercase',
      letterSpacing: '.08em'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, oldPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px var(--font-body)',
      color: 'rgba(255,100,100,.75)',
      textDecoration: 'line-through'
    }
  }, oldPrice), oldPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 10px var(--font-display)',
      color: 'var(--text-on-dark-35)'
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 16px var(--font-display)',
      color: 'var(--verde-lima)'
    }
  }, price)), note && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 10px var(--font-body)',
      color: 'rgba(118,216,69,.7)'
    }
  }, note));
}
Object.assign(__ds_scope, { PriceChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/PriceChip.jsx", error: String((e && e.message) || e) }); }

// components/display/SectionHeader.jsx
try { (() => {
function Rule({
  flip
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: '32px',
      height: '2px',
      background: flip ? 'linear-gradient(90deg,#4ba646,#76d845)' : 'var(--grad-rule)'
    }
  });
}
function SectionHeader({
  kicker,
  title,
  subtitle,
  dark = true,
  align = 'center',
  maxWidth = '560px'
}) {
  const centered = align === 'center';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      marginBottom: '48px'
    }
  }, kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-kicker)',
      color: dark ? 'var(--verde-lima)' : 'var(--verde-solido)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-kicker)'
    }
  }, kicker), centered && /*#__PURE__*/React.createElement(Rule, {
    flip: true
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      color: dark ? '#fff' : 'var(--text-heading-light)',
      margin: '0 0 12px',
      letterSpacing: 'var(--ls-tight)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: dark ? 'var(--text-on-dark-55)' : 'var(--text-secondary)',
      maxWidth,
      margin: centered ? '0 auto' : '0'
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/display/StatBlock.jsx
try { (() => {
function StatBlock({
  value,
  label,
  size = 'md'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: size === 'lg' ? '800 clamp(1.4rem,2.5vw,2rem) var(--font-display)' : '800 28px var(--font-display)',
      color: 'var(--verde-lima)',
      marginBottom: '4px'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-body)',
      color: 'var(--text-on-dark-45)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/display/TrustCheck.jsx
try { (() => {
function TrustCheck({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-body)',
      color: 'rgba(255,255,255,.5)',
      display: 'flex',
      alignItems: 'center',
      gap: '7px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '18px',
      height: '18px',
      background: 'rgba(118,216,69,.2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '10px',
      color: 'var(--verde-lima)',
      flexShrink: 0
    }
  }, "\u2713"), children);
}
Object.assign(__ds_scope, { TrustCheck });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/TrustCheck.jsx", error: String((e && e.message) || e) }); }

// components/forms/FaqItem.jsx
try { (() => {
const {
  useState
} = React;
function FaqItem({
  question,
  children,
  defaultOpen = false
}) {
  const [open, setOpen] = useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: open ? 'var(--verde-bg-open)' : '#fff',
      borderRadius: '14px',
      border: '1.5px solid var(--border-faq)',
      overflow: 'hidden',
      transition: 'background .25s'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(!open),
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '18px 22px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 15px var(--font-display)',
      color: 'var(--text-heading-light)'
    }
  }, question), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 22px var(--font-display)',
      color: 'var(--verde-solido)',
      flexShrink: 0
    }
  }, open ? '−' : '+')), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open ? '220px' : '0px',
      overflow: 'hidden',
      transition: 'max-height .35s var(--ease-out-expo)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      padding: '0 22px 18px',
      font: '400 14px/1.7 var(--font-body)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, children)));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/forms/SelectField.jsx
try { (() => {
function SelectField({
  label,
  value,
  onChange,
  options = [],
  placeholder = 'Selecciona una opción',
  required = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      font: '500 13px var(--font-display)',
      color: 'rgba(255,255,255,.85)'
    }
  }, label, required ? ' *' : ''), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    required: required,
    style: {
      border: '1.5px solid var(--border-input)',
      borderRadius: 'var(--radius-input)',
      padding: '12px 14px',
      color: 'var(--text-heading-light)',
      background: '#fff',
      width: '100%',
      appearance: 'none',
      WebkitAppearance: 'none'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { SelectField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SelectField.jsx", error: String((e && e.message) || e) }); }

// components/forms/TerrenoPicker.jsx
try { (() => {
function TerrenoPicker({
  options = [],
  value,
  onChange,
  label = 'Terreno de interés *'
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      font: '500 13px var(--font-display)',
      color: 'rgba(255,255,255,.85)',
      display: 'block',
      marginBottom: '10px'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${options.length}, 1fr)`,
      gap: '12px'
    }
  }, options.map(o => {
    const selected = value === o.value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      onClick: () => onChange && onChange(o.value),
      style: {
        background: selected ? 'rgba(118,216,69,.22)' : 'rgba(255,255,255,.06)',
        border: selected ? '2px solid var(--verde-lima)' : '1.5px solid var(--border-white-12)',
        borderRadius: 'var(--radius-btn)',
        padding: '14px 16px',
        cursor: 'pointer',
        transition: 'all .2s',
        textAlign: 'left',
        backdropFilter: 'var(--blur-badge)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '700 16px var(--font-display)',
        color: selected ? 'var(--verde-lima)' : 'rgba(255,255,255,.55)',
        marginBottom: '2px'
      }
    }, o.title), o.detail && /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 12px var(--font-body)',
        color: '#9CA3AF'
      }
    }, o.detail));
  })));
}
Object.assign(__ds_scope, { TerrenoPicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TerrenoPicker.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function TextField({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      font: '500 13px var(--font-display)',
      color: 'rgba(255,255,255,.85)'
    }
  }, label, required ? ' *' : ''), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    required: required,
    style: {
      border: '1.5px solid var(--border-input)',
      borderRadius: 'var(--radius-input)',
      padding: '12px 14px',
      color: 'var(--text-heading-light)',
      background: '#fff',
      width: '100%'
    }
  }));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const SocialLink = ({
  href,
  children
}) => /*#__PURE__*/React.createElement("a", {
  href: href,
  target: "_blank",
  rel: "noopener noreferrer",
  style: {
    width: '36px',
    height: '36px',
    background: 'rgba(255,255,255,.08)',
    border: '1px solid rgba(255,255,255,.12)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    transition: 'background .2s'
  }
}, children);
function Footer({
  logo = '../../assets/logo-alimin-icon.png',
  email = 'bienesraices@aliminspa.cl',
  legal = '© 2026 Alimin SpA · aliminspa.cl · Todos los derechos reservados',
  note = 'Promoción sujeta a disponibilidad de cupos'
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--verde-solido)',
      padding: '48px 20px 36px',
      borderTop: '2px solid rgba(255,255,255,.15)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1160px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '28px',
      paddingBottom: '32px',
      borderBottom: '1px solid rgba(255,255,255,.2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Alimin",
    style: {
      width: '54px',
      height: '54px',
      objectFit: 'contain',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '900 28px/1 var(--font-display)',
      color: '#fff',
      letterSpacing: '-.02em'
    }
  }, "ALIMIN"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 12px var(--font-body)',
      color: '#0a2a0a',
      marginTop: '3px'
    }
  }, "Inmobiliaria SpA"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px var(--font-body)',
      color: 'rgba(255,255,255,.9)',
      marginTop: '1px'
    }
  }, "Litoral Central, Chile"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '9px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#76d845",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "22,6 12,13 2,6"
  })), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${email}`,
    style: {
      font: '700 14px var(--font-body)',
      color: '#fff',
      textDecoration: 'none'
    }
  }, email)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 12px var(--font-body)',
      color: 'rgba(255,255,255,.9)'
    }
  }, "S\xEDguenos:"), /*#__PURE__*/React.createElement(SocialLink, {
    href: "https://www.instagram.com/aliminspa"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "1",
    fill: "currentColor",
    stroke: "none"
  }))), /*#__PURE__*/React.createElement(SocialLink, {
    href: "https://www.facebook.com/aliminspa"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
  }))), /*#__PURE__*/React.createElement(SocialLink, {
    href: "https://www.tiktok.com/@aliminspa"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.81a8.2 8.2 0 0 0 4.77 1.51V6.87a4.86 4.86 0 0 1-1-.18z"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '10px',
      paddingTop: '20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px var(--font-body)',
      color: 'rgba(255,255,255,.85)'
    }
  }, legal), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 11px var(--font-body)',
      color: 'rgba(255,255,255,.7)'
    }
  }, note))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function Navbar({
  variant = 'hero',
  logo = '../../assets/logo-alimin-icon.png',
  badge,
  ctaLabel = 'Asegurar Cupo',
  onCta,
  sticky = false
}) {
  const green = variant === 'green';
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: sticky ? 'fixed' : 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: green ? 200 : 20,
      background: green ? 'var(--grad-nav-green)' : 'linear-gradient(to bottom,rgba(0,0,0,.52) 0%,transparent 100%)',
      backdropFilter: green ? 'var(--blur-nav)' : undefined,
      borderBottom: green ? '2px solid rgba(255,255,255,.2)' : 'none',
      boxShadow: green ? 'var(--shadow-nav-green)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px',
      maxWidth: '1160px',
      margin: '0 auto',
      padding: '0 24px',
      height: green ? '68px' : '64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Alimin",
    style: {
      width: green ? '44px' : '50px',
      height: green ? '44px' : '50px',
      objectFit: 'contain',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '900 24px/1 var(--font-display)',
      color: '#fff',
      letterSpacing: '-.02em'
    }
  }, "ALIMIN")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, badge && (green ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    kind: "glass",
    dot: true,
    style: {
      background: 'rgba(0,0,0,.18)',
      border: '1px solid rgba(255,255,255,.3)'
    }
  }, badge) : /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    kind: "urgency"
  }, "\u26A0 ", badge)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: green ? 'white-pill' : 'pill',
    size: "sm",
    onClick: onCta
  }, ctaLabel, green ? ' →' : ''))));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/minipie/MiniPieAdvisors.jsx
try { (() => {
const {
  SectionHeader,
  AdvisorCard
} = window.AliminDesignSystem_3498ac;
function MiniPieAdvisors() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: '#12253a',
      padding: '72px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: "url('../../assets/places/playa-el-tabo.png') center/cover no-repeat"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(18,37,58,.82)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1160px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-animate": ""
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    kicker: "Equipo comercial",
    title: "Habla con un asesor ahora",
    subtitle: "Cont\xE1ctanos directamente por WhatsApp. Respondemos en minutos."
  })), /*#__PURE__*/React.createElement("div", {
    "data-animate-stagger": "",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement(AdvisorCard, {
    photo: "../../assets/advisors/marcela.png",
    name: "Marcela Escobar",
    role: "Asesora inmobiliaria",
    description: "Te asesora con soluciones r\xE1pidas y transparentes para asegurar tu inversi\xF3n en Lomas del Mar.",
    phoneDisplay: "+56 9 5665 4833",
    phone: "56956654833",
    waMessage: "Hola Marcela, vengo de la web y estoy interesado en la promo Mini Pie \uD83C\uDF32 de Lomas del Mar"
  }), /*#__PURE__*/React.createElement(AdvisorCard, {
    photo: "../../assets/advisors/orlando.png",
    name: "Orlando Costa",
    role: "Asesor inmobiliario",
    description: "Te acompa\xF1a paso a paso para encontrar el lote ideal para tu familia en Lomas del Mar.",
    phoneDisplay: "+56 9 7307 7128",
    phone: "56973077128",
    waMessage: "Hola Orlando, vengo de la web y estoy interesado en la promo Mini Pie \uD83C\uDF32 de Lomas del Mar"
  }))));
}
window.MiniPieAdvisors = MiniPieAdvisors;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/minipie/MiniPieAdvisors.jsx", error: String((e && e.message) || e) }); }

// ui_kits/minipie/MiniPieBenefits.jsx
try { (() => {
const {
  BenefitItem
} = window.AliminDesignSystem_3498ac;
const ic = paths => /*#__PURE__*/React.createElement("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#fff",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  dangerouslySetInnerHTML: {
    __html: paths
  }
});
function MiniPieBenefits() {
  const items = [{
    icon: ic('<path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path>'),
    title: 'Pie desde',
    tag: '$1.500.000 CLP',
    description: /*#__PURE__*/React.createElement(React.Fragment, null, "El pie m\xE1s bajo", /*#__PURE__*/React.createElement("br", null), "del litoral central")
  }, {
    icon: ic('<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>'),
    title: 'Pesos',
    tag: 'No en UF',
    description: /*#__PURE__*/React.createElement(React.Fragment, null, "Precios fijos,", /*#__PURE__*/React.createElement("br", null), "sin sorpresas")
  }, {
    icon: ic('<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>'),
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "No nos importa", /*#__PURE__*/React.createElement("br", null), "tu Dicom"),
    tag: 'Sin evaluación bancaria',
    description: 'Aprobación 100% propia'
  }, {
    icon: ic('<path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"></path>'),
    title: 'Crédito directo',
    tag: 'Sin banco',
    description: 'Financiamiento 100% por parte de la inmobiliaria'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: '#0e1a24'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: "url('../../assets/places/algarrobo.png') center/cover no-repeat"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(18,37,58,.87)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: '1160px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      borderBottom: '1px solid #E8F0EA'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    "data-animate": "",
    style: {
      padding: '28px',
      borderRight: i < items.length - 1 ? '1px solid rgba(255,255,255,.1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(BenefitItem, {
    icon: it.icon,
    title: it.title,
    tag: it.tag,
    description: it.description
  })))));
}
window.MiniPieBenefits = MiniPieBenefits;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/minipie/MiniPieBenefits.jsx", error: String((e && e.message) || e) }); }

// ui_kits/minipie/MiniPieFaq.jsx
try { (() => {
const {
  FaqItem
} = window.AliminDesignSystem_3498ac;
function MiniPieFaq() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--grad-light-band)',
      padding: '72px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '720px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-animate": "",
    style: {
      textAlign: 'center',
      marginBottom: '44px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: '32px',
      height: '2px',
      background: 'var(--grad-rule)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 12px 'Montserrat',sans-serif",
      color: '#76d845',
      textTransform: 'uppercase',
      letterSpacing: '.12em'
    }
  }, "Preguntas frecuentes"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: '32px',
      height: '2px',
      background: 'linear-gradient(90deg,#4ba646,#76d845)'
    }
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "800 clamp(1.8rem,3.5vw,2.6rem)/1.2 'Montserrat',sans-serif",
      color: '#1a2b3d',
      margin: 0
    }
  }, "\xBFTienes dudas?")), /*#__PURE__*/React.createElement("div", {
    "data-animate-stagger": "",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(FaqItem, {
    question: "\xBFQu\xE9 es el Mini Pie y por qu\xE9 es especial?"
  }, "El Mini Pie es una promoci\xF3n exclusiva de Alimin que reduce al m\xEDnimo el pie inicial de tu terreno: desde $1.500.000 para terrenos de 200 m\xB2 y $3.000.000 para 390 m\xB2. Es una edici\xF3n limitada que vuelve por \xFAltima vez, con cupos muy reducidos."), /*#__PURE__*/React.createElement(FaqItem, {
    question: "\xBFC\xF3mo funciona el financiamiento?"
  }, "Pagas el pie inicial y el saldo se financia directamente con Alimin. Sin banco, sin aval. El saldo se divide en cuotas mensuales de $550.000 a 0% de inter\xE9s: 71+1 cuotas para 200 m\xB2 y 87+1 cuotas para 390 m\xB2."), /*#__PURE__*/React.createElement(FaqItem, {
    question: "\xBFPuedo comprar sin historial crediticio?"
  }, "S\xED. El financiamiento es directo con Alimin, sin evaluaci\xF3n bancaria. No importa si tienes DICOM u otro historial crediticio complejo."), /*#__PURE__*/React.createElement(FaqItem, {
    question: "\xBFQu\xE9 incluye la urbanizaci\xF3n de Lomas del Mar?"
  }, "Rol propio inscrito en el Conservador, agua potable certificada SEREMI, empalme el\xE9ctrico en el frontis, port\xF3n autom\xE1tico y calle interior pavimentada."), /*#__PURE__*/React.createElement(FaqItem, {
    question: "\xBFPuedo visitar el terreno antes de comprar?"
  }, "\xA1Por supuesto! Coordinamos visitas guiadas con nuestro equipo de asesores. Solo reg\xEDstrate y uno de nuestros asesores te agenda la visita."))));
}
window.MiniPieFaq = MiniPieFaq;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/minipie/MiniPieFaq.jsx", error: String((e && e.message) || e) }); }

// ui_kits/minipie/MiniPieForm.jsx
try { (() => {
const {
  TextField,
  SelectField,
  TerrenoPicker,
  Button
} = window.AliminDesignSystem_3498ac;
const {
  useState
} = React;
function MiniPieForm({
  terreno,
  setTerreno
}) {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    region: '',
    ciudad: ''
  });
  const field = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const submit = e => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 700);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "registro",
    style: {
      position: 'relative',
      background: '#0a1520',
      padding: '80px 20px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: "url('../../assets/places/isla-negra.png') center/cover no-repeat"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(10,21,32,.60)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '640px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '36px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "800 clamp(1.8rem,4vw,2.8rem)/1.1 'Montserrat',sans-serif",
      color: '#fff',
      margin: '0 0 14px'
    }
  }, "Asegura tu Cupo Mini Pie"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 15px/1.6 'Roboto',sans-serif",
      color: 'rgba(255,255,255,.6)',
      margin: 0
    }
  }, "Completa el formulario y un asesor te contactar\xE1 en menos de 24 horas.")), status !== 'success' ? /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      background: 'rgba(14,26,36,.82)',
      backdropFilter: 'blur(24px)',
      border: '1px solid rgba(118,216,69,.2)',
      borderRadius: '24px',
      padding: '40px',
      boxShadow: '0 24px 64px rgba(0,0,0,.4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: '16px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Nombre completo",
    placeholder: "Tu nombre y apellido",
    required: true,
    value: form.nombre,
    onChange: field('nombre')
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Correo electr\xF3nico",
    type: "email",
    placeholder: "ejemplo@correo.com",
    required: true,
    value: form.email,
    onChange: field('email')
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Tel\xE9fono / WhatsApp",
    type: "tel",
    placeholder: "+56 9 1234 5678",
    required: true,
    value: form.telefono,
    onChange: field('telefono')
  }), /*#__PURE__*/React.createElement(SelectField, {
    label: "Regi\xF3n",
    required: true,
    placeholder: "Selecciona tu regi\xF3n",
    value: form.region,
    onChange: field('region'),
    options: ['Valparaíso', 'Región Metropolitana', "Lib. Gral. B. O'Higgins", 'Maule']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement(TerrenoPicker, {
    value: terreno,
    onChange: setTerreno,
    options: [{
      value: '200m²',
      title: '200 m²',
      detail: 'Pie $1.500.000 · 71 cuotas $550K'
    }, {
      value: '390m²',
      title: '390 m² ✦',
      detail: 'Pie $3.000.000 · 87 cuotas $550K'
    }]
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "deep",
    fullWidth: true,
    size: "md",
    style: {
      padding: '16px',
      borderRadius: '14px'
    }
  }, status === 'loading' ? 'Enviando...' : 'ASEGURAR MI CUPO →'), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: '14px',
      font: "400 12px 'Roboto',sans-serif",
      color: 'rgba(255,255,255,.35)'
    }
  }, "\uD83D\uDD12 Tus datos est\xE1n seguros \xB7 Sin spam")) : /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,.97)',
      borderRadius: '24px',
      padding: '60px 40px',
      textAlign: 'center',
      boxShadow: '0 24px 64px rgba(0,0,0,.25)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '72px',
      height: '72px',
      background: 'linear-gradient(135deg,#eaf7d8,#C8E6CB)',
      borderRadius: '50%',
      margin: '0 auto 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '32px'
    }
  }, "\u2705"), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "800 26px 'Montserrat',sans-serif",
      color: '#1a2b3d',
      margin: '0 0 10px'
    }
  }, "\xA1Registro exitoso!"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 15px 'Roboto',sans-serif",
      color: '#64748B',
      margin: 0
    }
  }, "Un asesor te contactar\xE1 en breve."))));
}
window.MiniPieForm = MiniPieForm;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/minipie/MiniPieForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/minipie/MiniPieHero.jsx
try { (() => {
const {
  Navbar,
  Button,
  Badge,
  PriceChip,
  TrustCheck
} = window.AliminDesignSystem_3498ac;
function MiniPieHero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '100vh',
      background: '#0e1a24',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: "url('../../assets/places/playa-el-tabo.png') center/cover no-repeat"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse at 50% 40%,rgba(0,0,0,.15) 0%,rgba(0,0,0,.52) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '62%',
      background: 'linear-gradient(to top,rgba(10,18,28,.75) 0%,transparent 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '130px',
      background: 'linear-gradient(to bottom,rgba(10,18,28,.5) 0%,transparent 100%)'
    }
  }), /*#__PURE__*/React.createElement(Navbar, {
    variant: "hero",
    badge: "CUPOS LIMITADOS",
    logo: "../../assets/logo-alimin-icon.png",
    onCta: onCta
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 5,
      maxWidth: '1160px',
      margin: '0 auto',
      padding: '106px 24px 80px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      animation: 'fadeInUp .55s .05s ease both',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    kind: "urgency",
    dot: true
  }, "PROMOCI\xD3N LIMITADA \xB7 \xDALTIMA EDICI\xD3N")), /*#__PURE__*/React.createElement("h1", {
    style: {
      animation: 'fadeInUp .55s .1s ease both',
      font: "900 clamp(3rem,8.5vw,6.2rem)/1.0 'Montserrat',sans-serif",
      color: '#fff',
      letterSpacing: '-.035em',
      margin: '0 0 18px'
    }
  }, "VUELVE", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'normal',
      background: 'linear-gradient(90deg, rgb(118,216,69), rgb(75,166,70), rgb(118,216,69)) 0% 0% / 200% text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: '3s linear 0s infinite normal none running shimmerGold'
    }
  }, "MINI PIE")), /*#__PURE__*/React.createElement("p", {
    style: {
      animation: 'fadeInUp .55s .2s ease both',
      font: "300 clamp(1rem,2.2vw,1.2rem)/1.7 'Roboto',sans-serif",
      color: 'rgba(255,255,255,.65)',
      margin: '0 0 32px',
      maxWidth: '540px'
    }
  }, "La \xFAltima edici\xF3n. Tu terreno en el litoral central con el pie m\xE1s accesible del mercado. Sin banco, sin inter\xE9s."), /*#__PURE__*/React.createElement("div", {
    style: {
      animation: 'fadeInUp .55s .3s ease both',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      marginBottom: '40px'
    }
  }, /*#__PURE__*/React.createElement(PriceChip, {
    label: "200 m\xB2",
    oldPrice: "$5.500.000",
    price: "$1.500.000",
    note: "Ahorra $4.000.000 en el pie"
  }), /*#__PURE__*/React.createElement(PriceChip, {
    label: "390 m\xB2",
    oldPrice: "$7.500.000",
    price: "$3.000.000",
    note: "Ahorra $4.500.000 en el pie"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      animation: 'fadeInUp .55s .4s ease both',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '14px',
      marginBottom: '52px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onCta
  }, "ASEGURAR MI CUPO \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#terrenos"
  }, "Ver terrenos ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '16px'
    }
  }, "\u2193"))), /*#__PURE__*/React.createElement("div", {
    style: {
      animation: 'fadeInUp .55s .5s ease both',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      paddingTop: '24px',
      borderTop: '1px solid rgba(255,255,255,.07)'
    }
  }, /*#__PURE__*/React.createElement(TrustCheck, null, "Sin banco"), /*#__PURE__*/React.createElement(TrustCheck, null, "Rol propio incluido"), /*#__PURE__*/React.createElement(TrustCheck, null, "Agua certificada"))));
}
window.MiniPieHero = MiniPieHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/minipie/MiniPieHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/minipie/MiniPieTerrenos.jsx
try { (() => {
const {
  SectionHeader,
  Badge,
  Button,
  FinancialTable
} = window.AliminDesignSystem_3498ac;
/* Simplified faithful lot-plan drawing (from the production inline SVGs) */
function LotPlan({
  size,
  bg,
  lot,
  stroke,
  widthLabel,
  heightLabel
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 360 230",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: '100%',
      height: '100%',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: "360",
    height: "230",
    fill: bg
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "192",
    width: "360",
    height: "38",
    fill: "#2d6b35"
  }), [22, 65, 110, 160, 210, 255, 300, 340].map((cx, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: cx,
    cy: 210 + i % 3,
    r: 10 + i % 3 * 2,
    fill: "#1a4a22",
    opacity: "0.8"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "18",
    width: "60",
    height: "174",
    fill: bg,
    stroke: stroke,
    strokeWidth: "0.8",
    strokeDasharray: "5,3",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "300",
    y: "18",
    width: "60",
    height: "174",
    fill: bg,
    stroke: stroke,
    strokeWidth: "0.8",
    strokeDasharray: "5,3",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "66",
    y: "18",
    width: "228",
    height: "174",
    fill: lot,
    rx: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "66",
    y: "18",
    width: "228",
    height: "174",
    fill: "none",
    stroke: stroke,
    strokeWidth: "2.5",
    strokeDasharray: "10,5",
    rx: "2"
  }), [[96, 44], [258, 44], [96, 166], [258, 166]].map(([cx, cy], i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: "15",
    fill: "#325366",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: "9",
    fill: "#3d7a9a",
    opacity: "0.4"
  }))), /*#__PURE__*/React.createElement("text", {
    x: "178",
    y: "105",
    textAnchor: "middle",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "42",
    fontWeight: "900",
    fill: "#325366",
    opacity: "0.18"
  }, size), /*#__PURE__*/React.createElement("text", {
    x: "178",
    y: "128",
    textAnchor: "middle",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "18",
    fontWeight: "700",
    fill: "#325366",
    opacity: "0.18"
  }, "M\xB2"), /*#__PURE__*/React.createElement("line", {
    x1: "66",
    y1: "9",
    x2: "294",
    y2: "9",
    stroke: stroke,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "148",
    y: "3",
    width: "62",
    height: "13",
    fill: bg,
    rx: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: "179",
    y: "12",
    textAnchor: "middle",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "10",
    fontWeight: "700",
    fill: stroke
  }, widthLabel), /*#__PURE__*/React.createElement("line", {
    x1: "305",
    y1: "18",
    x2: "305",
    y2: "192",
    stroke: stroke,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "311",
    y: "96",
    width: "12",
    height: "60",
    fill: bg,
    rx: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: "316",
    y: "130",
    textAnchor: "middle",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "10",
    fontWeight: "700",
    fill: stroke,
    transform: "rotate(90 316 115)"
  }, heightLabel), /*#__PURE__*/React.createElement("circle", {
    cx: "336",
    cy: "30",
    r: "14",
    fill: "white",
    stroke: stroke,
    strokeWidth: "1.5",
    opacity: "0.95"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "336,16 332,28 336,25 340,28",
    fill: stroke
  }), /*#__PURE__*/React.createElement("text", {
    x: "336",
    y: "36",
    textAnchor: "middle",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "9",
    fontWeight: "800",
    fill: stroke
  }, "N"));
}
function TerrenoCard({
  size,
  popular,
  planBg,
  planLot,
  planStroke,
  widthLabel,
  heightLabel,
  mediaGrad,
  oldPrice,
  price,
  save,
  rows,
  cta,
  ctaVariant,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(14,26,36,.75)',
      backdropFilter: 'blur(16px)',
      borderRadius: '22px',
      overflow: 'hidden',
      border: '2px solid rgba(118,216,69,.45)',
      boxShadow: '0 0 0 1px rgba(118,216,69,.12),0 8px 32px rgba(0,0,0,.35)',
      position: 'relative'
    }
  }, popular && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '14px',
      right: '14px',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    kind: "promo"
  }, "\u2726 M\xC1S POPULAR")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: mediaGrad,
      overflow: 'hidden',
      position: 'relative',
      height: '220px'
    }
  }, /*#__PURE__*/React.createElement(LotPlan, {
    size: size,
    bg: planBg,
    lot: planLot,
    stroke: planStroke,
    widthLabel: widthLabel,
    heightLabel: heightLabel
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '12px',
      left: '14px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    kind: "glass",
    dot: true,
    style: {
      background: 'rgba(50,83,102,.9)'
    }
  }, size, " M\xB2"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '16px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "800 26px 'Montserrat',sans-serif",
      color: '#fff',
      lineHeight: 1,
      margin: 0,
      flex: 1
    }
  }, size, " M\xB2"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(0,0,0,.4)',
      border: '1px solid rgba(118,216,69,.3)',
      borderRadius: '12px',
      padding: '8px 14px',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 10px 'Montserrat',sans-serif",
      color: 'rgba(255,255,255,.45)',
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      marginBottom: '3px'
    }
  }, "Pie desde"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '7px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 13px 'Roboto',sans-serif",
      color: 'rgba(255,100,100,.8)',
      textDecoration: 'line-through'
    }
  }, oldPrice), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "900 20px 'Montserrat',sans-serif",
      color: '#76d845'
    }
  }, price)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 10px 'Roboto',sans-serif",
      color: 'rgba(118,216,69,.75)',
      marginTop: '2px'
    }
  }, save))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '18px'
    }
  }, /*#__PURE__*/React.createElement(FinancialTable, {
    rows: rows
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    kind: "feature"
  }, "\u2713 Rol propio"), /*#__PURE__*/React.createElement(Badge, {
    kind: "feature"
  }, "\u2713 Agua cert."), /*#__PURE__*/React.createElement(Badge, {
    kind: "feature"
  }, "\u2713 Luz el\xE9ctrica"), /*#__PURE__*/React.createElement(Badge, {
    kind: "feature"
  }, "\u2713 Port\xF3n auto.")), /*#__PURE__*/React.createElement(Button, {
    variant: ctaVariant,
    size: "md",
    fullWidth: true,
    onClick: onSelect
  }, cta)));
}
function MiniPieTerrenos({
  onSelect200,
  onSelect390
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "terrenos",
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '72px 20px',
      background: '#0e1a24'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: "url('../../assets/places/quebrada-de-cordova.png') center/cover no-repeat"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(160deg,rgba(10,25,40,.80) 0%,rgba(14,30,48,.72) 55%,rgba(8,20,32,.82) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-120px',
      right: '-80px',
      width: '440px',
      height: '440px',
      background: 'radial-gradient(circle,rgba(118,216,69,.08) 0%,transparent 70%)',
      borderRadius: '50%',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1160px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-animate": ""
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    kicker: "Elige tu terreno",
    title: "Tu terreno en el Litoral Central",
    subtitle: "Dos opciones de terreno, mismo precio de cuota mensual. Elige el que se adapta a tu proyecto de vida."
  })), /*#__PURE__*/React.createElement("div", {
    "data-animate-stagger": "",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement(TerrenoCard, {
    size: "200",
    planBg: "#EAF3EC",
    planLot: "#C8E6CB",
    planStroke: "#4ba646",
    widthLabel: "10 metros",
    heightLabel: "20 metros",
    mediaGrad: "linear-gradient(180deg,#EAF3EC 0%,#DDF0E2 100%)",
    oldPrice: "$5.500.000",
    price: "$1.500.000",
    save: "Ahorra $4.000.000",
    rows: [{
      label: 'Valor total',
      value: '$40.990.000'
    }, {
      label: '% Financiado',
      value: '96,34%',
      highlight: true
    }, {
      label: 'Cuota mensual',
      value: '$550.000'
    }, {
      label: 'Plazo',
      value: '71 cuotas'
    }, {
      label: 'Al contado',
      value: '$26.000.000',
      highlight: true
    }],
    cta: "Quiero el terreno de 200 m\xB2 \u2192",
    ctaVariant: "deep",
    onSelect: onSelect200
  }), /*#__PURE__*/React.createElement(TerrenoCard, {
    size: "390",
    popular: true,
    planBg: "#FDF6E3",
    planLot: "#F0E0A8",
    planStroke: "#76d845",
    widthLabel: "15 metros",
    heightLabel: "26 metros",
    mediaGrad: "linear-gradient(180deg,#FDF6E3 0%,#F8EDCA 100%)",
    oldPrice: "$7.500.000",
    price: "$3.000.000",
    save: "Ahorra $4.500.000",
    rows: [{
      label: 'Valor total',
      value: '$50.990.000'
    }, {
      label: '% Financiado',
      value: '94,12%',
      highlight: true
    }, {
      label: 'Cuota mensual',
      value: '$550.000'
    }, {
      label: 'Plazo',
      value: '87 cuotas'
    }, {
      label: 'Al contado',
      value: '$35.000.000',
      highlight: true
    }],
    cta: "Quiero el terreno de 390 m\xB2 \u2192",
    ctaVariant: "deep-lima",
    onSelect: onSelect390
  })), /*#__PURE__*/React.createElement("div", {
    "data-animate": "",
    style: {
      textAlign: 'center',
      marginTop: '24px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 13px 'Roboto',sans-serif",
      color: 'rgba(255,255,255,.4)',
      margin: 0
    }
  }, "Misma cuota mensual en ambos terrenos \xB7 Financiamiento directo Alimin \xB7 Sin banco \xB7 Sin aval"))));
}
window.MiniPieTerrenos = MiniPieTerrenos;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/minipie/MiniPieTerrenos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/minipie/MiniPieTestimonials.jsx
try { (() => {
const {
  SectionHeader,
  QuoteCard,
  ReviewCard
} = window.AliminDesignSystem_3498ac;
function MiniPieTestimonials() {
  const reviews = [{
    initials: 'LB',
    name: 'Liz Beth',
    meta: 'Local Guide · 14 opiniones',
    time: 'Hace 16 semanas',
    grad: 'linear-gradient(135deg,#4ba646,#325366)',
    text: 'Excelente experiencia. Trámite rápido, ágil y muy confiable. Todo fue claro y bien gestionado 😊'
  }, {
    initials: 'RC',
    name: 'Romina Cabrera',
    meta: '2 opiniones · 11 fotos',
    time: 'Hace 16 semanas',
    grad: 'linear-gradient(135deg,#76d845,#4ba646)',
    text: 'Excelente experiencia, la gestión fue rápida y eficaz, me tenían al tanto de todo. ¡Feliz con mi inversión!'
  }, {
    initials: 'AP',
    name: 'Álvaro Pinto',
    meta: '2 opiniones',
    time: 'Hace 16 semanas',
    grad: 'linear-gradient(135deg,#325366,#6ac28f)',
    text: 'Muy responsables, todo genial. La gestión fue fantástica y el terreno está en perfectas condiciones.'
  }, {
    initials: 'RB',
    name: 'Reina Barrios',
    meta: 'Local Guide · 16 opiniones',
    time: 'Hace 3 meses',
    grad: 'linear-gradient(135deg,#4ba646,#76d845)',
    text: 'Muy buenos los proyectos, cerca al centro del Tabo, opciones de pago y fácil de llegar.'
  }];
  const clients = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
  return /*#__PURE__*/React.createElement("section", {
    id: "testimonios",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: '#f5f9f0',
      padding: '72px 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-100px',
      left: '-80px',
      width: '380px',
      height: '380px',
      background: 'radial-gradient(circle,rgba(118,216,69,.1) 0%,transparent 70%)',
      borderRadius: '50%',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1160px',
      margin: '0 auto',
      padding: '0 20px',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-animate": ""
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    kicker: "Clientes felices",
    title: "Lo que dicen nuestros clientes",
    dark: false
  })), /*#__PURE__*/React.createElement("div", {
    "data-animate": "",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '24px',
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: '22px',
      overflow: 'hidden',
      background: '#0e1a24',
      minHeight: '360px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/clients/testimonio-2.webp",
    alt: "Video testimonio",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top,rgba(14,26,36,.85) 0%,rgba(14,26,36,.1) 45%,rgba(14,26,36,.35) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: '72px',
      height: '72px',
      background: 'rgba(118,216,69,.95)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 8px 28px rgba(118,216,69,.5)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "#fff",
    style: {
      marginLeft: '4px'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5v14l11-7z"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 19px 'Montserrat',sans-serif",
      color: '#fff'
    }
  }, "Un cliente de Arena y Sol"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px 'Roboto',sans-serif",
      color: 'rgba(255,255,255,.7)'
    }
  }, "Su experiencia invirtiendo con Alimin"))), /*#__PURE__*/React.createElement(QuoteCard, {
    quote: "Excelente lugar, amo mi terreno aqu\xED en El Tabo. Desde que invert\xED con ustedes mi vida mejor\xF3 radicalmente. Me cost\xF3 mucho confiar pero me atrev\xED a dar el primer paso y ahora estoy feliz.",
    initials: "SU",
    name: "Sebasti\xE1n Ullbrish",
    meta: "2 opiniones \xB7 18 fotos",
    time: "Hace 50 semanas"
  })), /*#__PURE__*/React.createElement("div", {
    "data-animate-stagger": "",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: '20px',
      paddingBottom: '64px'
    }
  }, reviews.map(r => /*#__PURE__*/React.createElement(ReviewCard, {
    key: r.name,
    initials: r.initials,
    name: r.name,
    meta: r.meta,
    time: r.time,
    avatarGradient: r.grad
  }, r.text)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: '#edf7e0',
      padding: '48px 0 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '28px',
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "800 clamp(1.4rem,3vw,2rem) 'Montserrat',sans-serif",
      color: '#1a2b1a',
      margin: 0
    }
  }, "Nuestros nuevos clientes en Lomas del Mar")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      width: '100%',
      WebkitMaskImage: 'linear-gradient(to right,transparent,#000 6%,#000 94%,transparent)',
      maskImage: 'linear-gradient(to right,transparent,#000 6%,#000 94%,transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '18px',
      width: 'max-content',
      animation: 'marqueeScroll 38s linear infinite',
      padding: '0 9px'
    }
  }, clients.map((n, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: `../../assets/clients/testimonio-${n}.webp`,
    alt: "Cliente Alimin",
    style: {
      width: '200px',
      height: '250px',
      objectFit: 'cover',
      borderRadius: '16px',
      flexShrink: 0,
      boxShadow: '0 8px 28px rgba(0,0,0,.35)'
    }
  }))))));
}
window.MiniPieTestimonials = MiniPieTestimonials;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/minipie/MiniPieTestimonials.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.WA_PATH = __ds_scope.WA_PATH;

__ds_ns.WhatsAppButton = __ds_scope.WhatsAppButton;

__ds_ns.WhatsAppFloat = __ds_scope.WhatsAppFloat;

__ds_ns.AdvisorCard = __ds_scope.AdvisorCard;

__ds_ns.FinancialTable = __ds_scope.FinancialTable;

__ds_ns.PlaceCard = __ds_scope.PlaceCard;

__ds_ns.QuoteCard = __ds_scope.QuoteCard;

__ds_ns.GoogleG = __ds_scope.GoogleG;

__ds_ns.Stars = __ds_scope.Stars;

__ds_ns.ReviewCard = __ds_scope.ReviewCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BenefitItem = __ds_scope.BenefitItem;

__ds_ns.PriceChip = __ds_scope.PriceChip;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.TrustCheck = __ds_scope.TrustCheck;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.SelectField = __ds_scope.SelectField;

__ds_ns.TerrenoPicker = __ds_scope.TerrenoPicker;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

})();
