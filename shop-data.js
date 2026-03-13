// ═══════════════════════════════════════════════════════════════════
//  shop-data.js  —  Gedeelde winkeldata voor H5 Beweging
//  Wijzig hier → werkt automatisch in alle paragrafen + winkel.html
// ═══════════════════════════════════════════════════════════════════

const SHOP = {
  body: [
    { id:"body_student", emoji:"🧑‍🎓", name:"Student",    price:0,    unlocked:true },
    { id:"body_ninja",   emoji:"🥷",   name:"Ninja",      price:200  },
    { id:"body_zombie",  emoji:"🧟",   name:"Zombie",     price:280  },
    { id:"body_robot",   emoji:"🤖",   name:"Robot",      price:380  },
    { id:"body_alien",   emoji:"👽",   name:"Alien",      price:480,  starReq:15 },
    { id:"body_astro",   emoji:"👨‍🚀",  name:"Astronaut",  price:650,  starReq:30 },
  ],
  hat: [
    { id:"hat_none",   emoji:"",   name:"Geen hoed",      price:0,   unlocked:true },
    { id:"hat_helmet", emoji:"🪖",  name:"Legerhelm",      price:80   },
    { id:"hat_cap",    emoji:"🧢",  name:"Pet",            price:120  },
    { id:"hat_cowboy", emoji:"👒",  name:"Zomerhoed",      price:180  },
    { id:"hat_tophat", emoji:"🎩",  name:"Hoge hoed",      price:240  },
    { id:"hat_mortar", emoji:"🎓",  name:"Afstudeerhoed",  price:320,  starReq:20 },
    { id:"hat_crown",  emoji:"👑",  name:"Kroon",          price:500,  starReq:35 },
  ],
  badge: [
    { id:"badge_none",   emoji:"",   name:"Geen badge",  price:0,   unlocked:true },
    { id:"badge_star",   emoji:"⭐",  name:"Ster",        price:80   },
    { id:"badge_bolt",   emoji:"⚡",  name:"Bliksem",     price:140  },
    { id:"badge_fire",   emoji:"🔥",  name:"Vuur",        price:200  },
    { id:"badge_medal",  emoji:"🏅",  name:"Medaille",    price:280  },
    { id:"badge_rocket", emoji:"🚀",  name:"Raket",       price:360,  starReq:18 },
    { id:"badge_trophy", emoji:"🏆",  name:"Trofee",      price:450,  starReq:28 },
    { id:"badge_gem",    emoji:"💎",  name:"Diamant",     price:600,  starReq:40 },
  ],
  bg: [
    { id:"bg_dark",    color:"linear-gradient(160deg,#0f172a,#1e293b)",          name:"Standaard",  price:0,    unlocked:true },
    { id:"bg_space",   color:"linear-gradient(160deg,#0f172a,#1e3a8a)",          name:"Ruimte",     price:120  },
    { id:"bg_nature",  color:"linear-gradient(160deg,#064e3b,#10b981)",          name:"Natuur",     price:160  },
    { id:"bg_pink",    color:"linear-gradient(160deg,#831843,#ec4899)",          name:"Roze",       price:200  },
    { id:"bg_fire",    color:"linear-gradient(160deg,#7f1d1d,#ef4444)",          name:"Vuur",       price:280  },
    { id:"bg_gold",    color:"linear-gradient(160deg,#78350f,#d97706)",          name:"Goud",       price:400,  starReq:20 },
    { id:"bg_rainbow", color:"linear-gradient(160deg,#7c3aed,#2563eb,#059669)",  name:"Regenboog",  price:550,  starReq:30 },
    { id:"bg_galaxy",  color:"linear-gradient(160deg,#1a0533,#6d28d9,#0e7490)", name:"Melkweg",    price:750,  starReq:45 },
  ],
  appbg: [
    { id:"appbg_default", css:"linear-gradient(160deg,#0a0f1e,#111827 60%,#0a0f1e)", name:"Standaard",     price:0,    unlocked:true },
    { id:"appbg_green",   css:"linear-gradient(160deg,#022c22,#064e3b 60%,#022c22)", name:"Bosgroen",      price:300  },
    { id:"appbg_purple",  css:"linear-gradient(160deg,#1e0a3c,#2d1b69 60%,#1e0a3c)", name:"Paars",         price:400  },
    { id:"appbg_red",     css:"linear-gradient(160deg,#1a0505,#450a0a 60%,#1a0505)", name:"Bloedrood",     price:500,  starReq:14 },
    { id:"appbg_ocean",   css:"linear-gradient(160deg,#001c3d,#0c4a6e 60%,#001c3d)", name:"Oceaan",        price:600,  starReq:22 },
    { id:"appbg_gold",    css:"linear-gradient(160deg,#1c0a00,#44220a 60%,#1c0a00)", name:"Goud",          price:900,  starReq:32 },
    { id:"appbg_galaxy",  css:"radial-gradient(ellipse at 30% 40%,#0f0c29 0%,#302b63 50%,#24243e 100%)",   name:"Kosmisch",  price:1400, starReq:40 },
    { id:"appbg_bright_gold", css:"linear-gradient(160deg,#3d2000,#7a4a00,#c4900a 60%,#3d2000)", name:"Gouden Gloed ✨", price:2500, starReq:48 },
  ],
};

