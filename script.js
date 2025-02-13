const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
let envelope = document.querySelector(".container-envelope");
let c_envelope = document.querySelector(".main-envelope");
let choise = document.querySelector(".main-choise");

// Letter
const letterContainer = document.querySelector(".letter");
const letter = document.querySelector(".l1");
const w1 = document.getElementById("w_1");
const w2 = document.getElementById("w_2");
const w3 = document.getElementById("w_3");

let count = 1;
function Open() {
  count += 1;
  envelope.classList.add("open");
  if (count === 2) {
    btnOpen.innerHTML = "next";
  } else if (count === 3) {
    w1.innerHTML = "Letter - 2 💗";
    w2.innerHTML = "Makasi yaa,";
    w3.innerHTML =
      "udaa mau jadi bagian dari hidupkuu, bener' kamu itu lebih dari ekspektasi aku ";
  } else if (count === 4) {
    w1.innerHTML = "Letter - 3 ✨";
    w2.innerHTML = "Kamu itu cantikk,";
    w3.innerHTML =
      "cantikk bangett... baikk semuanya sempurnaa sayangg, I love uu soooo muchh";
  } else if (count === 5) {
    w1.innerHTML = "Letter - 4 ✨";
    w2.innerHTML = "Beda dari cewe lain";
    w3.innerHTML =
      "kakaa ni emang sabar sekalii yaa, kalo aku sama cewe lain ngga bakal kuat nahan ego ku kaya kamu";
  } else if (count === 6) {
    w1.innerHTML = "Letter - 5 🤍";
    w2.innerHTML = "Sayangg";
    w3.innerHTML =
      "beruntung bangettt yaa aku punya pacar kamuu. kalo ta jelasin ngga mungkin selesai si satu malam.";
  } else if (count === 7) {
    w1.innerHTML = "Letter - 6 🤍";
    w2.innerHTML = "Maaf kak..😓";
    w3.innerHTML =
      "Aku belum bisa jadi cowo yang yang baik buat mu, aku juga punya banyak kekurangan.";
  } else if (count === 8) {
    w1.innerHTML = "Nisrina Az Zahra Ma'rifa 🌷";
    w2.innerHTML = "Kak Araaa";
    w3.innerHTML =
      "Aku kangennnn...... Jangan lupa nantiii yaaaa. I love uuu, Love uu moree, love uuu sooo muchh 🤍";
  }
  console.log(count);
}
function Reset() {
  envelope.classList.remove("open");
  envelope.classList.add("close");
  letterContainer.classList.add("minimize");
}

function fullSize() {
  let front = document.querySelector(".front");
  letterContainer.classList.toggle("full");
  front.classList.toggle("zindex");
}

// Messeage
const messages = [
  "Beneran kak?",
  "Eh benerann??",
  "serius",
  "Sayangg ngga mau beneran?",
  "Araaa",
  "Kak raa mau nih? :(",
  "Pliss",
  "Kakk pliss mauu :((",
];

let messageIndex = 0;
let afterPage = document.querySelector(".after");

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  choise.classList.add("hidden");
  afterPage.classList.add("show");
  setTimeout(() => {
    window.location.href = "Envelope.html";
  }, 2000);
}
