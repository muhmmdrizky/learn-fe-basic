const submitAction = document.getElementById("formDataDiri");

submitAction.addEventListener("submit", function (event) {
  const inputNama = document.getElementById("inputNama").value;
  const inputDomisili = document.getElementById("inputDomisili").value;
  const hiddenMessage = `Hallo, <em>${inputNama}</em>. Bagaimana cuaca di <em>${inputDomisili}</em>?`;

  document.getElementById("messageAfterSubmit").innerHTML = hiddenMessage;
  event.preventDefault();
});
