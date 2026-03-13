// ═══════════════════════════════════════════════════════════════════
//  shop-data.js  —  Gedeelde winkeldata voor H5 Beweging
//
//  Dit is de ENIGE plek voor:
//  • Winkelitems (body, hat, badge, bg)
//  • Avatar-tekenlogica (renderAvatarHTML)
//
//  Wijzig hier → werkt automatisch in alle paragrafen + winkel.html
// ═══════════════════════════════════════════════════════════════════

const SHOP = {
  body: [
    { id:"body_student", emoji:"🧑‍🎓", name:"Student",   price:0,   unlocked:true },
    { id:"body_ninja",   emoji:"🥷",   name:"Ninja",     price:160 },
    { id:"body_robot",   emoji:"🤖",   name:"Robot",     price:240 },
    { id:"body_astro",   emoji:"👨‍🚀",  name:"Astronaut", price:400 },
    { id:"body_alien",   emoji:"👽",   name:"Alien",     price:320 },
    { id:"body_zombie",  emoji:"🧟",   name:"Zombie",    price:200 },
  ],
  hat: [
    { id:"hat_none",   emoji:"",   name:"Geen hoed",     price:0,  unlocked:true },
    { id:"hat_cap",    emoji:"🧢",  name:"Pet",           price:60  },
    { id:"hat_mortar", emoji:"🎓",  name:"Afstudeerhoed", price:100 },
    { id:"hat_crown",  emoji:"👑",  name:"Kroon",         price:200 },
    { id:"hat_cowboy", emoji:"👒",  name:"Zomerhoed",     price:140 },
    { id:"hat_tophat", emoji:"🎩",  name:"Hoge hoed",     price:120 },
    { id:"hat_helmet", emoji:"🪖",  name:"Legerhelm",     price:80  },
  ],
  badge: [
    { id:"badge_none",   emoji:"",   name:"Geen badge", price:0,   unlocked:true },
    { id:"badge_star",   emoji:"⭐",  name:"Ster",       price:60  },
    { id:"badge_trophy", emoji:"🏆",  name:"Trofee",     price:160 },
    { id:"badge_bolt",   emoji:"⚡",  name:"Bliksem",    price:80  },
    { id:"badge_medal",  emoji:"🏅",  name:"Medaille",   price:120 },
    { id:"badge_fire",   emoji:"🔥",  name:"Vuur",       price:100 },
    { id:"badge_gem",    emoji:"💎",  name:"Diamant",    price:240 },
    { id:"badge_rocket", emoji:"🚀",  name:"Raket",      price:180 },
  ],
  bg: [
    { id:"bg_dark",    color:"linear-gradient(160deg,#0f172a,#1e293b)",                              name:"Standaard", price:0,   unlocked:true },
    { id:"bg_gold",    color:"linear-gradient(160deg,#78350f,#d97706)",                              name:"Goud",      price:120 },
    { id:"bg_space",   color:"linear-gradient(160deg,#0f172a,#1e3a8a)",                              name:"Ruimte",    price:100 },
    { id:"bg_nature",  color:"linear-gradient(160deg,#064e3b,#10b981)",                              name:"Natuur",    price:80  },
    { id:"bg_pink",    color:"linear-gradient(160deg,#831843,#ec4899)",                              name:"Roze",      price:80  },
    { id:"bg_fire",    color:"linear-gradient(160deg,#7f1d1d,#ef4444)",                              name:"Vuur",      price:140 },
    { id:"bg_rainbow", color:"linear-gradient(160deg,#e63946,#f4a261,#e9c46a,#2a9d8f,#457b9d,#9b5de5)", name:"Regenboog", price:320 },
  ],
};

const CAT_LABELS     = { body:"🧍 Karakter", hat:"🎩 Hoeden", badge:"🏅 Badges", bg:"🎨 Achtergrond" };
const DEFAULT_AVATAR = { body:"body_student", hat:"hat_none", badge:"badge_none", bg:"bg_dark" };
const DEFAULT_OWNED  = ["body_student","hat_none","badge_none","bg_dark"];

// ─── AVATAR HELPERS ───────────────────────────────────────────────────────────

// Zoekt de volledige item-objecten op voor een gegeven avatar-configuratie.
// Voeg hier een nieuwe categorie toe als je een nieuwe laag toevoegt aan SHOP.
function resolveAvatar(avatar) {
  return {
    body:  SHOP.body.find(x  => x.id === avatar.body)  || SHOP.body[0],
    hat:   SHOP.hat.find(x   => x.id === avatar.hat)   || SHOP.hat[0],
    badge: SHOP.badge.find(x => x.id === avatar.badge) || SHOP.badge[0],
    bg:    SHOP.bg.find(x    => x.id === avatar.bg)    || SHOP.bg[0],
  };
}

// Geeft een HTML-string terug die de avatar tekent op een gegeven grootte.
// ╔══════════════════════════════════════════════════════════════════╗
// ║  Wil je de avatar visueel aanpassen of een laag toevoegen?      ║
// ║  Pas ALLEEN deze functie aan — werkt dan direct overal.         ║
// ╚══════════════════════════════════════════════════════════════════╝
function renderAvatarHTML(avatar, size) {
  size = size || 64;
  var r       = resolveAvatar(avatar);
  var hatFs   = Math.round(size * .32);
  var bodyFs  = Math.round(size * .50);
  var badgeFs = Math.round(size * .24);
  var badgeSz = Math.round(size * .36);

  // Hoed: absolute bovenaan, gecentreerd, licht overlap met body zodat hij "op het hoofd" zit
  var hatHTML = '<div style="position:absolute;top:0;left:0;right:0;'
    + 'display:flex;align-items:flex-start;justify-content:center;'
    + 'padding-top:' + Math.round(size * .04) + 'px;'
    + 'font-size:' + hatFs + 'px;line-height:1">'
    + (r.hat.emoji || '') + '</div>';

  // Body: gecentreerd in de volledige avatar, licht naar onder verschoven zodat hoed er bovenop past
  var bodyHTML = '<div style="position:absolute;top:0;left:0;right:0;bottom:0;'
    + 'display:flex;align-items:center;justify-content:center;'
    + 'padding-top:' + Math.round(size * .12) + 'px;'
    + 'font-size:' + bodyFs + 'px;line-height:1">'
    + r.body.emoji + '</div>';

  // Badge: hoek rechtsonder
  var badgeHTML = r.badge.emoji
    ? '<div style="position:absolute;bottom:4px;right:4px;'
        + 'width:' + badgeSz + 'px;height:' + badgeSz + 'px;border-radius:50%;'
        + 'background:rgba(0,0,0,.45);border:1.5px solid rgba(255,255,255,.25);'
        + 'display:flex;align-items:center;justify-content:center;'
        + 'font-size:' + badgeFs + 'px;line-height:1">'
        + r.badge.emoji + '</div>'
    : '';

  return '<div style="'
    + 'width:' + size + 'px;height:' + size + 'px;border-radius:16px;'
    + 'background:' + r.bg.color + ';'
    + 'position:relative;flex-shrink:0;'
    + 'border:2px solid rgba(255,255,255,.15);'
    + 'box-shadow:0 4px 20px rgba(0,0,0,.4);overflow:hidden">'
    + hatHTML
    + bodyHTML
    + badgeHTML
  + '</div>';
}
