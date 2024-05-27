document.addEventListener("DOMContentLoaded", function () {
  const inputMaxLengthOnLoad = document.getElementById("inputNama").maxLength;
  document.getElementById("sisaKarakter").innerText = inputMaxLengthOnLoad;

  // Event onInput
  document.getElementById("inputNama").addEventListener("input", function () {
    const jumlahKarakterDiketik = document.getElementById("inputNama").value.length;
    const jumlahKarakterMaksimal = document.getElementById("inputNama").maxLength;

    console.log(`Jumlah karakter diketik: ${jumlahKarakterDiketik}`);
    console.log(`Jumlah karakter maksimal: ${jumlahKarakterMaksimal}`);
    const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
    document.getElementById("sisaKarakter").innerText = sisaKarakterUpdate.toString();

    if (sisaKarakterUpdate === 0) {
      document.getElementById("sisaKarakter").innerText = "Batas maksimal tercapai.";
    } else if (sisaKarakterUpdate <= 5) {
      document.getElementById("notifikasiSisaKarakter").style.color = "red";
    } else {
      document.getElementById("notifikasiSisaKarakter").style.color = "black";
    }
  });

  // Event onFocus
  document.getElementById("inputNama").addEventListener("focus", function () {
    console.log("inputNama: focus");
    document.getElementById("notifikasiSisaKarakter").style.visibility = "visible";
  });

  // Event onBlur
  document.getElementById("inputNama").addEventListener("blur", function () {
    console.log("inputNama: blur");
    document.getElementById("notifikasiSisaKarakter").style.visibility = "hidden";
  });

  // Event onChange
  document.getElementById("inputCaptcha").addEventListener("change", function () {
    console.log("inputCaptcha: change");

    const inputCaptcha = document.getElementById("inputCaptcha").value;
    const submitButtonStatus = document.getElementById("submitButton");

    if (inputCaptcha === "PRNU") {
      submitButtonStatus.removeAttribute("disabled");
    } else {
      submitButtonStatus.setAttribute("disabled", "");
    }
  });

  // Validasi Captcha
  document.getElementById("formDataDiri").addEventListener("submit", function (event) {
    const inputCaptcha = document.getElementById("inputCaptcha").value;

    if (inputCaptcha === "PRNU") {
      alert("Captcha anda benar!");
    } else {
      alert("Captcha anda salah!");
      document.getElementById("submitButton").setAttribute("disabled", "");
    }
    event.preventDefault();
  });

  // Event onCopy
  document.getElementById("inputCopy").addEventListener("copy", function () {
    alert("Anda telah mengcopy sesuatu.");
  });

  // Event onPaste
  document.getElementById("inputPaste").addEventListener("paste", function () {
    alert("Anda telah mempaste sesuatu.");
  });
});
