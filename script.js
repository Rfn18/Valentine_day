let envelope = document.querySelector(".container-envelope");

function Open() {
  envelope.classList.add("open");
}

function Reset() {
  envelope.classList.remove("open");
  envelope.classList.add("close");
}
