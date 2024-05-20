const dicoding = document.getElementById("dicodingLink");
const google = document.getElementById("googleLink");
// dicoding.innerText = "Belajar Programming di Dicoding";
dicoding.innerHTML = "<i><strong>Belajar Programming di Dicoding</strong></i>";
google.innerHTML = "<i><strong>Mencari Sesuatu di Google</strong></i>";

const buttons = document.getElementsByClassName("button");
for (const button of buttons) {
  button.children[0].style.borderRadius = "6px";
}
