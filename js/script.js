const verbs = [
  { v1: "light", v2: "lit", v3: "lit", uz: "yoqmoq" },
  { v1: "lose", v2: "lost", v3: "lost", uz: "yo‘qotmoq" },
  { v1: "make", v2: "made", v3: "made", uz: "yasamoq" },
  { v1: "mean", v2: "meant", v3: "meant", uz: "anglatmoq" },
  { v1: "meet", v2: "met", v3: "met", uz: "uchrashmoq" },
  { v1: "pay", v2: "paid", v3: "paid", uz: "to‘lamoq" },
  { v1: "put", v2: "put", v3: "put", uz: "qo‘ymoq" },
  { v1: "read", v2: "read", v3: "read", uz: "o‘qimoq" },
  { v1: "ride", v2: "rode", v3: "ridden", uz: "minmoq" },
  { v1: "ring", v2: "rang", v3: "rung", uz: "qo‘ng‘iroq qilmoq" },
  { v1: "rise", v2: "rose", v3: "risen", uz: "ko‘tarilmoq" },
  { v1: "run", v2: "ran", v3: "run", uz: "yugurmoq" },
  { v1: "say", v2: "said", v3: "said", uz: "aytmoq" },
  { v1: "see", v2: "saw", v3: "seen", uz: "ko‘rmoq" },
  { v1: "seek", v2: "sought", v3: "sought", uz: "qidirmoq" },
  { v1: "sell", v2: "sold", v3: "sold", uz: "sotmoq" },
  { v1: "send", v2: "sent", v3: "sent", uz: "jo‘natmoq" },
  { v1: "set", v2: "set", v3: "set", uz: "o‘rnatmoq" },
  { v1: "sew", v2: "sewed", v3: "sewn/sewed", uz: "tikmoq" },
  { v1: "shake", v2: "shook", v3: "shaken", uz: "silkitmoq" },
  { v1: "shine", v2: "shone", v3: "shone", uz: "porlamoq" },
  { v1: "shoot", v2: "shot", v3: "shot", uz: "otmoq" },
  { v1: "show", v2: "showed", v3: "shown/showed", uz: "ko‘rsatmoq" },
  { v1: "shrink", v2: "shrank", v3: "shrunk", uz: "kichraymoq" },
  { v1: "shut", v2: "shut", v3: "shut", uz: "yopmoq" },
  { v1: "sing", v2: "sang", v3: "sung", uz: "kuylamoq" },
  { v1: "sink", v2: "sank", v3: "sunk", uz: "cho‘kmoq" },
  { v1: "sit", v2: "sat", v3: "sat", uz: "o‘tirmoq" },
  { v1: "sleep", v2: "slept", v3: "slept", uz: "uxlamoq" },
  { v1: "forbid", v2: "forbade", v3: "forbidden", uz: "taqiqlamoq" },
  { v1: "forget", v2: "forgot", v3: "forgotten", uz: "unutmoq" },
  { v1: "forgive", v2: "forgave", v3: "forgiven", uz: "kechirmoq" },
  { v1: "freeze", v2: "froze", v3: "frozen", uz: "muzlamoq" },
  { v1: "get", v2: "got", v3: "got/gotten", uz: "olmoq" },
  { v1: "give", v2: "gave", v3: "given", uz: "bermoq" },
  { v1: "go", v2: "went", v3: "gone", uz: "bormoq" },
  { v1: "grow", v2: "grew", v3: "grown", uz: "o‘smoq" },
  { v1: "hang", v2: "hung", v3: "hung", uz: "osmoq" },
  { v1: "have", v2: "had", v3: "had", uz: "ega bo‘lmoq" },
  { v1: "hear", v2: "heard", v3: "heard", uz: "eshitmoq" },
  { v1: "hide", v2: "hid", v3: "hidden", uz: "yashirmoq" },
  { v1: "hit", v2: "hit", v3: "hit", uz: "urmoq" },
  { v1: "hold", v2: "held", v3: "held", uz: "ushlamoq" },
  { v1: "hurt", v2: "hurt", v3: "hurt", uz: "og‘ritmoq" },
  { v1: "keep", v2: "kept", v3: "kept", uz: "saqlamoq" },
  { v1: "kneel", v2: "knelt", v3: "knelt", uz: "tizzalamoq" },
  { v1: "know", v2: "knew", v3: "known", uz: "bilmoq" },
  { v1: "lay", v2: "laid", v3: "laid", uz: "qo‘ymoq" },
  { v1: "lead", v2: "led", v3: "led", uz: "yetaklamoq" },
  { v1: "leave", v2: "left", v3: "left", uz: "ketmoq" },
  { v1: "lend", v2: "lent", v3: "lent", uz: "qarz bermoq" },
  { v1: "let", v2: "let", v3: "let", uz: "ruxsat bermoq" },
  { v1: "lie", v2: "lay", v3: "lain", uz: "yotmoq" },
];

const container = document.getElementById("verbs");

verbs.forEach((v, i) => {
  container.innerHTML += `
   <div class="verb-row">
     <div class="verb-title">${v.v1} <span class="uz">(${v.uz})</span></div>
     <div class="inputs">
       <input id="v2-${i}" placeholder="V2">
       <input id="v3-${i}" placeholder="V3">
     </div>
     <button onclick="check(${i})">Check</button>
     <div id="r-${i}" class="result"></div>
   </div>
  `;
});

function check(i) {
  const v2 = document.getElementById(`v2-${i}`).value.trim().toLowerCase();
  const v3 = document.getElementById(`v3-${i}`).value.trim().toLowerCase();
  const r = document.getElementById(`r-${i}`);
  let errors = [];
  if (v2 !== verbs[i].v2) errors.push("V2 noto‘g‘ri");
  if (v3 !== verbs[i].v3) errors.push("V3 noto‘g‘ri");

  if (errors.length === 0) {
    r.textContent = "Correct ✔";
    r.className = "result correct";
  } else {
    r.textContent = errors.join(" | ");
    r.className = "result wrong";
  }
}
