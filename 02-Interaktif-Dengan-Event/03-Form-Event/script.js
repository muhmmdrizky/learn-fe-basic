const submitAction = document.getElementById("formDataDiri");

submitAction.addEventListener("submit", function (event) {
  const inputA = document.getElementById("inputNama").value;
  const inputDomisili = document.getElementById("inputDomisili").value;
  const hiddenMessage = `Hallo, ${inputA}, bagaimana cuaca di ${inputDomisili}`;

  document.getElementById("messageAfterSubmit").innerText = hiddenMessage;
  event.preventDefault();
});
