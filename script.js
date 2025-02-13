let envelope = document.querySelector(".container-envelope");
let c_envelope = document.querySelector(".main-envelope");
let choise = document.querySelector(".main-choise");

function Open() {
  envelope.classList.add("open");
}

function Reset() {
  envelope.classList.remove("open");
  envelope.classList.add("close");
}

// Messeage
const messages = [
  "Serius?",
  "Benerann??",
  "Plisss mauu",
  "Kak yakin ngga mauu :(",
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