const CAT_LABELS = {
  body:  "🧍 Karakter",
  hat:   "🎩 Hoeden",
  badge: "🏅 Badges",
  bg:    "🎨 Avatar achtergrond",
  appbg: "🖥️ App achtergrond",
};

const DEFAULT_AVATAR = { body:"body_student", hat:"hat_none", badge:"badge_none", bg:"bg_dark", appbg:"appbg_default" };
const DEFAULT_OWNED  = ["body_student","hat_none","badge_none","bg_dark","appbg_default"];

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function resolveAvatar(avatar) {
  return {
    body:  SHOP.body.find(function(x)  { return x.id === avatar.body; })  || SHOP.body[0],
    hat:   SHOP.hat.find(function(x)   { return x.id === avatar.hat; })   || SHOP.hat[0],
    badge: SHOP.badge.find(function(x) { return x.id === avatar.badge; }) || SHOP.badge[0],
    bg:    SHOP.bg.find(function(x)    { return x.id === avatar.bg; })    || SHOP.bg[0],
    appbg: SHOP.appbg.find(function(x) { return x.id === avatar.appbg; }) || SHOP.appbg[0],
  };
}

// Pas de pagina-achtergrond toe op basis van het gekochte appbg-item.
// Roep aan in useEffect na het laden van de save.
function applyAppBackground(avatar) {
  var r = resolveAvatar(avatar || DEFAULT_AVATAR);
  document.body.style.background = r.appbg.css || r.appbg.color || "linear-gradient(160deg,#0a0f1e,#111827)";
  document.body.style.minHeight  = "100vh";
}

// Geeft een HTML-string terug die de avatar tekent.
function renderAvatarHTML(avatar, size) {
  size = size || 64;
  var r       = resolveAvatar(avatar);
  var hatFs   = Math.round(size * .28);
  var bodyFs  = Math.round(size * .46);
  var badgeFs = Math.round(size * .24);
  var badgeSz = Math.round(size * .36);
  var badgeHTML = r.badge.emoji
    ? '<div style="position:absolute;bottom:4px;right:4px;width:' + badgeSz + 'px;height:' + badgeSz + 'px;border-radius:50%;background:rgba(0,0,0,.45);border:1.5px solid rgba(255,255,255,.25);display:flex;align-items:center;justify-content:center;font-size:' + badgeFs + 'px;line-height:1">' + r.badge.emoji + '</div>'
    : '';
  return '<div style="width:' + size + 'px;height:' + size + 'px;border-radius:16px;background:' + r.bg.color + ';display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;flex-shrink:0;border:2px solid rgba(255,255,255,.15);box-shadow:0 4px 20px rgba(0,0,0,.4);overflow:hidden">'
    + '<div style="height:' + Math.round(size*.28) + 'px;display:flex;align-items:flex-end;justify-content:center"><span style="font-size:' + hatFs + 'px;line-height:1">' + (r.hat.emoji || ' ') + '</span></div>'
    + '<div style="height:' + Math.round(size*.52) + 'px;display:flex;align-items:center;justify-content:center"><span style="font-size:' + bodyFs + 'px;line-height:1">' + r.body.emoji + '</span></div>'
    + badgeHTML + '</div>';
}

// ─── DEV MODE ─────────────────────────────────────────────────────────────────
// Geheime code: typ "5126" op het toetsenbord (4 cijfers, nergens invullen).
// Activeert: 9999 pts, alle items, alle sterren op 3. Opnieuw typen = reset.
(function() {
  var buf = "";
  var DEV_CODE = "5126";
  document.addEventListener("keydown", function(e) {
    // Negeer als gebruiker in een input/textarea typt
    var tag = document.activeElement && document.activeElement.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") { buf = ""; return; }
    buf += e.key;
    if (buf.length > DEV_CODE.length) buf = buf.slice(-DEV_CODE.length);
    if (buf === DEV_CODE) {
      buf = "";
      try {
        var raw  = localStorage.getItem("beweging_save");
        var save = raw ? JSON.parse(raw) : {};
        var devOn = save._devMode === true;
        if (!devOn) {
          var allIds = [];
          Object.keys(SHOP).forEach(function(cat) {
            SHOP[cat].forEach(function(item) { allIds.push(item.id); });
          });
          save._devMode  = true;
          save.pts       = 9999;
          save.owned     = allIds;
          save.stars_51  = [3,3,3,3];
          save.stars_52  = [3,3,3,3];
          save.stars_53  = [3,3,3,3];
          save.stars_54  = [3,3,3,3];
          localStorage.setItem("beweging_save", JSON.stringify(save));
          alert("🛠️ DEV MODE INGESCHAKELD\n\nAlle items ontgrendeld · 9999 punten · Alle sterren op 3\n\nType '5126' opnieuw om te resetten.");
          location.reload();
        } else {
          save._devMode  = false;
          save.pts       = 0;
          save.owned     = DEFAULT_OWNED.slice();
          save.stars_51  = [0,0,0,0];
          save.stars_52  = [0,0,0,0];
          save.stars_53  = [0,0,0,0];
          save.stars_54  = [0,0,0,0];
          localStorage.setItem("beweging_save", JSON.stringify(save));
          alert("🛠️ DEV MODE UITGESCHAKELD\n\nAlles gereset naar beginstand.");
          location.reload();
        }
      } catch(err) { console.warn("Dev mode fout:", err); }
    }
  });
})();
