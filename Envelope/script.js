let envelope = document.querySelector(".container-envelope");
let active = true;

// envelope.addEventListener("click", () => {
//   if (active) {
//     envelope.classList.add("open");
//     active = false;
//     console.log("Active");
//   } else {
//     envelope.classList.remove("open");
//     envelope.classList.add("close");
//     active = true;
//     console.log("False");
//   }
// });

function Open() {
  envelope.classList.add("open");
}
