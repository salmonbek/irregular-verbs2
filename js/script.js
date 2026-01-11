const verbs = [
  { v1: "be", v2: "was/were", v3: "been", uz: "bo‘lmoq" },
  { v1: "become", v2: "became", v3: "become", uz: "aylanmoq" },
  { v1: "begin", v2: "began", v3: "begun", uz: "boshlamoq" },
  { v1: "break", v2: "broke", v3: "broken", uz: "sindirmoq" },
  { v1: "bring", v2: "brought", v3: "brought", uz: "olib kelmoq" },
  { v1: "build", v2: "built", v3: "built", uz: "qurmoq" },
  { v1: "buy", v2: "bought", v3: "bought", uz: "sotib olmoq" },
  { v1: "catch", v2: "caught", v3: "caught", uz: "ushlamoq" },
  { v1: "choose", v2: "chose", v3: "chosen", uz: "tanlamoq" },
  { v1: "come", v2: "came", v3: "come", uz: "kelmoq" },
  { v1: "do", v2: "did", v3: "done", uz: "qilmoq" },
  { v1: "drink", v2: "drank", v3: "drunk", uz: "ichmoq" },
  { v1: "drive", v2: "drove", v3: "driven", uz: "haydamoq" },
  { v1: "eat", v2: "ate", v3: "eaten", uz: "yemoq" },
  { v1: "fall", v2: "fell", v3: "fallen", uz: "yiqilmoq" },
  { v1: "feel", v2: "felt", v3: "felt", uz: "his qilmoq" },
  { v1: "find", v2: "found", v3: "found", uz: "topmoq" },
  { v1: "fly", v2: "flew", v3: "flown", uz: "uchmoq" },
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
  { v1: "hold", v2: "held", v3: "held", uz: "ushlab turmoq" },
  { v1: "hurt", v2: "hurt", v3: "hurt", uz: "og‘ritmoq" },
  { v1: "keep", v2: "kept", v3: "kept", uz: "saqlamoq" },
  { v1: "know", v2: "knew", v3: "known", uz: "bilmoq" },
  { v1: "leave", v2: "left", v3: "left", uz: "tark etmoq" },
  { v1: "lend", v2: "lent", v3: "lent", uz: "qarz bermoq" },
  { v1: "let", v2: "let", v3: "let", uz: "ruxsat bermoq" },
  { v1: "lose", v2: "lost", v3: "lost", uz: "yo‘qotmoq" },
  { v1: "make", v2: "made", v3: "made", uz: "yasamoq" },
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
  { v1: "sell", v2: "sold", v3: "sold", uz: "sotmoq" },
  { v1: "send", v2: "sent", v3: "sent", uz: "jo‘natmoq" },
  { v1: "sing", v2: "sang", v3: "sung", uz: "kuylamoq" },
  { v1: "sink", v2: "sank", v3: "sunk", uz: "cho‘kmoq" },
  { v1: "sleep", v2: "slept", v3: "slept", uz: "uxlamoq" },
];

const container = document.getElementById("verbs");

verbs.forEach((v, i) => {
  const row = document.createElement("div");
  row.className = "verb-row";

  row.innerHTML = `
        <span>${v.v1}<br><small>${v.uz}</small></span>
        <input id="v2-${i}" placeholder="V2">
        <input id="v3-${i}" placeholder="V3">
        <button onclick="check(${i})">Check</button>
        <span id="result-${i}"></span>
        <button onclick="speak('${v.v1}', '${v.v2}', '${v.v3}')">🎧</button>
    `;
  container.appendChild(row);
});

function check(i) {
  const v2 = document.getElementById(`v2-${i}`).value.trim().toLowerCase();
  const v3 = document.getElementById(`v3-${i}`).value.trim().toLowerCase();
  const result = document.getElementById(`result-${i}`);

  if (v2 === verbs[i].v2 && v3 === verbs[i].v3) {
    result.textContent = "Correct ✔";
    result.className = "correct";
  } else {
    result.textContent = "Wrong ✖";
    result.className = "wrong";
  }
}

function speak(v1, v2, v3) {
  const utterance = new SpeechSynthesisUtterance(`${v1}, ${v2}, ${v3}`);
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
}
